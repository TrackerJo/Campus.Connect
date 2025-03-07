import {  useEffect, useState } from "react";
import {  EditRehearsalLocationDialogProps, hexToColor, TheaterLocation } from "../constants";

import "./Edit_Rehearsal_Location_Dialog.css"

function EditRehearsalLocationDialog({editRehearsalLocation, close, dialogRef, rehearsalLocations, rehearsalLocation}: EditRehearsalLocationDialogProps){
    const [name, setName] = useState<string>("")
    const [color, setColor] = useState<string>("#000000")
    const [editting, setEditting] = useState<boolean>(false)
    function rgbaToHex(r, g, b, a) {
        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
    }
    useEffect(() => {
        if(rehearsalLocation){
            setName(rehearsalLocation.name)
            setColor(rgbaToHex(rehearsalLocation.color.red, rehearsalLocation.color.green, rehearsalLocation.color.blue, rehearsalLocation.color.alpha))

        }
    }, [rehearsalLocation])

    return (
        <dialog ref={dialogRef}>
            <h2>Edit Rehearsal Location</h2>
            <div className="event-type-info">
                <label htmlFor="">Location: </label>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                } }/>
                <br />
                <label htmlFor="">Color: </label>
                <input type="color" value={color} onChange={(e) => {
                    console.log(e.target.value)
                    setColor(e.target.value)
                } }/>
                <br />
                {editting ? <div className="loader"></div> :<button className="ActionBtn" onClick={async() => {
                    if(name == ""){
                        alert("Please fill out all fields")
                        return
                    }
                    if(rehearsalLocations.find((e) => e.name == name && e.name != rehearsalLocation!.name)){ 
                        alert("A rehearsal location with that name already exists")
                        return
                    }
                    setEditting(true)
                    await editRehearsalLocation(TheaterLocation.fromBlank(name, hexToColor(color)))
                    setEditting(false)

                }}>
                    Edit Rehearsal Location
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

export default EditRehearsalLocationDialog;