/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'






import './App.css'
import { CalendarEvent } from './constants'
import Calendar from './components/Calendar'
import DashboardTile from './components/Dashboard_Tile'
import { isLoggedIn, logout } from './firebase/auth'

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {

 isLoggedIn(setIsLoggedIn)


  }, [])

 
  return (
    <>
    <div className='title'>
      <h1>Campus Connect Dashboard</h1>

    </div>
      <div className='center'>
        <div className='tiles'>
          <DashboardTile title='Calendar' description='View your calendar' onClick={() => {
            window.location.href = '/Campus.Connect/Calendar/'
          }}/>
          <DashboardTile title='Activities' description='View your activities' onClick={() => {
            window.location.href = '/Campus.Connect/Activities/'
          }}/>

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
