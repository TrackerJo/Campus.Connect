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
import { ActivityEvent, addAlpha, CalendarEvent, ConflictResponse, Event, intToHexColor, StudentData, TeacherData, TheaterEvent } from '../constants'
import { getAllUserEvents, getUserConflictFormResponse, getUserData } from '../api/db'
import Calendar from '../components/Calendar'
import { isLoggedIn, logout } from '../api/auth'
import BackIcon from '../assets/arrow_backward.png'
import DownloadAppDialog from '../components/Download_App_Dialog'





function App() {

    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const [events, setEvents] = useState<(Event | ActivityEvent | TheaterEvent)[]>([])
    const [calendarEvents, setCalendarEvents] = useState<(CalendarEvent)[]>([])
    const [conflictResponse, setConflictResponse] = useState<ConflictResponse | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const downloadAppDialogRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        isLoggedIn(() => {})

        getUserData().then((data) => {
              if (data) {
                if (data instanceof StudentData) {
                  if(data.FCMToken == "" && data.fullname != "Wisdom Pearson" && data.fullname != "Chandler Harmeyer"){
                    downloadAppDialogRef.current!.showModal()
                  }
                } else if(data instanceof TeacherData){
                  if(data.FCMToken == ""){
                    downloadAppDialogRef.current!.showModal()
                  }
                }
              } else {
                      logout()
                    }
            })

        async function fetchActivities() {
        setIsLoading(true)

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
                    description: event.info  +  (partialConflict ? ` \n(Excused from ${partialConflictStartDate!.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} to ${partialConflictEndDate!.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : hasConflict && !partialConflict ? " \n(Fully Excused)" : ''),
                    color: hasConflict && !partialConflict ? 'black' : hasConflict ? 'grey' : isTheaterEvent ? event.rehearsalLocation.color.setAlpha(0.8).toRBGAString() : event.eventType.color.setAlpha(0.8).toRBGAString(),
                    id: event.id!,
                    location: isTheaterEvent ? `${event.rehearsalLocation.name}` : ""
                    
                })
            }
            setCalendarEvents(calendarEventsList)
            console.log(fetchedEvents)
            console.log(calendarEventsList)
            // alert("fetchedActivities")
        setIsLoading(false)

        }
        fetchActivities()
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }
    }, [])



    return (
        <>
        <div className='page-title'>
            <img src={BackIcon} alt="back arrow" onClick={() => {
                window.location.href = '/'
            }} />
            <h1>
                Calendar
            </h1>
        </div>
        {isLoading ?<div className='center'><div className='loader'></div></div> : <div className='center'>
            <Calendar viewEvent={(event) => {}} canPaste={false} canCopy={false} copyEvent={()=>{}}  pasteEvent={()=>{}}  canViewConflicts={false} events={calendarEvents} canOpenContextMenu={false} dateClick={() => {}} deleteEvent={() => {}} viewConflicts={() => {}} editEvent={() => {}} eventIdClick={(eventId) => {
                const event = events.find((event) => event.id === eventId)
                if(event){
                    localStorage.setItem('event', JSON.stringify(event.toMap()))
                    localStorage.removeItem('back')
                    window.location.href = '/Calendar/Event/'
                }
            }}/>
           
        </div>}

        <DownloadAppDialog close={() => {
            downloadAppDialogRef.current!.close()
        }} dialogRef={downloadAppDialogRef}/>
        
        
        </>
    )
}

export default App
