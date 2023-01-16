import React from 'react'
import { useGameContext } from '../global/Context'


const {savedQuestions} = useGameContext();
console.log("🚀 ~ file: SavedQuestions.jsx:6 ~ savedQuestions", savedQuestions)

// import useState savedQuestions -> local storage, display from

function SavedQuestions() {
  return (
    <div>SavedQuestions</div>
  )
}

export default SavedQuestions