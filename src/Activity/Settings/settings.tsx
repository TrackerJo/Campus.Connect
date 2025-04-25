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






import './settings.css'
import { addActivityGroup, addEventTypeToActivity, addLocationToActivity, addLocationToSavedLocations, editActivityEventType, editActivityGroup, editActivityLocation, editActivityName, editActivityRehearsalLocation, getActivity, getSavedLocations, updateTheaterActivityRehearsalLocation } from '../../api/db'

import { Activity, ActivityGroup, ActivityMember, ActivityParent, EventType, intToHexColor, Location, TheaterActivity, TheaterLocation } from '../../constants'
import AddRehearsalLocationDialog from '../../components/Add_Rehearsal_Location_Dialog'
import { isLoggedIn } from '../../api/auth'


import EditIcon from '../../assets/edit.png'
import AddLocationDialog from '../../components/Add_Location_Dialog'
import AddEventTypeDialog from '../../components/Add_Event_Type_Dialog'
import EditLocationDialog from '../../components/Edit_Location_Dialog'
import EditEventTypeDialog from '../../components/Edit_Event_Type_Dialog'
import EditRehearsalLocationDialog from '../../components/Edit_Rehearsal_Location_Dialog'
import EditActivityNameDialog from '../../components/Edit_Activity_Name_Dialog'
import EditGroupDialog from '../../components/Edit_Group_Dialog'
import CreateGroupDialog from '../../components/Create_Group_Dialog'



