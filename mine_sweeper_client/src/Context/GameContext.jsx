import { createContext, useState } from 'react'

const GameContext = createContext({user: '', setUser: () => {},
                                    difficulty: 'normal', setDifficulty: () => {},
                                    time: 0, setTime: () => {},
                                    appState: 'in_settings', setAppState: () => {},
                                    win: false, setWin: () => {},
                                    boardState: '----------------------------------------------------------------------------------------------------', setBoardState: () => {}});


export function GameContextProvider({ children }) {
    const [user, setUser] = useState('');
    const [difficulty, setDifficulty] = useState('normal');
    const [time, setTime] = useState(0);
    const [win, setWin] = useState(false);
    const [appState, setAppState] = useState('in_settings')
    const [boardState, setBoardState] = useState('----------------------------------------------------------------------------------------------------')


    return (
        <GameContext.Provider value={{ user, setUser,
                                        difficulty, setDifficulty,
                                        time, setTime,
                                        win, setWin,
                                        appState, setAppState,
                                        boardState, setBoardState}}>
            {children}
        </GameContext.Provider>
    );
    }

export default GameContext
