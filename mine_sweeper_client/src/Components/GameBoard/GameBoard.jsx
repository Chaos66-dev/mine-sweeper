import { useContext, useEffect } from 'react'
import GameContext from '../../Context/GameContext'
import './GameBoard.css'
import Tile from '../Tile/Tile.jsx'
import Board from '../../Classes/Board.js'

function GameBoard() {
    const { board, setBoard } = useContext(GameContext)
    const { difficulty } = useContext(GameContext)

    function initializeBombs() {
        let locations = []
        for (let i = 0; i < 10; i++) {
            locations.push(Math.floor(Math.random() * 100))
        }

        const newBoard = new Board(board.l, board.w)
        for(let loc of locations) {
            const rIdx2 = Math.floor(loc / board.l);
            const cIdx = loc % board.w;

            newBoard.board[rIdx2][cIdx].value = ' X ';
        }
        setBoard(newBoard)
    }

    useEffect(() => {
        if (difficulty == 'normal') {
            setBoard(new Board(10, 10))
        }
        initializeBombs()
    }, [])

    return (
    <>
    <table>
        <tbody>
        {board.board.map((row, rowIndex) => (
            <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex} className='tile'>
                {/* {cell} */}
                <Tile cell={cell}/>
                </td>
            ))}
            </tr>
        ))}
        </tbody>
    </table>
    </>
    )
}

export default GameBoard