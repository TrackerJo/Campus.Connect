import {  useState } from "react";
import {  ActivityEvent, ExportScheduleDialogProps, EventDate, } from "../constants";

import "./Export_Schedule_Dialog.css"

function ExportScheduleDialog({close, dialogRef, events, activity}: ExportScheduleDialogProps){
    const [name, setName] = useState<string>("schedule")
    const [moveForward, setMoveForward] = useState<boolean>(false)
    const [editting, setEditting] = useState<boolean>(false)

    function jsonToCsv(json) {
                const headers = Object.keys(json[0]);
                const rows = json.map(obj => headers.map(header => obj[header]).join(','));
                return [headers.join(','), ...rows].join('\n');
            }
        const convertToCSV = () => {
            const json = [];
            if(moveForward){
                events = updateActivityEventsDates(events)
            }

            for (let i = 0; i < events.length; i++) {
                const event = events[i];
                
                json.push({
                    "Date": event.date.date.getMonth() + 1 + "/" + event.date.date.getDate() + "/" + event.date.date.getFullYear().toString().slice(2),
                    "Start": event.date.from.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }),
                    "End": event.date.to.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }),
                    "Name": event.name,
                    "Location": event.location.name == activity.defaultLocation.name ? "default" : event.location.name,
                    "Event Type": event.eventType.name,
                    "Extra Info": event.info,
                    "Invite Type": event.generalTarget,
                    "Custom/Group Targets": event.groupTargets.map((g) => g.groupName).join(", "),
                    "Added to Campus Connect": ""
                })
                
            }
            //Sort JSON by date
            json.sort((a, b) => {
                if(a.Date == b.Date){
                    if(a.Start == b.Start){
                        if(a.End > b.End){
                            return 1
                        } 
                        else{
                            return -1
                        }
                    } else
                    if(a.Start > b.Start){
                        return 1
                    } else{
                        return -1
                    }
                }
                if (a.Date > b.Date) {
                    return 1
                } else {
                    return -1
                }
            })
            const csv = jsonToCsv(json)
            //create a blob
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = name + '.csv';
            a.click();
            window.URL.revokeObjectURL(url);
    
            
        }
    
        function getNthWeekdayOfMonth(year: number, month: number, weekday: number, occurrence: number): Date {
            const date = new Date(year, month, 1);
            let count = 0;
        
            while (date.getMonth() === month) {
                if (date.getDay() === weekday) {
                    count++;
                    if (count === occurrence) return date;
                }
                date.setDate(date.getDate() + 1);
            }
        
            // If occurrence does not exist, move to the next month
            return getNthWeekdayOfMonth(year, month + 1, weekday, 1);
        }
        
        function addOneYearKeepingWeekdayAndOccurrence(date: Date): Date {
            const targetWeekday = date.getDay();
            const year = date.getFullYear() + 1;
            const month = date.getMonth();
            
            let occurrence = 1;
            const tempDate = new Date(date);
            tempDate.setDate(1);
            while (tempDate.getMonth() === month) {
                if (tempDate.getDay() === targetWeekday) {
                    if (tempDate.getDate() === date.getDate()) break;
                    occurrence++;
                }
                tempDate.setDate(tempDate.getDate() + 1);
            }
            
            return getNthWeekdayOfMonth(year, month, targetWeekday, occurrence);
        }
        
         function updateActivityEventsDates(events: (ActivityEvent)[]): (ActivityEvent )[] {
            return events.map(event => {
                const updatedDateDate= addOneYearKeepingWeekdayAndOccurrence(event.date.date);
    
                const updatedDate = EventDate.fromBlank(updatedDateDate, event.date.from, event.date.to);
                
                return ActivityEvent.fromBlank(
                    event.name,
                    event.info,
                    event.location,
                    updatedDate,
                    event.type,
                    event.lastUpdated,
                    event.activityId,
                    event.groupNames,
                    event.targets,
                    event.generalTarget,
                    event.eventType,
                    event.groupTargets,
                    event.hasSchoolEvent,
                    event.schoolEventId,
                    event.conflicts,
                    event.activityName
                );
            });
        }

    return (
        <dialog ref={dialogRef}>
            <h2>Export Schedule</h2>
            <div className="event-type-info">
                <label htmlFor="">Name: </label>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                } }/>
                <br />
                 <label htmlFor="">Move Schedule Forward a Year? </label>
                                            <label className="custom-checkbox">
                
                                                <input type="checkbox" id="ensemble" checked={moveForward} onChange={(e) => {
                                                    setMoveForward(e.target.checked)
                                                }}/>
                                                <span className="checkmark"> </span>
                                            </label>
                <br />
                {editting ? <div className="loader"></div> :<button className="ActionBtn" onClick={async() => {
                    if(name == ""){
                        alert("Please fill out all fields")
                        return
                    }
                    
                    setEditting(true)
                    convertToCSV()
                    setEditting(false)

                }}>
                    Export Schedule
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

export default ExportScheduleDialog;