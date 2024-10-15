import { useEffect, useState } from "react";
import {   JoinActivityDialogProps } from "../constants";

import "./Join_Activity_Dialog.css"
import { joinActivity, updateUserGender, updateUserPhoneNumber } from "../firebase/db";

function JoinActivityDialog({dialogRef, close}: JoinActivityDialogProps){
    const [activityCode, setActivityCode] = useState<string>("")
    const [needsPhoneNumber, setNeedsPhoneNumber] = useState<boolean>(false)
    const [needsGender, setNeedsGender] = useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [gender, setGender] = useState<"male" | "female">("male")

    return (
        <dialog ref={dialogRef}>
            <div className="dialogContents">
            {!needsGender || !needsPhoneNumber ? <> <h2>Join Activity</h2>
                <label htmlFor="">Activity Code</label>
                <input type="text" value={activityCode} onChange={(e) => {
                    setActivityCode(e.target.value)
                }}/>
                
                <button className="ActionBtn" onClick={async() => {
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
                   
                    window.location.href = `/Activity/?activityId=${activity.id}`

                    
                }}>
                    Join
                </button> </> : <>
                <h2>Activity requires some more information</h2>
                {needsPhoneNumber ? <>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" value={phoneNumber} onChange={(e) => {
                        setPhoneNumber(e.target.value)
                    }}/>
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
                        await updateUserPhoneNumber(phoneNumber)
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