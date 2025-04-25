import { getFunctions, httpsCallable } from "firebase/functions";
import { ActivityGC, GroupChatMember, Message, NotificationUser } from "../constants";
import { app } from "./init";
import { getUserFCMToken } from "./storage";
const functions = getFunctions(app);

export async function sendGroupChatMessage(message: Message, targets: NotificationUser[], groupChat: ActivityGC, activityName: string) {
    const emails: string[] = [];
    const fcmTokens: string[] = [];
    //Run in parallel
    await Promise.all(targets.map(async (target) => {
        const fcmToken: string | null = await getUserFCMToken(target.userId);
        console.log("FCM Token: ", fcmToken);
        console.log("Email: ", target.email);
        if (fcmToken) {
            fcmTokens.push(fcmToken);
        } else {
            emails.push(target.email);
        }
    }));
    if (emails.length > 0) {
        httpsCallable(functions, "sendEmail")({ emails: emails, activityId: groupChat.activityId, activityName: activityName, groupName: groupChat.name, groupId: groupChat.id, message: message.message, senderName: message.senderName });

    }
    if (fcmTokens.length > 0) {

        httpsCallable(functions, "sendNotifications")({
            targetIds: fcmTokens, title: `${activityName} - ${groupChat.name}`, body: `${message.senderName}: ${message.message}`, thread: groupChat.id, data: {
                type: 'activity-chat',
                activityName: activityName,
                activityId: groupChat.activityId,
                message: message.message,
                senderName: message.senderName,
                gcId: groupChat.id,
                groupName: groupChat.name
            }
        });
    }

}

export async function sendTestNotification() {
    httpsCallable(functions, "sendNotifications")({
        targetIds: ["fzEuZDbqNEEeg2gQ23EuVO:APA91bHalJ6R66I6TN7CHbSlsvLpYPmpWmRyosWrlYjq2iLJvE3TMqwGFk78Tu_1DbG8xYfkNmVa6x3cPmLEhMlJpenEOlImjXn4QG32-vlk5i5PuXDBYbQ", "fYu23Zpk-UUVu1ZMI632st:APA91bGy2GK5zdD9PmAD_kBYVypZoBsiZvk99aIdVy_-26iLwsiI7p_KEyRHtOOps_NiDX_7p8m0sQYUBz4-zmrlQmSZLYZmmHde_RUtpG_AwZuZA-GQnKU"], title: `Hi Chyim`, body: `Don't forget to bring your permission slip for the cedar point trip!`, thread: "website", data: {
            type: 'home',


        }
    });
}

export async function sendNotification({
    title,
    body,
    targetIds,
    thread,
    data,
}: {
    title: string,
    body: string,
    targetIds: NotificationUser[],
    thread: string,
    data: object
}) {
    const emails: string[] = [];
    const fcmTokens: string[] = [];
    await Promise.all(targetIds.map(async (target) => {
        const fcmToken: string | null = await getUserFCMToken(target.userId);
        console.log("FCM Token: ", fcmToken);
        console.log("Email: ", target.email);
        if (fcmToken) {
            fcmTokens.push(fcmToken);
        } else {
            emails.push(target.email);
        }
    }));

    httpsCallable(functions, "sendNotifications")({
        targetIds: fcmTokens, title: title, body: body, thread: thread, data: data
    });
}