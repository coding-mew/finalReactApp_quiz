import React, { useState, useContext } from "react";
import {NavbarContext} from './NavbarContext'

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
  const [showNavbar, setShowNavbar] = useState(true)

  return (
    <NavbarContext.Provider value={{showNavbar, setShowNavbar}}>
    <GameContext.Provider value={{ gameData, setGameData, result, setResult }}>
      {children}
    </GameContext.Provider>
    </NavbarContext.Provider>
  );
}
