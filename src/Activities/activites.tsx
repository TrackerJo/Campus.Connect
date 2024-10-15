import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './activities.css'
import { Activity, Location } from '../constants'
import { getActivities } from '../firebase/db'
import { GeoPoint } from 'firebase/firestore'




function App() {
    const [activities, setActivities] = useState<Activity[]>([])
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")

    useEffect(() => {
        async function fetchActivities() {
            // const fetchedActivities = await getActivities()
            const fetchedActivities = [
                Activity.fromBlank("Activity 1", "Ww94ZmJfzyy2SBIPjVKs", "123", [], [], [], [], [], [], Location.fromEmpty("", "", new GeoPoint(0,0)), "", 0, "activity"),
            ]
            setActivities(fetchedActivities)
            console.log(fetchedActivities)
            // alert("fetchedActivities")

        }
        fetchActivities()
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }
    }, [])



    return (
        <>
        <div className='title'>
            <h1>
                Activities
            </h1>
        </div>
        <div className='center'>
            <div className='activities'>
                {activities.map((activity) => {
                    return (
                        <div className='activity' key={activity.id} onClick={() => {
                            window.location.href = `/Activity/?activityId=${activity.id}`
                        }}>
                            <h1>{activity.name}</h1>
                        </div>
                    )
                })}
            </div>
            <br />
            {accountType == "teacher" ? 
            <button className='ActionBtn' onClick={() => {}}>
                Create Activity
            </button>
            : <button className='ActionBtn' onClick={() => {}}>Join Activity</button>}
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = '/Dashboard/'
            }}>
                Back
            </button>
        </div>
        
        
        </>
    )
}

export default App
