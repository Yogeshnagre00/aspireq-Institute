import  { useEffect, useState } from 'react';
import './CookieConsent.css'; // Optional: external styling

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Initialize tools like Google Analytics here if needed
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const togglePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to improve your browsing experience, serve personalized content,
        and analyze site traffic. By clicking “Accept”, you consent to our use of cookies. 
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
      </p>

      <div className="cookie-actions">
        <button onClick={handleAccept} className="accept">Accept</button>
        <button onClick={handleReject} className="reject">Reject</button>
        <button onClick={togglePreferences} className="preferences">
          {showPreferences ? 'Hide Preferences' : 'Manage Preferences'}
        </button>
      </div>

      {showPreferences && (
        <div className="cookie-preferences">
          <label>
            <input type="checkbox" checked disabled />
            Necessary Cookies (Always Active)
          </label>
          <label>
            <input type="checkbox" />
            Analytics Cookies
          </label>
          <label>
            <input type="checkbox" />
            Marketing Cookies
          </label>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
