import React from "react";
import SingleAnswer from "../components/QuizTypes/SingleAnswer";
import { useGameContext } from "../global/Context";

function Quiz() {
  //  = useContext(GameContext)
  const { gameData } = useGameContext();

  return <>{gameData.length > 0 && <SingleAnswer />}</>;
}

export default Quiz;
