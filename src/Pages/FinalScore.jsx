import React from "react";
import { useGameContext } from "../global/Context";

function FinalScore() {
  const { gameData } = useGameContext()
  return <div className="card">{console.log(gameData.score)}</div>;
}

export default FinalScore;
