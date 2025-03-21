import "./offer.css";
function Offer() {
  return (
    <section className="offer-section">
      <div className="offer-content">
        <p className="subheading">ARE YOU READY FOR THIS OFFER ?</p>
        <h1 className="main-heading">50% offer for FIRST BATCH</h1>
        {/* <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p> */}
        <div className="button-group">
          <a
            href="https://forms.gle/Qcw3NSeeAsaxuVGh9"
            className="btn btn-green"
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY NOW
          </a>
          {/* <a href="#course-section" className="btn btn-blue">
            OUR COURSES
          </a> */}
        </div>
      </div>
      <div className="offer-image"></div>
    </section>
  );
}

export default Offer;
