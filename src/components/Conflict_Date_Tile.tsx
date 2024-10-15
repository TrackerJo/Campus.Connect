import { ConflictDate, ConflictDateTileProps, EventDate } from "../constants"
import "./Conflict_Date_Tile.css"
import TrashIcon from "../assets/trash.png"

function ConflictDateTile({conflict, canDelete, onDelete, setConflict} :ConflictDateTileProps){
    return (
        <div className={"ConflictDateTile"} id={"conflict-date-tile-" + conflict.date.date.toISOString()}>
            <div className="header">
                <div className="ConflictDateNameDiv">
                    <label htmlFor="Character">Date: </label>
                    <input type="date" value={conflict.date.date.toISOString().slice(0, 10)} onChange={(e) => {
                        const newDate = new Date(e.target.value)
                        newDate.setHours(0, 0, 0, 0)
                        setConflict(ConflictDate.fromBlank(EventDate.fromBlank(newDate, conflict.date.from, conflict.date.to), conflict.moreInfo))
                    }}/>
                    <br />
                    <br />
                    <label htmlFor="Actor">From: </label>
                    <input type="time" value={conflict.date.from.toTimeString().slice(0, 5)} onChange={(e) => {
                         console.log(e.target.value)
                         const date = new Date()
                         const time = e.target.value.split(':')
                         date.setHours(parseInt(time[0]), parseInt(time[1]), 0, 0)
                        
                        setConflict(ConflictDate.fromBlank(EventDate.fromBlank(conflict.date.date, date, conflict.date.to), conflict.moreInfo))
                    }}/>
                    <br />
                    <br />
                    <label htmlFor="Actor">To: </label>
                    <input type="time" value={conflict.date.to.toTimeString().slice(0, 5)} onChange={(e) => {
                        console.log(e.target.value)
                        const date = new Date()
                        const time = e.target.value.split(':')
                        date.setHours(parseInt(time[0]), parseInt(time[1]), 0, 0)

                        console.log({date})
                        setConflict(ConflictDate.fromBlank(EventDate.fromBlank(conflict.date.date, conflict.date.from, date), conflict.moreInfo))
                    }}/>
                    <br />
                    <br />
                    <label htmlFor="Character">More Info: </label>
                    <input type="text" value={conflict.moreInfo} onChange={(e) => {
                        setConflict(ConflictDate.fromBlank(EventDate.fromBlank(conflict.date.date, conflict.date.from, conflict.date.to), e.target.value))
                    }}/>
                 </div>
                    

               {canDelete && <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        onDelete()
                    }}/>
                </div>}
                
            </div>
            
           
            
       
        </div>
    )
}

export default ConflictDateTile