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
import { createShow, getShowTemplates } from '../../../api/db'
import { isLoggedIn } from '../../../api/auth'




function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [shows, setShows] = useState<Show[]>([])
    const [selectedShow, setSelectedShow] = useState<Show>()
    const [isLoading, setIsLoading] = useState<boolean>(false)


    useEffect(() => {
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)

        }
        getShowTemplates().then((shows) => {
            setShows(shows)
            setSelectedShow(shows[0])
            console.log(shows)
        });
       

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
               <select value={selectedShow?.id} onChange={(e) => {
                     const show = shows.find((show) => show.id === e.target.value)
                     if(show){
                          setSelectedShow(show)
                     }
               }}>
                   {shows.map((show) => {
                       return <option key={show.id} value={show.id}>{show.name}</option>
                   })}
                </select>
                {isLoading ? <div className='loader'></div>: <button className='ActionBtn' onClick={async () => {
                    setIsLoading(true)
                    selectedShow!.activityId = activityId
                    const id = await createShow(selectedShow!)
                    selectedShow!.id = id
                    localStorage.setItem('show', JSON.stringify(selectedShow?.toMap()))
                    window.location.href = `/Activity/Shows/CreateTemplate/?activityId=${activityId}&isEditing=true`
                    setIsLoading(false)

                }}>Select Show</button>}
            </div>

            <h1>Or</h1>

            <div className=''>
                <button className='ActionBtn' onClick={() => {
                    window.location.href = `/Activity/Shows/CreateTemplate/?activityId=${activityId}`
                }}>Create new Show Template</button>
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
