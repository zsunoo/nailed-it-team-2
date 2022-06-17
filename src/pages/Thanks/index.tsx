import React from "react";
import Lottie from "react-lottie";
import Thanks from "../../lotties/thanks.json";
import Erin from "../../assets/erin_kovar.jpeg";
import Kyle from "../../assets/kyle_ahlstrom.jpg";
import Halfsies from "../../assets/burgler_full.svg";

import "./thanks.css";

function ThanksPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Thanks,
  };

  return (
    <div className="thanks-page">
      <img src={Halfsies} alt="Halfsies" className="halfsies" />
      <div className="heart-wrapper">
        <Lottie options={defaultOptions} height={300} width={400} />
      </div>
      <div>
        <h1 className="thanks-title">Thank You</h1>
        <p className="thanks-subtitle">
          Make sure to say thank you to our awesome Hackathon team who made this
          event possible!
        </p>
        <div className="thanks-avatars">
          <div>
            <div className="thanks-avatar">
              <img src={Kyle} alt="Kyle" />
            </div>
            <p className="thanks-name"> Kyle Ahlstrom</p>
          </div>
          <div>
            <div className="thanks-avatar">
              <img src={Erin} alt="Erin" />
            </div>
            <p className="thanks-name"> Erin Kovar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanksPage;
