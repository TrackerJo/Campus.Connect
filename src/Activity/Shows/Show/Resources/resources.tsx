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
import { addActivityShowResource, deleteActivityShowResource } from '../../../../api/db'
import { deleteFile } from '../../../../api/storage'
import ResourceTile from '../../../../components/Resource_Tile'
import { isLoggedIn } from '../../../../api/auth'



function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [showId, setShowId] = useState<string>("")
    const [show, setShow] = useState<Show | null>()
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")

    const addResourceDialogRef = useRef<HTMLDialogElement>(null)
    
    

    useEffect(() => {
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
        //Get Show from local storage
        const show = localStorage.getItem('show-' + showId)
        if (show) {
            const showType = Show.fromMap(JSON.parse(show))
            //set show resource activityId and showId
            showType.resources = showType.resources.map((resource) => {
                console.log(resource.toMap())
                resource.activityId = activityId!
                resource.showId = showId!
                return resource
            })

            setShow(showType)
            console.log(showType)
           
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
        localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
        setShow(Show.fromMap(JSON.parse(localStorage.getItem('show-' + showId)!)))
        await deleteActivityShowResource(activityId, showId, resource)
    }


    const editResource =  (resource: Resource) => async (newResource: Resource) => {
        show!.resources = show!.resources.map((r) => {
            if(r.name == resource.name){
                newResource.activityId = activityId
                newResource.showId = showId
                return newResource
            }
            return r
        }
        )
        localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
        setShow(Show.fromMap(JSON.parse(localStorage.getItem('show-' + showId)!)))
        console.log("deleting RESOURCE")
        console.log(resource)
        resource.activityId = activityId
        resource.showId = showId
        await deleteActivityShowResource(resource.activityId, resource.showId, resource)
        console.log("adding RESOURCE")
        newResource.activityId = activityId
        newResource.showId = showId
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
            <div className='resources'>
                {
                    show?.resources.map((resource, index) => {
                        return <ResourceTile key={index} resource={resource} canRemove={accountType === 'teacher'} removeResource={removeResource(resource)} canEdit={accountType=="teacher"} editResource={editResource(resource)}/>
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
                window.location.href = `/Activity/Shows/Show/?activityId=${activityId}&showId=${showId}`
            }}>
                Back
            </button>
        </div>

        <AddResourceDialog dialogRef={addResourceDialogRef} activityId={activityId} close={() => {
            addResourceDialogRef.current?.close()
        }} addResource={async (resource) => {
            console.log('Adding resource')
            console.log(resource)
            await addActivityShowResource(activityId, showId, resource)
            show?.resources.push(resource)
            localStorage.setItem('show-' + showId, JSON.stringify(show?.toMap()))
            setShow(Show.fromMap(JSON.parse(localStorage.getItem('show-' + showId)!)))
            addResourceDialogRef.current?.close()


        } }/>
       
        </>
    )
}

export default App
