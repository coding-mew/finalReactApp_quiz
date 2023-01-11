import React, { useState, useContext } from 'react';

export const GameContext = React.createContext();
console.log(GameContext)

export function GameContextProvider({children}) {

    const [gameData, setGameData] = useState({questions: [],  score: 0});
    console.log("🚀 ~ file: Context.jsx:9 ~ GameContextProvider ~ gameData", gameData)

    return (
        <GameContext.Provider value={{gameData, setGameData}}>
            {children}
        </GameContext.Provider>
    )
}