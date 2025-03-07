import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './events.css'
import { Activity, ActivityEvent, ActivityGroup, ActivityMember, addAlpha, CalendarEvent, ConflictResponse, Event, EventDate, EventType, intToHexColor, Location, StudentData, TeacherData, TheaterEvent } from '../../constants'
import { addActivityEvent, deleteActivityEvent, editActivityEvent, getActivity, getActivityEvents, getAllUserEvents, getUserConflictFormResponse, getUserData } from '../../api/db'
import Calendar from '../../components/Calendar'
import { isLoggedIn, logout } from '../../api/auth'
import BackIcon from '../../assets/arrow_backward.png'
import DownloadAppDialog from '../../components/Download_App_Dialog'
import AddEventDateDialog from '../../components/Add_Event_Date_Dialog'
import TrashIcon  from '../../assets/trash.png'
import ExportScheduleDialog from '../../components/Export_Schedule_Dialog'
import ImportScheduleDialog from '../../components/Import_Schedule_Dialog'




function App() {

    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const [events, setEvents] = useState<( ActivityEvent)[]>([])
    const [calendarEvents, setCalendarEvents] = useState<(CalendarEvent)[]>([])
    const [activityId, setActivityId] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [activityGroups, setActivityGroups] = useState<ActivityGroup[]>([])
        const [activity, setActivity] = useState<Activity | null>()
        const [currentView, setCurrentView] = useState<"students" | "parents">("students")

        const [creationState, setCreationState] = useState<"date" | "info" | "multipleEvents">("date")
        const [selectedDate, setSelectedDate] = useState<Date | null>(null)
        const [startTime, setStartTime] = useState<Date | null>(null)
        const [endTime, setEndTime] = useState<Date | null>(null)
    
        const [name, setName] = useState<string>("")
        const [description, setDescription] = useState<string>("")
        const [startTimeString, setStartTimeString] = useState<string>("")
        const [endTimeString, setEndTimeString] = useState<string>("")
        const [selectedLocation, setSelectedLocation] = useState<Location | undefined>(undefined)


        const [members, setMembers] = useState<ActivityMember[]>([])
        const [inviteType, setInviteType] = useState<"students" | "parents" | "groups" | "custom">("students")


        const [hasSchoolEvent, setHasSchoolEvent] = useState<boolean>(false)
        const [schoolEventName, setSchoolEventName] = useState<string>("")
        const [schoolEventDescription, setSchoolEventDescription] = useState<string>("")
        const [schoolEventStartTime, setSchoolEventStartTime] = useState<Date | null>(null)
        const [schoolEventEndTime, setSchoolEventEndTime] = useState<Date | null>(null)
        const [schoolEventId, setSchoolEventId] = useState<string>("")

        const [isEditing, setIsEditing] = useState<boolean>(false)
        const [editEvent, setEditEvent] = useState<ActivityEvent | null>(null)

        const [eventType, setEventType] = useState<EventType | undefined>(undefined)
        const [copiedEvent, setCopiedEvent] = useState<ActivityEvent | undefined>(undefined)
        const [eventDates, setEventDates] = useState<EventDate[]>([])
        const [defaultEventDate, setDefaultEventDate] = useState<EventDate | undefined>(undefined)
        const addEventDateDialogRef = useRef<HTMLDialogElement>(null)
        const exportScheduleDialogRef = useRef<HTMLDialogElement>(null)
        const importScheduleDialogRef = useRef<HTMLDialogElement>(null)
        const [isLoadingAddEvent, setIsLoadingAddEvent] = useState<boolean>(false)

    useEffect(() => {
        isLoggedIn(() => {})

       
        async function fetchActivities() {
        setIsLoading(true)
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if(activityId){
            setActivityId(activityId)
            const fetchedActivity = await getActivity(activityId)
            setActivity(fetchedActivity)
            console.log(fetchedActivity)
            setSelectedLocation(fetchedActivity!.defaultLocation)

        }


            const fetchedEvents = await getActivityEvents(activityId!);

            console.log(fetchedEvents)
            setEvents(fetchedEvents)
            const calendarEventsList: CalendarEvent[] = []
            for(const event of fetchedEvents){
               
               
                console.log(event)
                const startDate: Date = event.date.from
                console.log(event.date.date)
                //Get the month, day, year from event.date.date
                startDate.setDate(event.date.date.getDate())
                startDate.setMonth(event.date.date.getMonth())
                startDate.setFullYear(event.date.date.getFullYear())
                const endDate: Date = event.date.to
                //Get the month, day, year from event.date.date
                endDate.setDate(event.date.date.getDate())
                endDate.setMonth(event.date.date.getMonth())
                endDate.setFullYear(event.date.date.getFullYear())
                console.log(startDate)
                console.log(endDate)
               

                calendarEventsList.push({
                    title: event.name,
                    start: startDate.toISOString(),
                    end: endDate.toISOString(),
                    
                    isAllDay: false,
                    interactive: true,
                    description: event.info,
                    color: event.eventType.color.setAlpha(0.8).toRBGAString(),
                    id: event.id!,
                    location: event.location.name 
                    
                })
            }
            setCalendarEvents(calendarEventsList)
            console.log(fetchedEvents)
            console.log(calendarEventsList)
            // alert("fetchedActivities")
        setIsLoading(false)

        }
        fetchActivities()
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }
    }, [])

    function getEvents(){
        return events
    }

   

    const handleStartTimeChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const timeString = val.target.value; // "HH:mm"
        const [hours, minutes] = timeString.split(':').map(Number);
        const newDate = new Date(selectedDate!);
        newDate.setHours(hours, minutes, 0, 0);
        setStartTime(newDate);
        setStartTimeString(newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));

    };

    const handleEndTimeChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const timeString = val.target.value; // "HH:mm"
        const [hours, minutes] = timeString.split(':').map(Number);
        const newDate = new Date(selectedDate!);
        newDate.setHours(hours, minutes, 0, 0);
        setEndTime(newDate);
        setEndTimeString(newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));

    };


    Date.prototype.addHours = function(h) {
        this.setTime(this.getTime() + (h*60*60*1000));
        return this;
      }

    function customInviteView(){
       //Create a row that holds a button to view students and a button to view parents, so it should be in the same row, shouldn't look like a button
       //Then show the students or parents based on the button clicked
         //If students is clicked, show the students, if parents is clicked, show the parents
         return (
                <div className="custom-invite-view">
                    <button className={currentView == "students" ? "selected" : ""} onClick={() => {
                        setCurrentView("students")
                    }}>Students</button>
                    <button className={currentView == "parents" ? "selected" : ""}onClick={() => {
                        setCurrentView("parents")
                    }}>Parents</button>
                    <div className="current-view">
                        {currentView == "students" ? <div className="students">
                            {activity?.students.map((student, index) => {
                                return <div className="student" key={student.userId}>
                                    <label className="custom-checkbox">
                                        
                                        <input type="checkbox" id="student" checked={members.find((e) => e.userId == student.userId) != undefined} onChange={(e) => {
                                            if(e.target.checked){
                                                setMembers([...members, student])
                                            } else{
                                                setMembers(members.filter((member) => member != student))
                                            }
                                        }}/>
                                        <span className="checkmark"> </span>
                                    </label>
                                    <label htmlFor={student.userId}>{student.name}</label>
                                </div>
                            })}
                        </div> : <div className="parents">
                            {activity?.parents.map((parent, index) => {
                                return <div className="parent" key={parent.userId}>
                                    <label className="custom-checkbox">
                                        
                                        <input type="checkbox" id="parent" onChange={(e) => {
                                            if(e.target.checked){
                                                setMembers([...members, parent])
                                            } else{
                                                setMembers(members.filter((member) => member != parent))
                                            }
                                        }}/>
                                        <span className="checkmark"> </span>
                                    </label>
                                    <label htmlFor={parent.userId}>{parent.name}</label>
                                </div>
                            })}
                        </div>}
                    </div>
                </div>
            )
    }

    function addEventScreen(){
        return (
            <><h2 className='mode'>Enter Event Information</h2>
            <label htmlFor="Name">Name: </label>
            <input type="text" value={name} onChange={(val) => {
                setName(val.target.value)
            }}/>
            <br />
            <label htmlFor="Description">Description: </label>
            <textarea value={description} onChange={(val) => {
                setDescription(val.target.value)
            }}/>
            <br />
            <label htmlFor="">Date: </label>
            <input type="date" value={selectedDate?.toISOString().split('T')[0]} onChange={(val) => {
                const date = new Date(val.target.value)
                date.setHours(0, 0, 0, 0)
                date.setDate(date.getDate() + 1)
                setSelectedDate(date)
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
            <br />
            <label htmlFor="location">Location: </label>
            <select name="location" id="location" onChange={(e) => {
                setSelectedLocation(activity?.locations.find((location) => location.name == e.target.value))
            }}>
                {activity?.locations.map((location, index) => {
                    return <option value={location.name} key={index} selected={selectedLocation?.name == location.name}>{location.name + " (" + location.address + ")"}</option>
                })
                }
            </select>
            
            <br />
            <label htmlFor="eventType">Event Type: </label>
            <select name="eventType" id="event-type" onChange={(e) => {
                setEventType(activity?.eventTypes.find((type) => type.name == e.target.value))
            }}>
                {activity?.eventTypes.map((type, index) => {
                    return <option value={type.name} key={index} selected={eventType?.name == type.name}>{type.name}</option>
                })
                }
            </select>
            <br />
            <label htmlFor="inviteType">Invite Type: </label>
            <select name="inviteType" id="invite-type" onChange={(e) => {
                setInviteType(e.target.value as "students" | "parents" | "groups" | "custom")
            }}>
                <option value="students" selected={inviteType == "students"}>Students</option>
                <option value="parents" selected={inviteType == "parents"}>Parents</option>
                <option value="groups" selected={inviteType == "groups"}>Groups</option>
                <option value="custom" selected={inviteType == "custom"}>Custom</option>
            </select>
            {inviteType == "groups" ? <><br />
            <label htmlFor="groups">Groups: </label>
            <div className="groups">
                {activity!.groups.map((group, index) => {
                    return <div className="group" key={group.groupName}>
                         <label className="custom-checkbox">
                        
                                                        <input type="checkbox" id="ensemble" checked={activityGroups.find((g) => g.groupName == group.groupName) != undefined} onChange={(e) => {
                                                              if(e.target.checked){
                                                                setActivityGroups([...activityGroups, group])
                                                                setMembers([...members, ...group.groupMembers])
                                                            } else{
                                                                setActivityGroups(activityGroups.filter((g) => g.groupName != group.groupName))
                                                                setMembers(members.filter((member) => !group.groupMembers.includes(member)))
                                                            }
                                                        }}/>
                                                        <span className="checkmark"> </span>
                                                    </label>
                        
                        <label htmlFor={group.groupName}>{group.groupName}</label>
                    </div>
                })}

            </div>
            </> : <></>}
            {inviteType == "custom" ? customInviteView() : <></>}

             <br />
            {isLoadingAddEvent ? <div className="loader"></div>  : <button onClick={async () => {
                setIsLoadingAddEvent(true)
                console.log(`Name: ${name}, Description: ${description}, Start Time: ${startTime}, End Time: ${endTime}, Selected Location: ${selectedLocation},Event Type: ${eventType}`)
                if(name == "" ||  startTime == undefined || endTime == undefined || selectedLocation == undefined ||  eventType == undefined){
                    alert("Please fill out all fields")
                    console.log(`Name: ${name}, Description: ${description}, Start Time: ${startTime}, End Time: ${endTime}, Selected Location: ${selectedLocation},  Event Type: ${eventType}`)
                    setIsLoadingAddEvent(false)
                    return
                }
                
                console.log("Submit")
                const location: Location = selectedLocation != undefined ? selectedLocation : activity!.locations[0]
                console.log(startTime)
                console.log(endTime)
                const eventDate: EventDate = EventDate.fromBlank(selectedDate!, startTime!, endTime!)
                console.log(eventDate.toMap())
                const targets: ActivityMember[] = []
                const selectedEventType = eventType!
                selectedEventType.color.setAlpha(255);
                
                const newEvent: ActivityEvent = ActivityEvent.fromBlank(name, description, location, eventDate, "activity-event", Date.now(), activityId!,activityGroups.map((g) => g.groupName), members , inviteType, selectedEventType, activityGroups, hasSchoolEvent!, schoolEventId, [], activity!.name)


                if(isEditing){
                    newEvent.id = editEvent!.id
                    if(editEvent!.generalTarget == "groups"){
                        newEvent.groupTargets.forEach((group) => {
                            group.groupMembers.forEach((member) => {
                                if(!targets.find((m) => m.userId == member.userId)){
                                    targets.push(member)
                                }
                            })
                        })
                    }
                    newEvent.targets = [...targets]

                    await editActivityEvent(newEvent)
                    setIsEditing(false)
                    //Edit calendar event
                    const startDate: Date = newEvent.date.from
                    const endDate: Date = newEvent.date.to
                    
                    const calendarEvent: CalendarEvent = {
                        title: newEvent.name,
                        start: startDate.toISOString(),
                        end: endDate.toISOString(),
                        
                        isAllDay: false,
                        interactive: true,
                        description: newEvent.info,
                        color: newEvent.eventType.color.setAlpha(0.8).toRBGAString(),
                        id: newEvent.id!,
                        location: newEvent.location.name 
                        
                    }
                    const newCalendarEvents = calendarEvents.filter((e) => e.id != editEvent!.id)
                    console.log(newCalendarEvents)
                    console.log(editEvent!.id)
                    

                    newCalendarEvents.push(calendarEvent)
                    setCalendarEvents([...newCalendarEvents])
                    //Edit theater event
                    const newEvents = events.filter((e) => e.id != editEvent!.id)
                    newEvents.push(newEvent)
                    console.log(newEvents)
                    setEvents([...newEvents])
                } else{
                    await addActivityEvent(newEvent)
                    //Add to calendar
                    const startDate: Date = newEvent.date.from
                    const endDate: Date = newEvent.date.to
                    startDate.setDate(newEvent.date.date.getDate())
                    startDate.setMonth(newEvent.date.date.getMonth())
                    startDate.setFullYear(newEvent.date.date.getFullYear())
                    endDate.setDate(newEvent.date.date.getDate())
                    endDate.setMonth(newEvent.date.date.getMonth())
                    endDate.setFullYear(newEvent.date.date.getFullYear())
                    const calendarEvent: CalendarEvent = {
                        title: newEvent.name,
                        start: startDate.toISOString(),
                        end: endDate.toISOString(),
                        
                        isAllDay: false,
                        interactive: true,
                        description: newEvent.info,
                        color: newEvent.eventType.color.setAlpha(0.8).toRBGAString(),
                        id: newEvent.id!,
                        location: newEvent.location.name 
                        
                    }
                    setCalendarEvents([...calendarEvents, calendarEvent])
                    setEvents([...events, newEvent])

                }
                setIsLoadingAddEvent(false)
                //Reset all fields
                setCreationState("date")
                setSelectedDate(null)
                setStartTime(null)
                setEndTime(null)

                setName("")
                setDescription("")
                setStartTimeString("")
                setEndTimeString("")

                setEventType(activity?.eventTypes[0])
                setSelectedLocation(activity?.defaultLocation)
                setMembers([])


                setInviteType('students')
                



            }} className='ActionBtn'>{isEditing ? "Save" : "Submit"}</button>}

            <button onClick={() => {
                if(isEditing){
                    setCreationState("date")
                    setSelectedDate(null)
                    setStartTime(null)
                    setEndTime(null)

                    setName("")
                    setDescription("")
                    setStartTimeString("")
                    setEndTimeString("")
                    setSelectedLocation(activity!.defaultLocation)
                    setEventType(activity!.eventTypes[0])
                    setSelectedLocation(activity?.defaultLocation)



                    setIsEditing(false)
                    return
                }
                setCreationState("date")
                setDescription("")
                setName("")
                setInviteType('students')
                
            }} className='ActionBtn'>Back</button></>
        )
    }

    function addMultipleEventScreen(){
        return (
            <><h2 className='mode'>Enter Event Information</h2>
            <label htmlFor="Name">Name: </label>
            <input type="text" value={name} onChange={(val) => {
                setName(val.target.value)
            }}/>
            <br />
            <label htmlFor="Description">Description: </label>
            <textarea value={description} onChange={(val) => {
                setDescription(val.target.value)
            }}/>
            <br />
            

            <label htmlFor="StartTime">Start Time: </label>
            <input type="time" value={startTimeString} onChange={handleStartTimeChange}/>    
            <br />
            <label htmlFor="EndTime">End Time: </label>
            <input type="time" value={endTimeString} onChange={handleEndTimeChange}/>
            <br />
            <label htmlFor="location">Location: </label>
            <select name="location" id="location" onChange={(e) => {
                setSelectedLocation(activity?.locations.find((location) => location.name == e.target.value))
            }}>
                {activity?.locations.map((location, index) => {
                    return <option value={location.name} key={index} selected={selectedLocation?.name == location.name}>{location.name + " (" + location.address + ")"}</option>
                })
                }
            </select>
            
            <br />
            <label htmlFor="eventType">Event Type: </label>
            <select name="eventType" id="event-type" onChange={(e) => {
                setEventType(activity?.eventTypes.find((type) => type.name == e.target.value))
            }}>
                {activity?.eventTypes.map((type, index) => {
                    return <option value={type.name} key={index} selected={eventType?.name == type.name}>{type.name}</option>
                })
                }
            </select>
            <br />
            <label htmlFor="inviteType">Invite Type: </label>
            <select name="inviteType" id="invite-type" onChange={(e) => {
                setInviteType(e.target.value as "students" | "parents" | "groups" | "custom")
            }}>
                <option value="students" selected={inviteType == "students"}>Students</option>
                <option value="parents" selected={inviteType == "parents"}>Parents</option>
                <option value="groups" selected={inviteType == "groups"}>Groups</option>
                <option value="custom" selected={inviteType == "custom"}>Custom</option>
            </select>
            {inviteType == "groups" ? <><br />
            <label htmlFor="groups">Groups: </label>
            <div className="groups">
                {activity!.groups.map((group, index) => {
                    return <div className="group" key={group.groupName}>
                         <label className="custom-checkbox">
                        
                                                        <input type="checkbox" id="ensemble" checked={activityGroups.find((g) => g.groupName == group.groupName) != undefined} onChange={(e) => {
                                                              if(e.target.checked){
                                                                setActivityGroups([...activityGroups, group])
                                                                setMembers([...members, ...group.groupMembers])
                                                            } else{
                                                                setActivityGroups(activityGroups.filter((g) => g.groupName != group.groupName))
                                                                setMembers(members.filter((member) => !group.groupMembers.includes(member)))
                                                            }
                                                        }}/>
                                                        <span className="checkmark"> </span>
                                                    </label>
                        
                        <label htmlFor={group.groupName}>{group.groupName}</label>
                    </div>
                })}

            </div>
            </> : <></>}
            {inviteType == "custom" ? customInviteView() : <></>}
            <br />
            <h2>Event Dates</h2>
            <div className="event-dates">
                {eventDates.map((date, index) => {
                    return <div className="event-date" key={index}>
                        <div className='event-date-title'>
                        <label htmlFor="" className="event-date-name">{date.date.toDateString()}</label>

                        <label htmlFor="" className="event-date-time">{date.from.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }) + " - " + date.to.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}</label>
                        </div>
                       
                        <img src={TrashIcon} className='event-date-icon' onClick={() => {
                            setEventDates(eventDates.filter((d) => d != date))
                        }}/>
                    </div>
                })}

                </div>
                <button className={"ActionBtn"} onClick={() => {
                    if(startTime == undefined || endTime == undefined){
                        alert("Please fill out start time and end time")
                        return
                    }
                    const currentDate = new Date()
                    currentDate.setHours(0, 0, 0, 0)
                    const newEventDate = EventDate.fromBlank(currentDate, startTime!, endTime!)
                    setDefaultEventDate(newEventDate)
                    addEventDateDialogRef.current?.showModal()
                }}>Add Date</button>

             <br />
            {isLoadingAddEvent ? <div className="loader"></div>  : <button onClick={async () => {
                setIsLoadingAddEvent(true)
                console.log(`Name: ${name}, Description: ${description}, Start Time: ${startTime}, End Time: ${endTime}, Selected Location: ${selectedLocation},Event Type: ${eventType}`)
                if(name == "" ||  startTime == undefined || endTime == undefined || selectedLocation == undefined ||  eventType == undefined || eventDates.length == 0){
                    alert("Please fill out all fields")
                    console.log(`Name: ${name}, Description: ${description}, Start Time: ${startTime}, End Time: ${endTime}, Selected Location: ${selectedLocation},  Event Type: ${eventType}`)
                    setIsLoadingAddEvent(false)
                    return
                }
                
                console.log("Submit")
                const location: Location = selectedLocation != undefined ? selectedLocation : activity!.locations[0]
                console.log(startTime)
                console.log(endTime)
                const newCalendarEvents: CalendarEvent[] = []
                for(const date of eventDates){



                const selectedEventType = eventType!
                selectedEventType.color.setAlpha(255);
                
                const newEvent: ActivityEvent = ActivityEvent.fromBlank(name, description, location, date, "activity-event", Date.now(), activityId!,activityGroups.map((g) => g.groupName), members , inviteType, selectedEventType, activityGroups, hasSchoolEvent!, schoolEventId, [], activity!.name)


               
                    await addActivityEvent(newEvent)
                    //Add to calendar
                const startDate: Date = newEvent.date.from
                const endDate: Date = newEvent.date.to
                startDate.setDate(newEvent.date.date.getDate())
                startDate.setMonth(newEvent.date.date.getMonth())
                startDate.setFullYear(newEvent.date.date.getFullYear())
                endDate.setDate(newEvent.date.date.getDate())
                endDate.setMonth(newEvent.date.date.getMonth())
                endDate.setFullYear(newEvent.date.date.getFullYear())
                const calendarEvent: CalendarEvent = {
                    title: newEvent.name,
                    start: startDate.toISOString(),
                    end: endDate.toISOString(),
                    
                    isAllDay: false,
                    interactive: true,
                    description: newEvent.info,
                    color: newEvent.eventType.color.setAlpha(0.8).toRBGAString(),
                    id: newEvent.id!,
                    location: newEvent.location.name 
                    
                }
                newCalendarEvents.push(calendarEvent)
                setEvents([...events, newEvent])
            }
            setCalendarEvents([...calendarEvents, ...newCalendarEvents])

                
            setIsLoadingAddEvent(false)
                //Reset all fields
                setCreationState("date")
                setSelectedDate(null)
                setStartTime(null)
                setEndTime(null)

                setName("")
                setDescription("")
                setStartTimeString("")
                setEndTimeString("")

                setEventType(activity?.eventTypes[0])
                setSelectedLocation(activity?.defaultLocation)
                setMembers([])


                setInviteType('students')
                



            }} className='ActionBtn'>{isEditing ? "Save" : "Submit"}</button>}

            <button onClick={() => {
                if(isEditing){
                    setCreationState("date")
                    setSelectedDate(null)
                    setStartTime(null)
                    setEndTime(null)

                    setName("")
                    setDescription("")
                    setStartTimeString("")
                    setEndTimeString("")
                    setSelectedLocation(activity!.defaultLocation)
                    setEventType(activity!.eventTypes[0])
                    setSelectedLocation(activity?.defaultLocation)



                    setIsEditing(false)
                    return
                }
                setCreationState("date")
                setDescription("")
                setName("")
                setInviteType('students')
                
            }} className='ActionBtn'>Back</button></>
        )
    }

    return (
        <>
        <div className='page-title'>
            <img src={BackIcon} alt="back arrow" onClick={() => {
                if(creationState != "date"){
                    setCreationState("date")
                    if(isEditing){
                        setCreationState("date")
                        setSelectedDate(null)
                        setStartTime(null)
                        setEndTime(null)
    
                        setName("")
                        setDescription("")
                        setStartTimeString("")
                        setEndTimeString("")
                        setSelectedLocation(activity!.defaultLocation)
                        setEventType(activity!.eventTypes[0])
                        setSelectedLocation(activity?.defaultLocation)
    
    
    
                        setIsEditing(false)
                        return
                    }
                    setCreationState("date")
                    setDescription("")
                    setName("")
                    setInviteType('students')
                    return
                }
                window.location.href = '/Activity/?activityId=' + activityId
            }} />
            <h1>
                Events
            </h1>
            
        </div>
        {isLoading ?<div className='center'><div className='loader'></div></div> : <div className='center'>
            <div className={creationState != "date" ? "datePicker hidden" : "datePicker"}> <Calendar canPaste={copiedEvent != undefined} canCopy={true} copyEvent={(event)=>{
                const activityEvent = events.find((e) => e.id == event.id)
                for(const event of events){
                    console.log(event.id)
                }
                setCopiedEvent(activityEvent)
                console.log(activityEvent)
                console.log(event.id)
           }}  pasteEvent={(date)=>{
            console.log("PASTE EVENT")
            console.log(date)
                                  const checkDate = new Date(date)
                                  checkDate.setHours(0, 0, 0, 0)
                                    setSelectedDate(checkDate)

                                    
                                
                                  setStartTime(new Date(copiedEvent!.date.from))
                                  setStartTimeString(copiedEvent!.date.from.toLocaleTimeString([], {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                      hour12: false
                                  }))
                                  //copy the date and add an hour
                                  const newEndTime = new Date(copiedEvent!.date.to)

                                  setEndTime(newEndTime)
                                  console.log(newEndTime)
                                  setEndTimeString(newEndTime.toLocaleTimeString([], {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                      hour12: false
                                  }))
                                  setSelectedLocation(copiedEvent!.location)
                                  setEventType(copiedEvent!.eventType)
                                  setName(copiedEvent!.name)
                                    setDescription(copiedEvent!.info)
                                    setMembers(copiedEvent!.targets)
                                    setInviteType(copiedEvent!.generalTarget as "students" | "parents" | "groups" | "custom")
                                    setActivityGroups(copiedEvent!.groupTargets)
                                    
                                  
                                  setCreationState("info")
           }} canViewConflicts={false} isCreating={true} canOpenContextMenu={true} events={calendarEvents}
                              editEvent={(event) => {
                                  const activityEvent = getEvents().find((e) => e.id == event.id)
                                    console.log(event.id)
                                  if (activityEvent) {
                                      console.log(activityEvent)
                                      setCreationState("info")
                                      setName(activityEvent.name)
                                      setDescription(activityEvent.info)
                                      setSelectedDate(activityEvent.date.date)
                                      setStartTime(activityEvent.date.from)
                                      setStartTimeString(activityEvent.date.from.toLocaleTimeString([], {
                                          hour: '2-digit',
                                          minute: '2-digit',
                                          hour12: false
                                      }))
                                      setEndTime(activityEvent.date.to)
                                      setEndTimeString(activityEvent.date.to.toLocaleTimeString([], {
                                          hour: '2-digit',
                                          minute: '2-digit',
                                          hour12: false
                                      }))
                                      setSelectedLocation(activityEvent.location)

                                        setMembers(activityEvent.targets)
                                        console.log("FROM EDIT")
                                        console.log(activityEvent.targets)
                                      setEventType(activityEvent.eventType)
                                      setIsEditing(true)
                                    setInviteType(activityEvent.generalTarget as "students" | "parents" | "groups" | "custom")
                                      setEditEvent(activityEvent)
                                      setActivityGroups(activityEvent.groupTargets)
                                  }
                              }
                              }
                              viewEvent={(event) => {
                                  const theaterEvent = getEvents().find((e) => e.id == event.id)

                                  if (theaterEvent) {
                                      localStorage.setItem('event', JSON.stringify(theaterEvent.toMap()))
                                      localStorage.setItem('back', '/Activity/Events/?activityId=' + activityId)
                                      window.location.href = "/Calendar/Event/"
                                  }
                              }}
                              viewConflicts={(date) => {
                                  
                              }}
                              deleteEvent={async (event) => {
                                  console.log(event)
                                  const deletedEvent = events.find((e) => e.id == event.id)

                                  const newEvents = events.filter((e) => e.id != event.id)
                                  setEvents(newEvents)
                                  const newCalendarEvents = calendarEvents.filter((e) => e.id != event.id)
                                  setCalendarEvents(newCalendarEvents)
                                  await deleteActivityEvent(deletedEvent!)
                              }}
                              dateClick={(args) => {

                                  console.log(args.date)
                                  setSelectedDate(args.date)
                                  const checkDate = new Date(args.date)
                                  checkDate.setHours(0, 0, 0, 0)


                                
                                  setStartTime(new Date(args.date))
                                  setStartTimeString(args.date.toLocaleTimeString([], {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                      hour12: false
                                  }))
                                  //copy the date and add an hour
                                  const newEndTime = new Date(args.date)

                                  setEndTime(newEndTime.addHours(1))
                                  console.log(newEndTime)
                                  setEndTimeString(args.date.addHours(1).toLocaleTimeString([], {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                      hour12: false
                                  }))
                                  setSelectedLocation(activity!.defaultLocation)
                                  setEventType(activity!.eventTypes[0])
                                  
                                  setCreationState("info")
                              }} eventClick={(args) => {


                                setSelectedDate(args.event.start)
                                const checkDate = new Date(args.event.start!)
                                checkDate.setHours(0, 0, 0, 0)
                                
                                setStartTime(new Date(args.event.start!))
                                setStartTimeString(args.event.start!.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false
                                }))
                                //copy the date and add an hour
                                const newEndTime = new Date(args.event.end!)

                                setEndTime(newEndTime)

                                setEndTimeString(newEndTime.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false
                                }))
                                setSelectedLocation(activity!.defaultLocation)
                                setEventType(activity!.eventTypes[0])
                                setCreationState("info")
                            }}/> 
                            <button className={"ActionBtn"} onClick={() => {
                                setCreationState("multipleEvents")
                                setEventType(activity!.eventTypes[0])
                            }}>Add Multiple Events</button>
                            <button className={"ActionBtn"} onClick={() => {
                                localStorage.setItem('events', JSON.stringify(events.map((event) => event.toMap())))
                                
                                window.open('/Activity/Events/Print/', "_blank")
                            }}>
                                Print
                            </button>
                            <button className={"ActionBtn"} onClick={() => {
                                exportScheduleDialogRef.current?.showModal()
            }}>
                Export to CSV
            </button>
            <button className={"ActionBtn"} onClick={() => {
                                importScheduleDialogRef.current?.showModal()
            }}>
                Import from CSV
            </button></div> 
           {accountType == "teacher" ?  creationState == "multipleEvents" ? addMultipleEventScreen() : creationState == "date" ?<></> : addEventScreen() : <> <Calendar canPaste={false} canCopy={false} copyEvent={()=>{}}  pasteEvent={()=>{}} viewEvent={(event) => {}} canViewConflicts={false} events={calendarEvents} canOpenContextMenu={false} dateClick={() => {}} deleteEvent={() => {}} viewConflicts={() => {}} editEvent={() => {}} eventIdClick={(eventId) => {
                const event = events.find((event) => event.id === eventId)
                if(event){
                    localStorage.setItem('event', JSON.stringify(event.toMap()))
                    localStorage.removeItem('back')
                    window.location.href = '/Calendar/Event/'
                }
            }}/> <button className={"ActionBtn"} onClick={() => {
                localStorage.setItem('events', JSON.stringify(events.map((event) => event.toMap())))

                window.open('/Activity/Events/Print/', "_blank")
            }}>
                Print
            </button></>}
           
        </div>}

        <AddEventDateDialog dialogRef={addEventDateDialogRef} addDate={(date) => {
            setEventDates([...eventDates, date])
            addEventDateDialogRef.current!.close()
        }} close={() => {
            addEventDateDialogRef.current!.close()
        }} eventDate={defaultEventDate}/>
        {activity != null && <ExportScheduleDialog dialogRef={exportScheduleDialogRef} events={events} close={() => {
            exportScheduleDialogRef.current!.close()
        }} activity={activity!}/>}
       {activity != null && <ImportScheduleDialog activity={activity} dialogRef={importScheduleDialogRef} close={() => {
            importScheduleDialogRef.current!.close()
        }} addEvents={async (importedEvents) => {
            const newCalendarEvents: CalendarEvent[] = []
            for(const newEvent of importedEvents){
            await addActivityEvent(newEvent)
                    //Add to calendar
                const startDate: Date = newEvent.date.from
                const endDate: Date = newEvent.date.to
                startDate.setDate(newEvent.date.date.getDate())
                startDate.setMonth(newEvent.date.date.getMonth())
                startDate.setFullYear(newEvent.date.date.getFullYear())
                endDate.setDate(newEvent.date.date.getDate())
                endDate.setMonth(newEvent.date.date.getMonth())
                endDate.setFullYear(newEvent.date.date.getFullYear())
                const calendarEvent: CalendarEvent = {
                    title: newEvent.name,
                    start: startDate.toISOString(),
                    end: endDate.toISOString(),
                    
                    isAllDay: false,
                    interactive: true,
                    description: newEvent.info,
                    color: newEvent.eventType.color.setAlpha(0.8).toRBGAString(),
                    id: newEvent.id!,
                    location: newEvent.location.name 
                    
                }
                newCalendarEvents.push(calendarEvent)
                setEvents([...events, newEvent])
            }
            setCalendarEvents([...calendarEvents, ...newCalendarEvents])



        }}/>}
        
        </>
    )
}

export default App
