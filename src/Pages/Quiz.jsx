import React, { useContext } from "react";
import { GameContext, GameContextProvider } from "../global/Context";

function Quiz() {
  const { gameData } = useContext(GameContext);
  // const { gameData } = GameContextProvider()
  console.log("🚀 ~ file: Quiz.jsx:6 ~ Quiz ~ gameData", gameData);

  return (
    <div className="card" style={{ height: "75vh", marginTop: "15rem" }}>
      <div className="takeQuiz_container">
        <div className="question">
          Question:
          
        </div>
        <div className="answers_container">
        {gameData.map(item => {
        return (
          <div key={item.id}>
             <div className="question">
          Question: {item.question}         
        </div>
            <ul>
              {Object.keys(item.answers).map(key => {
                return (
                  <button className="answer_button" key={key}>
                    {item.answers[key]}
                  </button>
                );
              })}
            </ul>
          </div>
        );
      })}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
