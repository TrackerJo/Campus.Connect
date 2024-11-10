import {  LegacyRef, StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './resources.css'
import { Resource, Show } from '../../../../constants'
import AddResourceDialog from '../../../../components/Add_Resource_Dialog'
import { addActivityShowResource, deleteActivityShowResource } from '../../../../firebase/db'
import { deleteFile } from '../../../../firebase/storage'
import ResourceTile from '../../../../components/Resource_Tile'



function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [showId, setShowId] = useState<string>("")
    const [show, setShow] = useState<Show | null>()
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")

    const addResourceDialogRef = useRef<HTMLDialogElement>(null)
    
    

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
        //Get Show from local storage
        const show = localStorage.getItem('show-' + showId)
        if (show) {
            setShow(Show.fromMap(JSON.parse(show)))
            console.log(Show.fromMap(JSON.parse(show)))
           
        }
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
            
        }
       

    }, [])

    const removeResource = (resource: Resource) => async () => {
        if(resource.type != 'link'){
            const schoolId = localStorage.getItem('schoolId')!
            await deleteFile(schoolId, activityId, resource.file!.name)
        }
        show?.resources.splice(show.resources.indexOf(resource), 1)
        localStorage.setItem('show-' + showId, JSON.stringify(show))
        setShow(Show.fromMap(JSON.parse(localStorage.getItem('show-' + showId)!)))
        await deleteActivityShowResource(activityId, showId, resource)
    }



    return (
        <>
        <div className='title'>
            <h1>
               Resources
            </h1>
          
        </div>
        <div className='center'> 
            <div className='resources'>
                {
                    show?.resources.map((resource, index) => {
                        return <ResourceTile key={index} resource={resource} canRemove={accountType === 'teacher'} removeResource={removeResource(resource)}/>
                    })
                }
            </div>
           
            {
                accountType === 'teacher' && <button className='ActionBtn' onClick={() => {
                    addResourceDialogRef.current?.showModal()
                }}>
                    Add Resource
                </button>
            }
            <button className='ActionBtn' onClick={() => {
                window.location.href = `/Campus.Connect/Activity/Shows/Show/?activityId=${activityId}&showId=${showId}`
            }}>
                Back
            </button>
        </div>

        <AddResourceDialog dialogRef={addResourceDialogRef} activityId={activityId} close={() => {
            addResourceDialogRef.current?.close()
        }} addResource={(resource) => {
            addActivityShowResource(activityId, showId, resource)
            show?.resources.push(resource)
            localStorage.setItem('show-' + showId, JSON.stringify(show))

        } }/>
       
        </>
    )
}

export default App
