import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './print.css'
import { ActivityEvent, addAlpha, CalendarEvent, ConflictResponse, Event, intToHexColor, TheaterEvent } from '../../../constants.ts'


import { isLoggedIn } from '../../../api/auth.ts'





function App() {

   const [event, setEvent] = useState<(Event | ActivityEvent | TheaterEvent) | null>(null)
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")

    useEffect(() => {
        isLoggedIn(() => {})

        const event = JSON.parse(localStorage.getItem('event')!)
        if(event){
            if(event.type === 'activity') {
                setEvent(ActivityEvent.fromMap(event))
            } else if(event.type === 'activity-theater-event') {
                setEvent(TheaterEvent.fromMap(event))
            } else {
                setEvent(Event.fromMap(event))
            }
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



    return (
        <>

            <div className='title'>
                <h1>
                    {event?.name}
                </h1>

                <h3>{ event?.date.date.toLocaleDateString('en-US', {
            weekday: 'long', 
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })}</h3>
                <h3>{event?.date.from.toLocaleTimeString([], {
                    hour: 'numeric',
                    minute: '2-digit'
                })} - {event?.date.to.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})}</h3>
                <h3>Location: {event instanceof TheaterEvent ? event?.rehearsalLocation.name : event?.location.name}</h3>
                <p>{event?.info}</p>
                <h2>Attendees:</h2>
                <div className={"event-attendees"}>
                    {
                        event instanceof Event ? <p>Everyone</p> :
                            event instanceof ActivityEvent ?
                                event?.generalTarget != "custom" ?
                                    <p>{event?.generalTarget}</p> :
                                    event?.targets.map((attendee) => {
                                        return <div className={"attendee"}>
                                            <h1>{attendee.name}</h1>
                                        </div>
                                    })
                                :
                                event?.targets.map((attendee) => {
                                    return <div className={"attendee"}>
                                        <h1>{attendee.name}</h1>
                                    </div>
                                })
                    }

                </div>
                <br/>

            </div>


        </>
    )
}

export default App
