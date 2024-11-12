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
                    <label htmlFor="Actor">From: {conflict.date.from.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </label>
                    
                    <br />
                    <label htmlFor="Actor">To: {conflict.date.to.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</label>
                   
                    <br />
                   {conflict.moreInfo != "" && <label htmlFor="Character">More Info: {conflict.moreInfo}</label>}
                    
                 </div>
                 
                    

               
                
            </div>
            <div className="can-attend-div">
                <label htmlFor="can-attend-cbox">Can attend rehersal: </label>
                <div className="custom-checkbox" onClick={() => {
                    setConflict(ConflictResponseDate.fromBlank(conflict.date.date,null,null, !conflictResponseDate?.canAttend, ""))
                }}>
                    <input type="checkbox" id="ensemble" checked={conflictResponseDate?.canAttend} onChange={(e) => setConflict(ConflictResponseDate.fromBlank(conflict.date.date,null,null, e.target.checked, ""))} />
                    <span className="checkmark"></span>
                </div>
                
            </div>

           {conflictResponseDate?.from && <> 
           <div>

                <label htmlFor="">Conflict:</label>
                <br />
                <label htmlFor="">From: {conflictResponseDate.from.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</label>
                <br />
                <label htmlFor="">To: {conflictResponseDate.to!.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</label>
                {conflictResponseDate.note != "" && <br/>}
                {conflictResponseDate.note != "" && <label htmlFor="">Note: {conflictResponseDate.note}</label>}

            </div>
</>}
            {conflictResponseDate?.canAttend && <button className="ActionBtn" onClick={() => {
                if(conflictResponseDate?.from){
                    setConflict(ConflictResponseDate.fromBlank(conflict.date.date, null, null, true, ""))
                    return
                }
                dialogRef.current?.showModal()
            }}>{conflictResponseDate?.from ? "Remove Conflict" : "Add Conflict"}</button>}
            
           
            <AddConflictDialog minTime={conflict.date.from} maxTime={conflict.date.to} setConflict={(conflictRes) => {
                setConflict(ConflictResponseDate.fromBlank(conflict.date.date,conflictRes.from, conflictRes.to, true, conflictRes.note))
                dialogRef.current?.close()
            }} date={conflict.date.date} dialogRef={dialogRef} close={() => {
                dialogRef.current?.close()
            }}/>
       
        </div>
    )
}

export default ConflictDateFormTile