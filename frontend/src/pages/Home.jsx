import React from "react";
import { Link } from "react-router-dom";
import "../style/home.style.css";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <p>Home</p>
        <p>This is the Landing Page</p>
        <Link to="/MainMenu">
          <button className="home-button">Click to go to Main Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
