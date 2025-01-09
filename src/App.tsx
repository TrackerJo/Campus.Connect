/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'






import './App.css'


import DashboardTile from './components/Dashboard_Tile'
import { isLoggedIn, logout } from './api/auth'
import { fixStudents, fixTeachers } from './api/db'

function App() {
  // @ts-ignore
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [accountType, setAccountType] = useState<"student" | "teacher">("student")
  useEffect(() => {

 isLoggedIn(setIsLoggedIn)
    const accountType = localStorage.getItem('accountType')
    if (accountType) {
      setAccountType(accountType as "student" | "teacher")
    }


  }, [])

 
  return (
    <>
    <div className='title'>
      <h1>Campus Connect Dashboard</h1>

    </div>
      <div className='center'>
        <div className='tiles'>
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
         

         

        </div>
        <br />
        <button className='ActionBtn' onClick={async () => {
          await logout()
        }}>Log Out</button>
      </div>
    </>
  )
}

export default App
