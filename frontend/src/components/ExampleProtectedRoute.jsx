import React from "react";
import "../style/protected.style.css";

const Protected = props => {
  return (
    <div className="protected-container">
      <div>
        <p>I'm a protected route.</p> <p>I promise.</p>
      </div>
    </div>
  );
};

export default Protected;
