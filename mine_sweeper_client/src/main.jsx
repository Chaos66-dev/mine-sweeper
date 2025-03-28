import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App/App.jsx'
import { GameContextProvider } from './Context/GameContext.jsx'

createRoot(document.getElementById('root')).render(
    <GameContextProvider>
        <App />
    </GameContextProvider>
)
