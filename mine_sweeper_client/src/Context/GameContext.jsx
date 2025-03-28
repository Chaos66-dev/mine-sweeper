import { createContext, useState } from 'react'
import Board from '../Classes/Board.js'

const startingBoard = new Board()
const GameContext = createContext({user: '', setUser: () => {},
                                    difficulty: 'normal', setDifficulty: () => {},
                                    time: '00:00', setTime: () => {},
                                    inSettings: true, setInSettings: () => {},
                                    board: startingBoard, setBoard: () => {}});


export function GameContextProvider({ children }) {
    const [user, setUser] = useState('');
    const [difficulty, setDifficulty] = useState('normal');
    const [time, setTime] = useState('00:00');
    const [inSettings, setInSettings] = useState(true)
    const [board, setBoard] = useState(startingBoard)


    return (
        <GameContext.Provider value={{ user, setUser,
                                        difficulty, setDifficulty,
                                        time, setTime,
                                        inSettings, setInSettings,
                                        board, setBoard}}>
            {children}
        </GameContext.Provider>
    );
    }

export default GameContext
