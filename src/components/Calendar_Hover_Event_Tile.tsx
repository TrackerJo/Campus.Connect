import { CalendarHoverEventTileProps } from "../constants";
import './Calendar_Hover_Event_Tile.css'

function CalendarHoverEventTile({event, top, left} : CalendarHoverEventTileProps){
   
    return (
        <div className="calendar-hover-event-tile" style={{top: top, left: left}}>
            <div className="event-name">
                {event.title}
            </div>
            <div className="event-time">
                {event.start?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {event.end?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            
            <div className="event-description">
            Location: {event.extendedProps.location}
            <br />
                {event.extendedProps.description}
            </div>
            
            
           
        </div>
    )
}

export default CalendarHoverEventTile;