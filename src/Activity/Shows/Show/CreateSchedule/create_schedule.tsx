
import { act, StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../../index.css'

import 'react-calendar/dist/Calendar.css';
import './create_schedule.css'
import { Activity, Character, EnsembleSection, Show, ShowGroup, TheaterEvent, Location, EventDate, ActivityMember, CalendarEvent, TheaterActivity, ConflictResponse, DateConflict } from '../../../../constants';
import { addActivityTheaterEvent, deleteActivityTheaterEvent, editActivityTheaterEvent, getActivity, getActivityShow, getActivityTheaterEvents, getActvityShowConflictFormResponses } from '../../../../firebase/db';
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
    const [characters, setCharacters] = useState<(Character | ShowGroup | EnsembleSection)[]>([])
    const [addedEnsemble, setAddedEnsemble] = useState<boolean>(false)
    const [conflicts, setConflicts] = useState<DateConflict[]>([])
    const [currentConflicts, setCurrentConflicts] = useState<DateConflict[]>([])
    const [addFullCast, setAddFullCast] = useState<boolean>(false)
    const [viewingDateForConflicts, setViewingDateForConflicts] = useState<Date | null>(null)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [editEvent, setEditEvent] = useState<TheaterEvent | null>(null)


    useEffect(() => {
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
            getActivity(activityId).then((activity) => {
                if(activity instanceof Activity)
                    return
                setActivity(activity)

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

                calendarEvents.push({
                    title: event.name,
                    start: startDate.toISOString(),
                    end: endDate.toISOString(),
                    isAllDay: false,
                    interactive: true,
                    color: "blue",
                    id: event.id,
                    
                })
            }
            setCalendarEvents(calendarEvents)
        })
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
           
            {creationState == "date" ? <> <h2 className='title'>Select a Date</h2>
            <div className='date-div'>
                <div>
                    <h2>Conflicts{viewingDateForConflicts != null ? " on " + viewingDateForConflicts.toDateString() : ""}</h2>
                    <div className='conflicts'>
                        {
                            currentConflicts.map((conflict, index) => {
                                return <ConflictDisplayTile key={index} conflictResponseDate={conflict.conflictResponseDate} actor={conflict.actor}/>
                            })
                        }
                    </div>
                </div>
                <Calendar canOpenContextMenu={true} events={calendarEvents} 
                editEvent={(event) => {
                    const theaterEvent = getTheaterEvents().find((e) => e.id == event.id)

                    if(theaterEvent){
                        console.log(theaterEvent)
                        setCreationState("info")
                        setName(theaterEvent.name)
                        setDescription(theaterEvent.info)
                        setSelectedDate(theaterEvent.date.date)
                        setStartTime(theaterEvent.date.from)
                        setStartTimeString(theaterEvent.date.from.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                        setEndTime(theaterEvent.date.to)
                        setEndTimeString(theaterEvent.date.to.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                        setSelectedLocation(theaterEvent.location)
                        setCharacters(theaterEvent.characters)
                        setIsEditing(true)
                        setType(theaterEvent.theaterEventType as "song" | "dance" | "scene" | "custom")
                        setEditEvent(theaterEvent)
                    }
                }
                }
                viewConflicts={ (date) => {
                    const checkDate = new Date(date)
                    checkDate.setHours(0, 0, 0, 0)
                    setViewingDateForConflicts(checkDate)

                    const newConflicts: DateConflict[] = []
                    for(const conflict of conflicts){

                        if(conflict.conflictResponseDate.date.getTime() == checkDate.getTime()){
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
                    for(const conflict of conflicts){

                        if(conflict.conflictResponseDate.date.getTime() == checkDate.getTime()){
                            newConflicts.push(conflict)
                        }
                    }
                    setCurrentConflicts(newConflicts)
                    setStartTime(new Date(args.date))
                    setStartTimeString(args.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                    //copy the date and add an hour
                    const newEndTime = new Date(args.date)

                    setEndTime(newEndTime.addHours(1))
                    console.log(newEndTime)
                    setEndTimeString(args.date.addHours(1).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                    setCreationState("type")
                }} eventClick={(args) => {


                    setSelectedDate(args.event.start)
                    setStartTime(new Date(args.event.start!))
                    setStartTimeString(args.event.start!.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                    //copy the date and add an hour
                    const newEndTime = new Date(args.event.end!)

                    setEndTime(newEndTime)

                    setEndTimeString(newEndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                    setCreationState("type")
                }}/> 
            </div>
            
            <button className='ActionBtn' onClick={() => {
                window.location.href = "/activity/shows/show/?activityId=" + activityId + "&showId=" + showId
            }}>
                Back
            </button>
            </> : creationState == "type" ? <>
            <h2 className='title'>Select a Rehersal Type</h2>
                <div className='conflicts-div'>
                    <h2>Conflicts{viewingDateForConflicts != null ? " on " + viewingDateForConflicts.toDateString() : ""}</h2>
                    <div className='conflicts'>
                        {
                            currentConflicts.map((conflict, index) => {
                                return <ConflictDisplayTile key={index} conflictResponseDate={conflict.conflictResponseDate} actor={conflict.actor}/>
                            })
                        }
                    </div>
                </div>


                <button onClick={() =>{
                    setCreationState("info")
                    setType("custom")
                    setCharacters([])

                }} className='ActionBtn'>Custom</button>

                <h2 className='title'>Show Layout</h2>
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
                                        actorsUIDs.push(character.actor!.userId)
                                    } else if(character instanceof ShowGroup){
                                        for(const showCharacter of character.characters){
                                            if(showCharacter instanceof Character){
                                                actorsUIDs.push(showCharacter.actor!.userId)
                                            } else if(showCharacter instanceof EnsembleSection){
                                                if(showCharacter.includeAll){
                                                    for(const actor of show!.ensemble!.actors){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                } else if(showCharacter.includeMale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "male"){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeFemale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "female"){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeCustom){
                                                    for(const actor of showCharacter.customActors){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        }
                                    } else if(character instanceof EnsembleSection){
                                        if(character.includeAll){
                                            for(const actor of show!.ensemble!.actors){
                                                actorsUIDs.push(actor.userId)
                                            }
                                        } else if(character.includeMale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeFemale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeCustom){
                                            for(const actor of character.customActors){
                                                actorsUIDs.push(actor.userId)
                                            }
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
                <h2 className='title'>Songs</h2>
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
                                        actorsUIDs.push(character.actor!.userId)
                                    } else if(character instanceof ShowGroup){
                                        for(const showCharacter of character.characters){
                                            if(showCharacter instanceof Character){
                                                actorsUIDs.push(showCharacter.actor!.userId)
                                            } else if(showCharacter instanceof EnsembleSection){
                                                if(showCharacter.includeAll){
                                                    for(const actor of show!.ensemble!.actors){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                } else if(showCharacter.includeMale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "male"){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeFemale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "female"){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeCustom){
                                                    for(const actor of showCharacter.customActors){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        }
                                    } else if(character instanceof EnsembleSection){
                                        if(character.includeAll){
                                            for(const actor of show!.ensemble!.actors){
                                                actorsUIDs.push(actor.userId)
                                            }
                                        } else if(character.includeMale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeFemale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeCustom){
                                            for(const actor of character.customActors){
                                                actorsUIDs.push(actor.userId)
                                            }
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
                <h2 className='title'>Dances</h2>
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
                                        actorsUIDs.push(character.actor!.userId)
                                    } else if(character instanceof ShowGroup){
                                        for(const showCharacter of character.characters){
                                            if(showCharacter instanceof Character){
                                                actorsUIDs.push(showCharacter.actor!.userId)
                                            } else if(showCharacter instanceof EnsembleSection){
                                                if(showCharacter.includeAll){
                                                    for(const actor of show!.ensemble!.actors){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                } else if(showCharacter.includeMale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "male"){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeFemale){
                                                    for(const actor of show!.ensemble!.actors){
                                                        if(actor.gender == "female"){
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeCustom){
                                                    for(const actor of showCharacter.customActors){
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        }
                                    } else if(character instanceof EnsembleSection){
                                        if(character.includeAll){
                                            for(const actor of show!.ensemble!.actors){
                                                actorsUIDs.push(actor.userId)
                                            }
                                        } else if(character.includeMale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeFemale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeCustom){
                                            for(const actor of character.customActors){
                                                actorsUIDs.push(actor.userId)
                                            }
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
                <div className='conflicts-div'>
                    <h2>Conflicts{viewingDateForConflicts != null ? " on " + viewingDateForConflicts.toDateString() : ""}</h2>
                    <div className='conflicts'>
                        {
                            currentConflicts.map((conflict, index) => {
                                return <ConflictDisplayTile key={index} conflictResponseDate={conflict.conflictResponseDate} actor={conflict.actor}/>
                            })
                        }
                    </div>
                </div>
                <h2 className='title'>Enter Rehersal Information</h2>
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
                        return <option value={location.name} key={index}>{location.name + " (" + location.address + ")"}</option>
                    })
                    }
                </select>
                <br />
                {
                    type == "custom" ? <>
                    <label htmlFor="fullCast">Full Cast: </label>
                    <input type="checkbox" checked={addFullCast} onChange={(e) => {
                        setAddFullCast(e.target.checked)
                    }}/>
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
                                        return <EnsembleSectionTile key={index} ensembleSection={character} isCustom={true} setEnsembleSection={(newEnsembleSection) => {
                                            setCharacters(characters.map((c, i) => {
                                                if (i === index) {
                                                    return newEnsembleSection
                                                }
                                                return c
                                            }))
                                        }} removeEnsembleSection={() => {
                                            setCharacters(characters.filter((_c, i) => i !== index))
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
                                    return <ShowGroupDisplayTile key={index} showGroup={character} canDelete={true} onDelete={() => {
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
                    console.log("Submit")
                    const location: Location = selectedLocation != undefined ? selectedLocation : activity!.locations[0]
                    console.log(startTime)
                    console.log(endTime)
                    const eventDate: EventDate = EventDate.fromBlank(selectedDate!, startTime!, endTime!)
                    console.log(eventDate)
                    const targets: ActivityMember[] = []
                    if(addFullCast){
                        for(const actor of show!.ensemble!.actors){
                            targets.push(ActivityMember.fromBlank(actor.name, actor.userId, actor.FCMToken))
                        }
                        for(const character of show!.characters){
                            if(targets.find((e) => e.memberUid == character.actor!.userId) != undefined){
                                continue
                            }
                            targets.push(ActivityMember.fromBlank(character.actor!.name, character.actor!.userId, character.actor!.FCMToken))
                        }
                    } else {
                        for(const character of characters){
                            if(character instanceof Character){
                                if(targets.find((e) => e.memberUid == character.actor!.userId) != undefined){
                                    continue
                                }
                                targets.push(ActivityMember.fromBlank(character.actor!.name,character.actor!.userId,character.actor!.FCMToken))
                            }
                            if(character instanceof EnsembleSection){
                                if(character.includeAll){
                                
                                    for(const actor of show!.ensemble!.actors){
                                        if(targets.find((e) => e.memberUid == actor.userId) != undefined){
                                            continue
                                        }
                                        targets.push(ActivityMember.fromBlank(actor.name, actor.userId, actor.FCMToken))
                                    }
                                } else if(character.includeMale){
                                    for(const actor of show!.ensemble!.actors){
                                        if(actor.gender == "male"){
                                            if(targets.find((e) => e.memberUid == actor.userId) != undefined){
                                                continue
                                            }
                                            targets.push(ActivityMember.fromBlank(actor.name, actor.userId, actor.FCMToken))
                                        } 
                                    }
                                } else if(character.includeFemale){
                                    for(const actor of show!.ensemble!.actors){
                                        if(actor.gender == "female"){
                                            if(targets.find((e) => e.memberUid == actor.userId) != undefined){
                                                continue
                                            }
                                            targets.push(ActivityMember.fromBlank(actor.name, actor.userId, actor.FCMToken))
                                        }
                                    }
                                } else if(character.includeCustom){
                                    for(const actor of character.customActors){
                                        if(targets.find((e) => e.memberUid == actor.userId) != undefined){
                                            continue
                                        }
                                        targets.push(ActivityMember.fromBlank(actor.name, actor.userId, actor.FCMToken))
                                    }
                                }

                            }
                            if(character instanceof ShowGroup){
                                for(const showCharacter of character.characters){
                                    if(showCharacter instanceof Character){
                                        if(targets.find((e) => e.memberUid == showCharacter.actor!.userId) != undefined){
                                            continue
                                        }
                                        targets.push(ActivityMember.fromBlank(showCharacter.actor!.name,showCharacter.actor!.userId,showCharacter.actor!.FCMToken))
                                    }
                                    if(showCharacter instanceof EnsembleSection){
                                        if(showCharacter.includeAll){
                                            for(const actor of show!.ensemble!.actors){
                                                if(targets.find((e) => e.memberUid == actor.userId) != undefined){
                                                    continue
                                                }
                                                targets.push(ActivityMember.fromBlank(actor.name, actor.userId, actor.FCMToken))
                                            }
                                        } else if(showCharacter.includeMale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    if(targets.find((e) => e.memberUid == actor.userId) != undefined){
                                                        continue
                                                    }
                                                    targets.push(ActivityMember.fromBlank(actor.name, actor.userId, actor.FCMToken))
                                                }
                                            }
                                        } else if(showCharacter.includeFemale){
                                            for(const actor of show!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    if(targets.find((e) => e.memberUid == actor.userId) != undefined){
                                                        continue
                                                    }
                                                    targets.push(ActivityMember.fromBlank(actor.name, actor.userId, actor.FCMToken))
                                                }
                                            }
                                        } else if(showCharacter.includeCustom){
                                            for(const actor of showCharacter.customActors){
                                                if(targets.find((e) => e.memberUid == actor.userId) != undefined){
                                                    continue
                                                }
                                                targets.push(ActivityMember.fromBlank(actor.name, actor.userId, actor.FCMToken))
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                    const newEvent: TheaterEvent = TheaterEvent.fromBlank(name, description, location, eventDate, "activity-theater-event", Date.now(), activityId, showId, characters, targets, type)

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
                            color: "blue",
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
                        color: "blue",
                        id: newEvent.id,
                      

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