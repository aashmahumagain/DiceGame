import "./App.css";
import "../src/";
import "../src/index.css";
import { useState } from "react";
const App = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const refreshDice = () => {
    const ranno = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(ranno);
  };
  return (
    <div className="main-sec">
      <center>
        <img src={require(`./assets/${diceNumber}.jpg`)} />
      </center>
      <div className="roll-me">
        <button
          onClick={() => {
            refreshDice();
          }}
          className="button"
        >
          Roll me
        </button>
      </div>
    </div>
  );
};
export default App;
