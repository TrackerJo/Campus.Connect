import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './print.css'
import { ActivityEvent, addAlpha, CalendarEvent, ConflictResponse, Event, intToHexColor, TheaterEvent } from '../../../../../constants.ts'


import { isLoggedIn } from '../../../../../api/auth.ts'





function App() {

   const [events, setEvents] = useState<(TheaterEvent[])>([])
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")

    useEffect(() => {
        isLoggedIn(() => {})

        const events = JSON.parse(localStorage.getItem('events')!)
        if(events){
            for (let i = 0; i < events.length; i++) {
                console.log(events[i])
                events[i] = TheaterEvent.fromMap(events[i])
            }
            setEvents(events)
        }
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }
        setTimeout(() => {
            print()
            window.close()
        }, 500)
    }, [])


    const groupedEvents = events.sort((a, b) => a.date.date.getTime() - b.date.date.getTime()).reduce((acc: { [key: string]: TheaterEvent[] }, event) => {
        const date = event.date.date.toLocaleDateString('en-US', {
            weekday: 'long', 
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })

        if (!acc[date]) {
            acc[date] = []
        }
        acc[date].push(event)
        console.log(acc)
        return acc
    }, {})
    return (
        <>

            <div className='title'>
                <h1>
                    Schedule
                </h1>


            </div>
            <div className='schedule'>
                {Object.keys(groupedEvents).map(date => (
                    <div key={date} className='day'>
                        <h2>{date}</h2>
                        <ul>
                            {groupedEvents[date].map(event => (
                                <li key={event.id} className='event'>
                                    <span className='event-title'>{event.name}: {event.rehearsalLocation.name}</span>

                                    <span className='event-time'>{event.date.from.toLocaleTimeString([],{hour: 'numeric', minute: '2-digit'})} - {event.date.to.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


        </>
    )
}

export default App
