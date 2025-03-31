import { useEffect, useContext } from 'react'
import GameContext from '../../Context/GameContext'

function Timer() {
    const {time, setTime} = useContext(GameContext)


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <>
            <div>Time: {time} s</div>
        </>
    )
}

export default Timer