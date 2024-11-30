import { addDoc, arrayRemove, arrayUnion, deleteDoc, DocumentData, FieldValue, getDocs, getFirestore, limit, onSnapshot, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore";
import { app } from "./init";
import { collection, doc, getDoc } from "firebase/firestore"; 
import {
    Act,
    Activity,
    ActivityEvent,
    ActivityGC,
    ActivityMember,
    Actor,
    ConflictForm,
    ConflictResponse,
    Event,
    EventType, hexToInt,
    Message,
    MiniUser,
    Resource,
    Show,
    StudentData,
    TeacherData,
    TheaterActivity,
    Location,
    TheaterEvent,
    TheaterLocation
} from "../constants";
import { getCurrentUserId, reauthenticateUser } from "./auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { Stream } from "stream";
import { on } from "events";
const functions = getFunctions(app);
const db = getFirestore(app);

const schoolsCollection = collection(db, "schools");

export const getSchool = async (schoolId: string) => {
    const schoolDoc = doc(schoolsCollection, schoolId);
    const schoolSnap = await getDoc(schoolDoc);
    return schoolSnap.data();
};

export const getSchools = async () => {
    const schoolsSnapshot = await getDocs(schoolsCollection);
    const schools: DocumentData[] = [];
    schoolsSnapshot.forEach((doc) => {
        schools.push(doc.data());
    });
    return schools;
}

export const getActivities = async (): Promise<Activity[]> => {
    //Get school id from local storage
    const accountType = localStorage.getItem("accountType");
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return [];
    const schoolDoc = doc(db, "schools", schoolId);
    if(accountType == "student"){
        const activitiesSnapshot = query(collection(schoolDoc, "activities"), where("studentUids", "array-contains", getCurrentUserId()));
        const activities: Activity[] = [];
        const activitiesSnapshotData = await getDocs(activitiesSnapshot);
        activitiesSnapshotData.forEach((doc) => {
            activities.push(Activity.fromMap(doc.data()));
        });
        return activities;

    } else {
        const activitiesSnapshot = query(collection(schoolDoc, "activities"), where("teacherUids", "array-contains", getCurrentUserId()));
        const activities: Activity[] = [];
        const activitiesSnapshotData = await getDocs(activitiesSnapshot);
        activitiesSnapshotData.forEach((doc) => {
            console.log(doc.data());
            activities.push(Activity.fromMap(doc.data()));
        });
        return activities;
    }
    
}

export async function getActivity(activityId: string): Promise<Activity | TheaterActivity | null> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const activitySnap = await getDoc(activityDoc);
    if (!activitySnap.exists()) return null;
    if (activitySnap.data().type == "theater") {
        return TheaterActivity.fromMap(activitySnap.data());
    }
    return Activity.fromMap(activitySnap.data());
}

export async function createShow(show: Show): Promise<string> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return "";
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), show.activityId);
    const showsCol = collection(activityDoc, "shows");
    const ref = await addDoc(showsCol, show.toMap());
    show.id = ref.id;
    await updateDoc(ref, {
        id: ref.id
    });
    return ref.id;

}

export async function editShow(show: Show): Promise<void> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), show.activityId);
    const showDoc = doc(collection(activityDoc, "shows"), show.id);
    await updateDoc(showDoc, show.toMap());
}

export async function addShowTemplate(showTemplate: Show) {
    await reauthenticateUser("cmurphy@gmail.com", "123456");
    const collectionRef = collection(db, "showTemplates");
    const ref = await addDoc(collectionRef, showTemplate.toMap());
    showTemplate.id = ref.id;
    await updateDoc(ref, {
        id: ref.id
    });
}

export async function getActivityShow(activityId: string, showId: string): Promise<Show | null> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    const showSnap = await getDoc(showDoc);
    if (!showSnap.exists()) return null;
    console.log(showSnap.data());
    return Show.fromMap(showSnap.data());
}

