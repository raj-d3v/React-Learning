import marker from "../assets/marker.png";

function Entry(props) {
  return (
    <>
      <section className="main-section">
        <div className="main-section-img">
          <img src={props.entry.img.src} alt={props.entry.img.alt} />
        </div>

        <div className="main-section-content">
          <div className="content-main">
            <img src={marker} alt="location_icon" />
            <p>{props.entry.country}</p>
            <a href={props.entry.googleMapsLink} target="blank">
              View on Google Maps
            </a>
          </div>
          <p className="content-title">{props.entry.place}</p>
          <p className="content-date">{props.entry.dates} </p>
          <p className="content-disc">{props.entry.desc}</p>
        </div>
      </section>
    </>
  );
}

export default Entry;
