import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/homepage.modules.css";
import { useNavigate } from "react-router-dom";
import { NavbarContext } from "../../unused/NavbarContext";
import { useGameContext } from "../global/Context";

function HomePage() {
  const { showNavbar, setShowNavbar } = useGameContext();
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
