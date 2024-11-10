import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './login.css'
import { login, register } from '../../firebase/auth'
import { createUser, getSchools } from '../../firebase/db'
import { DocumentData } from 'firebase/firestore'
import { TeacherData } from '../../constants'


function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [schools, setSchools] = useState<DocumentData[]>([])
    const [selectedSchool, setSelectedSchool] = useState('')
    const [loginStage, setLoginStage] = useState<"accountType" | "login" | "createAccount">("accountType")
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const [fullName, setFullName] = useState('')
    const [schoolCode, setSchoolCode] = useState('')

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
                window.location.href = '/Campus.Connect/'

            }}>Login</button>}
            <button className='actionBtn' onClick={() =>{
                setLoginStage('createAccount')
            }}>Create an Account</button>
        
        </> : <> 
        <h1>Create Account</h1>
        <input type='text' placeholder='Full Name' onChange={(e) => {
            setFullName(e.target.value)
        }}/>
        <input type='text' placeholder='Email' onChange={(e) => {
            setEmail(e.target.value)
        }}/>
        <input type='password' placeholder='Password' onChange={(e) => {
            setPassword(e.target.value)
        }}/>
        <input type='text' placeholder='School Code' onChange={(e) => {
            setSchoolCode(e.target.value)
        }}/>
        { accountType == "teacher" ? <button className='actionBtn' onClick={async() => {

            const school: DocumentData | undefined = schools.find((school: DocumentData) => school.schoolTeacherCode == schoolCode)
            if(!school){
                alert("Invalid School Code")
                return
            }


            const teacher = TeacherData.fromBlank("", school.schoolId, "","teacher", fullName.toLowerCase(), fullName, email)
            const registerResult = await register(email, password)
            if(!registerResult){
                alert("Error creating account")
                return
            }
            teacher.uid = registerResult as string
            await createUser("teacher",teacher)
            localStorage.setItem("accountType", "teacher")
            window.location.href = '/Campus.Connect/'

        }}>Create Account</button> : <> </>}

        </>}
        </div>
    </div>
    
      
    </>
  )
}

export default App
