import { CalendarEvent } from "../constants";
import "./Event_Tile.css";

function EventTile({event, onClick}: {event: CalendarEvent, onClick: (eventId: string) => void}) {

    function formatTime(timeStr: string): string {
        const date = new Date(timeStr);
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }
    return (
        <div className="Event-Tile" style={{backgroundColor: event.color}} onClick={() => onClick(event.id)}>
            <div className="left">
                <h1 className="title">{event.title}</h1>
                <p className="description">{event.description}
                    <br />
                    <br />
                Location: {event.location}
                </p>

            </div>
            <div className="right">
                <p>{formatTime(event.start)} - {formatTime(event.end!)}</p>

            </div>
        
        </div>
    );
    }

export default EventTile;