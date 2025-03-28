import { useState, useContext } from 'react'
import './App.css'
import GameBoard from '../GameBoard/GameBoard.jsx'
import SetUpComponent from '../SetUpComponent/SetUpComponent.jsx'
import GameContext from '../../Context/GameContext.jsx'

function App() {
  const {user, setUser} = useContext(GameContext)
  const {difficulty, setDifficulty} = useContext(GameContext)
  const {inSettings, setInSettings} = useContext(GameContext)
  const {board, setBoard} = useContext(GameContext)

  return (
    <>
      <div className="page-wrapper">
        <div className="header">
          <h1 className="title">
            Welcome to Mine Sweeper
          </h1>
        </div>
        <GameContext.Provider  value={{ user, setUser,
                                        difficulty, setDifficulty,
                                        inSettings, setInSettings,
                                        board, setBoard}}>
          <div className="main">
            {inSettings ?
                <>
                  <SetUpComponent />
                </>
              :
              <>
                <h3>Hello {user}, your difficulty is set to {difficulty}</h3>
                <GameBoard />
              </>
            }
          </div>
        </GameContext.Provider>
      </div>
    </>
  )
}

export default App