export async function getActivityActors(activityId: string): Promise<Actor[]> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return [];
    console.log("Getting actors for activity " + schoolId);
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const activityDocSnap = await getDoc(activityDoc);
    if (!activityDocSnap.exists()) return [];
    const actors: Actor[] = [];
    activityDocSnap.data().students.forEach((actor: Actor) => {
        actors.push(Actor.fromMap(actor));
    });
    return actors;
}

export async function setActivityShow(activityId: string, showId: string, show: Show) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    await setDoc(showDoc, show.toMap());
}

export async function addActivityTheaterEvent(theaterEvent: TheaterEvent) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), theaterEvent.activityId);
    const eventsCol = collection(activityDoc, "events");
    const ref = await addDoc(eventsCol, theaterEvent.toMap());
    theaterEvent.id = ref.id;
    await updateDoc(ref, {
        id: ref.id
    });
}

export async function getActivityTheaterEvents(activityId: string, showId: string): Promise<TheaterEvent[]> {
    const schoolId = localStorage.getItem("schoolId");
    const accountType = localStorage.getItem("accountType");
    if (!schoolId) return [];
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);

    const eventsCol = collection(activityDoc, "events");
    if(accountType == "student"){
        const eventsSnapshot = await getDocs(query(eventsCol, where("showId", "==", showId), where("targetUids", "array-contains", getCurrentUserId())));
        const events: TheaterEvent[] = [];
        eventsSnapshot.forEach((doc) => {
            if (doc.data().deleted) return;
            events.push(TheaterEvent.fromMap(doc.data()));
        });
        return events;
    } else {
        //get events where showId == showId
        const eventsSnapshot = await getDocs(query(eventsCol, where("showId", "==", showId)));
        const events: TheaterEvent[] = [];
        eventsSnapshot.forEach((doc) => {
            if (doc.data().deleted) return;
            events.push(TheaterEvent.fromMap(doc.data()));
        });
        return events;
    }
}

export async function deleteActivityTheaterEvent(theaterEvent: TheaterEvent) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), theaterEvent.activityId);
    const eventDoc = doc(collection(activityDoc, "events"), theaterEvent.id);
    await updateDoc(eventDoc, {
        deleted: true
    });
    await httpsCallable(functions, "startDeleteActivityEvent")({
        activityId: theaterEvent.activityId,
        eventId: theaterEvent.id,
        schoolId: schoolId
    })

}

export async function getActivityShows(activityId: string): Promise<Show[]> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return [];
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showsCol = collection(activityDoc, "shows");
    const showsSnapshot = await getDocs(showsCol);
    const shows: Show[] = [];
    showsSnapshot.forEach((doc) => {
        shows.push(Show.fromMap(doc.data()));
    });
    return shows;
}

export async function saveActivityShowConflictForm(activityId: string, showId: string, conflictForm: ConflictForm) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    await updateDoc(showDoc, {
        conflictForm: conflictForm.toMap()
    });
    await httpsCallable(functions, "addConflictFormDeadline")({activityId: activityId, showId: showId, schoolId: schoolId, deadline: conflictForm.deadline.toISOString()    });

}

export async function getCurrentUserAsActor(): Promise<Actor | null> {
    const user = await getCurrentUserId();
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const studentsCol = collection(schoolDoc, "students");
    const actorDoc = doc(studentsCol, user);
    const actorSnap = await getDoc(actorDoc);
    if (!actorSnap.exists()) return null;
    return Actor.fromMap(actorSnap.data());

    
}

export async function submitActivityShowConflictForm(activityId: string, showId: string, conflictForm: ConflictResponse) {
    const schoolId = localStorage.getItem("schoolId");
    
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    const responseDoc = doc(showDoc, "conflictResponses", conflictForm.actor.userId);
    conflictForm.id = conflictForm.actor.userId;
     await setDoc(responseDoc, conflictForm.toMap());
    
}

