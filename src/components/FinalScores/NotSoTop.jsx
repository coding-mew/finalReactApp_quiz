import React from 'react'
import { useGameContext } from '../../global/Context'
function NotSoTop() {
  const { result, gameData} = useGameContext()

  return (
    <div>NotSoTop</div>
  )
}

export default NotSoTop