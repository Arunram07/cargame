import React, { useEffect, useState } from "react";
import steering from "./steering.png";
import mirror from "./mirror.png";
import background from "./background.mp4";
import Card from "./components/card";

const App = () => {
  const [speed, setSpeed] = useState(0);
  const [power, setPower] = useState(0);
  const [deg, setDeg] = useState(0);
  const cardColor = [
    "red",
    "orangered",
    "yellow",
    "blue",
    "green",
    "aqua",
    "brown",
  ];
  const players = [1, 2, 3, 4, 5, 6, 7];

  const handleKeyDownEvent = (key, e) => {
    e.preventDefault();
    if (key === "ArrowUp") {
      if (speed < 160) setSpeed(speed + 1);
    }
    if (key === "ArrowDown") {
      if (speed > 0) setSpeed(speed - 1);
    }
    if (key === "ArrowLeft") {
      setDeg(-45);
    }
    if (key === "ArrowRight") {
      setDeg(45);
    }
  };

  const handleKeyEndEvent = (key, e) => {
    e.preventDefault();
    if (key === "ArrowUp") {
      console.log(speed);
    }
    if (key === "ArrowLeft") {
      setDeg(0);
      return;
    }
    if (key === "ArrowRight") {
      setDeg(0);
      return;
    }
  };

  const renderPlayers = (
    <div className="players">
      {players.map((player, index) => {
        return <Card player={player} key={index} color={cardColor[index]} />;
      })}
    </div>
  );

  const renderPlayerDetails = (
    <div className="details">
      <p>SPEED</p>
      <div className="meter_container">
        <p style={{ width: `${(speed / 160) * 100}%` }}></p>
      </div>
      <p>POWER</p>
      <div className="meter_container">
        <p style={{ width: `${power}%` }}></p>
      </div>
      <p>DAMAGE</p>
      <div className="meter_container">
        <p style={{ width: `${(speed / 160) * 100}%` }}></p>
      </div>
    </div>
  );

  return (
    <div className="block">
      <div className="grid">
        <video loop autoPlay muted>
          <source src={background} />
        </video>
        <div className="left">
          <button
            onKeyDown={(e) => handleKeyDownEvent(e.key, e)}
            onKeyUp={(e) => handleKeyEndEvent(e.key, e)}
          ></button>
          <div className="steering">
            <img
              src={steering}
              alt="steering"
              style={{
                transform: `translate(-50%, -50%) rotate(${deg}deg)`,
                transition: "300ms all ease-in-out",
              }}
            />
          </div>
        </div>
        {/* <div className="road">
          <img src={road} alt="road" />
        </div> */}
        <div className="mirror">
          <img src={mirror} alt="mirror" />
        </div>
        {renderPlayerDetails}
      </div>
      {renderPlayers}
    </div>
  );
};

export default App;
