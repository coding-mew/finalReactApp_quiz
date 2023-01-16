import React from "react";
import Top from "../components/FinalScores/Top";
import { useGameContext } from "../global/Context";
import { useNavigate } from "react-router-dom";


function FinalScore() {
  const { result } = useGameContext();
  const navigate = useNavigate();
  const navigateToSaved = () => {
    navigate("/saved_questions");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="card">
      <div className="final_container">
      <Top />
      {console.log(result)}
      {console.log(result.score)}
      <br />
      <button className="save_button" onClick={navigateToSaved}>See your saved Questions?</button>
      <br />
      <button onClick={navigateToHome}>Start again</button>

</div>
    </div>
  );
}

export default FinalScore;
