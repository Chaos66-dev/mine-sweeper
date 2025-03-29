import { useContext } from 'react'

function Tile({value}) {

    return (
        <>
        <div className="tile-wrapper">
            {value}
        </div>
        </>
    )
}

export default Tile