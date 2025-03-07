/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useEffect, useState, LegacyRef } from 'react'






import './App.css'


import DashboardTile from './components/Dashboard_Tile'
import { isLoggedIn, logout } from './api/auth'
import { fixStudents, fixTeachers, getCurrentUserAsActor, getUserData } from './api/db'
import { StudentData, TeacherData } from './constants'
import DownloadAppDialog from './components/Download_App_Dialog'

function App() {
  // @ts-ignore
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [accountType, setAccountType] = useState<"student" | "teacher"| "employer">("student")
  const downloadAppDialogRef = useRef<HTMLDialogElement>()
  useEffect(() => {

 isLoggedIn(setIsLoggedIn)
    const accountType = localStorage.getItem('accountType')
    if (accountType) {
      setAccountType(accountType as "student" | "teacher"| "employer")
    }

    



  }, [])

 
  return (
    <>
    <div className='title'>
      <h1>Campus Connect Dashboard</h1>

    </div>
      <div className='center'>
        <div className='tiles'>
          { accountType != "employer" ? <>
          <DashboardTile title='Calendar' description='View your calendar' onClick={() => {
            window.location.href = '/Calendar/'
          }}/>
          <DashboardTile title='Activities' description='View your activities' onClick={() => {
            window.location.href = '/Activities/'
          }}/>
          <DashboardTile title='Resources' description='View all your resources' onClick={() => {
            window.location.href = '/Resources/'
          }}/>
          {
              accountType == "student" && <DashboardTile title='Actor Profiles' description='View all your actor profiles' onClick={() => {
                window.location.href = '/Profiles/'
              }
            }/>
          }
           {accountType == "student" && <DashboardTile title='Opportunities' description='View opportunities' onClick={() => {
            window.location.href = '/Opportunities/'
          }}/>}
           </> : <> <DashboardTile title='Company' description='View your company' onClick={() => {
            window.location.href = '/Company/'
          }}/>
          <DashboardTile title='Opportunities' description='View, edit, and add opportunities' onClick={() => {
            window.location.href = '/Opportunities/'
          }}/></>}
         

         

        </div>
        <br />
        <button className='ActionBtn' onClick={async () => {
          await logout()
        }}>Log Out</button>
      </div>
      <DownloadAppDialog dialogRef={downloadAppDialogRef as LegacyRef<HTMLDialogElement>} close={() => {
        downloadAppDialogRef.current!.close()
      }}/>
    </>
  )
}

export default App