export async function getActvityShowConflictFormResponses(activityId: string, showId: string): Promise<ConflictResponse[]> {
    const schoolId = localStorage.getItem("schoolId");
    const accountType = localStorage.getItem("accountType");
    const userId = localStorage.getItem("userId");
    if (!schoolId) return [];
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    const responsesCol = collection(showDoc, "conflictResponses");
    if(accountType == "student"){
        console.log("Getting conflict responses for student");
        const userId = 
        console.log(getCurrentUserId());
        const responsesSnapshot = await getDocs(query(responsesCol, where("submitterId", "==", getCurrentUserId())));
        const responses: ConflictResponse[] = [];
        responsesSnapshot.forEach((doc) => {
            responses.push(ConflictResponse.fromMap(doc.data()));
        });
        return responses;
    }
    const responsesSnapshot = await getDocs(responsesCol);
    const responses: ConflictResponse[] = [];
    responsesSnapshot.forEach((doc) => {
        responses.push(ConflictResponse.fromMap(doc.data()));
    });
    return responses;
}

export async function getShowTemplates(): Promise<Show[]> {
    const showTemplatesCol = collection(db, "showTemplates");
    const showTemplatesSnapshot = await getDocs(showTemplatesCol);
    const showTemplates: Show[] = [];
    showTemplatesSnapshot.forEach((doc) => {
        showTemplates.push(Show.fromMap(doc.data()));
    });
    return showTemplates;
}

export async function joinActivity(activityCode: string): Promise<Activity | TheaterActivity | null> {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    const accountType = localStorage.getItem("accountType");
    console.log("SC: " + schoolId + " UID: " + userId + " AT: " + accountType);
    if (!schoolId || !userId || !accountType) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityQuery = query(collection(schoolDoc, "activities"), where("joinCode", "==", activityCode));
    const activitySnap = await getDocs(activityQuery);
    if (activitySnap.empty) return null;
    const activityDoc = activitySnap.docs[0];
    const userDoc = doc(collection(schoolDoc, accountType == "student" ? "students" : "teachers"), userId);
    const userSnap = await getDoc(userDoc);
    console.log(userSnap.data());
    if (!userSnap.exists()) return null;

   
    if(activityDoc.data().type == "theater") {
        if(userSnap.data().gender == null && accountType == "student") {
            console.log("needsGender");
    
            localStorage.setItem("needsGender", "true");
        }
        if(userSnap.data().phoneNumber == "" && accountType == "student") {
            localStorage.setItem("needsPhoneNumber", "true");
    
        }
        if((userSnap.data().phoneNumber == "" || userSnap.data().gender == null) && accountType == "student") {
            return null;
        }
        if(accountType == "student") {
            await updateDoc(activityDoc.ref, {
                studentUids: [...activityDoc.data().studentUids, userId],
                students: [...activityDoc.data().students, Actor.fromMap(userSnap.data()).toMap()]
                    
            });
            return TheaterActivity.fromMap(activityDoc.data());
        } else {
            console.log("Joining as teacher");
            console.log(userSnap.data());
            const activityMember = ActivityMember.fromBlank(userSnap.data().fullname, userSnap.data().uid, userSnap.data().FCMToken);
            console.log(activityMember.toMap());
            await updateDoc(activityDoc.ref, {
                teacherUids: [...activityDoc.data().teacherUids, userId],
                teachers: [...activityDoc.data().teachers, activityMember.toMap()]
            });
            return TheaterActivity.fromMap(activityDoc.data());
        }
    } else {
        if(accountType == "student") {
            const activityMember = ActivityMember.fromBlank(userSnap.data().fullname, userSnap.data().uid, userSnap.data().FCMToken);
            await updateDoc(activityDoc.ref, {
                studentUids: [...activityDoc.data().studentUids, userId],
                students: [...activityDoc.data().students, activityMember.toMap()]
            });
            return Activity.fromMap(activityDoc.data());
        } else {
            const activityMember = ActivityMember.fromBlank(userSnap.data().fullname, userSnap.data().uid, userSnap.data().FCMToken);
            await updateDoc(activityDoc.ref, {
                teacherUids: [...activityDoc.data().teacherUids, userId],
                teachers: [...activityDoc.data().teachers, activityMember.toMap()]
            });
            return Activity.fromMap(activityDoc.data());
        }
    }
}

