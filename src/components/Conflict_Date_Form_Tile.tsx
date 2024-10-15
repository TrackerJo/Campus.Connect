import { useRef } from "react"
import { ConflictDateFormTileProps, ConflictResponseDate } from "../constants"
import AddConflictDialog from "./Add_Conflict_Dialog"
import "./Conflict_Date_Form_Tile.css"


function ConflictDateFormTile({conflict, conflictResponseDate, setConflict} :ConflictDateFormTileProps){
    const dialogRef = useRef<HTMLDialogElement>(null)

    return (
        <div className={"ConflictDateFormTile"} id={"conflict-date-form-tile-" + conflict.date.date.toISOString()}>
            <div className="header">
                <div className="ConflictDateFormNameDiv">
                    <label htmlFor="Character">Date: {conflict.date.date.toDateString()}</label>
                    
                    <br />
                    <label htmlFor="Actor">From: {conflict.date.from.toLocaleTimeString()} </label>
                    
                    <br />
                    <label htmlFor="Actor">To: {conflict.date.to.toLocaleTimeString()}</label>
                   
                    <br />
                   {conflict.moreInfo != "" && <label htmlFor="Character">More Info: {conflict.moreInfo}</label>}
                    
                 </div>
                 
                    

               
                
            </div>
            <div>
                <label htmlFor="">Can attend rehersal: </label>
                <input type="checkbox" checked={conflictResponseDate?.canAttend} onChange={(e) => {
                    setConflict(ConflictResponseDate.fromBlank(conflict.date.date,null,null, e.target.checked))
                
                }}/>
            </div>

           {conflictResponseDate?.from && <> 
           <br /><div>

                <label htmlFor="">Conflict:</label>
                <br />
                <label htmlFor="">From: {conflictResponseDate.from.toLocaleTimeString()}</label>
                <br />
                <label htmlFor="">To: {conflictResponseDate.to!.toLocaleTimeString()}</label>

            </div>
            <br /></>}
            {conflictResponseDate?.canAttend && <button className="ActionBtn" onClick={() => {
                dialogRef.current?.showModal()
            }}>{conflictResponseDate?.from ? "Edit Conflict" : "Add Conflict"}</button>}
            
           
            <AddConflictDialog minTime={conflict.date.from} maxTime={conflict.date.to} setConflict={(conflictRes) => {
                setConflict(ConflictResponseDate.fromBlank(conflict.date.date,conflictRes.from, conflictRes.to, true))
                dialogRef.current?.close()
            }} date={conflict.date.date} dialogRef={dialogRef} close={() => {
                dialogRef.current?.close()
            }}/>
       
        </div>
    )
}

export default ConflictDateFormTile