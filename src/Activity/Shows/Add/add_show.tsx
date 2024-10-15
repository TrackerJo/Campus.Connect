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






import './add_show.css'




import { Show } from '../../../constants'




function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [shows, setShows] = useState<Show[]>([])


    useEffect(() => {
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
        }
       

    }, [])



    return (
        <>
        <div className='title'>
            <h1>
                Choose a Show Template
            </h1>
          
        </div>
        <div className='center'>
            <h2>Choose from previous shows</h2>
            <div>
                <input type="text" />
                <span> </span>
                <button>Search</button>
            </div>
            <br />
            <h1>Or</h1>
            <br />
            <div className='add-show'>
                <button onClick={() => {
                    window.location.href = `/Activity/Shows/CreateTemplate/?activityId=${activityId}`
                }}>Create new Show Template</button>
                </div>
        </div>
        
        
        </>
    )
}

export default App
