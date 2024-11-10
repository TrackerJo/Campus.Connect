import "./Group_Chat_Display_Tile.css";

import { GroupChatDisplayTileProps } from "../constants";

function GroupChatDisplayTile({groupChat, onClick}: GroupChatDisplayTileProps) {
  return (
    <div className="group-chat-display-tile" onClick={onClick}>
      <h1>{groupChat.name}</h1>
      <div className="divider"></div>
      <div className="recent-message-div">
        <h3>{groupChat.lastMessage != null ? groupChat.lastMessage.senderName + ": " +groupChat.lastMessage.message : "No messages"}</h3>
        <h4>{groupChat.lastMessage != null ? new Date(groupChat.lastMessage.timeSent).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ""}</h4>
      </div>
      
    </div>
  );
}

export default GroupChatDisplayTile;
