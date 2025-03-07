
import { useState } from "react";
import {  ConfirmApplyDialogProps } from "../constants";

import "./Confirm_Apply_Dialog.css"

function ConfirmApplyDialog({close, dialogRef, confirmed}: ConfirmApplyDialogProps){
    const [isLoading, setIsLoading] = useState(false)

    return (
        <dialog ref={dialogRef} >
            <div className="ConfirmApplyDialog">
                <h2>Did you apply?</h2>
                
                <br />
           {isLoading ? <div className="loader"></div> : <button className="ActionBtn" onClick={async () => {
                setIsLoading(true)
                await confirmed()
                setIsLoading(false)

            }
            }>
                Yes
            </button>}
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

export default ConfirmApplyDialog;