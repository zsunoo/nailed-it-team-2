import React from "react";
import "./home.css";
import Hammy from "../../assets/HamburglerGraphic_Full.svg";

function HomePage() {
  return (
    <div className="home-page">
      <div>
        <h1 className="home-title">NAILED IT!</h1>
        <p className="home-subtitle">
          Welcome to XD Creative Field Day | "NAILED IT"... A chance for
          designers and developers to collaborate on something fun and creative
          for the day. It’s like a casual hackathon but with a twist.
        </p>
        <p className="home-subtitle">
          It’s like a casual hackathon but with a TWIST.
        </p>
        <div className="hamburglar-icon">
          <img src={Hammy} alt="Hamburglar"></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
