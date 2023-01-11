import React, { useState, useContext } from 'react';

const GameContext = React.createContext();
export function useGameContext(){
    return useContext(GameContext);
}

export function GameContextProvider({children}) {
    const [gameData, setGameData] = useState({});
    return (
        <GameContext.Provider value={{}}>
            {children}
        </GameContext.Provider>
    )
}