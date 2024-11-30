/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'






import './App.css'


import DashboardTile from './components/Dashboard_Tile'
import { isLoggedIn, logout } from './api/auth'

function App() {
  // @ts-ignore
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
            window.location.href = '/Calendar/'
          }}/>
          <DashboardTile title='Activities' description='View your activities' onClick={() => {
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
