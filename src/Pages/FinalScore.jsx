import React from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import clearDataSound from "../assets/sounds/clearData.wav";
import Top from "../components/FinalScores/Top";
import { useGameContext } from "../global/Context";

function FinalScore() {
  const { isSoundOn } = useGameContext();
  const [playClearData, { stopClearData }] = useSound(clearDataSound, {
    volume: 0.3,
  });

  const navigate = useNavigate();
  const navigateToSaved = () => {
    if (isSoundOn) {
      playClearData();
    }
    navigate("/saved_questions");
  };
  const navigateToHome = () => {
    if (isSoundOn) {
      playClearData();
    }
    navigate("/");
  };
  const clearData = () => {
    if (isSoundOn) {
      playClearData();
    }
    localStorage.clear();
  };
  return (
    <div className="card">
      <div className="final_container">
        <Top />
        <br />
        <button onClick={navigateToSaved}>See your saved Questions?</button>
        <br />
        <button onClick={clearData}> Clear Data</button>
        <br />
        <button onClick={navigateToHome}>Start again</button>
      </div>
    </div>
  );
}

export default FinalScore;
