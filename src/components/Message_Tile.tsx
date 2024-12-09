import "./Message_Tile.css";

import { MessageTileProps } from "../constants";

function MessageTile({ message, isSender }: MessageTileProps) {
  return (
    <div className="message">
        <div className="message__outer">

            <div className="message__inner">
                {isSender ? <></> : <div className="message__spacer"></div>}
                <div className={"message__bubble " + (isSender ? "isSender" : "notSender")}> 
                    <h1 className="message-sender">{message.senderName}</h1>
                    <div className="message-body">
                        <p className="message-text">{message.message}</p>
                        <p className="message-time-sent">{message.timeSent.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                </div>

                {isSender ? <div className="message__spacer"></div> :<></> }
               
            </div>

        </div>
    </div>

    
  );
}

export default MessageTile;