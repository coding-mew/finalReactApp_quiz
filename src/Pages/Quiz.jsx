import React, { useState } from "react";
import { useGameContext } from "../global/Context";

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
        //  currentQuestion.multiple_correct_answers === false ?
        <div className="card" style={{ height: "75vh", marginTop: "15rem" }}>
          <div className="takeQuiz_container">
            <div className="question">{currentQuestion.question}</div>
            <div className="answers_container">
              <div>
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
                          >
                            {currentQuestion.answers[key]}{" "}
                          </label>
                          <input
                            type="radio"
                            className="list_quiz"
                            name="answer"
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
                  testnext
                </button>
              </div>
            </div>
          </div>
        </div>

        // ) : (
        // <>
        //   <div className="card" style={{ height: "75vh", marginTop: "15rem" }}>
        //     <div className="takeQuiz_container">
        //       <div className="question">{currentQuestion.question}</div>

        //       <form>
        //         {Object.keys(currentQuestion.answers).map((key) => {
        //           if (currentQuestion.answers[key] !== null) {
        //             return (
        //               <>
        //                 <div className="answers_container">
        //                   <div className="answer_single">
        //                     <input
        //                       type="checkbox"
        //                       className="list_quiz"
        //                       name="answer"
        //                       value={currentQuestion.answers[key]}
        //                     />
        //                     <label
        //                       className="label_quiz"
        //                       htmlFor={currentQuestion.answers[key]}
        //                     >
        //                       <br />

        //                       {currentQuestion.answers[key]}
        //                     </label>
        //                   </div>
        //                 </div>
        //               </>
        //             );
        //           }
        //         })}
        //         <input
        //           type="submit"
        //           value="Next"
        //           onClick={() => handleAnswer(answer)}
        //         />
        //       </form>
        //     </div>
        //   </div>
        // </>
      )}
    </>
  );
}

export default Quiz;
