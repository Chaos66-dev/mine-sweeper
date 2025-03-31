import { useContext, useEffect, useState } from 'react'
import GameContext from '../../Context/GameContext.jsx'

function EndOfGame() {
    const { time, win, user_id } = useContext(GameContext)
    const { high_scores, setHigh_Scores } = useState([])
    const [user_high_scores, setUser_High_Scores] = useState([])

    useEffect(() => {
        async function queryUserScores() {
            const res = await fetch(`http://localhost:4000/scores?user_id=${encodeURIComponent(user_id)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            setUser_High_Scores(data)
        }
        queryUserScores()
    }, [])

    return (
        <>
            <div className="this-score">
                {win ? `You won with a score of ${time} seconds`
                    : `You blew up lol`}
            </div>
            <div className="play-again">

            </div>
            <div className="my-scores">
                {user_high_scores?.map((score) => {
                    return (
                        <div>
                            {score.time}
                            {score.difficulty}
                            {score.user_id}
                        </div>
                    )
                })}
            </div>
            <div className="high-scores">

            </div>
        </>
    )
}

export default EndOfGame