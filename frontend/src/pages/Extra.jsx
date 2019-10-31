import React from "react";
import { Link } from "react-router-dom";
import "../style/extra.style.css";

const MainMenu = () => {
  return (
    <div className="extra-container">
      <div>
        <p>This is an extra branch - we can put the login and register here.</p>
        <p>
          <strong>Run</strong> "
          <span className="extra-command">git checkout style</span>" to see a
          combined register and login component on the same page.
        </p>
      </div>
    </div>
  );
};

export default MainMenu;
