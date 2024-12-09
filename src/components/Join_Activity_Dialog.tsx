import { useEffect, useState } from "react";
import {   JoinActivityDialogProps } from "../constants";

import "./Join_Activity_Dialog.css"
import { joinActivity, updateUserGender, updateUserPhoneNumber } from "../api/db";

function JoinActivityDialog({dialogRef, close, activityJoinCode}: JoinActivityDialogProps){
    const [activityCode, setActivityCode] = useState<string>("")
    const [needsPhoneNumber, setNeedsPhoneNumber] = useState<boolean>(false)
    const [needsGender, setNeedsGender] = useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [gender, setGender] = useState<"male" | "female">("male")
    const [redirect, setRedirect] = useState<string>("")



    async function handleJoinActivity(activityCode: string) { 
        console.log("Joining activity")
        localStorage.setItem('needsPhoneNumber', "false")
        localStorage.setItem('needsGender', "false")
        const activity = await joinActivity(activityCode)
        setNeedsPhoneNumber(localStorage.getItem('needsPhoneNumber') == "true")
        setNeedsGender(localStorage.getItem('needsGender') == "true")
        if(localStorage.getItem('needsPhoneNumber') == "true" || localStorage.getItem('needsGender') == "true"){
            return
        }
        if(!activity){
            alert("Invalid activity code")
            return
        }
        if(redirect){
            window.location.href = redirect.replace(/~/g, "&")
            return
        }
        
        
        window.location.href = `/Activity/?activityId=${activity.id}`
    }

    useEffect(() => {
        if(activityJoinCode != ""){
            setActivityCode(activityJoinCode)
            handleJoinActivity(activityJoinCode)
        }
        const urlParams = new URLSearchParams(window.location.search)
        const redirect = urlParams.get('redirect')
        if(redirect){
            setRedirect(redirect)
        }
    }, [activityJoinCode])

    return (
        <dialog ref={dialogRef} className="JoinActivityDialog">
            <div className="dialogContents">
            {!needsGender && !needsPhoneNumber ? <> <h2>Join Activity</h2>
                <label htmlFor="">Activity Code</label>
                <input type="text" value={activityCode} onChange={(e) => {
                    setActivityCode(e.target.value)
                }}/>
                
                <button className="ActionBtn" onClick={async() => {
                    
                    await handleJoinActivity(activityCode)
                    
                }}>
                    Join
                </button> </> : <>
                <h2>Activity requires some more information</h2>
                {needsPhoneNumber ? <>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" value={phoneNumber} onChange={(e) => {
                        setPhoneNumber(e.target.value)
                    }}/>
                    <label htmlFor="">If you don't have a phone number type none</label>
                    <br />
                </> : <></>}
                {needsGender ? <>
                    <label htmlFor="">Gender</label>
                    <select name="" id="" value={gender} onChange={(e) => {
                        setGender(e.target.value as "male" | "female")
                    }}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    </> : <></>}
                <button className="ActionBtn" onClick={async() => {
                    console.log("Joining activity")
                    if(needsPhoneNumber){
                        await updateUserPhoneNumber(phoneNumber.replace("none", ""))
                        localStorage.setItem('needsPhoneNumber', "false")
                    }
                    if(needsGender){
                        await updateUserGender(gender)
                        localStorage.setItem('needsGender', "false")
                    }
                    const activity = await joinActivity(activityCode)
                    if(!activity){
                        alert("Invalid activity code")
                        return
                    }
                    if(redirect){
                        window.location.href = redirect.replace(/~/g, "&")
                        return
                    }
                    window.location.href = `/Activity/?activityId=${activity.id}`
                }}>Join</button>
                </>}

                <button className="ActionBtn" onClick={() => {
                    close()
                }
                }>
                    Close
                </button>

            </div>
            
          
            

            
        </dialog>
    );
}

export default JoinActivityDialog;