import { getFunctions, httpsCallable } from "firebase/functions";
import { ActivityGC, GroupChatMember, Message, NotificationUser } from "../constants";
import { app } from "./init";
import { getUserFCMToken } from "./storage";
const functions = getFunctions(app);

export async function sendGroupChatMessage(message: Message, targets: NotificationUser[], groupChat: ActivityGC, activityName: string){
    const emails: string[] = [];
    const fcmTokens: string[] = [];
    //Run in parallel
    await Promise.all(targets.map(async (target) => {
        const fcmToken: string | null = await getUserFCMToken(target.userId);
        console.log("FCM Token: ", fcmToken);
        console.log("Email: ", target.email);
        if(fcmToken){
            fcmTokens.push(fcmToken);
        } else {
            emails.push(target.email);
        }
    }));
    if(emails.length > 0){
        httpsCallable(functions, "sendEmail")({emails: emails, activityId: groupChat.activityId, activityName: activityName, groupName: groupChat.name, groupId: groupChat.id, message: message.message, senderName: message.senderName});

    }
    if(fcmTokens.length > 0){

        httpsCallable(functions, "sendNotifications")({targetIds: fcmTokens, title: `${activityName} - ${groupChat.name}`, body: `${message.senderName}: ${message.message}`, thread: groupChat.id, data: {
            type: 'activity-chat',
            activityName: activityName,
            activityId: groupChat.activityId,
            message: message.message,
            senderName: message.senderName,
            gcId: groupChat.id,
            groupName: groupChat.name
        }});
    }

}