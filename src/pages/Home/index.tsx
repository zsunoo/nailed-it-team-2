import React from "react";
import Lottie from "react-lottie";
import Devs from "../../lotties/developers.json";
import "./home.css";
import Hammy from "../../assets/THEHAM.svg";
import Ham1 from "../../assets/ham1.svg";
import Ham2 from "../../assets/ham2.svg";
import Ham3 from "../../assets/ham3.svg";
import Ham4 from "../../assets/ham4.svg";


function HomePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Devs,
  };

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
