import "./Simple_Conflict_Response_Date_Display_Tile.css";

import { SimpleConflictResponseDateDisplayTileProps } from "../constants";

function SimpleConflictResponseDisplayTile({conflictResponseDate} :SimpleConflictResponseDateDisplayTileProps){
    return (
        <div className={"SimpleConflictResponseDisplayTile"} id={"simple-conflict-response-display-tile-" + conflictResponseDate.date.toISOString()}>
            <div className="header">
                <div className="CharacterNameDiv">
                    <label htmlFor="Actor">Date: {conflictResponseDate.date.toDateString()}</label>
                    <br />
                    <br />
                    {
                        conflictResponseDate.canAttend ? <label htmlFor="Actor">{conflictResponseDate.from!.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {conflictResponseDate.to!.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</label> : 
                        <label htmlFor="Actor">Can't Attend</label>
                    }
                    {conflictResponseDate.note != "" && <br/>}
                    {conflictResponseDate.note != "" && <br/>}
                    {conflictResponseDate.note != "" && <label htmlFor="Actor">Note: {conflictResponseDate.note}</label>}

                 </div>
                    
            </div>
        </div>
    )
}

export default SimpleConflictResponseDisplayTile