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
import { addEventTypeToActivity, addLocationToActivity, addLocationToSavedLocations, getActivity, getSavedLocations, updateTheaterActivityRehearsalLocation } from '../../api/db'

import { Activity, EventType, intToHexColor, Location, TheaterActivity, TheaterLocation } from '../../constants'
import AddRehearsalLocationDialog from '../../components/Add_Rehearsal_Location_Dialog'
import { isLoggedIn } from '../../api/auth'


import EditIcon from '../../assets/edit.png'
import AddLocationDialog from '../../components/Add_Location_Dialog'
import AddEventTypeDialog from '../../components/Add_Event_Type_Dialog'


function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [activity, setActivity] = useState<Activity | null | TheaterActivity>(null)
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const addRehearsalLocationDialogRef = useRef<HTMLDialogElement>(null)
    const addLocationDialogRef = useRef<HTMLDialogElement>(null)
    const addEventTypeDialogRef = useRef<HTMLDialogElement>(null)
    const [rehearsalLocations, setRehearsalLocations] = useState<TheaterLocation[]>([])
    const [eventTypes, setEventTypes] = useState<EventType[]>([])
    const [savedLocations, setSavedLocations] = useState<Location[]>([])
    const [isLoading, setIsLoading] = useState(true)

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
            <h2>Saved Locations</h2>
            <div className='saved-locations'>
                { activity?.locations.map((location, index) => {
                    console.log(location)

                    return (
                        <div className='saved-location'>
                            <label htmlFor="" className='saved-location-name'>{location.name} ({location.address})</label>
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
                            <img src={EditIcon} alt=""/>

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
                            <img src={EditIcon} alt=""/>

                            </div>
                            
                        </div>
                    )
                }) }
            </div>
            <button className='ActionBtn' onClick={(e) => {
                addEventTypeDialogRef.current?.showModal()
            }}>Add Event Type</button> 
            
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

            <AddLocationDialog dialogRef={addLocationDialogRef} close={() => {
                addLocationDialogRef.current?.close()
            } } addLocation={async function (location: Location) {
                if(savedLocations.find((savedLocation) => savedLocation.name == location.name)){
                    await addLocationToActivity(activityId, location)
                    addLocationDialogRef.current?.close()
                    return
                }
                await addLocationToActivity(activityId, location)
                await addLocationToSavedLocations(location)
                setSavedLocations((locations) => [...locations, location])
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
        </>
    )
}

export default App
