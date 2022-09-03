import { IoLocationSharp } from "react-icons/io5";

export default function Card(props) {
    return (
        <section className="card">
            <img 
                src={props.imageUrl} 
                alt={props.title} 
                loading="lazy"
                className="card--img"
                />
            <div className="card--textContainer">
                <div className="card--locationContainer">
                    <span className="card--location">
                        <IoLocationSharp className="card--locationIcon"/>
                        {props.location.toUpperCase()}
                    </span>
                    <a 
                        href={props.googleMapsUrl}
                        target="_blank"
                        rel="external"
                        className="card--mapsLink"
                        >
                        View on the Google Maps
                    </a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--text">{props.description}</p>
            </div>
        </section>
    )
}