import React, { useState, useContext } from 'react';

export const GameContext = React.createContext();
console.log(GameContext)

export function GameContextProvider({children}) {

    const [gameData, setGameData] = useState({questions: [], chosenLevel: "", score: 0});

    return (
        <GameContext.Provider value={{gameData, setGameData}}>
            {children}
        </GameContext.Provider>
    )
}