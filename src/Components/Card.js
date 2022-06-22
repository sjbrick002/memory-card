import "./Card.css";

export default function Card(props) {
    return (
        <div onClick={props.onClick} className="card-body">
            <img src={props.imageSrc} alt={props.imageAlt}/>
            <p>{props.description}</p>
        </div>
    );
};