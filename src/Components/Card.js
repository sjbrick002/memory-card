export default function Card(props) {
    return (
        <div onClick={props.onClick}>
            <img src={props.imageSrc} alt={props.imageAlt}/>
            <p>{props.description}</p>
        </div>
    );
};