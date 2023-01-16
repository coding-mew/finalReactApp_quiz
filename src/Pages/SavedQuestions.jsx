import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../global/Context";
import useSound from "use-sound";
import clearDataSound from "../assets/sounds/clearData.wav";
import nextSound from "../assets/sounds/nextQuestion.wav";





function SavedQuestions() {
  const { savedQuestions, isSoundOn } = useGameContext();
  const [localSavedQuestions, setLocalSavedQuestions] = useState(
    JSON.parse(localStorage.getItem("savedQuestions")) || []
  );
  const [currentSavedQuestionIndex, setcurrentSavedQuestionIndex] = useState(0);
  const [playClearDataSound, { stopClearDataSound }] = useSound(clearDataSound, { volume: 0.6 });
  const [playNextSound, { stopNextSound }] = useSound(nextSound, { volume: 0.6 });
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updatedQuestions = localSavedQuestions.filter((_, i) => i !== index);
    localStorage.setItem("savedQuestions", JSON.stringify(updatedQuestions));
    setLocalSavedQuestions(updatedQuestions);
    if (isSoundOn) {
      playClearDataSound();
    }
    if (index === currentSavedQuestionIndex) {
      setcurrentSavedQuestionIndex(0);
    }
  };

  const handleNext = () => {
    setcurrentSavedQuestionIndex(currentSavedQuestionIndex + 1);
    if (isSoundOn) {
      playNextSound();
    }
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="card">
      {currentSavedQuestionIndex === localSavedQuestions.length ? (
        <div>
          <h2> There are currently no (further) questions saved</h2>
          <br />
          <button className="next_button" onClick={handleNavigateHome}>
            Take a quiz?
          </button>
        </div>
      ) : (
        <div className="saved_container">
          <ul>
            {localSavedQuestions.length > 0 && (
              <li
                className="list_saved"
                key={localSavedQuestions[currentSavedQuestionIndex].question.id}
              >
                <h3>
                  {
                    localSavedQuestions[currentSavedQuestionIndex].question
                      .question
                  }
                </h3>
                <p>Answers:</p>
                <ul>
                  {Object.entries(
                    localSavedQuestions[currentSavedQuestionIndex].question
                      .answers
                  ).map(([key, value]) => {
                    if (
                      localSavedQuestions[currentSavedQuestionIndex].question
                        .answers[key] !== null
                    )
                      return (
                        <li className="saved_answers" key={crypto.randomUUID()}>
                          {value}
                        </li>
                      );
                  })}
                </ul>
                <button
                  className="next_button"
                  onClick={() => handleDelete(currentSavedQuestionIndex)}
                >
                  Delete
                </button>
                <button className="next_button" onClick={handleNext}>
                  Next
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SavedQuestions;
