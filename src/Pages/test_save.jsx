import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { GameContext } from '../global/Context'
import { useNavigate } from 'react-router-dom'

function SavedQuestions() {
  const { savedQuestions } = useContext(GameContext);
  const [localSavedQuestions, setLocalSavedQuestions] = useState(JSON.parse(localStorage.getItem("savedQuestions")) || []);
  const [currentSavedQuestionIndex, setcurrentSavedQuestionIndex] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.setItem("savedQuestions", JSON.stringify(savedQuestions));
  }, [savedQuestions]);
  
  useEffect(() => {
    if (currentSavedQuestionIndex === localSavedQuestions.length - 1) {
      navigate('/');
    }
  }, [currentSavedQuestionIndex, localSavedQuestions, navigate]);
  
  const handleDelete = (index) => {
    const updatedQuestions = localSavedQuestions.filter((_, i) => i !== index);
    localStorage.setItem("savedQuestions", JSON.stringify(updatedQuestions));
    setLocalSavedQuestions(updatedQuestions);
    if (index === currentSavedQuestionIndex) {
      setcurrentSavedQuestionIndex(0);
    }
  }

  const handleNext = () => {
    setcurrentSavedQuestionIndex(currentSavedQuestionIndex + 1);
  }

  return (
    <div className="card">
 <h2>Saved Questions</h2>
      <ul>
        {localSavedQuestions.length > 0 &&
          <li key={localSavedQuestions[currentSavedQuestionIndex].question.id}>
            <h3>{localSavedQuestions[currentSavedQuestionIndex].question.question}</h3>
            <p>Answers:</p>
            <ul>
                {console.log("question", localSavedQuestions[currentSavedQuestionIndex])}
              {Object.entries(localSavedQuestions[currentSavedQuestionIndex].question.answers).map(([key, value]) => {
                if (localSavedQuestions[currentSavedQuestionIndex].question.answers[key] !== null)
                return (
                  <li key={crypto.randomUUID()}>
                    {value}
                    {localSavedQuestions[currentSavedQuestionIndex].question.correct_answers[key + "_correct"] && <span> (Correct Answer)</span>}
                  </li>
                );
              })}
            </ul>
            <p>Selected Answer: {localSavedQuestions[currentSavedQuestionIndex].selectedAnswer}</p>
            <button onClick={() => handleDelete(currentSavedQuestionIndex)}>Delete</button>
            <button onClick={handleNext}>Next</button>
          </li>
        }
      </ul>
    </div>
  )
}

export default SavedQuestions
