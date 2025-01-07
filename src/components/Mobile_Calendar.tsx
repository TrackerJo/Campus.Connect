import { useEffect, useState } from "react";
import "./Mobile_Calendar.css";
import { CalendarEvent, Day, MobileCalendarProps } from "../constants";
import EventTile from "./Event_Tile";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ArrowForward from "../assets/arrow_forward.png";
import ArrowBack from "../assets/arrow_backward.png";

function MobileCalendar({events, eventClick}: MobileCalendarProps) {
    const [days, setDays] = useState<Day[]>([])
    const [currentDay, setDay] = useState<Day>()
    const [currentEvents, setEvents] = useState<CalendarEvent[]>([])
    const [viewingMonths, setViewingMonths] = useState<boolean>(true)
    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = { 
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        
        return date.toLocaleDateString('en-US', options);
      }
      
    useEffect(() => {
        const days: Day[] = []
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        for (let i = 0; i < 365; i++) {
            const currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)
            const day: Day = {
                day: currentDate,
                title: formatDate(currentDate)
            }
            
            days.push(day)
        }
        console.log(days)
        setDays(days)
        setDay(days[0])

        //wait 3 seconds to simulate loading
        setTimeout(() => {
            console.log('loaded')
            if(!viewingMonths) return;
            const eventDayDisplays = document.querySelectorAll('.fc-daygrid-day-events')
            eventDayDisplays.forEach((display) => {
                display.replaceWith(display.cloneNode(true));
            })
            const dayTilesCop = document.querySelectorAll('.fc-daygrid-day')
            dayTilesCop.forEach((tile) => {
                    // tile.replaceWith(tile.cloneNode(true));
                    // setViewingMonths(false)
                    
                })
            const dayTiles = document.querySelectorAll('.fc-daygrid-day')
                dayTiles.forEach((tile) => {
                    tile.addEventListener('click', () => {

                        console.log(tile)

                    const date = new Date(tile.getAttribute('data-date'))
                    date.setDate(date.getDate() + 1)
                    console.log(date)
                    const newDate = date;

                    newDate.setHours(0, 0, 0, 0)
                    const newDay = {
                        day: newDate,
                        title: formatDate(newDate)
                    }
                    setDay(newDay)
        
        
                    // setViewingMonths(false)
                })
                    // setViewingMonths(false)
                    
                })
            
        }, 500)

    }, [])

    useEffect(() => {
         //wait 3 seconds to simulate loading
         setTimeout(() => {
            console.log('loaded')
            if(!viewingMonths) return;
            const eventDayDisplays = document.querySelectorAll('.fc-daygrid-day-events')
            eventDayDisplays.forEach((display) => {
                display.replaceWith(display.cloneNode(true));
            })
            const dayTilesCop = document.querySelectorAll('.fc-daygrid-day')
            dayTilesCop.forEach((tile) => {
                    // tile.replaceWith(tile.cloneNode(true));
                    // setViewingMonths(false)
                    
                })
            const dayTiles = document.querySelectorAll('.fc-daygrid-day')
                dayTiles.forEach((tile) => {
                    tile.addEventListener('click', () => {

                        console.log(tile)

                    const date = new Date(tile.getAttribute('data-date'))
                    date.setDate(date.getDate() + 1)
                    console.log(date)
                    const newDate = date;

                    newDate.setHours(0, 0, 0, 0)
                    const newDay = {
                        day: newDate,
                        title: formatDate(newDate)
                    }
                    setDay(newDay)
        
        
                    setViewingMonths(false)
                })
                    // setViewingMonths(false)
                    
                })
            
        }, 500)

    }, [viewingMonths])




    
    const getEvents = (day: Day) => {
        const eventsOnDay = events.filter((event) => {
            const eventDate = new Date(event.start)
            eventDate.setHours(0, 0, 0, 0)
            return eventDate.getTime() === day.day.getTime()
        })
        //Sort the events by start time
        eventsOnDay.sort((a, b) => {
            const aDate = new Date(a.start)
            const bDate = new Date(b.start)
            return aDate.getTime() - bDate.getTime()
        })
        return eventsOnDay
    }
    useEffect(() => {
        if(currentDay){
            setEvents(getEvents(currentDay))
        }
    }, [currentDay])

    
  return (<>
    {viewingMonths ? <div className='calendar box middle'>
        <label>Tap date to view events</label>

        <FullCalendar
        allDaySlot={false}
    
          
        
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: ''
          }}
          initialView={'dayGridMonth'}
          editable={false}
          selectable={false}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          expandRows={true}
          dateClick={(date) => {
            const newDate = date.date;
            newDate.setHours(0, 0, 0, 0)
            const newDay = {
                day: newDate,
                title: formatDate(newDate)
            }
            console.log("SETTING DAY")
            setDay(newDay)


            setViewingMonths(false)
          }}
          
          

          events={events} // alternatively, use the `events` setting to fetch from a feed
        /> </div> : <div className="Mobile_Calendar">
        
        <div className="Top">
            
            <div className="actions">
            <img src={ArrowBack} className="BackwardIcon" onClick={() => {
                if(currentDay){
                    
                        const newDate = new Date(currentDay.day)
                        newDate.setDate(newDate.getDate() - 1)
                        const newDay = {
                            day: newDate,
                            title: formatDate(newDate)
                        }
                        setDay(newDay)
                    
                }
            }}/>
            <h1>{currentDay?.title}</h1>
            <img src={ArrowForward} className="ForwardIcon" onClick={() => {
                if(currentDay){
                    const newDate = new Date(currentDay.day)
                    newDate.setDate(newDate.getDate() + 1)
                    const newDay = {
                        day: newDate,
                        title: formatDate(newDate)
                    }
                    setDay(newDay)
                }
            }}/>
            </div>

            
        </div>
        <div className="Events">
            {currentEvents.map((event) => {
                return (
                   <EventTile event={event} onClick={eventClick}/>
                )
            })}
        </div>
       
    </div>}
   {!viewingMonths && <button className="ActionBtn" onClick={() => {
            setViewingMonths(true)
        }}>Month View</button>}
    </>
  );
}

export default MobileCalendar;