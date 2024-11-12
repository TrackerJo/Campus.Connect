import { useState } from "react";
import {  AddRecurringConflictDialogProps, ConflictResponseDate } from "../constants";

import "./Add_Recurring_Conflict_Dialog.css"

function AddRecurringConflictDialog({ dialogRef, close, addConflicts}: AddRecurringConflictDialogProps){
    const [recurringType, setRecurringType] = useState<"daily" | "weekly" | "biweekly">("daily")
    const [startDate, setStartDate] = useState<Date>(new Date())
    const [endDate, setEndDate] = useState<Date>(new Date())
    const [startTime, setStartTime] = useState<Date>(new Date())
    const [endTime, setEndTime] = useState<Date>(new Date())
    const [note, setNote] = useState<string>("")
    const [repeatDays, setRepeatDays] = useState<number[]>([])
    const [excludeWeekends, setExcludeWeekends] = useState<boolean>(false)
    return (
        <dialog ref={dialogRef} className="AddRecurringConflictDialog">
            <h2>Add Recurring Conflict</h2>
            <label htmlFor="">Note: Only use this if you can still attend part of the rehersal!</label>
            <div className="conflict-times">
                <label htmlFor="">Recurring Type: </label>
                <select name="recurring-type" id="recurring-type" value={recurringType} onChange={(e) => {
                    setRecurringType(e.target.value as "daily" | "weekly" | "biweekly")
                }}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Every other week</option>
                </select>
                {recurringType == "daily" && <>
                <br />
                <label htmlFor="">Exclude weekends: </label>
                <label className="custom-checkbox">
                    <input type="checkbox" id="ensemble" checked={excludeWeekends} onChange={(e) => setExcludeWeekends(e.target.checked)} />
                    <span className="checkmark"></span>
                </label>
               
                </>}
                {(recurringType == "weekly" || recurringType == "biweekly") && <>
                <br />
                <label htmlFor="">Days of the week: </label>
                <div className="repeat-days">
                    <div className={"day-of-week noselect " + (repeatDays.includes(0) ? "day-chosen" : "")} onClick={() => {
                            if(repeatDays.includes(0)){
                                setRepeatDays(repeatDays.filter((day) => day != 0))
                                return
                            }
                            setRepeatDays([...repeatDays, 0])
                    }}>
                            <label htmlFor="" >Sun</label>
                </div>
                   <div className={"day-of-week noselect " + (repeatDays.includes(1) ? "day-chosen" : "")} onClick={() => {
                          if(repeatDays.includes(1)){
                            setRepeatDays(repeatDays.filter((day) => day != 1))
                            return
                          }
                          setRepeatDays([...repeatDays, 1])
                   }}>
                        <label htmlFor="" >Mon</label>
                   </div>
                   <div className={"day-of-week noselect " + (repeatDays.includes(2) ? "day-chosen" : "")} onClick={() => {
                          if(repeatDays.includes(2)){
                            setRepeatDays(repeatDays.filter((day) => day != 2))
                            return
                          }
                          setRepeatDays([...repeatDays, 2])
                   }}>
                        <label htmlFor="">Tue</label>
                   </div>
                    <div className={"day-of-week noselect " + (repeatDays.includes(3) ? "day-chosen" : "")} onClick={() => {
                          if(repeatDays.includes(3)){
                            setRepeatDays(repeatDays.filter((day) => day != 3))
                            return
                          }
                          setRepeatDays([...repeatDays, 3])
                   }}>
                        <label htmlFor="" >Wed</label>
                    </div>
                    <div className={"day-of-week noselect " + (repeatDays.includes(4) ? "day-chosen" : "")} onClick={() => {
                          if(repeatDays.includes(4)){
                            setRepeatDays(repeatDays.filter((day) => day != 4))
                            return
                          }
                          setRepeatDays([...repeatDays, 4])
                   }}>
                        <label htmlFor="" >Thu</label>
                    </div>
                    <div className={"day-of-week noselect " + (repeatDays.includes(5) ? "day-chosen" : "")} onClick={() => {
                          if(repeatDays.includes(5)){
                            setRepeatDays(repeatDays.filter((day) => day != 5))
                            return
                          }
                          setRepeatDays([...repeatDays, 5])
                   }}>
                        <label htmlFor="" >Fri</label>
                    </div>
                    <div className={"day-of-week noselect " + (repeatDays.includes(6) ? "day-chosen" : "")} onClick={() => {
                          if(repeatDays.includes(6)){
                            setRepeatDays(repeatDays.filter((day) => day != 6))
                            return
                          }
                          setRepeatDays([...repeatDays, 6])
                   }}>
                        <label htmlFor="">Sat</label>
                    </div>
                   
                </div>
                </>
                }
                <br />
                <label htmlFor="">Start Date: </label>
                <input type="date" value={startDate.toISOString().slice(0, 10)} onChange={(e) => {
                    console.log(e.target.value)
                    const cdate = new Date(e.target.value)
                    cdate.setHours(0, 0, 0, 0)
                    cdate.setDate(cdate.getDate() + 1)
                    setStartDate(cdate)
                }}/>
                <br />
                <label htmlFor="">End Date: </label>
                <input type="date" value={endDate.toISOString().slice(0, 10)} onChange={(e) => {
                    console.log(e.target.value)
                    const cdate = new Date(e.target.value)
                    cdate.setHours(0, 0, 0, 0)
                    cdate.setDate(cdate.getDate() + 1)
                    setEndDate(cdate)
                }}/>
                <br />
                <label htmlFor="">Start Time: </label>
                <input type="time" value={startTime.toTimeString().slice(0, 5)} onChange={(e) => {
                    const cdate = new Date()
                    const time = e.target.value.split(':')
                    cdate.setHours(parseInt(time[0]), parseInt(time[1]), 0, 0)
                    setStartTime(cdate)
                }}/>
                <br />
                <label htmlFor="">End Time: </label>
                <input type="time" value={endTime.toTimeString().slice(0, 5)} onChange={(e) => {
                    const cdate = new Date()
                    const time = e.target.value.split(':')
                    cdate.setHours(parseInt(time[0]), parseInt(time[1]), 0, 0)
                    setEndTime(cdate)
                }}/>
                <br />
                <label htmlFor="">Note (Optional): </label>
                <input type="text" value={note} onChange={(e) => {
                    setNote(e.target.value)
                }}/>
            
                <button className="ActionBtn" onClick={() => {
                    const conflictResponses: ConflictResponseDate[] = []
                    const currentDate = new Date(startDate)
                    currentDate.setHours(0, 0, 0, 0)
                    console.log("Start Date")
                    console.log(currentDate)
                   
                    console.log("End Date")
                    console.log(endDate)
                    endDate.setHours(0, 0, 0, 0)
                    console.log("End Date Changed")
                    console.log(endDate)

                    let biCount = 0
                    while (currentDate <= endDate) {
                        console.log(currentDate)
                        if(recurringType == "daily"){
                            conflictResponses.push(ConflictResponseDate.fromBlank(new Date(currentDate), startTime, endTime, true, note))
                            
                        } else if(recurringType == "weekly"){
                            if(repeatDays.includes(currentDate.getDay())){
                                conflictResponses.push(ConflictResponseDate.fromBlank(new Date(currentDate), startTime, endTime, true, note))
                            }

                        } else if(recurringType == "biweekly"){
                            if(biCount % 2 == 0){
                                if(repeatDays.includes(currentDate.getDay())){
                                    conflictResponses.push(ConflictResponseDate.fromBlank(new Date(currentDate), startTime, endTime, true, note))
                                }
                            }
                            biCount++
                        }


                        currentDate.setDate(currentDate.getDate() + 1)
                        if(excludeWeekends) {
                            while (currentDate.getDay() == 0 || currentDate.getDay() == 6) {
                                currentDate.setDate(currentDate.getDate() + 1)
                            }
                        }
                        

                    }
                    console.log(conflictResponses)
                    addConflicts(conflictResponses)

                }}>
                    Add Conflicts
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

export default AddRecurringConflictDialog;