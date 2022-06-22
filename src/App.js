import React from "react";
import Scoreboard from "./Components/Scoreboard";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Scoreboard score={0} bestScore={0}/>
      <Card/>
    </div>
  );
}

export default App;