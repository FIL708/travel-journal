import { IoLocationSharp } from "react-icons/io5";

export default function Card(props) {
    return (
        <section className="card">
            <img 
                src="https://source.unsplash.com/WLxQvbMyfas" 
                alt=""
                className="card--img" />
            <div className="card--textContainer">
                <div>
                    <IoLocationSharp />
                    <span></span>
                    <a href=""></a>
                </div>
                <h1 className="card--title"></h1>
                <p className="card--date"></p>
                <p className="card--text"></p>
            </div>
        </section>
    )
}