import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../global/Context";

function SingleAnswer() {
  const { gameData, result, setResult } = useGameContext();

  // useState to keep track of current question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const currentQuestion = gameData[currentQuestionIndex];
  const correctAnswers = Object.values(currentQuestion.correct_answers);
  const indexOfCorrectAnswer = correctAnswers.findIndex(
    (answer) => answer === "true"
  );

  // redirect when array of questions is empty:

  const navigate = useNavigate();

  useEffect(() => {
    if (currentQuestionIndex === gameData.length-1) {
      navigate("/final_score");
    }
  }, [currentQuestionIndex, gameData.length, navigate]);

  const handleAnswer = (answer) => {
    let keys = Object.keys(currentQuestion.answers);
    let indexOfSelectedAnswer = keys.indexOf(answer);
    if (indexOfCorrectAnswer === indexOfSelectedAnswer) {
      setResult((prev) => {
        return {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        };
      });
      setSelectedAnswer("");
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setResult((prev) => {
        return {
          ...prev,
          score: prev.score,
          wrongAnswers: prev.wrongAnswers + 1,
        };
      });
      setSelectedAnswer("");

      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };
  const handleSelectChange = (answer) => {
    setSelectedAnswer(answer);
  };
  {
    /* random id : crypto.. */
  }
  return (
    //  currentQuestion.multiple_correct_answers === false ?
    <div
      className="card"
      style={{ height: "75vh", marginTop: "15rem", width: "60vw" }}
    >
      <div className="takeQuiz_container">
        <div className="question">{currentQuestion.question}</div>
        <div className="answers_container">
          <form>
            {Object.keys(currentQuestion.answers).map((key, index) => {
              if (currentQuestion.answers[key] !== null) {
                const randomID = crypto.randomUUID();
                return (
                  <div key={crypto.randomUUID()} className="answer_single">
                    <input
                      type="radio"
                      className="list_quiz"
                      name="answer"
                      value={currentQuestion.answers[key]}
                      id={randomID}
                      onChange={() => handleSelectChange(key)}
                      checked={selectedAnswer === key ? true : false}
                      // onChange={(e) => e.target.checked = !e.target.checked}
                    />
                    <label
                      className="label_quiz"
                      htmlFor={randomID}
                      key={crypto.randomUUID()}
                    >
                      {currentQuestion.answers[key]}{" "}
                    </label>
                    <br />
                  </div>
                );
              }
            })}
          </form>
          <button
            className="next_button"
            onClick={() => handleAnswer(selectedAnswer)}
            disabled={selectedAnswer === ""}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleAnswer;
