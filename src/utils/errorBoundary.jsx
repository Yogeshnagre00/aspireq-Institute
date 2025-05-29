import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ 
      hasError: false,
      error: null,
      errorInfo: null 
    });
    
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  renderFallback() {
    // Check if we're in development mode by checking the host URL
    const isDev = window.location.hostname === 'localhost' || 
                  window.location.hostname === '127.0.0.1';

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.heading}>Oops! Something went wrong</h2>
          <p style={styles.message}>Please try reloading the page or return to homepage</p>
          
          {isDev && this.state.error && (
            <details style={styles.details}>
              <summary>Error Details</summary>
              <p style={styles.errorText}>{this.state.error.toString()}</p>
              {this.state.errorInfo?.componentStack && (
                <pre style={styles.stack}>
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </details>
          )}

          <div style={styles.buttonGroup}>
            <button 
              onClick={this.handleReset}
              style={styles.button}
            >
              Try Again
            </button>
            <button 
              onClick={() => window.location.reload()}
              style={{ ...styles.button, ...styles.secondaryButton }}
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.state.hasError 
      ? this.renderFallback() 
      : this.props.children;
  }
}

// Styling (can be moved to separate CSS file)
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif'
  },
  content: {
    maxWidth: '600px',
    padding: '30px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  heading: {
    color: '#dc3545',
    marginBottom: '15px'
  },
  message: {
    color: '#6c757d',
    marginBottom: '20px'
  },
  details: {
    textAlign: 'left',
    margin: '20px 0',
    padding: '15px',
    backgroundColor: '#fff8f8',
    border: '1px solid #ffcccc',
    borderRadius: '4px',
    color: '#cc0000'
  },
  errorText: {
    margin: '0 0 10px 0'
  },
  stack: {
    whiteSpace: 'pre-wrap',
    fontSize: '14px',
    marginTop: '10px',
    lineHeight: '1.5'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '20px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4285f4',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.3s'
  },
  secondaryButton: {
    backgroundColor: '#6c757d'
  }
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  onReset: PropTypes.func
};

export default ErrorBoundary;