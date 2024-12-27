
import {  ConfirmCreateScheduleDialogProps } from "../constants";

import "./Confirm_Create_Schedule_Dialog.css"

function ConfirmCreateScheduleDialog({close, confirmed, dialogRef}: ConfirmCreateScheduleDialogProps){
    

    return (
        <dialog ref={dialogRef} >
            <div className="ConfirmCreateScheduleDialog">
                <h2>Confirm Creating Schedule</h2>
                <label htmlFor="">Once you start to create the schedule, you will not be able to edit the show template. Do you wish to continue?</label>
                <button className="ActionBtn" onClick={() => {
                confirmed()
            }
            }>
                Yes
            </button>
            <button className="ActionBtn" onClick={() => {
                close()
            }
            }>
                No
            </button>
            


            </div>
            
            
        </dialog>
    );
}

export default ConfirmCreateScheduleDialog;