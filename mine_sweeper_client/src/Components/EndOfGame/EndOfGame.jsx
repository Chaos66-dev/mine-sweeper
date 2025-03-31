import { useContext } from 'react'
import GameContext from '../../Context/GameContext.jsx'

function EndOfGame() {
    const { time, win } = useContext(GameContext)

    return (
        <>
            <div className="this-score">
                {win ? `You won with a score of ${time} seconds`
                    : `You blew up lol`}
            </div>
            <div className="play-again">

            </div>
            <div className="my-scores">

            </div>
            <div className="high-scores">

            </div>
        </>
    )
}

export default EndOfGame