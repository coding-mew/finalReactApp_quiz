import React, { useState, useContext } from "react";

// nur dynamic variables in context
// initialisert context object
const GameContext = React.createContext();

export function useGameContext() {
  return useContext(GameContext);
}

export function GameContextProvider({ children }) {
  const [gameData, setGameData] = useState([]);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  return (
    <GameContext.Provider value={{ gameData, setGameData, result, setResult }}>
      {children}
    </GameContext.Provider>
  );
}
