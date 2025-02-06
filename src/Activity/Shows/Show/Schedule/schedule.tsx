import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './schedule.css'
import {isLoggedIn} from "../../../../api/auth.ts";
import Calendar from "../../../../components/Calendar.tsx";
import {addAlpha, CalendarEvent, DateConflict, intToHexColor, TheaterEvent} from "../../../../constants.ts";
import {deleteActivityTheaterEvent, getActivityTheaterEvents} from "../../../../api/db.ts";










function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [showId, setShowId] = useState<string>("")
    const [theaterEvents, setTheaterEvents] = useState<TheaterEvent[]>([])
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([])
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")


    useEffect(() => {
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
        }
        const showId = urlParams.get('showId')
        if (showId) {
            setShowId(showId)
        }

        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }

        getActivityTheaterEvents(activityId!, showId!).then((events) => {
            setTheaterEvents(events)
            const calendarEvents: CalendarEvent[] = []
            for(const event of events){
                console.log(event)
                const startDate: Date = event.date.from
                console.log(event.date.date)
                //Get the month, day, year from event.date.date
                startDate.setDate(event.date.date.getDate())
                startDate.setMonth(event.date.date.getMonth())
                startDate.setFullYear(event.date.date.getFullYear())
                const endDate: Date = event.date.to
                //Get the month, day, year from event.date.date
                endDate.setDate(event.date.date.getDate())
                endDate.setMonth(event.date.date.getMonth())
                endDate.setFullYear(event.date.date.getFullYear())
                console.log(startDate)
                console.log(endDate)
                console.log(event.rehearsalLocation.color)


                calendarEvents.push({
                    title: event.name,
                    start: startDate.toISOString(),
                    end: endDate.toISOString(),
                    isAllDay: false,
                    interactive: true,
                    color: event.rehearsalLocation.color.setAlpha(0.8).toRBGAString(),
                    description:  event.info,
                    id: event.id,
                    location: event.rehearsalLocation.name

                })
            }
            setCalendarEvents(calendarEvents)
        })
       

    }, [])



    return (
        <>
        <div className='title'>
            <h1>
               Schedule
            </h1>
          
        </div>
        <div className='center'>
            <Calendar canViewConflicts={false} canOpenContextMenu={false}
                      eventIdClick={(eventId) => {
                        const theaterEvent = theaterEvents.find((theaterEvent) => theaterEvent.id === eventId)
                        if(theaterEvent){
                            localStorage.setItem('event', JSON.stringify(theaterEvent.toMap()))
                            localStorage.setItem('back', `/Activity/Shows/Show/Schedule/?activityId=${activityId}&showId=${showId}`)
                            window.location.href = `/Calendar/Event/`
                        }
                      }}
                      events={calendarEvents}
                      editEvent={(event) => {

                      }
                      }
                      viewEvent={(event) => {

                      }}
                      viewConflicts={ (date) => {

                      }}
                      deleteEvent={async (event) => {

                      }}
                      dateClick={(args) => {

            }}/>
            <br />
            <button className={"ActionBtn"} onClick={() => {
                localStorage.setItem('events', JSON.stringify(theaterEvents))

                window.open('/Activity/Shows/Show/Schedule/Print/', "_blank")
            }}>
                Print
            </button>
            <button className='ActionBtn' onClick={() => {
                window.location.href = `/Activity/Shows/Show/?activityId=${activityId}&showId=${showId}`
            }}>
                Back
            </button>
           
           
        </div>
        
        
        </>
    )
}

export default App
