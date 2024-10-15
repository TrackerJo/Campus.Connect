import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './show.css'
import Dashboard_Tile from '../../../components/Dashboard_Tile'
import { Show } from '../../../constants'
import { getActivityShow } from '../../../firebase/db'








function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [showId, setShowId] = useState<string>("")
    const [show, setShow] = useState<Show | null>()
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")


    useEffect(() => {
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
        }
        const showId = urlParams.get('showId')
        if (showId) {
            setShowId(showId)
        }
        getActivityShow(activityId!, showId!).then((show) => {
            setShow(show)
            console.log(show)

           
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
               {show?.name}
            </h1>
          
        </div>
        <div className='center'>
            <div className='tiles'>
              
                {accountType == "teacher" ? <> <Dashboard_Tile title={"Assign Roles"} description={"Assign roles to characters"} onClick={() => {
                    //Save show to local storage

                    localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/Show/Assign/?activityId=${activityId}&showId=${showId}`
                } }/>
                { show?.canCreateSchedule && <Dashboard_Tile title={"Create/Edit Schedule"} description={"Create/Edit the rehersal schedule"} onClick={() => {
                    //Save show to local storage

                    localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/Show/CreateSchedule/?activityId=${activityId}&showId=${showId}`
                } }/>}
                <Dashboard_Tile title={"Conflict Form"} description={"Create/View the conflict form"} onClick={() => {
                    //Save show to local storage

                    localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/Show/ConflictForm/?activityId=${activityId}&showId=${showId}`
                } }/> </> : <>{show?.conflictForm && <Dashboard_Tile title={"Conflict Form"} description={"Complete/View the conflict form"} onClick={() => {
                    //Save show to local storage

                    localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/Show/ConflictForm/?activityId=${activityId}&showId=${showId}`
                } }/>} </>}
                
                
            </div>
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = `/Activity/Shows/?activityId=${activityId}`
            }}>
                Back
            </button>
           
           
        </div>
        
        
        </>
    )
}

export default App
