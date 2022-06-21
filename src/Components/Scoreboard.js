import React from "react";

function Score(props) {
    return (
        <p>Current score: {props.score}</p>
    );
};

function BestScore(props) {
    return (
        <p>Best score: {props.score}</p>
    );
};

export default function Scoreboard(props) {
    return (
        <div>
            <Score score={0}/>
            <BestScore score={3}/>
        </div>
    );
};