function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [activity, setActivity] = useState<Activity | null | TheaterActivity>(null)
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const addRehearsalLocationDialogRef = useRef<HTMLDialogElement>(null)
    const addLocationDialogRef = useRef<HTMLDialogElement>(null)
    const addEventTypeDialogRef = useRef<HTMLDialogElement>(null)
    const [rehearsalLocations, setRehearsalLocations] = useState<TheaterLocation[]>([])
    const [eventTypes, setEventTypes] = useState<EventType[]>([])
    const [groups, setGroups] = useState<ActivityGroup[]>([])
    const [savedLocations, setSavedLocations] = useState<Location[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [edittingLocation, setEdittingLocation] = useState<Location | undefined>(undefined)
    const [edittingEventType, setEdittingEventType] = useState<EventType | undefined>(undefined)
    const [edittingRehearsalLocation, setEdittingRehearsalLocation] = useState<TheaterLocation | undefined>(undefined)
    const [edittingGroup, setEdittingGroup] = useState<ActivityGroup | undefined>(undefined)
    const editLocationDialogRef = useRef<HTMLDialogElement>(null)
    const editEventTypeDialogRef = useRef<HTMLDialogElement>(null)
    const editRehearsalLocationDialogRef = useRef<HTMLDialogElement>(null)
    const editActivityNameDialogRef = useRef<HTMLDialogElement>(null)
    const editGroupDialogRef = useRef<HTMLDialogElement>(null)
    const createGroupDialoRef = useRef<HTMLDialogElement>(null)
    const [activityStudents, setActivityStudents] = useState<ActivityMember[]>([])
    const [activityParents, setActivityParents] = useState<ActivityParent[]>([])





    useEffect(() => {
        async function getInfo()  {
            setIsLoading(true)
            isLoggedIn(() => {})
            //Get from url params
            const urlParams = new URLSearchParams(window.location.search)
            const activityId = urlParams.get('activityId')
            if (activityId) {
                setActivityId(activityId)
                const savedLocations = await getSavedLocations()
                setSavedLocations(savedLocations)
            }
            const activity = await getActivity(activityId!)
            if (activity) {
                setActivity(activity)
                if(activity instanceof TheaterActivity){
                    setRehearsalLocations(activity.rehearsalLocations)
                }
                setEventTypes(activity.eventTypes)
                setGroups(activity.groups)
               
                setActivityStudents(activity.students)
                setActivityParents(activity.parents)
            }
            const accountType = localStorage.getItem('accountType')
            if (accountType) {
                setAccountType(accountType as "student" | "teacher")
            }
            setIsLoading(false)
        }
        getInfo()
    }, [])



    return (
        <>
        {isLoading ? 
            <div className='center'>
                <div className="loader"></div>
            </div>
         : <>
        <div className='title'>
            <h1>
                Activity: {activity?.name}
            </h1>
            <h3>
                Join Code: {activity?.joinCode}
            </h3>
            <button className='ActionBtn' onClick={() => {
                editActivityNameDialogRef.current?.showModal()
            }}>Edit Activity Name</button>
            <h2>Saved Locations</h2>
            <div className='saved-locations'>
                { activity?.locations.map((location, index) => {
                    console.log(location)

                    return (
                        <div className='saved-location' key={index}>
                            <label htmlFor="" className='saved-location-name'>{location.name} ({location.address})</label>
                            <img src={EditIcon} alt="edit" className='saved-location-edit' onClick={() => {
                                setEdittingLocation(location)
                                editLocationDialogRef.current?.showModal()
                            }}/>
                        </div>
                    )
                }) }
            </div>
            <button className='ActionBtn' onClick={(e) => {
                addLocationDialogRef.current?.showModal()
            }}>Add Location</button>
            {activity instanceof TheaterActivity && <>
            <h2>Rehearsal Locations</h2>
            <div className='rehearsal-locations'>
                { rehearsalLocations.map((location, index) => {

                    console.log(location.color)
                    return (
                        <div className='rehearsal-location'>
                            <label htmlFor="" className='rehearsal-location-name'>{location.name}</label>
                            <div className='rehearsal-location-right'>
                            <div  className='rehearsal-location-color' style={{backgroundColor:  location.color.toRBGAString()}}></div>
                            <img src={EditIcon} alt="" onClick={(e) => {
                                setEdittingRehearsalLocation(location)
                                editRehearsalLocationDialogRef.current?.showModal()
                            }}/>

                            </div>
                            
                        </div>
                    )
                }) }
            </div>
            <button className='ActionBtn' onClick={(e) => {
                addRehearsalLocationDialogRef.current?.showModal()
            }}>Add Rehearsal Location</button> </>}
            <h2>Event Types</h2>
            <div className='event-types'>
                { eventTypes.map((type, index) => {


                    return (
                        <div className='event-type'>
                            <label htmlFor="" className='event-type-name'>{type.name}</label>
                            <div className='event-type-right'>
                            <div  className='event-type-color' style={{backgroundColor:  type.color.toRBGAString()}}></div>
                            <img src={EditIcon} alt="" onClick={() => {
                                setEdittingEventType(type)
                                editEventTypeDialogRef.current?.showModal()
                            }}/>

                            </div>
                            
                        </div>
                    )
                }) }
            </div>

            <button className='ActionBtn' onClick={(e) => {
                addEventTypeDialogRef.current?.showModal()
            }}>Add Event Type</button> 
            
            <br />
            <h2>Groups</h2>
            <div className='event-types'>
                { groups.map((type, index) => {


                    return (
                        <div className='event-type'>
                            <label htmlFor="" className='event-type-name'>{type.groupName}</label>
                            <div className='event-type-right'>
                            <div  className='event-type-color' style={{backgroundColor:  type.groupColor.toRBGAString()}}></div>
                            <img src={EditIcon} alt="" onClick={() => {

                                setEdittingGroup(type)
                                editGroupDialogRef.current?.showModal()
                            }}/>

                            </div>
                            
                        </div>
                    )
                }) }
            </div>
            <button className='ActionBtn' onClick={(e) => {
                createGroupDialoRef.current?.showModal()
            }
            }>Create Group</button>
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = '/Activity/?activityId=' + activityId
            }}>
                Back
            </button>
        </div>
            
            <AddRehearsalLocationDialog dialogRef={addRehearsalLocationDialogRef} addRehearsalLocation={async (location) => {
                if(activity instanceof TheaterActivity){
                    const rehearsalLocations = [...activity.rehearsalLocations]
                    rehearsalLocations.push(location)
                    activity.rehearsalLocations = rehearsalLocations
                    console.log(rehearsalLocations)
                    setRehearsalLocations(rehearsalLocations)
                    await updateTheaterActivityRehearsalLocation(activityId, rehearsalLocations)
                    addRehearsalLocationDialogRef.current?.close()

                }
            }} close={() => {
                addRehearsalLocationDialogRef.current?.close()
            }}/>

            <AddLocationDialog existingLocations={activity?.locations ?? []} dialogRef={addLocationDialogRef} close={() => {
                addLocationDialogRef.current?.close()
            } } addLocation={async function (location: Location) {
                if(savedLocations.find((savedLocation) => savedLocation.name == location.name)){
                    await addLocationToActivity(activityId, location)
                    addLocationDialogRef.current?.close()
                    activity!.locations.push(location)
                    setActivity(activity)
                    return
                }
                
                await addLocationToActivity(activityId, location)
                await addLocationToSavedLocations(location)
                setSavedLocations((locations) => [...locations, location])
                activity!.locations.push(location)
                setActivity(activity)
                addLocationDialogRef.current?.close()


            } } savedLocations={savedLocations.filter((location) => !activity!.locations.find((aLocation) => location.name == aLocation.name))}/>

            <AddEventTypeDialog dialogRef={addEventTypeDialogRef} close={() => {
                addEventTypeDialogRef.current?.close()
            }} addEventType={async (eventType: EventType) => {
                const eventTypes = [...activity!.eventTypes]
                eventTypes.push(eventType)
                setEventTypes(eventTypes)
                await addEventTypeToActivity(activityId, eventType)
                addEventTypeDialogRef.current?.close()
            }} eventTypes={activity!.eventTypes}/>
        </>}
        <EditLocationDialog dialogRef={editLocationDialogRef} close={() => {
            editLocationDialogRef.current?.close()
        }} location={edittingLocation} editLocation={async (location) => {
            const locations = [...activity!.locations]
            const index = locations.findIndex((aLocation) => aLocation.name == edittingLocation!.name)

           
            activity!.locations.splice(index, 1)
            activity!.locations.push(location)
            console.log(activity!)
            await editActivityLocation(activityId, location, edittingLocation!)
            setActivity(activity)
            window.location.reload()
            
            editLocationDialogRef.current?.close()
        }}/>
        <EditEventTypeDialog eventTypes={activity?.eventTypes ?? []} dialogRef={editEventTypeDialogRef} close={() => {
            editEventTypeDialogRef.current?.close()
        }} eventType={edittingEventType} editEventType={async (eventType) => {
            const eventTypes = [...activity!.eventTypes]
            const index = eventTypes.findIndex((aEventType) => aEventType.name == edittingEventType!.name)

           
            activity!.eventTypes.splice(index, 1)
            activity!.eventTypes.push(eventType)
            console.log(activity!)
            await editActivityEventType(activityId, eventType, edittingEventType!, activity instanceof TheaterActivity)
            setActivity(Activity.fromMap(activity!.toMap()))
            window.location.reload()

            
            editEventTypeDialogRef.current?.close()
        }}/>
        {activity instanceof TheaterActivity && <EditRehearsalLocationDialog rehearsalLocations={activity.rehearsalLocations} dialogRef={editRehearsalLocationDialogRef} close={() => {
            editRehearsalLocationDialogRef.current?.close()
        }} rehearsalLocation={edittingRehearsalLocation} editRehearsalLocation={async (rehearsalLocation) => {
            const rehearsalLocations = [...activity!.rehearsalLocations]
            const index = rehearsalLocations.findIndex((aRehearsalLocation) => aRehearsalLocation.name == edittingRehearsalLocation!.name)

           
            activity!.rehearsalLocations.splice(index, 1)
            activity!.rehearsalLocations.push(rehearsalLocation)
            console.log(activity!)
            await editActivityRehearsalLocation(activityId, rehearsalLocation, edittingRehearsalLocation!)
            setActivity(activity)
            window.location.reload()
            
            editRehearsalLocationDialogRef.current?.close()
        }}/>}
        <EditActivityNameDialog dialogRef={editActivityNameDialogRef} close={() => {
            editActivityNameDialogRef.current?.close()
        } } activityName={activity?.name} editActivityName={async (name) => {
            await editActivityName(activityId, name)
            setActivity((activity) => {
                if(activity){
                    activity.name = name
                    return activity
                }
                return null
            })
            window.location.reload()
            editActivityNameDialogRef.current?.close()
        }
        }/>
        <EditGroupDialog dialogRef={editGroupDialogRef} activityParents={activityParents} activityStudents={activityStudents} groups={groups} close={() => {
            editGroupDialogRef.current?.close()
        }
        } group={edittingGroup} editGroup={async (group) => {
            const groups = [...activity!.groups]
            const index = groups.findIndex((aGroup) => aGroup.groupName == edittingGroup!.groupName)

           
            activity!.groups.splice(index, 1)
            activity!.groups.push(group)
            console.log(activity!)
            await editActivityGroup(activityId, group, edittingGroup!)
            setActivity(Activity.fromMap(activity!.toMap()))
            window.location.reload()

            
            editGroupDialogRef.current?.close()
        }
        }/>
        <CreateGroupDialog dialogRef={createGroupDialoRef} close={() => {
            createGroupDialoRef.current?.close()
        }
        } groups={groups} activityParents={activityParents} activityStudents={activityStudents} createGroup={async (group) => {
            const groups = [...activity!.groups]
            groups.push(group)
            setGroups(groups)
            await addActivityGroup(activityId, group)
            createGroupDialoRef.current?.close()
        }
        }/>
        </>
    )
}

export default App
