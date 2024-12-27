
import { useState } from "react";
import {  CreateCustomUserDialogProps, Location, StudentData } from "../constants";

import "./Create_Custom_User_Dialog.css"
import { createCustomUser } from "../api/db";
import { createUserAccount } from "../api/auth";
import { GeoPoint } from "firebase/firestore";

function CreateCustomUserDialog({close, created, dialogRef, activityId}: CreateCustomUserDialogProps){
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [sex, setSex] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    

    return (
        <dialog ref={dialogRef} >
            <div className="CreateCustomUserDialog">
                <h2>Create Student Account</h2>
                <input type='text' placeholder='Full Name' onChange={(e) => {
            setFullName(e.target.value)
        }}/>
        <input type='text' placeholder='Email' onChange={(e) => {
            setEmail(e.target.value)
        }}/>
        <input type='password' placeholder='Password' onChange={(e) => {
            setPassword(e.target.value)
        }}/>
        <input type='text' placeholder='Phone Number' onChange={(e) => {
            setPhoneNumber(e.target.value)
        }}/>
        <select onChange={(e) => {
            setSex(e.target.value)
        }}>
            <option value="" selected>Select your Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
               {isLoading ? <div className="loader"></div> : <button className="ActionBtn" onClick={async () => {
                    setIsLoading(true)
                     if(fullName == ""){
                        alert("Please enter your full name")
                        setIsLoading(false)
                        return
                    }
                    if(email == ""){
                        alert("Please enter your email")
                        setIsLoading(false)
                        return
                    }
                    //Use regex to validate email
                    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                    if(!emailRegex.test(email)){
                        alert("Invalid email")
                        setIsLoading(false)
                        return
                    }
                    if(phoneNumber == ""){
                        alert("Please enter your phone number, if you don't have one, type none")
                        setIsLoading(false)
                        return
                    }
                    setPhoneNumber(phoneNumber.replace(/-/g, ""))
                    setPhoneNumber(phoneNumber.replace(/ /g, ""))
                    setPhoneNumber(phoneNumber.replace(/\(/g, ""))
                    setPhoneNumber(phoneNumber.replace(/\)/g, ""))
                    //check if phone number is valid
                    const phoneRegex = /^\d{10}$/
                    if(phoneNumber != "none" && !phoneRegex.test(phoneNumber)){
                        alert("Invalid phone number (Only include numbers or type none)")
                        setIsLoading(false)
                        return
                    }
        
                    if(password == ""){
                        alert("Please enter a password")
                        setIsLoading(false)
                        return
                    }
        
                    if(password.length < 6){
                        alert("Password must be at least 6 characters")
                        setIsLoading(false)
                        return
                    }
                    if(sex == ""){
                        alert("Please select your sex")
                        setIsLoading(false)
                        return
                    }
                //Create the user
                const schoolId = localStorage.getItem("schoolId")
                const uid = await createUserAccount(email, password);
                const student: StudentData = StudentData.fromBlank(uid, schoolId!, "unknown", 0, "", "student", phoneNumber, sex as "male" | "female", "unknown", fullName.toLowerCase().trim(), fullName.trim(), email.trim(),{}, Location.fromBlank("", "", new GeoPoint(0, 0)));
                await createCustomUser(student, activityId)

                created()
            }
            }>
                Create Account
            </button>}
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

export default CreateCustomUserDialog;