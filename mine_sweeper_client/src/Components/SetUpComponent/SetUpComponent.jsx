import { useContext } from 'react'
import GameContext from '../../Context/GameContext'
import './SetUpComponent.css'

function SetUpComponent() {
    const {user, setUser,
        difficulty, setDifficulty,
        inSettings, setInSettings} = useContext(GameContext)

    function handleSaveSettings() {
        // save settings to local storage?
    }

    return (
        <>
            {/* need to set a user and difficulty */}
            <div className="set-up-wrapper">
                <div className="settings">
                    <input type="text"
                            name="set-user"
                            id="set-user"
                            placeholder="Enter User..."
                            value={user}
                            onChange={(event) => setUser(event.target.value)}
                            />
                    <select name="difficulty"
                            id="difficulty"
                            value={difficulty}
                            onChange={(event) => setDifficulty(event.target.value)}>
                        <option value="easy">Easy</option>
                        <option value="normal">Normal (Default)</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className="play">
                    <button type="submit"
                            onClick={() => setInSettings(false)}
                    >
                        Play
                    </button>
                </div>
            </div>
        </>
    )
}

export default SetUpComponent