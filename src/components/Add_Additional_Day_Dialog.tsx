import { useState } from "react";
import {  AddAdditionalDayDialogProps, ConflictDate, EventDate } from "../constants";

import "./Add_Additional_Day_Dialog.css"

function AddAdditionalDayDialog({dialogRef, close, addDay}: AddAdditionalDayDialogProps){
    const [day, setDay] = useState<Date>()
    const [startTime, setStartTime] = useState<Date>()
    const [endTime, setEndTime] = useState<Date>()
    const [moreInfo, setMoreInfo] = useState<string>("")

    

    return (
        <dialog ref={dialogRef} >
            <div className="AddAdditionalDayDialog">
                <h2>Add Additional Day</h2>
                <label>Date</label>
                <input type='date' onChange={(e) => {
                    const date = new Date(e.target.value)
                    //Add 1 day to the end date
                    date.setDate(date.getDate() + 1)
                    date.setHours(0, 0, 0, 0)
                    setDay(date)
                }}/>
                <br />
                <label>Start Time</label>
                <input type='time' onChange={(e) => {
                    console.log(e.target.value)
                    const date = new Date()
                    const time = e.target.value.split(':')
                    date.setHours(parseInt(time[0]), parseInt(time[1]), 0, 0)
                    setStartTime(date)
                    console.log({date})
                }}/>
                <br />
                <label>End Time</label>
                <input type='time' onChange={(e) => {
                    console.log(e.target.value)
                    const date = new Date()
                    const time = e.target.value.split(':')
                    date.setHours(parseInt(time[0]), parseInt(time[1]), 0, 0)
                    setEndTime(date)
                    console.log({date})
                }}/>
                <h3>More Info</h3>
                <input type="text" className="MoreInfoInput" value={moreInfo} onChange={(e) => {
                    setMoreInfo(e.target.value)
                }}/>
                <br />
                <button className="ActionBtn" onClick={() => {
                    addDay(ConflictDate.fromBlank(EventDate.fromBlank(day!, startTime!, endTime!), moreInfo))

                }}>
                    Add Day
                </button>
                <br />

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

export default AddAdditionalDayDialog;