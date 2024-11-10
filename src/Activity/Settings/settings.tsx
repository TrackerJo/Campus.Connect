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
import { getActivity, updateTheaterActivityRehearsalLocation } from '../../firebase/db'
import DashboardTile from '../../components/Dashboard_Tile'
import { Activity, intToHexColor, TheaterActivity, TheaterEvent, TheaterLocation } from '../../constants'
import AddRehearsalLocationDialog from '../../components/Add_Rehearsal_Location_Dialog'





function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [activity, setActivity] = useState<Activity | null | TheaterActivity>(null)
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const addRehearsalLocationDialogRef = useRef<HTMLDialogElement>(null)
    const [rehearsalLocations, setRehearsalLocations] = useState<TheaterLocation[]>([])

    useEffect(() => {
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
        }
        getActivity(activityId!).then((activity: Activity | null | TheaterActivity) => {
            if (activity) {
                setActivity(activity)
                if(activity instanceof TheaterActivity){
                    setRehearsalLocations(activity.rehearsalLocations)
                }
            }
        });
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }

    }, [])



    return (
        <>
        <div className='title'>
            <h1>
                Activity: {activity?.name}
            </h1>
            <h3>
                Join Code: {activity?.joinCode}
            </h3>
            <h2>Rehearsal Locations</h2>
            <div className='rehearsal-locations'>
                {activity instanceof TheaterActivity ? rehearsalLocations.map((location, index) => {
                    console.log(location)
                    console.log(intToHexColor(location.color))
                    return (
                        <div className='rehearsal-location'>
                            <label htmlFor="" className='rehearsal-location-name'>{location.name}</label>
                            <div  className='rehearsal-location-color' style={{backgroundColor:  intToHexColor(location.color)}}></div>
                        </div>
                    )
                }) : <></>}
            </div>
            <button className='ActionBtn' onClick={(e) => {
                addRehearsalLocationDialogRef.current?.showModal()
            }}>Add Rehearsal Location</button>

            
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = '/Campus.Connect/Activity/?activityId=' + activityId
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

        
        </>
    )
}

export default App
