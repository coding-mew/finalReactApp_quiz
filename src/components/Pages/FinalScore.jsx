import React, { useContext } from 'react'
import { GameContext } from '../../global/Context'


function FinalScore() {
  const {gameData} = useContext(GameContext)
  return (
    <div className="card">{console.log(gameData.score)}</div>
  )
}

export default FinalScore