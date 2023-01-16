import React, { useContext, useState } from "react";
// import {NavbarContext} from './NavbarContext'

// nur dynamic variables in context
// initialisert context object
const GameContext = React.createContext();

// renaming
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
  const [showNavbar, setShowNavbar] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [savedQuestions, setSavedQuestions] = useState([]);

  return (
    <GameContext.Provider
      value={{
        gameData,
        setGameData,
        result,
        setResult,
        showNavbar,
        setShowNavbar,
        savedQuestions,
        setSavedQuestions,
        isSoundOn,
        setIsSoundOn,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
