import { useEffect, useState } from "react";
import {  AddConflictDialogProps, ConflictResponseDate } from "../constants";

import "./Add_Conflict_Dialog.css"

function AddConflictDialog({minTime, maxTime, setConflict, dialogRef, close, date}: AddConflictDialogProps){
    const [conflictResponseDate, setConflictResponseDate] = useState<ConflictResponseDate >(ConflictResponseDate.fromBlank(date, minTime, maxTime, true))

    useEffect(() => {
        setConflictResponseDate(ConflictResponseDate.fromBlank(date, minTime, maxTime, true))
    }, [minTime, maxTime, date])

    return (
        <dialog ref={dialogRef}>
            <h2>Add Conflict</h2>
            <div className="conflict-times">
            <label htmlFor="">From: </label>
            <input type="time" value={conflictResponseDate.from!.toTimeString().slice(0, 5)} onChange={(e) => {
                const cdate = new Date()
                const time = e.target.value.split(':')
                cdate.setHours(parseInt(time[0]), parseInt(time[1]), 0, 0)
                setConflictResponseDate(ConflictResponseDate.fromBlank(date, cdate, conflictResponseDate!.to, true))
            } }/>
            <br />

            <label htmlFor="">To: </label>
            <input type="time" value={conflictResponseDate.to!.toTimeString().slice(0, 5)} onChange={(e) => {
                const cdate = new Date()
                const time = e.target.value.split(':')
                cdate.setHours(parseInt(time[0]), parseInt(time[1]), 0, 0)
                setConflictResponseDate(ConflictResponseDate.fromBlank(date, conflictResponseDate!.from, cdate, true))
            } }/>
            <br />
            <button className="ActionBtn" onClick={() => {
                setConflict(conflictResponseDate)

            }}>
                Add Conflict
            </button>

            <button className="ActionBtn" onClick={() => {
                close()
            }
            }>
                Close
            </button>
            </div>
          
            

            
        </dialog>
    );
}

export default AddConflictDialog;