import React, { useState, useEffect } from "react";
import { useGameContext } from "../global/Context";
import { useNavigate } from "react-router-dom";

function SavedQuestions() {
  const { savedQuestions } = useGameContext();
  const [localSavedQuestions, setLocalSavedQuestions] = useState(
    JSON.parse(localStorage.getItem("savedQuestions")) || []
  );
  const [currentSavedQuestionIndex, setcurrentSavedQuestionIndex] = useState(0);
  const navigate = useNavigate();

  // useEffect(() => {
  //   localStorage.setItem("savedQuestions", JSON.stringify(savedQuestions));
  // }, [savedQuestions]);

  const handleDelete = (index) => {
    const updatedQuestions = localSavedQuestions.filter((_, i) => i !== index);
    localStorage.setItem("savedQuestions", JSON.stringify(updatedQuestions));
    setLocalSavedQuestions(updatedQuestions);
    if (index === currentSavedQuestionIndex) {
      setcurrentSavedQuestionIndex(0);
    }
  };

  const handleNext = () => {
    setcurrentSavedQuestionIndex(currentSavedQuestionIndex + 1);
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="card">
      {currentSavedQuestionIndex === localSavedQuestions.length - 1 ? (
        <div >
          <h2> There are currently no questions saved</h2>
          <br />
          <button className="next_button" onClick={handleNavigateHome}>
            Take a quiz?
          </button>
        </div>
      ) : (
        <div className="saved_container">
          {console.log(localSavedQuestions)}
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
                  {console.log(
                    "question",
                    localSavedQuestions[currentSavedQuestionIndex]
                  )}
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
