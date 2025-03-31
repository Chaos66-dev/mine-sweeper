import { useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from '../../Context/GameContext'
import './GameBoard.css'
import Tile from '../Tile/Tile.jsx'
import Board from '../../Classes/Board.js'
import Timer from '../Timer/Timer.jsx'

function GameBoard() {
    const { boardState, setBoardState, difficulty, user, time, setTime, setWin } = useContext(GameContext);
    const navigate = useNavigate()

    // Use useRef to keep gameBoard persistent across renders
    const gameBoardRef = useRef(new Board(10, 10));

    function handleClick(rowIndex, cellIndex) {
        const gameBoard = gameBoardRef.current; // Access gameBoard from ref
        // console.log(gameBoard);
        gameBoard.handleBoardClick(rowIndex, cellIndex);

        if (gameBoard.game_over) {
            console.log('game over');
        } else {
            console.log('game continues');
        }

        const tmp = gameBoard.outputState();
        setBoardState(tmp);
        // console.log(boardState); // This will now show the updated state after re-render
        // console.log(gameBoard.outputState()); // Ensure this is the updated state
        if (gameBoard.game_over == true) {
            if (gameBoard.win == true) {
                setWin(true)
            } else {
                setWin(false)
            }
            navigate('/gameover')
        }
    }

    useEffect(() => {
        let newGameBoard;

        if (difficulty === 'normal') {
            newGameBoard = new Board(10, 10, 10);
            newGameBoard.initBombs();
            newGameBoard.initNonBombs();
        } else if (difficulty === 'hard') {
            newGameBoard = new Board(15, 15, 22);
            newGameBoard.initBombs();
            newGameBoard.initNonBombs();
        } else if (difficulty === 'easy') {
            newGameBoard = new Board(8, 8, 6);
            newGameBoard.initBombs();
            newGameBoard.initNonBombs();
        } else {
            console.log('Invalid difficulty');
            return;
        }

        // Store the new gameBoard in the ref so it doesn't change on re-renders
        gameBoardRef.current = newGameBoard;
        setBoardState(newGameBoard.outputState());

    }, [difficulty]); // Dependency array now includes 'difficulty', so it runs when difficulty changes

    return (
        <>
            <h3>Hello {user}, your difficulty is set to {difficulty}</h3>
            <Timer />
            <table>
                <tbody>
                    {Array.from({ length: gameBoardRef.current.l }, (_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from({ length: gameBoardRef.current.w }, (_, cellIndex) => {
                                const index = rowIndex * gameBoardRef.current.w + cellIndex;
                                const cellValue = boardState[index];

                                return (
                                    <td key={cellIndex} className="tile" onClick={() => handleClick(rowIndex, cellIndex)}>
                                        <Tile value={cellValue} />
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

// lets start over, i will describe to you the what i want to display and how i intend for it to work. please make suggestions if you think they will be helpful to the overall design of the code. As we go through this process, ask me any clarifying questions you need in order to better understand what I want as well as what is happening in the code.

// What I want to happen: I have an object 'game_board' and a state of 'boardState' which is a string. game_board has a property called 'board' that is a 2d array of instances of the Tile class. The Tile class holds the 'value' of the tile as well



export default GameBoard