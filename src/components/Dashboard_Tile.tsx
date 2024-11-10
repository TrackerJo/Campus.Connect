

import { DashboardTileProps } from '../constants'
import './Dashboard_Tile.css'

function DashboardTile({title, description, onClick}:DashboardTileProps) {
    return (
        <div className='tile' onClick={onClick}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default DashboardTile