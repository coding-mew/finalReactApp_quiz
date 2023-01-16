import React from "react";
import Top from "../components/FinalScores/Top";
import { useGameContext } from "../global/Context";

function FinalScore() {
  const { result } = useGameContext();
  return (
    <div className="card">
      <Top />
      {console.log(result)}
      {console.log(result.score)}
    </div>
  );
}

export default FinalScore;
