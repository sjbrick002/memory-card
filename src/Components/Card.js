import React from "react";

export default function Card(props) {
    return (
        <div>
            <img src={props.imageSrc} alt={props.imageAlt}/>
            <p>{props.description}</p>
        </div>
    );
};