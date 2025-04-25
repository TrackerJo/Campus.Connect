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
import { addActivityShowResource, deleteActivityShowResource, getAllResources } from '../api/db'
import ResourceTile from '../components/Resource_Tile'
import { Resource, Show } from '../constants'
import show from '../Activity/Shows/Show/show'
import { deleteFile } from '../api/storage'




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

    const removeResource = (resource: Resource) => async () => {
        if(resource.type != 'link'){
            const schoolId = localStorage.getItem('schoolId')!
            await deleteFile(schoolId, resource.activityId, resource.file!.name)
        }
        setResources(resources.filter((r) => r.name != resource.name))
        await deleteActivityShowResource(resource.activityId, resource.showId, resource)

    }

    const editResource =  (resource: Resource) => async (newResource: Resource) => {
        setResources(resources.map((r) => {
            if(r.name == resource.name){
                newResource.activityId = resource.activityId
                newResource.showId = resource.showId
                return newResource
            }
            return r
        }
        ))
        

        await deleteActivityShowResource(resource.activityId, resource.showId, resource)

        await addActivityShowResource(resource.activityId, resource.showId, newResource)
    }






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
                        return <ResourceTile key={index} resource={resource} canRemove={accountType == "teacher"} removeResource={removeResource(resource)} canEdit={accountType=="teacher"} editResource={(editResource(resource))} />
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
