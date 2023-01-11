import React, { useState, useContext } from 'react';

const gameContexts = React.createContext();
export function useGameContext(){
    return useContext(gameContexts);
}

export function GameContextProvider({children}) {
    const [gameData, setGameData] = useState({});
    return (
        <GameContextProvider value={{}}>
            {children}
        </GameContextProvider>
    )
}