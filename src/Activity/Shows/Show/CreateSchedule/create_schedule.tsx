
import {  StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../../index.css'

import 'react-calendar/dist/Calendar.css';
import './create_schedule.css'
import {
    Activity,
    Character,
    EnsembleSection,
    Show,
    ShowGroup,
    TheaterEvent,
    Location,
    EventDate,
    
    CalendarEvent,
    TheaterActivity,
    DateConflict,
    TheaterLocation,
    intToHexColor,
    addAlpha,
    FullCast,
    ActivityMember,
    EventType
} from '../../../../constants';
import { addActivityTheaterEvent, deleteActivityTheaterEvent, editActivityTheaterEvent, getActivity, getActivityShow, getActivityTheaterEvents, getActvityShowConflictFormResponses } from '../../../../api/db';
import ActDisplayTile from '../../../../components/Act_Display_Tile';
import SongDisplayTile from '../../../../components/Song_Display_Tile';
import DanceDisplayTile from '../../../../components/Dance_Display_Tile';
import Calendar from '../../../../components/Calendar';
import CharacterDisplayTile from '../../../../components/Character_Display_Tile';
import EnsembleSectionDisplayTile from '../../../../components/Ensemble_Section_Display_Tile';
import ShowGroupDisplayTile from '../../../../components/Show_Group_Display_Tile';


import CharacterTile from '../../../../components/Character_Tile';
import EnsembleSectionTile from '../../../../components/Ensemble_Section_Tile';
import ShowGroupTile from '../../../../components/Show_Group_Tile';
import ConflictDisplayTile from '../../../../components/Conflict_Display_Tile';
import FullCastTile from '../../../../components/Full_Cast_Tile';
import { isLoggedIn } from '../../../../api/auth';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [activity, setActivity] = useState<TheaterActivity | null>()
    const [showId, setShowId] = useState<string>("")
    const [show, setShow] = useState<Show | null>()
    const [creationState, setCreationState] = useState<"date" | "type" | "info">("date")
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [startTime, setStartTime] = useState<Date | null>(null)
    const [endTime, setEndTime] = useState<Date | null>(null)

    const [type, setType] = useState<"song" | "dance" | "scene" | "custom">("custom")
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [startTimeString, setStartTimeString] = useState<string>("")
    const [endTimeString, setEndTimeString] = useState<string>("")
    const [selectedLocation, setSelectedLocation] = useState<Location | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [theaterEvents, setTheaterEvents] = useState<TheaterEvent[]>([])
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([])
    const [characters, setCharacters] = useState<(Character | ShowGroup | EnsembleSection | FullCast)[]>([])
    const [addedEnsemble, setAddedEnsemble] = useState<boolean>(false)
    const [conflicts, setConflicts] = useState<DateConflict[]>([])
    const [currentConflicts, setCurrentConflicts] = useState<DateConflict[]>([])
    const [addFullCast, setAddFullCast] = useState<boolean>(false)
    const [viewingDateForConflicts, setViewingDateForConflicts] = useState<Date | null>(null)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [editEvent, setEditEvent] = useState<TheaterEvent | null>(null)
    const [rehearsalLocation, setRehearsalLocation] = useState<TheaterLocation | undefined>()
    const [eventType, setEventType] = useState<EventType | undefined>(undefined)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [filterEnsmeble, setFilterEnsemble] = useState<boolean>(false)
    const [ensembleActors, setEnsembleActors] = useState<ActivityMember[]>([])


    useEffect(() => {
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
            getActivity(activityId).then((activity) => {
                if(activity instanceof Activity)
                    return
                setActivity(activity)
                setRehearsalLocation(activity?.rehearsalLocations[0])
                setEventType(activity?.eventTypes[0])
                setSelectedLocation(activity?.defaultLocation)

            });
        }
        const showId = urlParams.get('showId')
        if (showId) {
            setShowId(showId)
            getActvityShowConflictFormResponses(activityId!, showId!).then((responses) => {
                const conflicts: DateConflict[] = []
                for(const response of responses){
                    for(const conflict of response.dates){
                        conflicts.push({
                            conflictResponseDate: conflict,
                            actor: response.actor,
                        })
                    }
                }
                //Sort by date
                conflicts.sort((a, b) => {
                    return a.conflictResponseDate.date.getTime() - b.conflictResponseDate.date.getTime()
                })
                setConflicts(conflicts)
                setCurrentConflicts([...conflicts])
            })

        }
        getActivityShow(activityId!, showId!).then((show) => {
            setShow(show)
            if(show?.hasEnsemble) {
                setEnsembleActors(show!.ensemble!.actors)
            }
        });
        getActivityTheaterEvents(activityId!, showId!).then((events) => {
            setTheaterEvents(events)
            const calendarEvents: CalendarEvent[] = []
            for(const event of events){
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
                console.log(event.rehearsalLocation.color)

                calendarEvents.push({
                    title: event.name,
                    start: startDate.toISOString(),
                    end: endDate.toISOString(),
                    isAllDay: false,
                    interactive: true,
                    color: event.rehearsalLocation.color.setAlpha(0.8).toHex(),
                    description: event.info,
                    id: event.id,
                    location: event.rehearsalLocation.name
                    
                })
            }
            setCalendarEvents(calendarEvents)
        })
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])


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


    function getTheaterEvents(): TheaterEvent[]{
        return theaterEvents
    }
    return (
        <div  className='center'>
            <h1 className='title'>Create Schedule</h1>
           
            {creationState == "date" ? <> <h2 className='mode'>Select a Date</h2>
                <div className='container'>
                    <div className='box left'>
                        <h2>Conflicts{viewingDateForConflicts != null ? " on " + viewingDateForConflicts.toDateString() : ""}</h2>
                        {show?.hasEnsemble && <>
                            <label htmlFor="">Ignore Ensemble Conflicts</label>
                            <label className="custom-checkbox">

                                <input type="checkbox" id="ensemble" checked={filterEnsmeble} onChange={(e) => {
                                    setFilterEnsemble(e.target.checked)
                                    if (e.target.checked) {
                                        const newConflicts: DateConflict[] = []
                                        for (const conflict of conflicts) {
                                            //ignore ensemble conflicts
                                            if (ensembleActors.find((actor) => actor.userId == conflict.actor.userId)) {
                                                continue
                                            }
                                            newConflicts.push(conflict)
                                        }
                                        setCurrentConflicts(newConflicts)
                                    }
                                }}/>
                                <span className="checkmark"> </span>
                            </label> </>
                        }
                        <div className='conflicts'>
                            {
                                currentConflicts.map((conflict, index) => {
                                    return <ConflictDisplayTile key={index}
                                                                conflictResponseDate={conflict.conflictResponseDate}
                                                                actor={conflict.actor}/>
                                })
                            }
                        </div>
                    </div>
                    <Calendar canOpenContextMenu={true} events={calendarEvents}
                              editEvent={(event) => {
                                  const theaterEvent = getTheaterEvents().find((e) => e.id == event.id)

                                  if (theaterEvent) {
                                      console.log(theaterEvent)
                                      setCreationState("info")
                                      setName(theaterEvent.name)
                                      setDescription(theaterEvent.info)
                                      setSelectedDate(theaterEvent.date.date)
                                      setStartTime(theaterEvent.date.from)
                                      setStartTimeString(theaterEvent.date.from.toLocaleTimeString([], {
                                          hour: '2-digit',
                                          minute: '2-digit',
                                          hour12: false
                                      }))
                                      setEndTime(theaterEvent.date.to)
                                      setEndTimeString(theaterEvent.date.to.toLocaleTimeString([], {
                                          hour: '2-digit',
                                          minute: '2-digit',
                                          hour12: false
                                      }))
                                      setSelectedLocation(theaterEvent.location)
                                      setRehearsalLocation(theaterEvent.rehearsalLocation)
                                      setCharacters(theaterEvent.characters)
                                      setEventType(theaterEvent.activityEventType)
                                      setIsEditing(true)
                                      setType(theaterEvent.theaterEventType as "song" | "dance" | "scene" | "custom")
                                      setEditEvent(theaterEvent)
                                  }
                              }
                              }
                              viewEvent={(event) => {
                                  const theaterEvent = getTheaterEvents().find((e) => e.id == event.id)

                                  if (theaterEvent) {
                                      localStorage.setItem('event', JSON.stringify(theaterEvent))
                                      localStorage.setItem('back', '/Activity/Shows/Show/CreateSchedule/?activityId=' + activityId + '&showId=' + showId)
                                      window.location.href = "/Calendar/Event/"
                                  }
                              }}
                              viewConflicts={(date) => {
                                  const checkDate = new Date(date)
                                  checkDate.setHours(0, 0, 0, 0)
                                  setViewingDateForConflicts(checkDate)

                                  const newConflicts: DateConflict[] = []
                                  for (const conflict of conflicts) {

                                      if (conflict.conflictResponseDate.date.getTime() == checkDate.getTime()) {
                                          newConflicts.push(conflict)
                                      }
                                  }
                                  setCurrentConflicts(newConflicts)
                              }}
                              deleteEvent={async (event) => {
                                  console.log(event)
                                  const deletedEvent = theaterEvents.find((e) => e.id == event.id)

                                  const newEvents = theaterEvents.filter((e) => e.id != event.id)
                                  setTheaterEvents(newEvents)
                                  const newCalendarEvents = calendarEvents.filter((e) => e.id != event.id)
                                  setCalendarEvents(newCalendarEvents)
                                  await deleteActivityTheaterEvent(deletedEvent!)
                              }}
                              dateClick={(args) => {

                                  console.log(args.date)
                                  setSelectedDate(args.date)
                                  const checkDate = new Date(args.date)
                                  checkDate.setHours(0, 0, 0, 0)
                                  setViewingDateForConflicts(checkDate)

                                  const newConflicts: DateConflict[] = []
                                  for (const conflict of conflicts) {

                                      if (conflict.conflictResponseDate.date.getTime() == checkDate.getTime()) {
                                          newConflicts.push(conflict)
                                      }
                                  }
                                  setCurrentConflicts(newConflicts)
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
                                  setCreationState("type")
                              }} eventClick={(args) => {


                        setSelectedDate(args.event.start)
                        const checkDate = new Date(args.event.start!)
                        checkDate.setHours(0, 0, 0, 0)
                        setViewingDateForConflicts(checkDate)

                        const newConflicts: DateConflict[] = []
                        for (const conflict of conflicts) {

                            if (conflict.conflictResponseDate.date.getTime() == checkDate.getTime()) {
                                newConflicts.push(conflict)
                            }
                        }
                        setCurrentConflicts(newConflicts)
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
                        setCreationState("type")
                    }}/>
                    <div className='box right'>
                        <h2>How To Schedule Events</h2>
                        <ul>
                            <li>Click a time slot to start creating an event</li>
                            <li>Right click a time slot to view conflicts for that day</li>
                            <li>Right click a current event to view/edit the event or delete the event</li>
                        </ul>
                    </div>
                </div>
                <button className={"ActionBtn"} onClick={() => {
                    localStorage.setItem('events', JSON.stringify(theaterEvents))

                    window.open('/Activity/Shows/Show/Schedule/Print/', "_blank")
                }}>
                    Print
                </button>
                <button className='ActionBtn' onClick={() => {
                    window.location.href = "/Activity/Shows/Show/?activityId=" + activityId + "&showId=" + showId
                }}>
                    Back
                </button>
            </> : creationState == "type" ? <>
                <h2 className='mode'>Select a Rehersal Type</h2>
                {!isMobile && <div className='conflicts-div'>
                    <h2>Conflicts{viewingDateForConflicts != null ? " on " + viewingDateForConflicts.toDateString() : ""}</h2>
                    <label htmlFor="">Ignore Ensemble Conflicts</label>
                    {show?.hasEnsemble && <><label className="custom-checkbox">

                        <input type="checkbox" id="ensemble" checked={filterEnsmeble}
                               onChange={(e) => {
                                   setFilterEnsemble(e.target.checked)
                                   if (e.target.checked) {
                                       const newConflicts: DateConflict[] = []
                                       const checkDate = new Date(selectedDate!)
                                       checkDate.setHours(0, 0, 0, 0)
                                       for (const conflict of conflicts) {
                                           //ignore ensemble conflicts
                                           if (ensembleActors.find((actor) => actor.userId == conflict.actor.userId)) {
                                               continue
                                           }
                                           if(conflict.conflictResponseDate.date.getTime() == checkDate.getTime()){
                                               newConflicts.push(conflict)
                                           }

                                       }
                                       setCurrentConflicts(newConflicts)
                                   }
                               }}/>
                        <span className="checkmark"> </span>
                    </label></>}
                    <div className='conflicts'>
                        {
                            currentConflicts.map((conflict, index) => {
                                return <ConflictDisplayTile key={index} conflictResponseDate={conflict.conflictResponseDate} actor={conflict.actor}/>
                            })
                        }
                    </div>
                </div>}


                <button onClick={() =>{
                    setCreationState("info")
                    setType("custom")
                    setCharacters([])

                }} className='ActionBtn'>Custom</button>

                <h2 className='mode'>Show Layout</h2>
                <div className='layout'>
                    {
                        show?.layout.map((row, index) => {
                            return <ActDisplayTile key={index} act={row} onClick={(scene) => {

                                setType("scene")
                                setName(scene.name + " - " + row.name)
                                setCreationState("info")
                                setCharacters(scene.characters)
                                const actorsUIDs: string[] = []
                                for(const character of scene.characters){
                                    if(character instanceof Character){
                                        if(actorsUIDs.includes(character.actor!.userId)){
                                            actorsUIDs.push(character.actor!.userId)
                                        }
                                    } else if(character instanceof ShowGroup){
                                        for(const showCharacter of character.characters){
                                            if(showCharacter instanceof Character){
                                                if(actorsUIDs.includes(showCharacter.actor!.userId)){
                                                    actorsUIDs.push(showCharacter.actor!.userId)
                                                }
                                            } else if(showCharacter instanceof EnsembleSection){
                                                if(showCharacter.includeAll){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actorsUIDs.includes(actor.userId)){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeMale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "male"){
                                                            if(actorsUIDs.includes(actor.userId)){
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeFemale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "female"){
                                                            if(actorsUIDs.includes(actor.userId)){
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeCustom){
                                                    for(const actor of showCharacter.customActors){
                                                        if(actorsUIDs.includes(actor.userId)){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else if(character instanceof EnsembleSection){
                                        if(character.includeAll){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actorsUIDs.includes(actor.userId)){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeMale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    if(actorsUIDs.includes(actor.userId)){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeFemale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    if(actorsUIDs.includes(actor.userId)){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeCustom){
                                            for(const actor of character.customActors){
                                                if(actorsUIDs.includes(actor.userId)){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        }
                                } else if(character instanceof FullCast){
                                    for(const actor of show!.ensemble!.actors){
                                        if(actorsUIDs.includes(actor.userId)){
                                            actorsUIDs.push(actor.userId)
                                        }
                                    }
                                    for(const character of show!.characters){
                                        if(actorsUIDs.includes(character.actor!.userId)){
                                            continue
                                        }
                                        actorsUIDs.push(character.actor!.userId)
                                    }
                                }
                            }
                                const newConflicts: DateConflict[] = []
                                for(const conflict of conflicts){
                                    if(actorsUIDs.includes(conflict.actor.userId) && conflict.conflictResponseDate.date.getTime() == viewingDateForConflicts!.getTime()){
                                        newConflicts.push(conflict)
                                    }
                                }
                                setCurrentConflicts(newConflicts)
                            
                            }}/>
                        })
                    }
                </div>
                <h2 className='mode'>Songs</h2>
                <div className='songs'>
                    {
                        show?.songs.map((song, index) => {
                            return <SongDisplayTile key={index} song={song} onClick={() => {

                                setType("song")
                                setName(song.name)
                                setCharacters(song.characters)
                                setCreationState("info")
                                const actorsUIDs: string[] = []
                                for(const character of song.characters){
                                    if(character instanceof Character){
                                        if(actorsUIDs.includes(character.actor!.userId)){
                                            actorsUIDs.push(character.actor!.userId)
                                        }
                                    } else if(character instanceof ShowGroup){
                                        for(const showCharacter of character.characters){
                                            if(showCharacter instanceof Character){
                                                if(actorsUIDs.includes(showCharacter.actor!.userId)){
                                                    actorsUIDs.push(showCharacter.actor!.userId)
                                                }
                                            } else if(showCharacter instanceof EnsembleSection){
                                                if(showCharacter.includeAll){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actorsUIDs.includes(actor.userId)){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeMale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "male"){
                                                            if(actorsUIDs.includes(actor.userId)){
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeFemale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "female"){
                                                            if(actorsUIDs.includes(actor.userId)){
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeCustom){
                                                    for(const actor of showCharacter.customActors){
                                                        if(actorsUIDs.includes(actor.userId)){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else if(character instanceof EnsembleSection){
                                        if(character.includeAll){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actorsUIDs.includes(actor.userId)){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeMale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    if(actorsUIDs.includes(actor.userId)){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeFemale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    if(actorsUIDs.includes(actor.userId)){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeCustom){
                                            for(const actor of character.customActors){
                                                if(actorsUIDs.includes(actor.userId)){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        }
                                } else if(character instanceof FullCast){
                                    for(const actor of show!.ensemble!.actors){
                                        if(actorsUIDs.includes(actor.userId)){
                                            actorsUIDs.push(actor.userId)
                                        }
                                    }
                                    for(const character of show!.characters){
                                        if(actorsUIDs.includes(character.actor!.userId)){
                                            continue
                                        }
                                        actorsUIDs.push(character.actor!.userId)
                                    }
                                }
                            }
                                const newConflicts: DateConflict[] = []
                                for(const conflict of conflicts){
                                    if(actorsUIDs.includes(conflict.actor.userId) && conflict.conflictResponseDate.date.getTime() == viewingDateForConflicts!.getTime()){
                                        newConflicts.push(conflict)
                                    }
                                }
                                setCurrentConflicts(newConflicts)
                            
                            }}/>
                        })
                    }
                </div>
                <h2 className='mode'>Dances</h2>
                <div className='dances'>
                    {
                        show?.dances.map((dance, index) => {
                            return <DanceDisplayTile key={index} dance={dance} onClick={() => {

                                setType("dance")
                                setName(dance.name)
                                setCreationState("info")
                                setCharacters(dance.characters)
                                const actorsUIDs: string[] = []
                                for(const character of dance.characters){
                                    if(character instanceof Character){
                                        if(actorsUIDs.includes(character.actor!.userId)){
                                            actorsUIDs.push(character.actor!.userId)
                                        }
                                    } else if(character instanceof ShowGroup){
                                        for(const showCharacter of character.characters){
                                            if(showCharacter instanceof Character){
                                                if(actorsUIDs.includes(showCharacter.actor!.userId)){
                                                    actorsUIDs.push(showCharacter.actor!.userId)
                                                }
                                            } else if(showCharacter instanceof EnsembleSection){
                                                if(showCharacter.includeAll){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actorsUIDs.includes(actor.userId)){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeMale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "male"){
                                                            if(actorsUIDs.includes(actor.userId)){
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeFemale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "female"){
                                                            if(actorsUIDs.includes(actor.userId)){
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeCustom){
                                                    for(const actor of showCharacter.customActors){
                                                        if(actorsUIDs.includes(actor.userId)){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else if(character instanceof EnsembleSection){
                                        if(character.includeAll){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actorsUIDs.includes(actor.userId)){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeMale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    if(actorsUIDs.includes(actor.userId)){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeFemale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    if(actorsUIDs.includes(actor.userId)){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeCustom){
                                            for(const actor of character.customActors){
                                                if(actorsUIDs.includes(actor.userId)){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                         }
                                } else if(character instanceof FullCast){
                                    for(const actor of show!.ensemble!.actors){
                                        actorsUIDs.push(actor.userId)
                                    }
                                    for(const character of show!.characters){
                                        if(actorsUIDs.includes(character.actor!.userId)){
                                            continue
                                        }
                                        actorsUIDs.push(character.actor!.userId)
                                    }
                                }
                            }
                                const newConflicts: DateConflict[] = []
                                for(const conflict of conflicts){
                                    if(actorsUIDs.includes(conflict.actor.userId) && conflict.conflictResponseDate.date.getTime() == viewingDateForConflicts!.getTime()){
                                        newConflicts.push(conflict)
                                    }
                                }
                                setCurrentConflicts(newConflicts)
                            
                            }} />
                        })
                    }
                </div>
                <button onClick={() => {
                    setCreationState("date")
                    setViewingDateForConflicts(null)
                    setCurrentConflicts([...conflicts])
                }} className='ActionBtn'>Back</button>

            
            </> : <>
               {!isMobile && <div className='conflicts-div'>
                    <h2>Conflicts{viewingDateForConflicts != null ? " on " + viewingDateForConflicts.toDateString() : ""}</h2>
                   {show?.hasEnsemble && <><label htmlFor="">Ignore Ensemble Conflicts</label>
                       <label className="custom-checkbox">

                       <input type="checkbox" id="ensemble" checked={filterEnsmeble}
                   onChange={(e) => {
                       setFilterEnsemble(e.target.checked)
                       if (e.target.checked) {
                           const newConflicts: DateConflict[] = []
                           const actorsUIDs: string[] = []
                           for(const character of characters){
                               if(character instanceof Character){
                                   if(actorsUIDs.includes(character.actor!.userId)){
                                       actorsUIDs.push(character.actor!.userId)
                                   }
                               } else if(character instanceof ShowGroup){
                                   for(const showCharacter of character.characters){
                                       if(showCharacter instanceof Character){
                                           if(actorsUIDs.includes(showCharacter.actor!.userId)){
                                               actorsUIDs.push(showCharacter.actor!.userId)
                                           }
                                       } else {
                                           if (showCharacter.includeAll) {
                                               for (const actor of show!.ensemble!.actors) {
                                                   if (actorsUIDs.includes(actor.userId)) {
                                                       actorsUIDs.push(actor.userId)
                                                   }
                                               }
                                           } else if (showCharacter.includeMale) {
                                               for (const actor of show!.ensemble!.actors) {
                                                   if (actor.gender == "male") {
                                                       if (actorsUIDs.includes(actor.userId)) {
                                                           actorsUIDs.push(actor.userId)
                                                       }
                                                   }
                                               }
                                           } else if (showCharacter.includeFemale) {
                                               for (const actor of show!.ensemble!.actors) {
                                                   if (actor.gender == "female") {
                                                       if (actorsUIDs.includes(actor.userId)) {
                                                           actorsUIDs.push(actor.userId)
                                                       }
                                                   }
                                               }
                                           } else if (showCharacter.includeCustom) {
                                               for (const actor of showCharacter.customActors) {
                                                   if (actorsUIDs.includes(actor.userId)) {
                                                       actorsUIDs.push(actor.userId)
                                                   }
                                               }
                                           }
                                       }
                                   }
                               } else if(character instanceof EnsembleSection){
                                   if(character.includeAll){
                                       for(const actor of show!.ensemble!.actors){
                                           if(actorsUIDs.includes(actor.userId)){
                                               actorsUIDs.push(actor.userId)
                                           }
                                       }
                                   } else if(character.includeMale){
                                       for(const actor of show!.ensemble!.actors){
                                           if(actor.gender == "male"){
                                               if(actorsUIDs.includes(actor.userId)){
                                                   actorsUIDs.push(actor.userId)
                                               }
                                           }
                                       }
                                   } else if(character.includeFemale){
                                       for(const actor of show!.ensemble!.actors){
                                           if(actor.gender == "female"){
                                               if(actorsUIDs.includes(actor.userId)){
                                                   actorsUIDs.push(actor.userId)
                                               }
                                           }
                                       }
                                   } else if(character.includeCustom){
                                       for(const actor of character.customActors){
                                           if(actorsUIDs.includes(actor.userId)){
                                               actorsUIDs.push(actor.userId)
                                           }
                                       }
                                   }
                               } else {
                                   {
                                       for (const actor of show!.ensemble!.actors) {
                                           actorsUIDs.push(actor.userId)
                                       }
                                       for (const character of show!.characters) {
                                           if (actorsUIDs.includes(character.actor!.userId)) {
                                               continue
                                           }
                                           actorsUIDs.push(character.actor!.userId)
                                       }
                                   }
                               }
                           }
                           for (const conflict of conflicts) {
                               //ignore ensemble conflicts
                               if (ensembleActors.find((actor) => actor.userId == conflict.actor.userId)) {
                                   continue
                               }
                               if(actorsUIDs.includes(conflict.actor.userId) && conflict.conflictResponseDate.date.getTime() == viewingDateForConflicts!.getTime()){
                                   newConflicts.push(conflict)
                               }

                           }
                           setCurrentConflicts(newConflicts)
                       }
                   }}/>
                   <span className="checkmark"> </span>
                   </label> </>}
                    <div className='conflicts'>
                        {
                            currentConflicts.map((conflict, index) => {
                                return <ConflictDisplayTile key={index} conflictResponseDate={conflict.conflictResponseDate} actor={conflict.actor}/>
                            })
                        }
                    </div>
                </div>}
                <h2 className='mode'>Enter Rehersal Information</h2>
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



                    setViewingDateForConflicts(date)

                                  const newConflicts: DateConflict[] = []
                                  for (const conflict of conflicts) {

                                      if (conflict.conflictResponseDate.date.getTime() == date.getTime()) {
                                          newConflicts.push(conflict)
                                      }
                                  }
                                  setCurrentConflicts(newConflicts)
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
                <label htmlFor="location">Rehersal Location: </label>
                <select name="location" id="rehersal-location" onChange={(e) => {
                    setRehearsalLocation(activity?.rehearsalLocations.find((location) => location.name == e.target.value))
                }}>
                    {activity?.rehearsalLocations.map((location, index) => {
                        return <option value={location.name} key={index} selected={rehearsalLocation?.name == location.name}>{location.name}</option>
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
                {
                    type == "custom" ? <>
                    <label htmlFor="fullCast">Full Cast: </label>
                    <label className="custom-checkbox">
                        <input type="checkbox" id="ensemble" checked={addFullCast} onChange={(e) => setAddFullCast(e.target.checked)} />
                        <span className="checkmark"></span>
                    </label>
                    
                    </> : <></>
                }
                {type == "custom" && <br />}
                {!addFullCast ? <> <h2>Characters</h2>
                <div className='characters'>
                    { 
                       characters.map((character, index) => {
                            if(character instanceof Character){
                                if(type == "custom"){
                                    return <CharacterTile key={index} character={character} isCreate={false} actors={[]} characters={show!.characters} isAssign={false} setCharacter={(newCharacter) => {
                                        setCharacters(characters.map((c, i) => {
                                            if (i === index) {
                                                return newCharacter
                                            }
                                            return c
                                        }))
                                    }} removeCharacter={() => {
                                        setCharacters(characters.filter((_c, i) => i !== index))
                                    }}/>
                                }
                                return <CharacterDisplayTile key={index} character={character} canDelete={true} onDelete={() => {
                                    setCharacters(characters.filter((_c, i) => i !== index))
                                }} isMini={false}/>
                                }
                                if(character instanceof EnsembleSection){
                                    if(type == "custom"){
                                        return <EnsembleSectionTile isGroupChatCreate={false} onAddEnsemble={() => {}} key={index} ensembleSection={character} isCustom={true} setEnsembleSection={(newEnsembleSection) => {
                                            setCharacters(characters.map((c, i) => {
                                                if (i === index) {
                                                    return newEnsembleSection
                                                }
                                                return c
                                            }))
                                        }} removeEnsembleSection={() => {
                                            setCharacters(characters.filter((_c, i) => i !== index))
                                            setAddedEnsemble(false);
                                        }} isCreate={false} isAssign={false} actors={activity!.students } />
                                    }
                                    return <EnsembleSectionDisplayTile key={index} ensembleSection={character} canDelete={true} onDelete={() => {
                                        setCharacters(characters.filter((_c, i) => i !== index))

                                    }} isMini={false}/>
                                }
                                if(character instanceof ShowGroup){
                                    if (type == "custom"){
                                        return <ShowGroupTile key={index} showGroup={character} characters={show!.characters} setShowGroup={(newShowGroup) => {
                                            setCharacters(characters.map((c, i) => {
                                                if (i === index) {
                                                    return newShowGroup
                                                }
                                                return c
                                            }))
                                        }} removeShowGroup={() => {
                                            setCharacters(characters.filter((_c, i) => i !== index))
                                        }} isCreate={false} isAssign={false} actors={activity!.students} hasEnsemble={show!.hasEnsemble} showGroups={show!.showGroups}/>
                                        
                                    }
                                    return <ShowGroupDisplayTile key={index} showGroup={character} showCharacters={true} canClick={false} onClick={() => {}} canDelete={true} onDelete={() => {
                                        setCharacters(characters.filter((_c, i) => i !== index))
                                    }}/>
                                }
                                if(character instanceof FullCast) {
                                    return <FullCastTile key={index} canDelete={true} onDelete={() => {
                                        setCharacters(characters.filter((_c, i) => i !== index))
                                    }}/>
                                }

                    }) 
                    }
                </div>
                {type == "custom" ? <><button className="ActionBtn" onClick={() => {
                    const characterId = Math.floor(Math.random() * 100000)
                    setCharacters([...characters, Character.fromBlank("Character 1", null, characterId, 0)])
                     

                }}>Add Character</button>

                <button className="ActionBtn" onClick={() => {
                  //Scroll to bottom of characters div
                  const showGroupId = Math.floor(Math.random() * 100000)
                    setCharacters([...characters, ShowGroup.fromBlank("Show Group 1", [], showGroupId, 0)])
                }}>Add Show Group</button>

                { show?.hasEnsemble &&
                 <button className={"ActionBtn " + (addedEnsemble ? "disabled" : "")} disabled={addedEnsemble} onClick={() => {
                        if(addedEnsemble)
                            return
                        setAddedEnsemble(true)
                        //Scroll to bottom
                        setCharacters([...characters, EnsembleSection.fromBlank(true, false, false, false, [], 0)])
                 }}>
                    Add Ensemble
                 </button>} </> : <></>} </> : <></>}

                 <br />
                {isLoading ? <div className="loader"></div>  : <button onClick={async () => {
                    setIsLoading(true)
                    if(name == "" || description == "" || startTime == undefined || endTime == undefined || selectedLocation == undefined || rehearsalLocation == undefined || eventType == undefined){
                        alert("Please fill out all fields")
                        console.log(`Name: ${name}, Description: ${description}, Start Time: ${startTime}, End Time: ${endTime}, Selected Location: ${selectedLocation}, Rehearsal Location: ${rehearsalLocation}, Event Type: ${eventType}`)
                        setIsLoading(false)
                        return
                    }
                    
                    console.log("Submit")
                    const location: Location = selectedLocation != undefined ? selectedLocation : activity!.locations[0]
                    console.log(startTime)
                    console.log(endTime)
                    const eventDate: EventDate = EventDate.fromBlank(selectedDate!, startTime!, endTime!)
                    console.log(eventDate.toMap())
                    const targets: ActivityMember[] = []
                    if(addFullCast){
                        characters.push(new FullCast())
                        for(const actor of show!.ensemble!.actors){
                            targets.push(actor)
                        }
                        for(const character of show!.characters){
                            if(targets.find((e) => e.userId == character.actor!.userId) != undefined){
                                continue
                            }
                            targets.push(character.actor!)
                        }
                    } else {
                        for(const character of characters){
                            if(character instanceof FullCast){
                                for(const actor of show!.ensemble!.actors){
                                    targets.push(actor)
                                }
                                for(const character of show!.characters){
                                    if(targets.find((e) => e.userId == character.actor!.userId) != undefined){
                                        continue
                                    }
                                    targets.push(character.actor!)
                                }
                                break
                            } 
                            if(character instanceof Character){
                                if(targets.find((e) => e.userId == character.actor!.userId) != undefined){
                                    continue
                                }
                                targets.push(character.actor!)
                            }
                            if(character instanceof EnsembleSection){
                                if(character.includeAll){
                                
                                    for(const actor of show!.ensemble!.actors){
                                        if(targets.find((e) => e.userId == actor.userId) != undefined){
                                            continue
                                        }
                                        targets.push(actor)
                                    }
                                } else if(character.includeMale){
                                    for(const actor of show!.ensemble!.actors){
                                        if(actor.gender == "male"){
                                            if(targets.find((e) => e.userId == actor.userId) != undefined){
                                                continue
                                            }
                                            targets.push(actor)
                                        } 
                                    }
                                } else if(character.includeFemale){
                                    for(const actor of show!.ensemble!.actors){
                                        if(actor.gender == "female"){
                                            if(targets.find((e) => e.userId == actor.userId) != undefined){
                                                continue
                                            }
                                            targets.push(actor)
                                        }
                                    }
                                } else if(character.includeCustom){
                                    for(const actor of character.customActors){
                                        if(targets.find((e) => e.userId == actor.userId) != undefined){
                                            continue
                                        }
                                        targets.push(actor)
                                    }
                                }

                            }
                            if(character instanceof ShowGroup){
                                for(const showCharacter of character.characters){
                                    if(showCharacter instanceof Character){
                                        if(targets.find((e) => e.userId == showCharacter.actor!.userId) != undefined){
                                            continue
                                        }
                                        targets.push(showCharacter.actor!)
                                    }
                                    if(showCharacter instanceof EnsembleSection){
                                        if(showCharacter.includeAll){
                                            for(const actor of show!.ensemble!.actors){
                                                if(targets.find((e) => e.userId == actor.userId) != undefined){
                                                    continue
                                                }
                                                targets.push(actor)
                                            }
                                        } else if(showCharacter.includeMale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    if(targets.find((e) => e.userId == actor.userId) != undefined){
                                                        continue
                                                    }
                                                    targets.push(actor)
                                                }
                                            }
                                        } else if(showCharacter.includeFemale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    if(targets.find((e) => e.userId == actor.userId) != undefined){
                                                        continue
                                                    }
                                                    targets.push(actor)
                                                }
                                            }
                                        } else if(showCharacter.includeCustom){
                                            for(const actor of showCharacter.customActors){
                                                if(targets.find((e) => e.userId == actor.userId) != undefined){
                                                    continue
                                                }
                                                targets.push(actor)
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                    const newEvent: TheaterEvent = TheaterEvent.fromBlank(name, description, location, eventDate, "activity-theater-event", Date.now(), activityId, activity!.name, showId, show!.name , characters, targets, type, eventType!, rehearsalLocation!)

                    console.log(newEvent)
                    if(isEditing){
                        newEvent.id = editEvent!.id
                        await editActivityTheaterEvent(newEvent)
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
                            description:  newEvent.info,
                            color: newEvent.rehearsalLocation.color.setAlpha(0.8).toHex(),
                            location: newEvent.rehearsalLocation.name,
                            id: newEvent.id,
                        }
                        const newCalendarEvents = calendarEvents.filter((e) => e.id != newEvent.id)
                        newCalendarEvents.push(calendarEvent)
                        setCalendarEvents(newCalendarEvents)
                        //Edit theater event
                        const newTheaterEvents = theaterEvents.filter((e) => e.id != newEvent.id)
                        newTheaterEvents.push(newEvent)
                        console.log(newTheaterEvents)
                        setTheaterEvents([...newTheaterEvents])
                    } else{
                        await addActivityTheaterEvent(newEvent)
                        //Add to calendar
                    const startDate: Date = newEvent.date.from
                    const endDate: Date = newEvent.date.to
                    const calendarEvent: CalendarEvent = {
                        title: newEvent.name,
                        start: startDate.toISOString(),
                        end: endDate.toISOString(),
                        isAllDay: false,
                        interactive: true,
                        color: newEvent.rehearsalLocation.color.setAlpha(0.8).toHex(),
                        id: newEvent.id,
                        location: newEvent.rehearsalLocation.name,
                        description: newEvent.info,
                      

                    }
                    setCalendarEvents([...calendarEvents, calendarEvent])
                    setTheaterEvents([...theaterEvents, newEvent])

                    }
                    setIsLoading(false)
                    //Reset all fields
                    setCreationState("date")
                    setSelectedDate(null)
                    setStartTime(null)
                    setEndTime(null)
                    setType("custom")
                    setName("")
                    setDescription("")
                    setStartTimeString("")
                    setEndTimeString("")
                    setSelectedLocation(undefined)
                    setRehearsalLocation(undefined)
                    setEventType(undefined)
                    setCharacters([])
                    setAddedEnsemble(false)
                    setViewingDateForConflicts(null)
                    setCurrentConflicts(conflicts)
                    



                }} className='ActionBtn'>{isEditing ? "Save" : "Submit"}</button>}

                <button onClick={() => {
                    if(isEditing){
                        setCreationState("date")
                        setSelectedDate(null)
                        setStartTime(null)
                        setEndTime(null)
                        setType("custom")
                        setName("")
                        setDescription("")
                        setStartTimeString("")
                        setEndTimeString("")
                        setSelectedLocation(undefined)
                        setAddedEnsemble(false)
                        setViewingDateForConflicts(null)
                        setCurrentConflicts(conflicts)
                        setIsEditing(false)
                        return
                    }
                    setCreationState("type")
                    setDescription("")
                    setAddedEnsemble(false)
                    const newConflicts: DateConflict[] = []
                    for(const conflict of conflicts){

                        if(conflict.conflictResponseDate.date.getTime() == viewingDateForConflicts!.getTime()){
                            newConflicts.push(conflict)
                        }
                    }
                    setCurrentConflicts(newConflicts)
                }} className='ActionBtn'>Back</button>
                </>

            }


            
            

        </div>
    )
}

export default App