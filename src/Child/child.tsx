import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './child.css'




import { isLoggedIn, logout } from '../api/auth'
import { acceptParentChildRequest, getParentMap } from '../api/db'






function App() {
    const [parentName, setParentName] = useState<string>('')
    const [parentUid, setParentUid] = useState<string>('')
    const [childUid, setChildUid] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {

        isLoggedIn(() => {})
        async function fetchData(){
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const parentName = urlParams.get('parentName')  
        const parentUid = urlParams.get('parentUid')
        const childUid = urlParams.get('childUid')
        if(parentName && parentUid && childUid){
            setParentName(parentName.replace(/\+/g, " "))
            setParentUid(parentUid.replace(/\+/g, " "))
            const parentData = await getParentMap(parentUid);
            if(parentData){
                if(!parentData.requestedChildren.find((child) => child.uid === childUid)){
                    alert("This request has already been accepted or rejected")
                    window.location.href = "/"
                }
            }
            setChildUid(childUid.replace(/\+/g, " "))
            const userId = localStorage.getItem('userId')
            if(userId){
                if(userId !== childUid){
                    alert("You are going to be logged out because you are not the intended user, if you believe this is a mistake please log back in and click the link again")
                    window.location.href = "/"
                    logout()
                }
            }
        }
    }
    fetchData()
        

    }, [])

    



    return (
        <>
            <div className="center">
                <h1>Parent Child Add Request</h1>
                
                <h3>{parentName} wants to add you as a child</h3>
                <label htmlFor="">This will allow them to be able to see your schedule</label>
                <br />
                {loading ? <div className="loaderWhite"></div> : 
                    <button className="ActionBtnWhite" onClick={async() => {
                        setLoading(true)
                        await acceptParentChildRequest(parentUid)
                        window.location.href = "/"

                        
                    }}>Accept Request</button>}
            </div>
        
        </>
    )
}

export default App
