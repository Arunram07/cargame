import React from "react";
import "../styles/components/card.css";

const Card = ({ player, color }) => {
  return (
    <div className="players_card" style={{ background: color }}>
      <p>Speed 0</p>
      <h3>{player}</h3>
      <div className="speed_variants">
        <div className="speed"></div>
        <div className="damage"></div>
      </div>
    </div>
  );
};

export default Card;
