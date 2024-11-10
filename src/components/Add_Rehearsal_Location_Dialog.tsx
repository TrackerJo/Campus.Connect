import { useEffect, useState } from "react";
import {  AddRehearsalLocationDialogProps, hexToInt, TheaterLocation } from "../constants";

import "./Add_Rehearsal_Location_Dialog.css"

function AddRehearsalLocationDialog({addRehearsalLocation, close, dialogRef}: AddRehearsalLocationDialogProps){
    const [name, setName] = useState<string>("")
    const [color, setColor] = useState<string>("#000000")

    return (
        <dialog ref={dialogRef}>
            <h2>Add Rehearsal Location</h2>
            <div className="location-info">
                <label htmlFor="">Name: </label>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                } }/>
                <br />
                <label htmlFor="">Color: </label>
                <input type="color" value={color} onChange={(e) => {
                    setColor(e.target.value)
                } }/>
                <br />
                <button className="ActionBtn" onClick={() => {
                    addRehearsalLocation(TheaterLocation.fromBlank(name, hexToInt(color)))

                }}>
                    Add Rehearsal Location
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

export default AddRehearsalLocationDialog;