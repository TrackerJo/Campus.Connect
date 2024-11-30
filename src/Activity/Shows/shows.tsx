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






import './shows.css'



import DashboardTile from '../../components/Dashboard_Tile'
import { Show } from '../../constants'
import { getActivityShows } from '../../api/db'
import { isLoggedIn } from '../../api/auth'




function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [shows, setShows] = useState<Show[]>([])
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")


    useEffect(() => {
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
            getActivityShows(activityId).then((shows) => {
                setShows(shows)
                console.log(shows)
            });
        }
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }
       

    }, [])



    return (
        <>
        <div className='title'>
            <h1>
                Activity Shows
            </h1>
          
        </div>
        <div className='center'>
            <div className='tiles'>
                {shows.map((show) => {
                    return (
                       <DashboardTile key={show.name} title={show.name} description={"View show"} onClick={() => {
                            window.location.href = `/Activity/Shows/Show/?activityId=${activityId}&showId=${show.id}`
                       } }/>
                    )
                })}
                
            </div>
            <br />
            <div className=''>
               {accountType == "teacher" && <button className='ActionBtn' onClick={() => {
                    window.location.href = `/Activity/Shows/Add/?activityId=${activityId}`
                }}>Add Show</button>}
                <button className='ActionBtn' onClick={() => {
                    window.location.href = `/Activity/?activityId=${activityId}`
                }}>Back</button>
                </div>

        </div>
        
        
        </>
    )
}

export default App
