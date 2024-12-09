import {  useState } from "react";
import {  AddEventTypeDialogProps, EventType, hexToColor } from "../constants";

import "./Add_Event_Type_Dialog.css"

function AddEventTypeDialog({addEventType, close, dialogRef, eventTypes}: AddEventTypeDialogProps){
    const [name, setName] = useState<string>("")
    const [color, setColor] = useState<string>("#000000")

    return (
        <dialog ref={dialogRef}>
            <h2>Add Event Type</h2>
            <div className="event-type-info">
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
                    if(name == ""){
                        alert("Please fill out all fields")
                        return
                    }
                    if(eventTypes.find((eventType) => eventType.name == name)){
                        alert("Event type with that name already exists")
                        return
                    }
                    addEventType(EventType.fromBlank(name, hexToColor(color)))

                }}>
                    Add Event Type
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

export default AddEventTypeDialog;