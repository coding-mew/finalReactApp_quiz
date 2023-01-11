import React, {useState} from 'react'
import { GameContextProvider } from '../../global/Context'

function ChooseQuiz() {
  return (
    <div className="card">
   <select id="topic">
    <h2> CHOOSE YOUR TOPIC</h2>
  <option value="javaScript">JavaScript</option>
  <option value="html">HTML</option>
  <option selected value="css">CSS</option>
  <option value="random">Random</option>
</select>
<select id="level">
<h2> CHOOSE YOUR LEVEL</h2>
  <option value="beginner">Beginner</option>
  <option value="intermediate">Intermediate</option>
  <option selected value="advanced">Advanced</option>
</select>
<select id="questionsAmount">
    <h2> HOW MANY QUESTIONS?</h2>
    <option value="five">5</option>
    <option value="10">10</option>
    <option selected value="15">15</option>
    <option value="20">20</option>
  </select>
 </div>
  )
}

export default ChooseQuiz