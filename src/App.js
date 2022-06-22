import React, { useState }from "react";
import Scoreboard from "./Components/Scoreboard";
import Card from "./Components/Card";

function App() {
  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore}/>
      <Card/>
    </div>
  );
}

export default App;