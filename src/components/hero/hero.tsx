import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="Hero-Main">
      <div className="Hero-Content">
        <p className="Hero-Content-First">WINTER WARMTH</p>
        <p className="Hero-Content-Second">
          {" "}
          Sent with love
          <br />
          from Maine
        </p>

        <a href="#" className="underline-animation">SHOP NOW</a>
      </div>
    </div>
  );
};

export default Hero;
