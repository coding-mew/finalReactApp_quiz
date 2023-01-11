import React from 'react'
import { GameContextProvider } from '../../global/Context'

function Quiz() {
  return (
    <div className="card">
      <div className="takeQuiz_container">
      <div className="question">Question: 
      <br />
      <br />
      lala lala lala, lala lala lala, i am such a looooong long long long long long le long long longqueeestioooooooon
      </div>
      <div className="answers_container">
       <button className="answer_button"> Answer A asdfbpafhpiahf this is such a freaking long answer
       asdfbpafhpiahf this is such a freaking long answer
       asdfbpafhpiahf this is such a freaking long answer
       </button>
       <button className="answer_button"> Answer B
       </button>
       <button className="answer_button"> Answer C
       </button>
       <button className="answer_button"> Answer D
       </button>
      </div>
      </div>
    </div>
  )
}

export default Quiz