export async function updateUserGender(gender: "male" | "female") {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    const accountType = localStorage.getItem("accountType");
    if (!schoolId || !userId || !accountType) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const userDoc = doc(collection(schoolDoc, accountType == "student" ? "students" : "teachers"), userId);
    await updateDoc(userDoc, {
        gender: gender
    });
}

export async function updateUserPhoneNumber(phoneNumber: string) {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    const accountType = localStorage.getItem("accountType");
    if (!schoolId || !userId || !accountType) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const userDoc = doc(collection(schoolDoc, accountType == "student" ? "students" : "teachers"), userId);
    await updateDoc(userDoc, {
        phoneNumber: phoneNumber
    });
}

export async function editActivityTheaterEvent(theaterEvent: TheaterEvent) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), theaterEvent.activityId);
    const eventDoc = doc(collection(activityDoc, "events"), theaterEvent.id);
    await updateDoc(eventDoc, theaterEvent.toMap());
}

export async function getAllUserEvents(): Promise<(Event | ActivityEvent | TheaterEvent)[]> {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    const accountType = localStorage.getItem("accountType");
    
    if (!schoolId || !userId) return [];
    const schoolDoc = doc(db, "schools", schoolId);
   
    const events: (Event | ActivityEvent | TheaterEvent)[] = [];
    let activitiesSnapshot;
    if(accountType == "student"){
        activitiesSnapshot = await getDocs(query(collection(schoolDoc, "activities"), where("studentUids", "array-contains", userId)));
    } else {
        activitiesSnapshot = await getDocs(query(collection(schoolDoc, "activities"), where("teacherUids", "array-contains", userId)));
    }
    console.log(activitiesSnapshot);
    for (const activityDoc of activitiesSnapshot.docs) {
        let eventsSnapshot;
        if(accountType == "student"){
            eventsSnapshot = await getDocs(query(collection(activityDoc.ref, "events"), where("targetUids", "array-contains", userId)));
        } else {
            eventsSnapshot = await getDocs(collection(activityDoc.ref, "events"));
        }
        for (const eventDoc of eventsSnapshot.docs) {
            const event = eventDoc.data();
            console.log(event);
            if (event.type == "activity-theater-event") {
                events.push(TheaterEvent.fromMap(event));
            } else {
                events.push(ActivityEvent.fromMap(event));
            }
        }
    }
    return events;
}

export async function getUserConflictFormResponse(activityId: string, showId: string): Promise<ConflictResponse | null> {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    if (!schoolId || !userId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    const responsesCol = collection(showDoc, "conflictResponses");

    const responsesSnapshot = await getDoc(doc(responsesCol, userId));
    if(!responsesSnapshot.exists()) return null;
    return ConflictResponse.fromMap(responsesSnapshot.data());
   

}

export async function updateTheaterActivityRehearsalLocation(activityId: string, theatherLocations: TheaterLocation[]) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    await updateDoc(activityDoc, {
        rehearsalLocations: theatherLocations.map((location) => location.toMap())
    });

}

