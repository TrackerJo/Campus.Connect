import "./Message_Send_Bar.css";

import { MessageSendBarProps } from "../constants";
import { LegacyRef, useRef } from "react";

function MessageSendBar({ sendMessage }: MessageSendBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="message-send-bar" onKeyDown={(e) => {
        if (e.key === 'Enter') {
          if (inputRef.current!.value.trim() !== '') {
            sendMessage(inputRef.current!.value.trim())
            inputRef.current!.value = ''
          }
        }
    }}>
      <input type="text" placeholder="Type a message..." className="message-input" ref={inputRef as LegacyRef<HTMLInputElement>}/>
      <button onClick={() => {
        sendMessage(inputRef.current!.value.trim())
        inputRef.current!.value = ''
        }} className="message-send-btn">Send</button>
    </div>
  );
}

export default MessageSendBar;