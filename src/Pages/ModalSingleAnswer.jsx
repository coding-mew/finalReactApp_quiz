import React from 'react'

function ModalSingleAnswer() {
  return (
    <div className="modal_singleAnswer">
    <div className="modal_content">
        <p>The correct answer is: {correctAnswers[indexOfCorrectAnswer]}</p>
        <p>Your selected answer: {currentQuestion.answers[selectedAnswer]}</p>
        <button onClick={() => setShowModal(false)}>Close</button>
    </div>
</div>
  )
}

export default ModalSingleAnswer