export async function getActivityGCsStream( activityId: string, updateGCs: (gcs: ActivityGC[]) => void) {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    if (!schoolId || !userId) return [];
    const accountType = localStorage.getItem("accountType");
    const schoolDoc = doc(db, "schools", schoolId);

    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    if(accountType == "teacher"){
        //get teacher data
        const teacherDoc = doc(collection(schoolDoc, "teachers"), userId);
        const teacherSnap = await getDoc(teacherDoc);
        if (!teacherSnap.exists()) return;
        const teacherData = TeacherData.fromMap(teacherSnap.data());

        onSnapshot(collection(activityDoc, "groupChats"), async (docs) => {
            const gcs: ActivityGC[] = [];
            for (const doc of docs.docs) {
                const gc = ActivityGC.fromMap(doc.data());
                if(gc.generalTarget == "direct" || gc.generalTarget == "custom"){
                    const userAsMember = ActivityMember.fromBlank(teacherData.fullname, teacherData.uid, teacherData.FCMToken);
                    if(!gc.members.find((member) => member.memberUid == userId)){
                        continue;
                    }
                }
                if(gc.generalTarget == "direct"){
                    const otherMember = gc.members.find((member) => member.memberUid != userId);
                    gc.name = otherMember?.memberName || "Unknown";
                }
                //Get last message
                const messagesCol = collection(doc.ref, "messages");
                const messagesSnapshot = query(messagesCol, orderBy("timeSent", "desc"), limit(1));
                const messages = await getDocs(messagesSnapshot);
                if (!messages.empty) {
                    gc.lastMessage = Message.fromMap(messages.docs[0].data());
                }
                
                gcs.push(gc);
            }
            //Sort by last message
            gcs.sort((a, b) => {
                if (!a.lastMessage) return 1;
                if (!b.lastMessage) return -1;
                return b.lastMessage.timeSent.getTime() - a.lastMessage.timeSent.getTime();
            });
            updateGCs(gcs);
        });
    } else {

        const studentDoc = doc(collection(schoolDoc, "students"), userId);
        const studentSnap = await getDoc(studentDoc);
        if (!studentSnap.exists()) return;
        const studentData = StudentData.fromMap(studentSnap.data());
        console.log(studentData);

        //Get group chats where user is a target
        onSnapshot(collection(activityDoc, "groupChats"), async (docs) => {
            const gcs: ActivityGC[] = [];
            const userAsMember = ActivityMember.fromBlank(studentData.fullname, studentData.uid, studentData.FCMToken);
            for (const doc of docs.docs) {
                const gc = ActivityGC.fromMap(doc.data());
                if(!(gc.generalTarget == "everyone" || gc.generalTarget == "students")){
                    if(gc.generalTarget == "parents"){
                        continue;
                    }
                    if(!gc.members.find((member) => member.memberUid == userId)){
                        continue;
                    }

                }
                if(gc.generalTarget == "direct"){
                    const otherMember = gc.members.find((member) => member.memberUid != userId);
                    gc.name = otherMember?.memberName || "Unknown";
                }
                //Get last message
                const messagesCol = collection(doc.ref, "messages");
                const messagesSnapshot = query(messagesCol, orderBy("timeSent", "desc"), limit(1));
                const messages = await getDocs(messagesSnapshot);
                if (!messages.empty) {
                    gc.lastMessage = Message.fromMap(messages.docs[0].data());
                }

                gcs.push(gc);
            }
            //Sort by last message
            gcs.sort((a, b) => {
                if (!a.lastMessage) return 1;
                if (!b.lastMessage) return -1;
                return b.lastMessage.timeSent.getTime() - a.lastMessage.timeSent.getTime();
            });
            updateGCs(gcs);
        });
        // onSnapshot(collection(activityDoc, "groupChats"), async (docs) => {
        //     const gcs: ActivityGC[] = [];
        //     for (const doc of docs.docs) {
        //         const gc = ActivityGC.fromMap(doc.data());
        //         if(gc.generalTarget == "direct"){
        //             const otherMember = gc.members.find((member) => member.memberUid != userId);
        //             gc.name = otherMember?.memberName || "Unknown";
        //         }
        //         //Get last message
        //         const messagesCol = collection(doc.ref, "messages");
        //         const messagesSnapshot = query(messagesCol, orderBy("timeSent", "desc"), limit(1));
        //         const messages = await getDocs(messagesSnapshot);
        //         if (!messages.empty) {
        //             gc.lastMessage = Message.fromMap(messages.docs[0].data());
        //         }
        //
        //         gcs.push(gc);
        //     }
        //     //Sort by last message
        //     gcs.sort((a, b) => {
        //         if (!a.lastMessage) return 1;
        //         if (!b.lastMessage) return -1;
        //         return b.lastMessage.timeSent.getTime() - a.lastMessage.timeSent.getTime();
        //     });
        //     updateGCs(gcs);
        // });
    }
   
} 

