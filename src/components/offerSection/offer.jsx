import "./offer.css";
function Offer() {
  return (
    <section className="offer-section">
      <div className="offer-content">
        <p className="subheading">ARE YOU READY FOR THIS OFFER ?</p>
        <h1 className="main-heading">50% offer for FIRST BATCH</h1>
        <div className="button-group">
          <a
            href="https://forms.gle/Qcw3NSeeAsaxuVGh9"
            className="btn btn-green"
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY NOW
          </a>
        </div>
      </div>
      <div className="offer-image"></div>
    </section>
  );
}

export default Offer;
