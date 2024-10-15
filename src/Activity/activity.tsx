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






import './activity.css'
import { Activity, TheaterActivity } from '../constants'
import { getActivity } from '../firebase/db'

import Dashboard_Tile from '../components/Dashboard_Tile'




function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [activity, setActivity] = useState<Activity | null | TheaterActivity>(null)
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")

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
        </div>
        <div className='center'>
            <div className='tiles'>
                {activity?.type == "theater" ? (
                    <Dashboard_Tile title="Shows" description='View all current shows' onClick={() => {
                        window.location.href = `/Activity/Shows/?activityId=${activityId}`
                    }} />
                ) : (
                    <Dashboard_Tile title="Events" description='View all current events' onClick={() => {}} />
                )}
                
            </div>
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = '/Activities/'
            }}>
                Back
            </button>
        </div>
      
        
        </>
    )
}

export default App
