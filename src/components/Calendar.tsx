import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { CalendarProps, ContextMenuItem } from '../constants'
import './Calendar.css'
import EventContextMenu from './Custom_Context_Menu'
import { EventClickArg } from '@fullcalendar/core/index.js'
import { useState } from 'react'
import { EventImpl } from '@fullcalendar/core/internal'
import CalendarHoverEventTile from './Calendar_Hover_Event_Tile'



function Calendar({events, dateClick, eventClick, deleteEvent, viewConflicts, editEvent, canOpenContextMenu}:CalendarProps) {
  const [event, setEvent] = useState<EventClickArg>()
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [contextMenuItems, setContextMenuItems] = useState<ContextMenuItem[]>([])
  const [selectedDay, setSelectedDay] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [showHoverMenu, setShowHoverMenu] = useState(false)
  const [hoverMenuTop, setHoverMenuTop] = useState(0)
  const [hoverMenuLeft, setHoverMenuLeft] = useState(0)
  const [hoveredEvent, setHoveredEvent] = useState<EventImpl | null>(null)
  

  function getEvent() : EventClickArg | undefined {
    return event
  }

    return (
        <div className='calendar' onContextMenu={
          (event) => {
            if(!canOpenContextMenu){
              return
            }
            console.log(event)
            if(event.target instanceof HTMLElement && !showContextMenu) {
              if(!event.target.classList.contains('fc-event')){
                console.log('removing event')
                setEvent(undefined)
                setShowContextMenu(false)
              }
            }
            
            console.log(event.target)
            if(!(event.target instanceof HTMLElement)){
              return
            }
            if(event.target.classList.contains('fc-daygrid-day-number')){
              event.preventDefault()
              const day = event.target.getAttribute('aria-label')
              console.log(day)
              console.log(new Date(day!))
              setSelectedDay(day!)
              setContextMenuItems([
                
                {name: 'View Conflicts', onClick: () => {
                  viewConflicts(new Date(day!))
                  setEvent(undefined)
                  setShowContextMenu(false)
                }}
              ])
              setTop(event.clientY)
              setLeft(event.clientX)
              setShowContextMenu(true)
            }
            if(event.target.classList.contains('fc-daygrid-day-top')){
              event.preventDefault()
              const day = event.target.parentElement?.parentElement?.getAttribute('data-date')
              console.log(day)
              console.log(new Date(day!))
              const date = new Date(day!)
              date.setDate(date.getDate() + 1)
              setSelectedDay(day!)
              setContextMenuItems([
                {name: 'View Conflicts', onClick: () => {
                  viewConflicts(date)
                  setEvent(undefined)
                  setShowContextMenu(false)
                }}
              ])
              setTop(event.clientY)
              setLeft(event.clientX)
              setShowContextMenu(true)
            }
            if(event.target.classList.contains('fc-daygrid-day-frame')){
              event.preventDefault()
              const day = event.target.parentElement.getAttribute('data-date')
              console.log(day)
              console.log(new Date(day!))
              const date = new Date(day!)
              date.setDate(date.getDate() + 1)
              setSelectedDay(day!)
              setContextMenuItems([
                {name: 'View Conflicts', onClick: () => {
                  viewConflicts(date)
                  setEvent(undefined)
                  setShowContextMenu(false)
                }}
              ])
              setTop(event.clientY)
              setLeft(event.clientX)
              setShowContextMenu(true)
            }
            if(event.target.classList.contains('fc-timegrid-slot')){
              event.preventDefault()
              const time = event.target.getAttribute('data-time')
              console.log(time)
              let day = 0;
             //Get position of the right click relative to the calendar
             const x = event.clientX - event.target.getBoundingClientRect().left
              const y = event.clientY - event.target.getBoundingClientRect().top
              console.log(x, y)
              if(x > 0 && x < 73){

                day = 0
              } else if(x > 73 && x < 146){

                day = 1
              } else if(x > 146 && x < 219){

                day = 2
              } else if(x > 219 && x < 292){

                day = 3
              } else if(x > 292 && x < 365){

                day = 4
              } else if(x > 365 && x < 438){

                day = 5
              } else if(x > 438 && x < 511){

                day = 6
              }
              //get current date view
              const currentWeek = document.querySelector('#fc-dom-2')?.textContent
              console.log(currentWeek)
              const month = currentWeek?.split(' ')[0]
              const year = currentWeek?.split(', ')[1]
              const startingDay = currentWeek?.split(' ')[1]
              const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
              const selectedDay = new Date(parseInt(year!), months.indexOf(month!), parseInt(startingDay!) + day)
              console.log(month, year, startingDay, selectedDay)


              setContextMenuItems([
                {name: 'View Conflicts', onClick: () => {
                  viewConflicts(selectedDay)
                  setEvent(undefined)
                  setShowContextMenu(false)
                 
                }}
              ])
              setTop(event.clientY)
              setLeft(event.clientX)
              setShowContextMenu(true)
          
              

            }
          }
        }>
        <FullCalendar
        allDaySlot={false}
          
          eventMouseEnter={(arg) => {
            setHoveredEvent(arg.event)
            setShowHoverMenu(true)
            //get postion of the hovered event relative to the screen, account for scroll
            const x = arg.el.getBoundingClientRect().left + arg.el.getBoundingClientRect().width
           //Make the y so its in the middle of the event, the hover menu has a height of 75px, offest so no matter how much the user scrolls the hover menu will be in the middle of the event

            let y = arg.el.getBoundingClientRect().top + (arg.el.getBoundingClientRect().height / 2) + 62.5
            y -= 100 - window.scrollY
            console.log(window.scrollY)

            console.log(x, y)
            setHoverMenuTop(y)
            setHoverMenuLeft(x)
            console.log("Mouse enter")
            if(!canOpenContextMenu){
              return
            }
            window.oncontextmenu = (e) => {
              e.preventDefault()
              setEvent(arg)
              setContextMenuItems([
                {name: 'Edit Event', onClick: () => {
                  editEvent(arg.event)
                  setEvent(undefined)
                }} ,
                {name: 'Delete Event', onClick: () => {

                 
                    
                    deleteEvent(arg.event)
                    setEvent(undefined)
                  
                }},
                {name: 'View Conflicts', onClick: () => {
                 viewConflicts(arg.event.start!)
                 setEvent(undefined)
                }}
              ])
              console.log(arg)
              
              setTop(e.clientY + 20)
              setLeft(e.clientX)
            }
            window.onclick = (e) => {
             //check if the click is outside the context menu
              if(e.target instanceof HTMLElement){
                if(!e.target.classList.contains('contextMenu-button')){
                  console.log('removing event')
                  setEvent(undefined)
                }
            }
          }}}
          
          eventMouseLeave={(arg) => {
            setShowHoverMenu(false)
            setHoveredEvent(null)
            window.oncontextmenu = null
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='timeGridWeek'
          editable={false}
          selectable={false}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          expandRows={true}
          dateClick={dateClick}
          eventClick={eventClick}

          events={events} // alternatively, use the `events` setting to fetch from a feed
        />
        {(event != undefined || showContextMenu) && <EventContextMenu top={top} left={left} items={contextMenuItems} />}
          {showHoverMenu && hoveredEvent && <CalendarHoverEventTile top={hoverMenuTop} left={hoverMenuLeft} event={hoveredEvent} />}
        </div>
    )
}

export default Calendar