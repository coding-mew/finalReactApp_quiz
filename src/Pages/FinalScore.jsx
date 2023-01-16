import React from "react";
import Top from "../components/FinalScores/Top";
import { useGameContext } from "../global/Context";
import { useNavigate } from "react-router-dom";
import useSound from 'use-sound'
import nextQuestionSound from '../assets/sounds/nextQuestion.wav'
import saveQuestionSound from '../assets/sounds/saveQuestion.wav'



function FinalScore() {
  const { result, isSoundOn } = useGameContext();
  const [playSave, { stopSave }] = useSound(saveQuestionSound, { volume: 0.3 });
  const [playNext, { stopNext }] = useSound(nextQuestionSound, { volume: 0.3 });

  const navigate = useNavigate();
  const navigateToSaved = () => {
    if (isSoundOn) {
      playSave();
    }
    navigate("/saved_questions");
  };
  const navigateToHome = () => {
    if (isSoundOn) {
      playNext();
    };
    navigate("/");
  };
  return (
    <div className="card">
      <div className="final_container">
      <Top />
      <br />
      <button onClick={navigateToSaved}>See your saved Questions?</button>
      <br />
      <button > Clear Data</button>
      <br />
      <button onClick={navigateToHome}>Start again</button>

</div>
    </div>
  );
}

export default FinalScore;
