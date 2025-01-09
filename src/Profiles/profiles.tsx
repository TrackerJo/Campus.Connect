import {  StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './profiles.css'
import { isLoggedIn } from '../api/auth'
import { Show } from '../constants'
import { getAllUserShows } from '../api/db'
import DashboardTile from '../components/Dashboard_Tile'





function App() {
   
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const [shows, setShows] = useState<Show[]>([])
    const [loading, setLoading] = useState(true)

    
    

    useEffect(() => {
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
      
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
            
        }

        //Get resources
        getAllUserShows().then((shows) => {
            setShows(shows)
            setLoading(false)
        })
       

    }, [])




    return (
        <>
        <div className='title'>
            <h1>
               Actor Profiles
            </h1>
          
        </div>
        <div className='center'> 
            {loading && <div className='loader'></div>}
            <div>
                {shows.map((show, index) => {
                    return (
                        <DashboardTile key={index} header={`${show.activityName} - ${show.name}`} title={`Actor Profile`} description={`View your actor profile for the ${show.name}`} onClick={() => {
                            localStorage.setItem('show-' + show.id, JSON.stringify(show.toMap()))
                            window.location.href = `/Activity/Shows/Show/Actor/?activityId=${show.activityId}&showId=${show.id}`
                        }}/>
                    )
                })}
            </div>
            
           
          
            <button className='ActionBtn' onClick={() => {
                window.location.href = `/`
            }}>
                Back
            </button>
        </div>

        </>
    )
}

export default App
