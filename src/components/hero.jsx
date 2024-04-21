import React from "react";
import "./hero.css";

const HeroPage = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Skill Aquisition Center Online form</h1>
        <hr className="shorter" />
      </div>
      <div className="hero-image">
        <img src="../image1.jpg" alt="Hero" />
      </div>
    </div>
  );
};

export default HeroPage;
