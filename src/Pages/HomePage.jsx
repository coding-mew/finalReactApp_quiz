import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/homepage.modules.css";
import { useNavigate } from "react-router-dom";
import { NavbarContext } from "../global/NavbarContext";

function HomePage() {
  const { showNavbar, setShowNavbar } = useContext(NavbarContext);
  console.log("🚀 ~ file: HomePage.jsx:7 ~ HomePage ~ showNavbar", showNavbar);
  const navigate = useNavigate();

  useEffect(() => {
    setShowNavbar(false);
  });
  return (
    <div className="home_container">
      <h1 data-text="Enter the Quiz Universe" className="home_animation">
        <span onClick={() => navigate("/choose_quiz")}>
          Enter the Quiz Universe
        </span>
      </h1>
    </div>
  );
}

export default HomePage;
