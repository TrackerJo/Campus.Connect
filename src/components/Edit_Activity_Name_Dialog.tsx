import {  useEffect, useState } from "react";
import {  EditActivityNameDialogProps, hexToColor, TheaterLocation } from "../constants";

import "./Edit_Activity_Name_Dialog.css"

function EditActivityNameDialog({editActivityName, close, dialogRef, activityName}: EditActivityNameDialogProps){
    const [name, setName] = useState<string>("")

    const [editting, setEditting] = useState<boolean>(false)
   
    useEffect(() => {
        if(activityName){
            setName(activityName)


        }
    }, [activityName])

    return (
        <dialog ref={dialogRef}>
            <h2>Edit Activity Name</h2>
            <div className="event-type-info">
                <label htmlFor="">Name: </label>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                } }/>
               
                <br />
                {editting ? <div className="loader"></div> :<button className="ActionBtn" onClick={async() => {
                    if(name == ""){
                        alert("Please fill out all fields")
                        return
                    }
                   
                    setEditting(true)
                    await editActivityName(name)
                    setEditting(false)

                }}>
                    Save
                </button>}

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

export default EditActivityNameDialog;