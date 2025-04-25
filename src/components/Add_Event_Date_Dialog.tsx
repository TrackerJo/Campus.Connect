import { useEffect, useState } from "react";
import {  AddEventDateDialogProps, EventDate } from "../constants";

import "./Add_Event_Date_Dialog.css"

function AddEventDateDialog({ dialogRef, close, addDate, eventDate}: AddEventDateDialogProps){

    const [date, setStartDate] = useState<Date>(new Date())

    const [startTime, setStartTime] = useState<Date>(new Date())
    const [endTime, setEndTime] = useState<Date>(new Date())
    const [startTimeString, setStartTimeString] = useState<string>("")
    const [endTimeString, setEndTimeString] = useState<string>("")

    const handleStartTimeChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const timeString = val.target.value; // "HH:mm"
        const [hours, minutes] = timeString.split(':').map(Number);
        const newDate = new Date(date!);
        newDate.setHours(hours, minutes, 0, 0);
        setStartTime(newDate);
        setStartTimeString(newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));

    };

    const handleEndTimeChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const timeString = val.target.value; // "HH:mm"
        const [hours, minutes] = timeString.split(':').map(Number);
        const newDate = new Date(date!);
        newDate.setHours(hours, minutes, 0, 0);
        setEndTime(newDate);
        setEndTimeString(newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));

    };

    useEffect(() => {
        if(eventDate){
            setStartDate(eventDate.date)
            setStartTime(eventDate.from)
            setEndTime(eventDate.to)
            setStartTimeString(eventDate.from.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
            setEndTimeString(eventDate.to.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))

        }
    }, [eventDate])
    
    return (
        <dialog ref={dialogRef} className="AddEventDateDialog">
            <h2>Add Event Date</h2>

            <label htmlFor="">Date: </label>
            <input type="date" value={date?.toISOString().split('T')[0]} onChange={(val) => {
                const date = new Date(val.target.value)
                if(date == "Invalid Date"){
                    setStartDate(new Date())
                    return;
                }
                date.setHours(0, 0, 0, 0)
                date.setDate(date.getDate() + 1)
                setStartDate(date)
                //change start time date and end time date
                const newStartTime = new Date(date)
                newStartTime.setHours(startTime!.getHours(), startTime!.getMinutes(), 0, 0)
                setStartTime(newStartTime)
                setStartTimeString(newStartTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                const newEndTime = new Date(date)
                newEndTime.setHours(endTime!.getHours(), endTime!.getMinutes(), 0, 0)
                setEndTime(newEndTime)
                setEndTimeString(newEndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))



               
            }}/>
            <br />

            <label htmlFor="StartTime">Start Time: </label>
            <input type="time" value={startTimeString} onChange={handleStartTimeChange}/>    
            <br />
            <label htmlFor="EndTime">End Time: </label>
            <input type="time" value={endTimeString} onChange={handleEndTimeChange}/>
            <div className="actions">
           
                <button className="ActionBtn" onClick={() => {
                    close()
                }
                }>
                    Close
                </button>
                <button className="ActionBtn" onClick={() => {
                    addDate(EventDate.fromBlank(date, startTime, endTime))

                }}>
                    Add Date
                </button>

            </div>
               

          
            

            
        </dialog>
    );
}

export default AddEventDateDialog;