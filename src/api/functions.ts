import { getFunctions, httpsCallable } from "firebase/functions";
import { ActivityGC, GroupChatMember, Message } from "../constants";
import { app } from "./init";
const functions = getFunctions(app);

export function sendGroupChatMessage(message: Message, targets: GroupChatMember[], groupChat: ActivityGC, activityName: string){
    
    httpsCallable(functions, "sendEmail")({emails: targets.map((target) => target.email), activityId: groupChat.activityId, activityName: activityName, groupName: groupChat.name, groupId: groupChat.id, message: message.message, senderName: message.senderName});
}