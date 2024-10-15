/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'






import './App.css'
import { CalendarEvent } from './constants'
import Calendar from './components/Calendar'
import Dashboard_Tile from './components/Dashboard_Tile'
import { isLoggedIn, logout } from './firebase/auth'

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    async function checkAuth() {
      await isLoggedIn(setIsLoggedIn)
      // await logout()
    }
    checkAuth()
  }, [])

 
  return (
    <>
    <div className='title'>
      <h1>Campus Connect Dashboard</h1>

    </div>
      <div className='center'>
        <div className='tiles'>
          <Dashboard_Tile title='Calendar' description='View your calendar' onClick={() => console.log('Calendar clicked')}/>
          <Dashboard_Tile title='Activities' description='View your activities' onClick={() => {
            window.location.href = '/Activities/'
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
