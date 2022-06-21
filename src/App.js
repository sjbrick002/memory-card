import React from "react";
import Scoreboard from "./Components/Scoreboard";
import Card from "./Components/Card";
import Argentina from "./Flag_of_Argentina.svg";

function App() {
  return (
    <div className="App">
      <Scoreboard/>
      <Card imageSrc={Argentina} imageAlt={"Flag of Argentina"} description={"Flag of Argentina"} />
    </div>
  );
}

export default App;