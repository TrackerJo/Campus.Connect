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
import { login } from '../../firebase/auth'
import { getSchools } from '../../firebase/db'
import { DocumentData } from 'firebase/firestore'


function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [schools, setSchools] = useState<DocumentData>([])
    const [selectedSchool, setSelectedSchool] = useState('')
    const [loginStage, setLoginStage] = useState<"accountType" | "login" | "createAccount">("accountType")
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")

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
                window.location.href = '/Dashboard/'

            }}>Login</button>}
            <button className='actionBtn' onClick={() =>{
                setLoginStage('createAccount')
            }}>Create an Account</button>
        
        </> : <> </>}
        </div>
    </div>
    
      
    </>
  )
}

export default App
