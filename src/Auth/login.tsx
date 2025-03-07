import { StrictMode, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'

import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import {  useState } from 'react'






import './login.css'
import { isLoggedIn, login, logout, register, sendPasswordReset } from '../api/auth'
import { createActivityJoinCode, createCompany, createUser, getCompanies, getIfUserIsInSchool, getSchools } from '../api/db'
import { DocumentData, GeoPoint } from 'firebase/firestore'
import { Company, CompanyType, EmployerData, Location, StudentData, TeacherData } from '../constants'
import AddLocationDialog from '../components/Add_Location_Dialog'



function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [schools, setSchools] = useState<DocumentData[]>([])
    const [companies, setCompanies] = useState<Company[]>([])
    const [selectedCompany, setSelectedCompany] = useState('')
    const [selectedSchool, setSelectedSchool] = useState('')
    const [loginStage, setLoginStage] = useState<"accountType" | "login" | "createAccount" | "forgotPassword">("accountType")
    const [accountType, setAccountType] = useState<"student" | "teacher" | "employer">("student")
    const [createAccountStage, setCreateAccountStage] = useState<"LoginInfo" | "SchoolCode" | "HomeAddress" | "CreateOrJoinCompany"  | "CreateCompany">("LoginInfo")
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [sex, setSex] = useState('')
    const [schoolCode, setSchoolCode] = useState('')
    const [schoolEmail, setSchoolEmail] = useState('')
    const [homeAddress, setHomeAddress] = useState('')
    const [homeCity, setHomeCity] = useState('')
    const [homeState, setHomeState] = useState('')
    const [homeZip, setHomeZip] = useState('')
    const [companyJoinCode, setCompanyJoinCode] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [companyLocation, setCompanyLocation] = useState<Location | undefined>(undefined)
    const [companyType, setCompanyType] = useState<CompanyType | undefined>(undefined)
    const [company, setCompany] = useState<Company | undefined>(undefined)
    const addLocationDialogRef = useRef<HTMLDialogElement>(null)
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('')

    const [skippedHomeAddress, setSkippedHomeAddress] = useState(false)
    const [loadingCreateCompany, setLoadingCreateCompany] = useState(false)
    const [loadingJoinCompany, setLoadingJoinCompany] = useState(false)

    const statesAbb = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
    const statesFull = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

    async function createStudentAccount(school: DocumentData) {
        const location = {lat: 0, lon: 0}
        const fullHomeAddress = ""
        const distanceToSchool = 0
        // if(!skippedHomeAddress){

        //      fullHomeAddress = homeAddress + ", " + homeCity + ", " + homeState + ", " + homeZip
        //      location = await getLatLongFromAddress(fullHomeAddress)
        //      distanceToSchool = getDistanceFromLatLong(location.lat, location.lon, school.location.location.latitude, school.location.location.longitude)
        // }

        // if (!location && !skippedHomeAddress) {
        //     alert("Invalid Address")
        //     return
        // }
        localStorage.setItem("schoolId", school.schoolId)
        console.log(localStorage.getItem("schoolId"))
        console.log("Creating account")
        const uid = await register(email, password)
        console.log(uid)
        if (!uid) {
            alert("Error creating account")
            return
        }
        const homeLocation = Location.fromBlank("home", fullHomeAddress, new GeoPoint(location.lat, location.lon), false)

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
    }

    useEffect(() => {
        
        async function fetechSchools() {
            await isLoggedIn((isLoggedIn: boolean) => {
                if(isLoggedIn && localStorage.getItem("accountType") != null){

                    const urlParams = new URLSearchParams(window.location.search)
                    const redirect = urlParams.get('redirect')
                    if(redirect){
                        window.location.href = redirect.replace(/~/g, "&")
                    } else {
                        window.location.href = '/'
                    }
                }
            })
            const fetechSchools = await getSchools();
            setSchools(fetechSchools)
            const fetchedCompanies = await getCompanies();
            console.log(fetchedCompanies)
            setCompanies(fetchedCompanies)

            const schooldId = localStorage.getItem("schoolId")
            if(schooldId && schooldId != ""){
                setSelectedSchool(schooldId)

            } else {
                setSelectedSchool(fetechSchools[0].schoolId)
            }
            const companyId = localStorage.getItem("companyId")
            if(companyId && companyId != ""){

                setSelectedCompany(companyId)

            } else {
                if(fetchedCompanies.length > 0){
                    console.log(fetchedCompanies[0].id)
                    
                    setSelectedCompany(fetchedCompanies[0].id)
                }
            }
            
            
            
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
            <button className='actionBtn' onClick={() => {
                setAccountType('employer')
                setLoginStage('login')
            }}>Employer</button>
            </> : loginStage == "login" ? <>
             <h1>Login</h1>
            
            <input type='text' placeholder='Email' value={email} onChange={(e) => {
                setEmail(e.target.value)
            }}/>

            <input type='password' placeholder='Password' onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <label htmlFor="" className='forgotPassword' onClick={() => {
                setLoginStage('forgotPassword')
            }}>Forgot Password?</label>
            <label htmlFor="">Select your {accountType != "employer" ? "School" : "Company"}</label>

            {accountType != "employer" ? <select onChange={
                (e) => {
                    setSelectedSchool(e.target.value)
                }
            } value={selectedSchool}>
                {schools.map((school) => {
                    return <option value={school.schoolId}>{school.schoolName}</option>
                })}
            </select> : <select onChange={
                (e) => {
                    setSelectedCompany(e.target.value)
                }
            } value={selectedCompany}>
                {companies.map((company) => {
                    return <option value={company.id}>{company.name}</option>
                })}
            </select>}
            {isLoggingIn ?  <div className="center"><div className="loader"></div></div> : <button className="actionBtn" onClick={async () => {
                setIsLoggingIn(true)
                const checkPassword = await login(email, password, selectedSchool, selectedCompany)
                if(!checkPassword){
                setIsLoggingIn(false)
                alert('Wrong email or password')
                return
                }
                const userId = localStorage.getItem("userId")!
                if(accountType == "employer"){
                    const company = companies.find((company) => company.id == selectedCompany)
                    console.log(company)
                    console.log(selectedCompany)
                    if(!company){
                        setIsLoggingIn(false)
                        alert("Error logging in as employer")
                        return
                    }
                    const inCompany = company.employers.find((employer) => employer.uid == userId)
                    if(!inCompany){
                        setIsLoggingIn(false)
                        alert("You are not in this company")
                        await logout()
                        return
                    }
                } else {
                    let inSchool = false;
                    const school  = schools.find((school) => school.schoolId == selectedSchool)
                    if(!school){
                        setIsLoggingIn(false)
                        alert("Error logging in")
                        return
                    }
                    if(accountType == "teacher"){
                        const teacher = school.teachers.find((teacher) => teacher.uid == userId)
                        if(teacher){
                            inSchool = true
                        }
                    } else {
                        const student = school.students.find((student) => student.uid == userId)
                        if(student){
                            inSchool = true
                        }
                    }
                    if(!inSchool){
                        setIsLoggingIn(false)
                        alert("You are not in this school")
                        await logout()
                        return
                    }
                }
                localStorage.setItem("accountType", accountType);

                console.log("Logging in as " + accountType)
                //Get url params
                const urlParams = new URLSearchParams(window.location.search)
                const redirect = urlParams.get('redirect')
                if(redirect){
                    window.location.href = redirect.replace(/~/g, "&")
                } else {
                    window.location.href = '/'
                }
                setIsLoggingIn(false)


            }}>Login</button>}
            {/* <button className='actionBtn' onClick={() =>{
                setLoginStage('createAccount')
            }}>Create an Account</button> */}
            <p>
            <label htmlFor="" className='info' onClick={() => {

}}>Don't have an account? </label>
 <label htmlFor="" className='ActionText' onClick={() => {
                setLoginStage('createAccount')
}}>Click here to create an account!</label>
            </p>
            <p>
            <label htmlFor="" className='info' onClick={() => {

}}>Signing in as a {accountType}, </label>
 <label htmlFor="" className='ActionText' onClick={() => {
                setLoginStage('accountType')
}}>back?</label>
            </p>
       
        </> : loginStage == "forgotPassword" ? <><h1>Forgot Password</h1>
            
            <input type='text' placeholder='Email' onChange={(e) => {
                setForgotPasswordEmail(e.target.value)
            }}/>

            {isLoggingIn ?  <div className="center"><div className="loader"></div></div> : <button className="actionBtn" onClick={async () => {
                setIsLoggingIn(true)
                const sent = await sendPasswordReset(forgotPasswordEmail)
                if(!sent){
                    alert("Error sending email")
                    setIsLoggingIn(false)
                    return
                }
                setForgotPasswordEmail('')
                alert("Email sent")
                setLoginStage('login')
                setIsLoggingIn(false)


            }}>Send Password Request Email</button>}</> :  accountType == "teacher" ? <> 
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
        
        {isLoggingIn ? <div className={"center"}>
            <div className='loader'></div>
        </div> :
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
            if(sex == "" && accountType != "employer"){
                alert("Please select your sex")
                return
            }
            const school = schools.find((school: DocumentData) => school.schoolDomain == email.split('@')[1])
            if(school != undefined){
                setIsLoggingIn(true)
                createStudentAccount(school)
                return
            }
            if(accountType == "employer"){
                setCreateAccountStage('CreateOrJoinCompany')
                return
            }
            setCreateAccountStage('SchoolCode')
        }}>
            Next
        </button>}
        </> : createAccountStage == "HomeAddress" ? <>
        {/* <h1>Create Account</h1>
        {createAccountHomeAddress()}

        <button onClick={() => {
            
            setCreateAccountStage('SchoolCode')
        }}>
            Next
        </button>
        <label className='skip-text-button' onClick={() => {
            setSkippedHomeAddress(true)
            setCreateAccountStage('SchoolCode')
        }}>Skip</label> */}
        </> : createAccountStage == "CreateOrJoinCompany" ? <><h1>Create Account</h1>{createAccountJoinOrCreateCompany()}</>  : createAccountStage == "CreateCompany" ? <><h1>Create Account</h1>{createAccountCreateCompany()}</> :
         <>
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
            
        }}>
            Create Account
        </button>}

       

            </>

            }
        </div>
    </div>

        <AddLocationDialog addLocation={(location) => {
            setCompanyLocation(location)
            addLocationDialogRef.current!.close()
        }} close={() => {
            addLocationDialogRef.current!.close()
        }} dialogRef={addLocationDialogRef} savedLocations={[]} />
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
            <label htmlFor="">Please enter your full name!</label>
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
       {accountType != "employer" && <select onChange={(e) => {
            setSex(e.target.value)
        }}>
            <option value="" selected>Select your Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>}</>
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

    function createAccountJoinOrCreateCompany() {
        return (
            <>
            <button className='actionBtn' onClick={() => {
                setCreateAccountStage('CreateCompany')
            }}>Create a Company</button>
    
            <p>Or</p>
    
            <input type='text' placeholder='Compnay Join Code' value={companyJoinCode} onChange={(e) => {
                setCompanyJoinCode(e.target.value)
            } }/>
            {loadingJoinCompany ? <div className={"center"}>
            <div className='loader'></div>
        </div>  :<button className='actionBtn' onClick={async () => {
            if(companyJoinCode == ""){
                alert("Please enter a company join code")
                return
            }
            setLoadingJoinCompany(true)
            const company = companies.find((company) => company.joinCode == companyJoinCode)
            if(!company){
                alert("Invalid join code")
                setLoadingJoinCompany(false)
                return
            }
            setCompany(company)
            localStorage.setItem("companyId", company.id)
            const registerResult = await register(email, password)
            if(!registerResult){
                alert("Error creating account: " + registerResult)
                setLoadingJoinCompany(false)
                return
            }
            const employer = new EmployerData({
                uid: registerResult as string,
                companyId: company.id,
                email: email,
                fullname: fullName,
                phoneNumber: phoneNumber,
                accountType: "employer",
                FCMToken: ""


            })
            await createUser("employer", employer)
            localStorage.setItem("accountType", "employer")
            const urlParams = new URLSearchParams(window.location.search)
            const redirect = urlParams.get('redirect')
            if(redirect){
                window.location.href = redirect.replace(/~/g, "&")
            } else {
                window.location.href = '/'
            }
            

            setLoadingJoinCompany(false)

        }}>Join Company</button>}</>
            
        )
    
    }

    function createAccountCreateCompany() {
        return (
            <>
            <h2>Create a company</h2>
            <input type='text' placeholder='Company Name' value={companyName} onChange={(e) => {
                setCompanyName(e.target.value)
            }}/>
            <div className='form-element'>
                <label htmlFor="">Company Location: </label>
                {companyLocation ? <label htmlFor="">{companyLocation.name} ({companyLocation.address})</label> : <label htmlFor="">Location not set</label>}
                <button className='actionBtn' onClick={() => {
                    //setCompanyLocation()
                    addLocationDialogRef.current!.showModal()
                }}>Set Location</button>
            </div>
            <div className='form-element'>
                <label htmlFor="">Company Type: </label>
                <select name="companyType" id="" value={companyType} onChange={(e) => {
                    setCompanyType(e.target.value as CompanyType)
                }}>
                    <option value={undefined} selected>Select Company Type</option>
                    <option value={CompanyType.Job}>Job</option>
                    <option value={CompanyType.Volunteer}>Volunteer</option>
                    
                </select>

            </div>
           
            {loadingCreateCompany ?<div className={"center"}>
            <div className='loader'></div>
        </div>  : <button className='actionBtn' onClick={async () => {
                if(companyName == ""){
                    alert("Please enter a company name")
                    return
                }
                if(!companyLocation){
                    alert("Please set a company location")
                    return
                }
                if(!companyType){
                    alert("Please select a company type")
                    return
                }
                setLoadingCreateCompany(true)
                const company = new Company({
                    name: companyName,
                    location: companyLocation,
                    employers: [],
                    id: "",
                    lastUpdated: Date.now(),
                    type: companyType,
                    joinCode: createActivityJoinCode(companyName),
                    savedLocations: []
                })
                const newCompany = await createCompany(company)
               
                localStorage.setItem("companyId", company.id)
                const registerResult = await register(email, password)
                if(!registerResult){
                    alert("Error creating account: " + registerResult)
                    setLoadingCreateCompany(false)
                    return
                }
                const employer = new EmployerData({
                    uid: registerResult as string,
                    companyId: newCompany.id,
                    email: email,
                    fullname: fullName,
                    phoneNumber: phoneNumber,
                    accountType: "employer",
                    FCMToken: ""


                })
                await createUser("employer", employer)
                localStorage.setItem("accountType", "employer")
                const urlParams = new URLSearchParams(window.location.search)
                const redirect = urlParams.get('redirect')
                if(redirect){
                    window.location.href = redirect.replace(/~/g, "&")
                } else {
                    window.location.href = '/'
                }
                setLoadingCreateCompany(false)
                

                

            }}>Create Company</button>}</>
            
        )
    
    }
}

export default App
