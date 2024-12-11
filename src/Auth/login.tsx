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






import './login.css'
import { login, register } from '../api/auth'
import { createUser, getSchools } from '../api/db'
import { DocumentData, GeoPoint } from 'firebase/firestore'
import { Location, StudentData, TeacherData } from '../constants'
import { getDistanceFromLatLong, getLatLongFromAddress } from '../api/distance'


function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [schools, setSchools] = useState<DocumentData[]>([])
    const [selectedSchool, setSelectedSchool] = useState('')
    const [loginStage, setLoginStage] = useState<"accountType" | "login" | "createAccount">("accountType")
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const [createAccountStage, setCreateAccountStage] = useState<"LoginInfo" | "SchoolCode" | "HomeAddress">("LoginInfo")
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [sex, setSex] = useState('')
    const [schoolCode, setSchoolCode] = useState('')
    const [schoolEmail, setSchoolEmail] = useState('')
    const [homeAddress, setHomeAddress] = useState('')
    const [homeCity, setHomeCity] = useState('')
    const [homeState, setHomeState] = useState('')
    const [homeZip, setHomeZip] = useState('')

    const [skippedHomeAddress, setSkippedHomeAddress] = useState(false)

    const statesAbb = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
    const statesFull = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

    useEffect(() => {
        async function fetechSchools() {
            const fetechSchools = await getSchools();
            setSchools(fetechSchools)
            setSelectedSchool(fetechSchools[0].schoolId)
        }
        fetechSchools()

            
        }, [])

  return (
    <>
    <div className='center'>
        <div className='Login'>
            {loginStage == "accountType" ? <> 
            <h1>Account Type</h1>
            <button className='actionBtn' onClick={() => {
                setAccountType('student')
                setLoginStage('login')
            }}>Student</button>
            <button className='actionBtn' onClick={() => {
                setAccountType('teacher')
                setLoginStage('login')
            }}>Teacher</button>
            </> : loginStage == "login" ? <>
             <h1>Login</h1>
            
            <input type='text' placeholder='Email' onChange={(e) => {
                setEmail(e.target.value)
            }}/>

            <input type='password' placeholder='Password' onChange={(e) => {
                setPassword(e.target.value)
            }}/>

            <select onChange={
                (e) => {
                    setSelectedSchool(e.target.value)
                }
            }>
                {schools.map((school) => {
                    return <option value={school.schoolId}>{school.schoolName}</option>
                })}
            </select>
            {isLoggingIn ?  <div className="center"><div className="loader"></div></div> : <button className="actionBtn" onClick={async () => {
                setIsLoggingIn(true)
                const checkPassword = await login(email, password, selectedSchool)
                if(!checkPassword){
                setIsLoggingIn(false)
                alert('Wrong email or password')
                return
                }
                localStorage.setItem("accountType", accountType);
                setIsLoggingIn(false)
                //Get url params
                const urlParams = new URLSearchParams(window.location.search)
                const redirect = urlParams.get('redirect')
                if(redirect){
                    window.location.href = redirect.replace(/~/g, "&")
                } else {
                    window.location.href = '/'
                }

            }}>Login</button>}
            <button className='actionBtn' onClick={() =>{
                setLoginStage('createAccount')
            }}>Create an Account</button>
        
        </> : accountType == "teacher" ? <> 
        <h1>Create Account</h1>
        <input type='text' placeholder='Full Name' onChange={(e) => {
            setFullName(e.target.value)
        }}/>
        <input type='text' placeholder='Email' onChange={(e) => {
            setEmail(e.target.value)
        }}/>
        <input type='text' placeholder='Phone Number' onChange={(e) => {
            setPhoneNumber(e.target.value)
        }}/>
        <input type='password' placeholder='Password' onChange={(e) => {
            setPassword(e.target.value)
        }}/>
        <input type='text' placeholder='School Code' onChange={(e) => {
            setSchoolCode(e.target.value)
        }}/>
        { isLoggingIn ? <div className={"center"}>
            <div className='loader'></div>
        </div> : <button className='actionBtn' onClick={async() => {
            setIsLoggingIn(true)
            if(fullName == ""){
                alert("Please enter your full name")
                return
            }
            if(email == ""){
                alert("Please enter your email")
                return
            }
            //Use regex to validate email
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            if(!emailRegex.test(email)){
                alert("Invalid email")
                return
            }
            if(phoneNumber == ""){
                alert("Please enter your phone number, if you don't have one, type none")
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
                return
            }

            if(password == ""){
                alert("Please enter a password")
                return
            }

            if(password.length < 6){
                alert("Password must be at least 6 characters")
                return
            }
            if(schoolCode == ""){
                alert("Please enter your school code")
                return
            }


            const school: DocumentData | undefined = schools.find((school: DocumentData) => school.schoolTeacherCode == schoolCode)
            if(!school){
                alert("Invalid School Code")
                return
            }
            localStorage.setItem("schoolId", school.schoolId)

            const teacher = TeacherData.fromBlank("", school.schoolId,phoneNumber.replace("none", ""), "","teacher", fullName.toLowerCase().trim(), fullName.trim(), email.trim())
            const registerResult = await register(email, password)
            if(!registerResult){
                alert("Error creating account")
                return
            }
            teacher.uid = registerResult as string
            await createUser("teacher",teacher)
            localStorage.setItem("accountType", "teacher")
            const urlParams = new URLSearchParams(window.location.search)
            const redirect = urlParams.get('redirect')
            if(redirect){
                window.location.href = redirect.replace(/~/g, "&")
            } else {
                window.location.href = '/'
            } 
            setIsLoggingIn(false)

        }}>Create Account</button>}

        </> : createAccountStage == "LoginInfo" ? <>
        <h1>Create Account</h1>
        {createAccountUserInfo()}
        
        <button  onClick={() => {
            if(fullName == ""){
                alert("Please enter your full name")
                return
            }
            if(email == ""){
                alert("Please enter your email")
                return
            }
            //Use regex to validate email
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            if(!emailRegex.test(email)){
                alert("Invalid email")
                return
            }
            if(phoneNumber == ""){
                alert("Please enter your phone number, if you don't have one, type none")
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
                return
            }

            if(password == ""){
                alert("Please enter a password")
                return
            }

            if(password.length < 6){
                alert("Password must be at least 6 characters")
                return
            }
            if(sex == ""){
                alert("Please select your sex")
                return
            }
            setCreateAccountStage('HomeAddress')
        }}>
            Next
        </button>
        </> : createAccountStage == "HomeAddress" ? <>
        <h1>Create Account</h1>
        {createAccountHomeAddress()}

        <button onClick={() => {
            
            setCreateAccountStage('SchoolCode')
        }}>
            Next
        </button>
        <label className='skip-text-button' onClick={() => {
            setSkippedHomeAddress(true)
            setCreateAccountStage('SchoolCode')
        }}>Skip</label>
        </> : <>
        <h1>Create Account</h1>
        {createAccountSchoolCode()}
        
        {isLoggingIn ? <div className={"center"}>
            <div className='loader'></div>
        </div> : <button onClick={async () => {
            setIsLoggingIn(true)
            let school: DocumentData | undefined = undefined
            if (schoolCode != "") {
                school = schools.find((school: DocumentData) => school.schoolCode == schoolCode)
            } else {
                school = schools.find((school: DocumentData) => school.schoolDomain == schoolEmail.split('@')[1])
            }
            if (school == undefined) {
                if (schoolCode != "" && schoolEmail != "") {
                    alert("Invalid School Code or a School Email")
                } else if (schoolEmail != "") {
                    alert("Invalid School Email")
                } else {
                    alert("Invalid School Code")
                }
                setIsLoggingIn(false)
                return
            }
            let location = {lat: 0, lon: 0}
            let fullHomeAddress = ""
            let distanceToSchool = 0
            if(!skippedHomeAddress){

                 fullHomeAddress = homeAddress + ", " + homeCity + ", " + homeState + ", " + homeZip
                 location = await getLatLongFromAddress(fullHomeAddress)
                 distanceToSchool = getDistanceFromLatLong(location.lat, location.lon, school.location.location.latitude, school.location.location.longitude)
            }

            if (!location && !skippedHomeAddress) {
                alert("Invalid Address")
                return
            }
            localStorage.setItem("schoolId", school.schoolId)
            console.log("Creating account")
            const uid = await register(email, password)
            if (!uid) {
                alert("Error creating account")
                return
            }
            const homeLocation = Location.fromBlank("home", fullHomeAddress, new GeoPoint(location.lat, location.lon))

            const student = StudentData.fromBlank(uid as string, school.schoolId, "unknown", distanceToSchool, "", "student", phoneNumber.replace("none", ""),sex as "male" | "female" ,"unknown", fullName.toLowerCase().trim(), fullName.trim(), email.trim(), {}, homeLocation)
            await createUser("student", student)
            localStorage.setItem("accountType", "student")
            //get url params
            const urlParams = new URLSearchParams(window.location.search)
            const redirect = urlParams.get('redirect')
            if (redirect) {
                window.location.href = redirect.replace(/~/g, "&")
            } else {
                window.location.href = '/'
            }
            setIsLoggingIn(false)
        }}>
            Create Account
        </button>}

       

            </>

            }
        </div>
    </div>


    </>
  )


    function createAccountHomeAddress() {
        return (<>
            <input type='text' placeholder='Home Address' value={homeAddress} onChange={(e) => {
                setHomeAddress(e.target.value)
            }}/>
            <input type='text' placeholder='City' value={homeCity} onChange={(e) => {
                setHomeCity(e.target.value)
            }}/>
            <select value={homeState} onChange={(e) => {
                setHomeState(e.target.value)
            }}>
                <option value="null" selected>Select your State</option>
                {statesAbb.map((state, index) => {
                    return <option value={state}>{statesFull[index]}</option>
                })}
            </select>
            <input type='text' placeholder='Zip Code' value={homeZip} onChange={(e) => {
                setHomeZip(e.target.value)
            }}/>
            </>
        )

    }
    function createAccountUserInfo() {
        return (
            <>
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
        </select></>
        )

    }
    function createAccountSchoolCode() {
        return (
            <>
            <input type='text' placeholder='School Code' value={schoolCode} onChange={(e) => {
                setSchoolCode(e.target.value)
            } }/>
    
            <p>Or</p>
    
            <input type='text' placeholder='School Email' value={schoolEmail} onChange={(e) => {
                setSchoolEmail(e.target.value)
            } }/></>
        )
    
    }
}

export default App
