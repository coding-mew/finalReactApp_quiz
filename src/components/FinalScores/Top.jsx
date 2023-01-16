import React from "react";
import { useGameContext } from "../../global/Context";

function Top() {
  const { result } = useGameContext();

  return (
    <div>
      <p>Congratulation!</p>
      Your Score is: {result.score} Points
      <br />
      <br />
      You answered {result.correctAnswers} questions correct.
      <br />
      You answered {result.wrongAnswers} questions wrong.
      <br />
    </div>
  );
}

export default Top;
