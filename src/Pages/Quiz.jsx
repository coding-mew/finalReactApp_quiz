import React from "react";
import { useGameContext } from "../global/Context";
import SingleAnswer from "../components/QuizTypes/SingleAnswer";

function Quiz() {
  //  = useContext(GameContext)
  const { gameData } = useGameContext();

  return (
    <>
      {gameData.length > 0 && (
        <SingleAnswer />
      )}
    </>
  );
}

export default Quiz;
