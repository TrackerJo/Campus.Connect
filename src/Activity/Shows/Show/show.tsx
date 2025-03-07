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
import DashboardTile from '../../../components/Dashboard_Tile'
import { Show } from '../../../constants'
import { getActivityShow, setActivityShowCreatingSchedule } from '../../../api/db'
import { isLoggedIn } from '../../../api/auth'









function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [showId, setShowId] = useState<string>("")
    const [show, setShow] = useState<Show | null>()
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const [loadingInfo, setLoadingInfo] = useState(true)



    useEffect(() => {
        setLoadingInfo(true)
        isLoggedIn(() => {})
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
            setLoadingInfo(false)

           
        });
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }
       

    }, [])



    return (
        <>
       { loadingInfo ? <div className='center'> <div className="loader"></div></div> : <> <div className='title'>
            <h1>
               {show?.name}
            </h1>
          
        </div>
        <div className='center'>
            <div className='tiles'>
                {accountType == "teacher"  ? <> <DashboardTile title={"Edit Show Template"} description={"Edit the show template"} onClick={() => {
                    //Save show to local storage

                    localStorage.setItem('show', JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/CreateTemplate/?activityId=${activityId}&isEditing=true&showId=${showId}`
                }}/> </> : <></>}
              
                {accountType == "teacher" ? <> <DashboardTile title={"Assign Roles"} description={"Assign roles to characters"} onClick={() => {
                    //Save show to local storage

                    localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/Show/Assign/?activityId=${activityId}&showId=${showId}`
                } }/></> : <></>}
                { accountType == "teacher" && show?.canCreateSchedule && <DashboardTile title={"Create/Edit Schedule"} description={"Create/Edit the rehersal schedule"} onClick={async () => {
                    //Save show to local storage
                    if(show?.isCreatingSchedule){
                         localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                        window.location.href = `/Activity/Shows/Show/CreateSchedule/?activityId=${activityId}&showId=${showId}`
                    } else{
                        await setActivityShowCreatingSchedule(activityId, showId)
                        localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                        window.location.href = `/Activity/Shows/Show/CreateSchedule/?activityId=${activityId}&showId=${showId}`
                    }
                    
                } }/>}
                {accountType == "teacher" ? <><DashboardTile title={"Conflict Form"} description={"Create/View the conflict form"} onClick={() => {
                    //Save show to local storage

                    localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/Show/ConflictForm/?activityId=${activityId}&showId=${showId}`
                } }/> </> : <>{show?.conflictForm && <DashboardTile title={"Conflict Form"} description={"Complete/View the conflict form"} onClick={() => {
                    //Save show to local storage

                    localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/Show/ConflictForm/?activityId=${activityId}&showId=${showId}`
                } }/>}
                 <DashboardTile title={"Schedule"} description={"View Schedule"} onClick={() => {
                    //Save show to local storage
                    localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/Show/Schedule/?activityId=${activityId}&showId=${showId}`
                } }/>
                 </>}
                 {accountType == "student" && <DashboardTile title={"Actor Profile"} description={"View your actor profile"} onClick={() => {
                    //Save show to local storage

                    localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/Show/Actor/?activityId=${activityId}&showId=${showId}`
                }}/>}
                <DashboardTile title={"Resources"} description={"View all resources"} onClick={() => {
                    //Save show to local storage

                    localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
                    window.location.href = `/Activity/Shows/Show/Resources/?activityId=${activityId}&showId=${showId}`
                } }/>
                
                
            </div>
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = `/Activity/Shows/?activityId=${activityId}`
            }}>
                Back
            </button>
           
           
        </div>
        </>
        }
       
        </>
    )
}

export default App
