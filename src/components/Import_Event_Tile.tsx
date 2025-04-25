import {  useRef, useState } from "react";
import {  ActivityEvent, ActivityMember, EventDate, ImportEventTileProps } from "../constants";

import "./Import_Event_Tile.css"
import MinusIcon from "../assets/minus.png"

function ImportEventTile({remove, edit, event, activity}: ImportEventTileProps){    
    
    return (
         <div key={event.id} className="event">
                          <div className="event-info">

                            <p>{event.name}</p>
                            {event.eventType != null ? <p>{event.eventType!.name}</p> : <select onChange={(e) => {
                               event.eventType = activity.eventTypes.find(et => et.name === e.target.value)
                               edit(event)
                            }}>
                                <option value="">Select Event Type</option>
                                {activity.eventTypes.map((e, i) => {
                                    return <option key={i} value={e.name}>{e.name}</option>
                                })}
                                </select>}
                            <p>{event.info}</p>
                           {event.location != null ?   <p>{event.location.name}</p> : <select onChange={(e) => {
                              event.location = activity.locations.find(l => l.name === e.target.value)
                                edit(event)
                           }}>
                                <option value="">Select Location</option>
                                {activity.locations.map((l, i) => {
                                    return <option key={i} value={l.name}>{l.name}</option>
                                })}
                                </select>
                           }
                          </div>
                          <div className="event-date-add">
                            <p>{event.date.date.toDateString()}</p>
                            <p>{event.date.from.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })} - {event.date.to.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</p>
                          </div>
                          <div>
                            <img src={MinusIcon} alt="" className="removeIcon" onClick={() => {
                                remove();
                            }}/>
                          </div>


                        </div>
                  
    );
}

export default ImportEventTile;