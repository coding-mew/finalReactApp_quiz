import React, { useState } from 'react'
import { useGameContext } from '../global/Context'

function SavedQuestions() {
  const { savedQuestions } = useGameContext();
  const [localSavedQuestions, setLocalSavedQuestions] = useState(JSON.parse(localStorage.getItem("savedQuestions")) || []);
  const [currentSavedQuestionIndex, setcurrentSavedQuestionIndex] = useState(0);
 
  localStorage.setItem("savedQuestions", JSON.stringify(savedQuestions));
  
  const handleDelete = (index) => {
    const updatedQuestions = localSavedQuestions.filter((_, i) => i !== index);
    localStorage.setItem("savedQuestions", JSON.stringify(updatedQuestions));
    setLocalSavedQuestions(updatedQuestions)
    if (index === currentSavedQuestionIndex) {
      setcurrentSavedQuestionIndex(0);
    }
  }

  const handleNext = () => {
    setcurrentSavedQuestionIndex(currentSavedQuestionIndex + 1);
  }

  return (
    <div className="card">
        {console.log(localSavedQuestions)}
      <ul>
        {localSavedQuestions.length > 0 &&
          <li className="list_saved"key={localSavedQuestions[currentSavedQuestionIndex].question.id}>
            <h3>{localSavedQuestions[currentSavedQuestionIndex].question.question}</h3>
            <p>Answers:</p>
            <ul>
                {console.log("question", localSavedQuestions[currentSavedQuestionIndex])}
              {Object.entries(localSavedQuestions[currentSavedQuestionIndex].question.answers).map(([key, value]) => {
                if (localSavedQuestions[currentSavedQuestionIndex].question.answers[key] !== null)
                return (
                  <li  className="saved_answers"key={crypto.randomUUID()}>
                    {value}
                    {localSavedQuestions[currentSavedQuestionIndex].question.correct_answers[key + "_correct"] && <span> (Correct Answer)</span>}
                  </li>
                );
              })}
            </ul>
            <button className="next_button" onClick={() => handleDelete(currentSavedQuestionIndex)}>Delete</button>
            <button className="next_button" onClick={handleNext}>Next</button>
          </li>
        }
      </ul>
    </div>
  )
}

export default SavedQuestions
