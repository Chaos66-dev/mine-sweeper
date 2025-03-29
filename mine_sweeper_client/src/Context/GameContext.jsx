import { createContext, useState } from 'react'

const GameContext = createContext({user: '', setUser: () => {},
                                    difficulty: 'normal', setDifficulty: () => {},
                                    time: '00:00', setTime: () => {},
                                    inSettings: true, setInSettings: () => {},
                                    boardState: '----------------------------------------------------------------------------------------------------', setBoardState: () => {}});


export function GameContextProvider({ children }) {
    const [user, setUser] = useState('');
    const [difficulty, setDifficulty] = useState('normal');
    const [time, setTime] = useState('00:00');
    const [inSettings, setInSettings] = useState(true)
    const [boardState, setBoardState] = useState('----------------------------------------------------------------------------------------------------')


    return (
        <GameContext.Provider value={{ user, setUser,
                                        difficulty, setDifficulty,
                                        time, setTime,
                                        inSettings, setInSettings,
                                        boardState, setBoardState}}>
            {children}
        </GameContext.Provider>
    );
    }

export default GameContext
