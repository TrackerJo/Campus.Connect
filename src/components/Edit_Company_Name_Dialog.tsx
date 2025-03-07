import {  useEffect, useState } from "react";
import {  EditCompanyNameDialogProps } from "../constants";

import "./Edit_Company_Name_Dialog.css"

function EditCompanyNameDialog({editCompanyName, close, dialogRef, companyName}: EditCompanyNameDialogProps){
    const [name, setName] = useState<string>("")

    const [editting, setEditting] = useState<boolean>(false)
   
    useEffect(() => {
        if(companyName){
            setName(companyName)


        }
    }, [companyName])

    return (
        <dialog ref={dialogRef}>
            <h2>Edit Company Name</h2>
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
                    await editCompanyName(name)
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

export default EditCompanyNameDialog;