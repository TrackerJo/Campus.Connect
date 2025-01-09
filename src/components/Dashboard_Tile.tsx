

import { DashboardTileProps } from '../constants'
import './Dashboard_Tile.css'

function DashboardTile({title, description, onClick,header}:DashboardTileProps) {
    return (
        <div className='dashboard-tile' onClick={onClick}>
            {header && <h2>{header}</h2>}
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default DashboardTile