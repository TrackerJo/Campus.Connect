import {  ConflictDisplayTileProps } from "../constants"
import "./Conflict_Display_Tile.css"


function ConflictDisplayTile({conflictResponseDate, actor} :ConflictDisplayTileProps){
    return (
        <div className={"ConflictDisplayTile "} id={"conflict-display-tile-" + actor.userId}>
            <div className="header">
                <div className="CharacterNameDiv">
                    <label htmlFor="Actor">Actor: {actor.name}</label>
                    <br />
                    <label htmlFor="Actor">Date: {conflictResponseDate.date.toDateString()}</label>
                    <br />
                    {
                        conflictResponseDate.canAttend ? <label htmlFor="Actor">{conflictResponseDate.from!.toLocaleTimeString()} - {conflictResponseDate.to!.toLocaleTimeString()}</label> : 
                        <label htmlFor="Actor">Can't Attend</label>
                    }

                 </div>
                    

              
                
            </div>
            
           
            
       
        </div>
    )
}

export default ConflictDisplayTile