export async function getActivityGCMessagesStream(activityId: string, gcId: string, updateMessages: (messages: Message[]) => void) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return [];
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    console.log("Getting messages for " + gcId);
    const gcDoc = doc(collection(activityDoc, "groupChats"), gcId);
    const messagesCol = collection(gcDoc, "messages");
    
    onSnapshot(messagesCol, (doc) => {
        const messages: Message[] = [];
        doc.forEach((message) => {
            messages.push(Message.fromMap(message.data()));
        });
        //Sort messages by date
        messages.sort((a, b) => {
            return a.timeSent.getTime() - b.timeSent.getTime();
        });
        updateMessages(messages);
    });

    

}

export async function getUserData() {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    const accountType = localStorage.getItem("accountType");
    if (!schoolId || !userId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const userDoc = doc(collection(schoolDoc, accountType == "student" ? "students" : "teachers"), userId);
    const userSnap = await getDoc(userDoc);
    if (!userSnap.exists()) return null;
    return userSnap.data();
}

export async function sendActivityGCMessage(activityId: string, gcId: string,message: Message, recipientData?: ActivityMember) {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    if (!schoolId || !userId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const gcDoc = doc(collection(activityDoc, "groupChats"), gcId);
    //Check if document exists
    const gcSnap = await getDoc(gcDoc);
    if (!gcSnap.exists()) {
        if(recipientData == null){
            return;
        }
        //Create group chat
        const gc = ActivityGC.fromBlank("", recipientData.memberUid, [
            ActivityMember.fromBlank(message.senderName, message.senderUid, message.senderFCMToken),
            recipientData
            
        ], "direct", activityId, Date.now());

        const ref = await setDoc(gcDoc, gc.toMap());
        //Create messages collection
        const messagesCol = collection(gcDoc, "messages");
        const messageRef = await addDoc(messagesCol, message.toMap());
        message.messageId = messageRef.id;
        await updateDoc(messageRef, {
            messageId: messageRef.id
        });
        return;
    }

    const messagesCol = collection(gcDoc, "messages");
    const ref = await addDoc(messagesCol, message.toMap());
    message.messageId = ref.id;
    await updateDoc(ref, {
        messageId: ref.id
    });

}

export async function createActivityGroupChat(activityGC: ActivityGC) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityGC.activityId);
    const gcsCol = collection(activityDoc, "groupChats");
    const ref = await addDoc(gcsCol, activityGC.toMap());
    activityGC.id = ref.id;
    await updateDoc(ref, {
        id: ref.id
    });
}

export async function addActivityShowResource(activityId: string, showId: string, resource: Resource) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
   updateDoc(showDoc, {
         resources: arrayUnion(resource.toMap())
    });
}

export async function deleteActivityShowResource(activityId: string, showId: string, resource: Resource) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    updateDoc(showDoc, {
        resources: arrayRemove(resource.toMap())
    });
}

export async function deleteActivityShowConflictResponse(activityId: string, showId: string, conflictResponse: ConflictResponse) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    const responsesCol = collection(showDoc, "conflictResponses");
    const responseDoc = doc(responsesCol, conflictResponse.id);
    await deleteDoc(responseDoc);
}

