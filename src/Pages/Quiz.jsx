import React, { useState } from "react";
import { useGameContext } from "../global/Context";
import SingleAnswer from "../components/QuizTypes/SingleAnswer";

function Quiz() {
  const { gameData, result, setResult } = useGameContext();
  // const { gameData } = GameContextProvider()
  console.log("🚀 ~ file: Quiz.jsx:6 ~ Quiz ~ gameData", gameData);

  // useState to keep track of current question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answerIsCorrect, setAnswerIsCorrect] = useState("");

  console.log(result)
  const currentQuestion = gameData[currentQuestionIndex];
  console.log(
    "🚀 ~ file: Quiz.jsx:19 ~ Quiz ~ currentQuestionIndex;",
    currentQuestionIndex
  );
  console.log("🚀 ~ file: Quiz.jsx:19 ~ Quiz ~ gameData", gameData);
  console.log(currentQuestion)


  const handleAnswer = (answer) => {
    console.log("🚀 ~ file: Quiz.jsx:23 ~ handleAnswer ~ answer", answer);

    console.log(answer === currentQuestion.correct_answer);
    if (answer === currentQuestion.correct_answer) {
      setResult((prev) => {
        return {
          ...prev,
          score: prev.score + 5,
          // score: prev.score + 5,

          
        };
      });
      

      console.log(currentQuestion);
      // gameData.score(score+5)
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }

  };
  const handleSelectChange = (answer) => {
    // setSelectedAnswer(true); ???????? how to find given input?
    setSelectedAnswer(answer);
  };

  return (
    <>
      {gameData.length > 0 && (
        <SingleAnswer />
      )}
    </>
  );
}

export default Quiz;
