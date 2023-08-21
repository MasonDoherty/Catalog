import React from "react";
import "./landingPageStyles.css";
import Instagram from "../cards/instagram/Instagram";
const LandingPage = () => {
  return (
    <div className="container">
      <div>
        <h2>Hello and Welcome</h2>
        <p>
          Explore our curated catalog showcasing various formatting styles,
          accompanied by the necessary CSS code to recreate each design.
        </p>
      </div>
      <div>
        <h2>Cards</h2>
        <div>
          <Instagram />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
