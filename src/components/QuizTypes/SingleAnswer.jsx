
import React, { useState } from "react";
import { useGameContext } from "../../global/Context"

function SingleAnswer() {
    const { gameData, result, setResult } = useGameContext();
    // const { gameData } = GameContextProvider()
    console.log("🚀 ~ file: Quiz.jsx:6 ~ Quiz ~ gameData", gameData);
  
    // useState to keep track of current question
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [answerIsCorrect, setAnswerIsCorrect] = useState("");
  
    console.log(result)
    const currentQuestion = gameData[currentQuestionIndex];
    
    const handleAnswer = (answer) => {
      if (answer === currentQuestion.correct_answer) {
        setResult((prev) => {
          return {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          };
        });
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setResult((prev) => {
            return {
              ...prev,
              score: prev.score + 5,
              wrongAnswers: prev.wrongAnswers + 1,
            };
          });
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    };
    const handleSelectChange = (answer) => {
      setSelectedAnswer(answer);
    };
  return (
          //  currentQuestion.multiple_correct_answers === false ?
          <div className="card" style={{ height: "75vh", marginTop: "15rem" }}>
          <div className="takeQuiz_container">
            <div className="question">{currentQuestion.question}</div>
            <div className="answers_container">
                {Object.keys(currentQuestion.answers).map((key) => {
                  if (currentQuestion.answers[key] !== null) {
                    return (
                      <>
                        {/* random id : crypto.. */}
                        <div
                          key={crypto.randomUUID()}
                          className="answer_single"
                        >
                          <label
                            className="label_quiz"
                            htmlFor={currentQuestion.answers[key]}
                            key={crypto.randomUUID()}
                          >
                            {currentQuestion.answers[key]}{" "}
                          </label>
                          <input
                            type="radio"
                            className="list_quiz"
                            name="answer"
                            key={crypto.randomUUID()}
                            value={currentQuestion.answers[key]}
                            onChange={() => handleSelectChange(key)}
                          />

                          <br />
                        </div>
                      </>
                    );
                  }
                })}
                <button
                  className="next_button"
                  onClick={() => handleAnswer(selectedAnswer)}
                >
                 Next Question
                </button>
            </div>
          </div>
        </div>
  )
}

export default SingleAnswer