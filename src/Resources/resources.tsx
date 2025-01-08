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






import './resources.css'
import { isLoggedIn } from '../api/auth'
import { getAllResources } from '../api/db'
import ResourceTile from '../components/Resource_Tile'
import { Resource } from '../constants'




function App() {
   
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const [resources, setResources] = useState<Resource[]>([])
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
        getAllResources().then((resources) => {
            setResources(resources)
            setLoading(false)
        })
       

    }, [])




    return (
        <>
        <div className='title'>
            <h1>
               Resources
            </h1>
          
        </div>
        <div className='center'> 
            {loading && <div className='loader'></div>}
            <div className='resources'>
                {
                    resources.map((resource, index) => {
                        return <ResourceTile key={index} resource={resource} canRemove={false} removeResource={() => {}}/>
                    })
                }
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