export async function getSchoolUsingCode(type: "student" | "teacher", code: string) {
    const schoolQuery = query(schoolsCollection, where(type == "student" ? "schoolCode" : "schoolTeacherCode", "==", code));
    const schoolSnap = await getDocs(schoolQuery);
    if (schoolSnap.empty) return null;
    return schoolSnap.docs[0].data();
}

export async function createUser(type: "student" | "teacher", user: StudentData | TeacherData) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const usersCol = collection(schoolDoc, type + "s");
    await setDoc(doc(usersCol, user.uid), user.toMap());

    //Add user to school
    const miniUser = MiniUser.fromBlank(user.fullname, user.FCMToken, user.uid);
    await updateDoc(schoolDoc, {
        [type + "Uids"]: arrayUnion(user.uid),
        [type + "s"]: arrayUnion(miniUser.toMap())
    });
}

function createActivityJoinCode(name: string): string {
    const now = new Date();
    const millisecondsSinceEpoch = now.getTime().toString();
    const firstChar = name.charCodeAt(0);
    const code = `${firstChar}${now.getDate()}${millisecondsSinceEpoch.slice(-2)}`;
    return code;
}

export async function createActivity(activityName: string, activityType: "theater" | "activity"): Promise<Activity | TheaterActivity | null> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const schoolSnap = await getDoc(schoolDoc);
    if (!schoolSnap.exists()) return null;
    const schoolData = schoolSnap.data();

    const activitiesCol = collection(schoolDoc, "activities");

    const joinCode = createActivityJoinCode(activityName);
    const defaultTheaterEventTypes: EventType[] = [
        EventType.fromMap({
            name: "Rehearsal",
            color: hexToInt("#FF0000")
        }),
        EventType.fromMap({
            name: "Performance",
            color: hexToInt("#00FF00")
        }),
    ];

    const defaultEventTypes: EventType[] = [
        EventType.fromMap({
            name: "Practice",
            color: hexToInt("#FF0000")
        }),
        EventType.fromMap({
            name: "Game",
            color: hexToInt("#00FF00")
        }),
        ];

    const defautTheaterLocations: TheaterLocation[] = [
        TheaterLocation.fromMap({
            name: "Auditorium",
            color: hexToInt("#0000FF")
        }),

    ];

    const defaultLocation: Location = Location.fromMap(schoolData.location);
    const defaultLocations: Location[] = [defaultLocation];
    const teacherData = await getUserData();
    if (!teacherData) return null;
    const teacher = ActivityMember.fromBlank(teacherData.fullname, teacherData.uid, teacherData.FCMToken);
    let activity: Activity | TheaterActivity;
    if (activityType == "theater") {
        activity = TheaterActivity.fromBlank(activityName, "", joinCode,[],[],[],[teacher],defaultLocations, defaultTheaterEventTypes, defaultLocation, defautTheaterLocations, "type", Date.now());
    } else {
        activity = Activity.fromBlank(activityName, "", joinCode, [],[],[],[teacher], defaultLocations, defaultEventTypes, defaultLocation, "type", Date.now(), "activity");
    }
    const ref =await addDoc(activitiesCol, activity.toMap());
    activity.id = ref.id;
    await updateDoc(ref, {
        id: ref.id
    });
    const everyoneGC = ActivityGC.fromMap({
        name: "Everyone",
        members: [],
        id: "",
        activityId: activity.id,
        lastUpdated: Date.now(),
        generalTarget: "everyone"});
    await createActivityGroupChat(everyoneGC);
    const parentsGC = ActivityGC.fromMap({
        name: "Parents",
        members: [],
        id: "",
        activityId: activity.id,
        lastUpdated: Date.now(),
        generalTarget: "parents"});
    await createActivityGroupChat(parentsGC);
    const studentsGC = ActivityGC.fromMap({
        name: "Students",
        members: [],
        id: "",
        activityId: activity.id,
        lastUpdated: Date.now(),
        generalTarget: "students"});
    await createActivityGroupChat(studentsGC);

    return activity;
}

