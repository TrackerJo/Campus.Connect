import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './calendar.css'
import { ActivityEvent, addAlpha, CalendarEvent, ConflictResponse, Event, intToHexColor, TheaterEvent } from '../constants'
import { getAllUserEvents, getUserConflictFormResponse } from '../firebase/db'
import Calendar from '../components/Calendar'





function App() {

    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const [events, setEvents] = useState<(Event | ActivityEvent | TheaterEvent)[]>([])
    const [calendarEvents, setCalendarEvents] = useState<(CalendarEvent)[]>([])
    const [conflictResponse, setConflictResponse] = useState<ConflictResponse | null>(null)

    useEffect(() => {
        async function fetchActivities() {
            const fetchedEvents = await getAllUserEvents();
            const conflictResponses: ConflictResponse[] = []
            console.log(fetchedEvents)
            setEvents(fetchedEvents)
            const calendarEventsList: CalendarEvent[] = []
            for(const event of fetchedEvents){
                const isTheaterEvent = event instanceof TheaterEvent
                let currentConflictResponse: ConflictResponse | null = null
                if(event instanceof TheaterEvent){
                   //Check if the conflict response is already in the conflictResponses array
                     const newConflictResponse: ConflictResponse | undefined = conflictResponses.find((conflictResponse) => {
                        return conflictResponse.activityId === event.activityId && conflictResponse.showId === event.showId
                     })
                    if(!newConflictResponse){
                        const newConflictResponse = await getUserConflictFormResponse(event.activityId!, event.showId!)
                        if(newConflictResponse){
                            
                        
                            conflictResponses.push(newConflictResponse)
                            currentConflictResponse = newConflictResponse
                        }
                        
                    } else {
                        currentConflictResponse = newConflictResponse
                    }


                }
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
                let hasConflict = false
                let partialConflict = false
                let partialConflictStartDate: Date | null = null
                let partialConflictEndDate: Date | null = null
                console.log(currentConflictResponse)
                if(currentConflictResponse){
                    for(const conflict of currentConflictResponse.dates){
                       //Check that the month, day, year are the same
                       const conflictDate = new Date(conflict.date)
                          if(conflictDate.getDate() === startDate.getDate() && conflictDate.getMonth() === startDate.getMonth() && conflictDate.getFullYear() === startDate.getFullYear()){
                            hasConflict = true
                            if(conflict.canAttend){
                                partialConflict = true
                                partialConflictStartDate = new Date(conflict.from!)
                                partialConflictEndDate = new Date(conflict.to!)

                            }
                          }
                    }
                }

                calendarEventsList.push({
                    title: event.name,
                    start: startDate.toISOString(),
                    end: endDate.toISOString(),
                    
                    isAllDay: false,
                    interactive: true,
                    description: event.info + (partialConflict ? ` \n(Excused from ${partialConflictStartDate!.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} to ${partialConflictEndDate!.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : hasConflict && !partialConflict ? " \n(Fully Excused)" : ''),
                    color: hasConflict && !partialConflict ? 'black' : hasConflict ? 'grey' : isTheaterEvent ? addAlpha(intToHexColor(event.rehearsalLocation.color), 0.8) : 'blue',
                    id: event.id!,
                    
                })
            }
            setCalendarEvents(calendarEventsList)
            console.log(fetchedEvents)
            console.log(calendarEventsList)
            // alert("fetchedActivities")

        }
        fetchActivities()
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }
    }, [])



    return (
        <>
        <div className='title'>
            <h1>
                Calendar
            </h1>
        </div>
        <div className='center'>
            <Calendar events={calendarEvents} canOpenContextMenu={false} dateClick={() => {}} deleteEvent={() => {}} viewConflicts={() => {}} editEvent={() => {}} eventClick={() => {}}/>
            <button className='ActionBtn' onClick={() => {
                window.location.href = '/Campus.Connect/'
            }}>
                Back
            </button>
        </div>
        
        
        </>
    )
}

export default App
