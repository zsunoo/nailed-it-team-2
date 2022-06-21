import React from "react";
import "./objective.css";
import Tie from "../../assets/TieGraphic.svg";

function ObjectivePage() {
  return (
    <div className="objective-page">
      <div>
        <div className="tie">
          <img src={Tie} alt="Tie"></img>
        </div>
        <h1 className="objective-title">OBJECTIVE</h1>
        <p className="objective-subtitle">
          Navigating an application can be hard for your users...It's your job
          to make it even HARDER
        </p>
        <p className="objective-subtitle">
          Design & Implement a new method for navigating this application
        </p>
        <p className="objective-subtitle">
          Throw convention out the window, think outside the box, and take BAD
          practices to the extreme!
        </p>
      </div>
      <div className="iNeedSpace"></div>
    </div>
  );
}

export default ObjectivePage;
