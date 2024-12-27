import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import {  useState } from 'react'






import './members.css'
import { Activity, ActivityMember, TheaterActivity } from '../../constants'
import { getActivity } from '../../api/db'


import { isLoggedIn } from '../../api/auth'


import StudentListTile from '../../components/Students_List_Tile'




function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [activity, setActivity] = useState<Activity | null | TheaterActivity>(null)
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")

    useEffect(() => {
        isLoggedIn(() => {})
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

    function SortStudentList(students: (ActivityMember | ActivityMember)[]) {
        return students.sort((a, b) => {
                return a.name.localeCompare(b.name)
        })

    }



    return (
        <>
        <div className='title'>
            <h1>
                Members
            </h1>
            
            
        </div>
        <div className='center'>
          
           <StudentListTile  activityId={activityId} students={activity ? SortStudentList(activity.students) : []} isTeacher={accountType == "teacher"}/>
                    
            <br />
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = '/Activity/?activityId=' + activityId
            }}>
                Back
            </button>
        </div>
      
        
        </>
    )
}

export default App
