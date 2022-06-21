import React, { useState } from "react";
import argentina from "./Flag_of_Argentina.svg";
import bolivia from "./Flag_of_Bolivia.svg";
import brazil from "./Flag_of_Brazil.svg";
import chile from "./Flag_of_Chile.svg";
import colombia from "./Flag_of_Colombia.svg";
import ecuador from "./Flag_of_Ecuador.svg";
import guyana from "./Flag_of_Guyana.svg";
import paraguay from "./Flag_of_Paraguay.svg";
import peru from "./Flag_of_Peru.svg";
import suriname from "./Flag_of_Suriname.svg";
import uruguay from "./Flag_of_Uruguay.svg";
import venezuela from "./Flag_of_Venezuela.svg";

export default function Card(props) {
    let [countries, setCountries] = useState(
        [
            {
                id: 1,
                imageSrc: argentina,
                imageAlt: "Flag of Argentina",
                description: "Flag of Argentina"
            },
            {
                id: 2,
                imageSrc: bolivia,
                imageAlt: "Flag of Bolivia",
                description: "Flag of Bolivia"
            },
            {
                id: 3,
                imageSrc: brazil,
                imageAlt: "Flag of Brazil",
                description: "Flag of Brazil"
            },
            {
                id: 4,
                imageSrc: chile,
                imageAlt: "Flag of Chile",
                description: "Flag of Chile"
            },
            {
                id: 5,
                imageSrc: colombia,
                imageAlt: "Flag of Colombia",
                description: "Flag of Colombia"
            },
            {
                id: 6,
                imageSrc: ecuador,
                imageAlt: "Flag of Ecuador",
                description: "Flag of Ecuador"
            },
            {
                id: 7,
                imageSrc: guyana,
                imageAlt: "Flag of Guyana",
                description: "Flag of Guyana"
            },
            {
                id: 8,
                imageSrc: paraguay,
                imageAlt: "Flag of Paraguay",
                description: "Flag of Paraguay"
            },
            {
                id: 9,
                imageSrc: peru,
                imageAlt: "Flag of Peru",
                description: "Flag of Peru"
            },
            {
                id: 10,
                imageSrc: suriname,
                imageAlt: "Flag of Suriname",
                description: "Flag of Suriname"
            },
            {
                id: 11,
                imageSrc: uruguay,
                imageAlt: "Flag of Uruguay",
                description: "Flag of Uruguay"
            },
            {
                id: 12,
                imageSrc: venezuela,
                imageAlt: "Flag of Venezuela",
                description: "Flag of Venezuela"
            }
        ]
    );

    let country = countries[11];

    return (
        <div>
            <img src={country.imageSrc} alt={country.imageAlt}/>
            <p>{country.description}</p>
        </div>
    );
};