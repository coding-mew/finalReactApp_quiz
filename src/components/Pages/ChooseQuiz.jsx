import React, {useState} from 'react'
import { GameContextProvider } from '../../global/Context'

function ChooseQuiz() {
  const [chosenTopic, setChosenTopic] = useState('')
  const [chosenLevel, setChosenLevel] = useState('')
  const [chosenAmount, setChosenAmount] = useState()

  return (
    <div className="card">
      <div className="choose_quiz_container">
      <label htmlFor="topic">Choose your Topic</label>
   <select id="topic">
  <option value="javaScript">JavaScript</option>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="random">Random</option>
</select>
<br />
<label htmlFor="level">Choose your Level</label>

<select id="level">
  <option value="beginner">Beginner</option>
  <option value="intermediate">Intermediate</option>
  <option value="advanced">Advanced</option>
</select>
<br />
<label htmlFor="questionsAmount">How many questions?</label>

<select id="questionsAmount">
    <option value="five">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
  </select>
  </div>
 </div>
  )
}

export default ChooseQuiz