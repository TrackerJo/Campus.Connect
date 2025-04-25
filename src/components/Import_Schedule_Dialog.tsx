import {  useRef, useState } from "react";
import {  ActivityEvent, ActivityMember, EventDate, ImportScheduleDialogProps } from "../constants";

import "./Import_Schedule_Dialog.css"
import MinusIcon from "../assets/minus.png"
import ImportEventTile from "./Import_Event_Tile";

function ImportScheduleDialog({close, dialogRef, activity, addEvents}: ImportScheduleDialogProps){


    const [editting, setEditting] = useState<boolean>(false)
    const [file, setFile] = useState<File | null>(null)
    const [events, setEvents] = useState<ActivityEvent[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    
    function csvToJSON(csv){

        const lines = csv.split("\n");
      
        const result = [];
      
        // NOTE: If your columns contain commas in their values, you'll need
        // to deal with those before doing the next step 
        // (you might convert them to &&& or something, then covert them back later)
        // jsfiddle showing the issue https://jsfiddle.net/
        const headers=lines[0].split(",");
      
        for(let i=1;i<lines.length;i++){
      
            const obj = {};
            const currentline=lines[i].split(",");
      
            for(let j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
      
            result.push(obj);
      
        }
      
        //return result; //JavaScript object
        return JSON.stringify(result); //JSON
      }

      function jsonToEvents(json){
        const events = JSON.parse(json)
        const activityEvents: ActivityEvent[] = []
        for(let i = 0; i < events.length; i++){
            const event = events[i]
            if(event["Added to Campus Connect"]?.toLowerCase() == "yes"){
                continue
            }
            if(event["Date"] == ""){
                continue;
            }
            const date = new Date(event.Date)
            if(date.getFullYear() == 2001){
                date.setFullYear(new Date().getFullYear())
            }
            const from = new Date(date.toDateString() + " " + event.Start)
            const to = new Date(date.toDateString() + " " + event.End)
            const eventDate = EventDate.fromBlank(date, from, to)

            const name = event.Name
            let location = event.Location
            if(location == "default"){
                location = activity.defaultLocation
            } else {
                location = activity.locations.find((l) => l.name == location)
            }            
            const eventType = activity.eventTypes.find((e) => e.name == event["Event Type"])!

            const info = event["Extra Info"]
            const generalTarget = event["Invite Type"]
            const groupTargets = [];
            const groupNames = [];
            const targets: ActivityMember[] = [];
            if(generalTarget == "groups"){
                const groups = event["Custom/Group Targets"].split(",")
                for(let i = 0; i < groups.length; i++){
                    const group = activity.groups.find((g) => g.groupName == groups[i].trim())
                    if(group){
                        groupTargets.push(group)
                        groupNames.push(group.groupName)
                        group.groupMembers.forEach((m) => {
                            if(!targets.find((t) => t.userId == m.userId)){
                                targets.push(m)
                            }
                        })
                    }
                }

            } else if (generalTarget == "custom"){
                const members = event["Custom/Group Targets"].split(", ")
                for(let i = 0; i < members.length; i++){
                    const student = activity.students.find((m) => m.userId == members[i])
                    if(student){
                        targets.push(student)
                    } else {
                        const parent = activity.parents.find((m) => m.userId == members[i])
                        if(parent){
                            targets.push(parent.toActivityMember())
                        }
                    }
                }
            }


            activityEvents.push(ActivityEvent.fromBlank(name, info, location, eventDate, "activity-event", Date.now(), activity.id, groupNames, targets, generalTarget, eventType, groupTargets, false, "", [], activity.name))
        }
        return activityEvents
    }

    function downloadCSVTemplate() {
        const blob = new Blob([`Date,Start,End,Name,Location,Event Type,Extra Info,Invite Type,Custom/Group Targets,Added to Campus Connect,,,Formatting Rules
,,,,,,,,,,,,Values for Invite Type,,
,,,,,,,,,,,,students,,
,,,,,,,,,,,,parents,,
,,,,,,,,,,,,groups,"Requires that you type group names into Custom/Group Targets column, each name should be separated by a comma",
,,,,,,,,,,,,custom,"Requires that you type members name into Custom/Group Targets column, each name should be separated by a comma",
,,,,,,,,,,,,,,
,,,,,,,,,,,,Values for Location,,
,,,,,,,,,,,,default,Connects to the default location of the activity,
,,,,,,,,,,,,(location name as specified in activity),,
,,,,,,,,,,,,If left blank or the website can't find the location you will be asked to specify when importing,,
,,,,,,,,,,,,,,
,,,,,,,,,,,,Extra Info is optional,,
,,,,,,,,,,,,Date must either be month/day/year or month/day and the current year will be assumed,,
,,,,,,,,,,,,Start and End must be in 12 hour format (i.e. 3:00 PM),,
,,,,,,,,,,,,You can leave Added to Campus Connect blank or put yes if you don't want to import the event,,`], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'ScheduleTemplate.csv';
            a.click();
            window.URL.revokeObjectURL(url);
    }

    return (
        <dialog ref={dialogRef}>
            <div  className="import-schedule-dialog">
            <h2>Import Schedule</h2>
           {events.length == 0 ? <div className="event-type-info">
                <label htmlFor="">CSV File: </label>
                <input type="file" accept=".csv" ref={inputRef}  onChange={(e) => {
                    if(e.target.files){
                        setFile(e.target.files[0])
                    }
                } }/>
               
                {editting ? <div className="center-loader"><div className="loader"></div></div> :<button className="ActionBtn" onClick={async() => {
                   
                    if(file == null){
                        alert("Please select a file")
                        return
                    }
                    setEditting(true)
                    const reader = new FileReader();
                    reader.onload = function(e){
                        const text = e.target!.result
                        const json = csvToJSON(text)
                        const events = jsonToEvents(json)
                        setEvents(events)

                        console.log(json)
                        console.log(events)
                    }
                    reader.readAsText(file)

                    
                    setEditting(false)

                }}>
                    Import Schedule
                </button>}
                <button className="ActionBtn" onClick={downloadCSVTemplate}>
                    Download CSV Template
                </button>

                <button className="ActionBtn" onClick={() => {
                    setFile(null)
                    setEvents([])
                    close()
                    inputRef.current!.value = ""
                }
                }>
                    Close
                </button>
            </div> : <div className="events-view">
                <h3>Events</h3>
                {!editting && <div className="events">
                    {events.map((event, index) => {
                        return <ImportEventTile key={event.id} event={event} activity={activity} edit={(e) => {
                            const newEvents = [...events]
                            newEvents[index] = e
                            setEvents(newEvents)
                        }
                        } remove={() => {
                            const newEvents = [...events]
                            newEvents.splice(index, 1)
                            setEvents(newEvents)
                        }
                        }/>
                    }
                    )}
                </div>}
                {editting ? <div className="center-loader"><div className="loader"></div></div> :<button className="ActionBtn" onClick={async () => {
                    //check if any event types are null
                    for(let i = 0; i < events.length; i++){
                        if(events[i].eventType == null){
                            alert("Please select an event type for all events")

                            return
                        }
                    }
                    //check if any locations are null
                    for(let i = 0; i < events.length; i++){
                        if(events[i].location == null){
                            alert("Please select a location for all events")

                            return
                        }
                    }
                    setEditting(true)

                    await addEvents(events)
                    setEvents([])
                    setFile(null)

                    setEditting(false)
                    close(  )

                }}>
                    Import Schedule
                </button>}
                <button className="ActionBtn" onClick={() => {
                    setFile(null)
                    setEvents([])
                    close()

                    inputRef.current!.value = ""
                }
                }>
                    Close
                </button>
<label htmlFor="" className="hiddenText"> s </label>
            </div>}
          
            </div>
            
            

            
        </dialog>
    );
}

export default ImportScheduleDialog;