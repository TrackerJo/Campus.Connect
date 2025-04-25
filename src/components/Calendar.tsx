import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { CalendarProps, ContextMenuItem } from '../constants'
import './Calendar.css'
import EventContextMenu from './Custom_Context_Menu'
import { EventClickArg } from '@fullcalendar/core/index.js'
import { useEffect, useState } from 'react'
import { EventImpl } from '@fullcalendar/core/internal'
import CalendarHoverEventTile from './Calendar_Hover_Event_Tile'
import MobileCalendar from './Mobile_Calendar'



function Calendar({events, dateClick, eventClick, deleteEvent, viewConflicts, editEvent, canOpenContextMenu, viewEvent, eventIdClick, isCreating, canViewConflicts, copyEvent, pasteEvent, canPaste, canCopy}:CalendarProps) {
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
  const [isMobile, setIsMobile] = useState(false)


  useEffect(() => {



        const handleResize = () => {
          //Also check for ipad
            if (window.innerWidth < 1366) {
                setIsMobile(true)
            } 
            
            else {
                setIsMobile(false)
            }
        }
        // window.addEventListener('resize', handleResize)
        handleResize()
        // return () => window.removeEventListener('resize', handleResize)  
    }, [])

  function getEvent() : EventClickArg | undefined {
    return event
  }

  function openContextMenu(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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
      const menuItems = []
      if(canViewConflicts){
        menuItems.push({name: 'View Conflicts', onClick: () => {
          viewConflicts(new Date(day!))
          setEvent(undefined)
          setShowContextMenu(false)
        }})
      }

      if(canPaste){
        menuItems.push({name: 'Paste Event', onClick: () => {
          pasteEvent(new Date(day!))
          setEvent(undefined)
          setShowContextMenu(false)
        }})
      }
      setContextMenuItems(menuItems)
      setTop(event.clientY)
      setLeft(event.clientX)
      setShowContextMenu(canViewConflicts || canPaste)
    }
    if(event.target.classList.contains('fc-daygrid-day-top')){
      event.preventDefault()
      const day = event.target.parentElement?.parentElement?.getAttribute('data-date')
      console.log(day)
      console.log(new Date(day!))
      const date = new Date(day!)
      date.setDate(date.getDate() + 1)
      setSelectedDay(day!)
      const menuItems = []
      if(canViewConflicts){
        menuItems.push({name: 'View Conflicts', onClick: () => {
          viewConflicts(date)
          setEvent(undefined)
          setShowContextMenu(false)
        }})
      }
      if(canPaste){
        menuItems.push({name: 'Paste Event', onClick: () => {
          pasteEvent(date)
          setEvent(undefined)
          setShowContextMenu(false)
        }})
      }
      setContextMenuItems(menuItems)
      setTop(event.clientY)
      setLeft(event.clientX)
      setShowContextMenu(canViewConflicts || canPaste)
    }
    if(event.target.classList.contains('fc-daygrid-day-frame')){
      event.preventDefault()
      const day = event.target.parentElement.getAttribute('data-date')
      console.log(day)
      console.log(new Date(day!))
      const date = new Date(day!)
      date.setDate(date.getDate() + 1)
      setSelectedDay(day!)
      const menuItems = []
      if(canViewConflicts){
        menuItems.push({name: 'View Conflicts', onClick: () => {
          viewConflicts(date)
          setEvent(undefined)
          setShowContextMenu(false)
        }})
      }
      if(canPaste){
        menuItems.push({name: 'Paste Event', onClick: () => {
          pasteEvent(date)
          setEvent(undefined)
          setShowContextMenu(false)
        }})
      }
      setContextMenuItems(menuItems)
      setTop(event.clientY)
      setLeft(event.clientX)
      setShowContextMenu(canViewConflicts || canPaste)
    }
    if(event.target.classList.contains('fc-timegrid-slot')){
      event.preventDefault()
      const time = event.target.getAttribute('data-time')
      //get cell index from clicked element  as tr




      console.log(event.target)




      console.log(time)
      let day = 0;
     //Get position of the right click relative to 

    //  const x = event.clientX - event.target.getBoundingClientRect().left
    //   const y = event.clientY - event.target.getBoundingClientRect().top
    //   console.log(x, y)
    //   if(x > 0 && x < 73){

    //     day = 0
    //   } else if(x > 73 && x < 146){

    //     day = 1
    //   } else if(x > 146 && x < 219){

    //     day = 2
    //   } else if(x > 219 && x < 292){

    //     day = 3
    //   } else if(x > 292 && x < 365){

    //     day = 4
    //   } else if(x > 365 && x < 438){

    //     day = 5
    //   } else if(x > 438 && x < 511){

    //     day = 6
    //   }
    // const rect = event.target.getBoundingClientRect()
    // console.log(event.target)
    // const relativeX = event.clientX - rect.left
    
    // // Adjust calculation to account for cell borders and padding
    // //Percentage of the cell that was clicked
    // const cellWidth = rect.width
    // const cellPercentage = relativeX / cellWidth
    // console.log(cellPercentage)
    // //Place a div that shows the percentage of the cell that was clicked that is positioned to cover the amount of the cell that was clicked
    //   //Append the div to the document body
    // const overlay = document.createElement('div')
    // overlay.style.position = 'absolute'

    
    // overlay.style.width = `${cellPercentage * 100}%`
    // overlay.style.height = `${rect.height}px`
    // overlay.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'
    // overlay.style.top = `${rect.top}px`
    // overlay.style.left = `${rect.left}px`
    // overlay.style.zIndex = '1000'
    // document.body.appendChild(overlay)
    // console.log(rect)
    // //Remove the overlay after 1 second
    // setTimeout(() => {
    //   document.body.removeChild(overlay)
    // }
    // , 1000)
    const rect = event.target.getBoundingClientRect()
    const relativeX = event.clientX - rect.left
    const relativeY = event.clientY - rect.top
    console.log('Position relative to td:', relativeX, relativeY)
    
    // Calculate day based on relative position
    const cellWidth = rect.width
     day = Math.floor(relativeX / (cellWidth / 7))
    
    console.log('Day:', day)

      //get current date view
      const currentWeek = document.querySelector('.fc-toolbar-title')?.textContent
      console.log(currentWeek)
      const month = currentWeek?.split(' ')[0]
      const year = currentWeek?.split(', ')[1]
      const startingDay = currentWeek?.split(' ')[1]
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      const selectedDay = new Date(parseInt(year!), months.indexOf(month!), parseInt(startingDay!) + day)
      console.log( selectedDay)

      const menuItems = []
      if(canViewConflicts){
        menuItems.push({name: 'View Conflicts', onClick: () => {
          viewConflicts(selectedDay)
          setEvent(undefined)
          setShowContextMenu(false)
        }})
      }
      if(canPaste){
        menuItems.push({name: 'Paste Event', onClick: () => {
          pasteEvent(selectedDay)
          setEvent(undefined)
          setShowContextMenu(false)
        }})
      }
      setContextMenuItems(menuItems)
      setTop(event.clientY)
      setLeft(event.clientX)
      setShowContextMenu(canViewConflicts || canPaste)
  
      

    }
  }
 

    return (
        <>
        { isMobile && !isCreating ? <MobileCalendar eventClick={(arg) => {
          eventIdClick!(arg)
        }} events={events}/> : 
        <div className='calendar box middle' onContextMenu={
          (event) => {
            event.preventDefault()
            openContextMenu(event)
          }
        }>
        <FullCalendar

        allDaySlot={false}
    
          scrollTime={"15:30:00"}

          eventMouseEnter={(arg) => {
            setHoveredEvent(arg.event)
            setShowHoverMenu(!isMobile)
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
              const menuItems = [ {name: 'View Event', onClick: () => {
                viewEvent(arg.event)
                setEvent(undefined)
            }},
            {name: 'Edit Event', onClick: () => {
              editEvent(arg.event)
              setEvent(undefined)
            }} ,
            {name: 'Delete Event', onClick: () => {

             
                
                deleteEvent(arg.event)
                setEvent(undefined)
              
            }},
            ];
            if(canCopy){
              menuItems.push({name: 'Copy Event', onClick: () => {
                copyEvent(arg.event)
                setEvent(undefined)
              }})
            }
              if(canViewConflicts){
                menuItems.push({name: 'View Conflicts', onClick: () => {
                  viewConflicts(arg.event.start!)
                  setEvent(undefined)
                }})
              }

              setContextMenuItems(menuItems)
              
              console.log(arg)
              
              setTop(e.clientY + 20)
              setLeft(e.clientX)
            }
            window.onclick = (e) => {
             //check if the click is outside the context menu
              if(e.target instanceof HTMLElement){
                if(!e.target.classList.contains('contextMenu-button')){
                  if(isMobile){
                    if(e.target.classList.contains('fc-event')){
                      return
                    }
                  }
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
            right: 'dayGridMonth,timeGridWeek,timeGridDay,timeGridFiveDay'
          }}
          initialView={'timeGridWeek'}
          editable={false}
          selectable={false}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          expandRows={true}
          dateClick={dateClick}
          eventClick={(arg) => {
            if(isMobile){
              setEvent(arg)
              const menuItems = [ {name: 'View Event', onClick: () => {
                viewEvent(arg.event)
                setEvent(undefined)
            }},
            {name: 'Edit Event', onClick: () => {
              editEvent(arg.event)
              setEvent(undefined)
            }} ,
            {name: 'Delete Event', onClick: () => {

             
                
                deleteEvent(arg.event)
                setEvent(undefined)
              
            }},
            {name: 'Add Event', onClick: () => {
              
              eventClick!(arg)
            }}
            ];
            if(canCopy){
              menuItems.push({name: 'Copy Event', onClick: () => {
                copyEvent(arg.event)
                setEvent(undefined)
              }})
            }
              if(canViewConflicts){
                menuItems.push({name: 'View Conflicts', onClick: () => {
                  viewConflicts(arg.event.start!)
                  setEvent(undefined)
                }})
              }

              setContextMenuItems(menuItems)
              
              console.log(arg)
              
              setTop(arg!.jsEvent.clientY + 20)
              setLeft(arg!.jsEvent.clientX)
            
            // window.onclick = (e) => {
            //  //check if the click is outside the context menu
            //   if(e.target instanceof HTMLElement){
            //     if(!e.target.classList.contains('contextMenu-button')){
            //       console.log('removing event')
            //       setEvent(undefined)
            //     }
            // }

              return;
            }
            if(eventIdClick){
              eventIdClick(arg.event.id)
            } else {
              eventClick!(arg)
            }}
          }
          views={
            {timeGridFiveDay: {
              type: 'timeGrid',
              duration: { days: 5 },
              buttonText: '5 day'
            }
          }
          }

          events={events} // alternatively, use the `events` setting to fetch from a feed
        />
        {(event != undefined || showContextMenu) && <EventContextMenu top={top} left={left} items={contextMenuItems} />}
          {showHoverMenu && hoveredEvent && <CalendarHoverEventTile top={hoverMenuTop} left={hoverMenuLeft} event={hoveredEvent} />}
        </div>}
        </>
    )
}

export default Calendar