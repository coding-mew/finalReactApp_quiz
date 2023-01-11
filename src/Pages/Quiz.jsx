import React, { useContext, useState } from "react";
import { GameContext, GameContextProvider } from "../global/Context";

function Quiz() {
  const { gameData } = useContext(GameContext);
  // const { gameData } = GameContextProvider()
  console.log("🚀 ~ file: Quiz.jsx:6 ~ Quiz ~ gameData", gameData);

  // useState to keep track of current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [selectedAnswer, setSelectedAnswer] = useState('')

  const handleAnswer = (answer) => {
    if (gameData[currentQuestion].multiple_correct_answers === false){



    }

    if (answerIsCorrect) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  // {condtitional if multiple = false? selectedAnswer.u. : checkbox }

  return (
    <>

    {gameData[currentQuestion].multiple_correct_answers?

    <div className="card" style={{ height: "75vh", marginTop: "15rem" }}>
      <div className="takeQuiz_container">
        <div className="question">{gameData[currentQuestion].question}</div>


        <form>
          {Object.keys(gameData[currentQuestion].answers).map((key) => {
            if (gameData[currentQuestion].answers[key] !== null){
              return (
                <>
                  <div className="answers_container">
                   <div className="answer_single">
                      <input type="radio" className="list_quiz" name="answer" value={gameData[currentQuestion].answers[key]} />
                      <label htmlFor={gameData[currentQuestion].answers[key]}>
                        <br />

                      
                        {gameData[currentQuestion].answers[key]}</label>
                    
                </div>
                  </div>
                </>
              );
            }
          })}
        <input type="submit" value="Next" onClick={() => handleAnswer()} /> 
        </form>


        {/* <ul>
          {Object.keys(gameData[currentQuestion].answers).map((key) => {
            if (gameData[currentQuestion].answers[key] !== null){
              return (
                <>
                  <div className="answers_container">
                    <li key={key} className="list_quiz">
                      <button >
                        {gameData[currentQuestion].answers[key]}
                      </button>
                    </li>
                  </div>
                </>
              );
            }
          })}
        </ul>
        <input onClick={() => handleAnswer()}> Next</input> */}
      </div>
    </div>


    : <>
    looks like there are more possible answers

    </>
        }
        </>
  )
}

export default Quiz;
