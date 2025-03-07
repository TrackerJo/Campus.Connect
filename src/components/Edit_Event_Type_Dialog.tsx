import {  useEffect, useState } from "react";
import {  EditEventTypeDialogProps, EventType, hexToColor } from "../constants";

import "./Edit_Event_Type_Dialog.css"

function EditEventTypeDialog({editEventType, close, dialogRef, eventTypes, eventType}: EditEventTypeDialogProps){
    const [name, setName] = useState<string>("")
    const [color, setColor] = useState<string>("#000000")
    const [editting, setEditting] = useState<boolean>(false)
    function rgbaToHex(r, g, b, a) {
        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
    }
    useEffect(() => {
        if(eventType){
            setName(eventType.name)
            setColor(rgbaToHex(eventType.color.red, eventType.color.green, eventType.color.blue, eventType.color.alpha))

        }
    }, [eventType])

    return (
        <dialog ref={dialogRef}>
            <h2>Edit Event Type</h2>
            <div className="event-type-info">
                <label htmlFor="">Name: </label>
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
                    if(eventTypes.find((e) => e.name == name && e.name != eventType!.name)){ 
                        alert("An event type with that name already exists")
                        return
                    }
                    setEditting(true)
                    await editEventType(EventType.fromBlank(name, hexToColor(color)))
                    setEditting(false)

                }}>
                    Edit Event Type
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

export default EditEventTypeDialog;