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
import { Activity } from '../constants'
import { getActivities } from '../api/db'

import JoinActivityDialog from '../components/Join_Activity_Dialog'
import { isLoggedIn } from '../api/auth'
import CreateActivityDialog from "../components/Create_Activity_Dialog.tsx";




function App() {
    const [activities, setActivities] = useState<Activity[]>([])
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const joinActivityDialogRef = useRef<HTMLDialogElement>(null)
    const createActivityDialogRef = useRef<HTMLDialogElement>(null)
    const [activityJoinCode, setActivityJoinCode] = useState<string>("")
    const [loadingInfo, setLoadingInfo] = useState(true)

    useEffect(() => {
        setLoadingInfo(true)
        isLoggedIn(() => {})
        async function fetchActivities() {
            const fetchedActivities = await getActivities()
            
            setActivities(fetchedActivities)
            console.log(fetchedActivities)
            // alert("fetchedActivities")
            setLoadingInfo(false)

        }
        fetchActivities()
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }

        const urlParams = new URLSearchParams(window.location.search)

        const activityJoinCode = urlParams.get('activityJoinCode')
        if (activityJoinCode) {
            setActivityJoinCode(activityJoinCode)
            joinActivityDialogRef.current!.showModal()
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
                {loadingInfo ? <div className='loader-center'><div className='loader'></div></div> :  activities.map((activity) => {
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
            {accountType == "teacher" && 
            <button className='ActionBtn' onClick={() => {
                createActivityDialogRef.current!.showModal()
            }}>
                Create Activity
            </button>}
            <button className='ActionBtn' onClick={() => {
                joinActivityDialogRef.current!.showModal()
            }}>Join Activity</button>
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = '/'
            }}>
                Back
            </button>
        </div>


            <JoinActivityDialog dialogRef={joinActivityDialogRef} activityJoinCode={activityJoinCode} close={() => {
                joinActivityDialogRef.current!.close()
            }} />

            <CreateActivityDialog dialogRef={createActivityDialogRef} close={() => {
                createActivityDialogRef.current!.close()
            }} />

        
        
        </>
    )
}

export default App
