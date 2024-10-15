import { addDoc, DocumentData, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore";
import { app } from "./init";
import { collection, doc, getDoc } from "firebase/firestore"; 
import { Activity, ActivityEvent, ActivityMember, Actor, ConflictForm, ConflictResponse, Event, Show, TheaterActivity, TheaterEvent } from "../constants";
import { getCurrentUserId, reauthenticateUser } from "./auth";
const db = getFirestore(app);

const schoolsCollection = collection(db, "schools");

export const getSchool = async (schoolId: string) => {
    const schoolDoc = doc(schoolsCollection, schoolId);
    const schoolSnap = await getDoc(schoolDoc);
    return schoolSnap.data();
};

export const getSchools = async () => {
    const schoolsSnapshot = await getDocs(schoolsCollection);
    const schools: DocumentData = [];
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

export async function createShow(show: Show, activityId: string): Promise<string> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return "";
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showsCol = collection(activityDoc, "shows");
    const ref = await addDoc(showsCol, show.toMap());
    show.id = ref.id;
    await updateDoc(ref, {
        id: ref.id
    });
    return ref.id;

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
}

export async function getCurrentUserAsActor(): Promise<Actor | null> {
    const user = await getCurrentUserId();
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const actorDoc = doc(collection(schoolDoc, "students"), user);
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
    if (!schoolId || !userId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityQuery = query(collection(schoolDoc, "activities"), where("joinCode", "==", activityCode));
    const activitySnap = await getDocs(activityQuery);
    if (activitySnap.empty) return null;
    const activityDoc = activitySnap.docs[0];
    const userDoc = doc(collection(schoolDoc, "students"), userId);
    const userSnap = await getDoc(userDoc);
    if (!userSnap.exists()) return null;
   
    if(activityDoc.data().type == "theater") {
        if(userSnap.data().gender == null) {
            console.log("needsGender");
    
            localStorage.setItem("needsGender", "true");
        }
        if(userSnap.data().phoneNumber == "") {
            localStorage.setItem("needsPhoneNumber", "true");
    
        }
        if(userSnap.data().phoneNumber == "" || userSnap.data().gender == null) {
            return null;
        }
        await updateDoc(activityDoc.ref, {
            studentUids: [...activityDoc.data().studentUids, userId],
            students: [...activityDoc.data().students, Actor.fromMap(userSnap.data()).toMap()]
                
        });
        return TheaterActivity.fromMap(activityDoc.data());
    } else {
        await updateDoc(activityDoc.ref, {
            studentUids: [...activityDoc.data().studentUids, userId],
            students: [...activityDoc.data().students, ActivityMember.fromMap(userSnap.data()).toMap()]
        });
        return Activity.fromMap(activityDoc.data());
    }
}

export async function updateUserGender(gender: "male" | "female") {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    if (!schoolId || !userId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const userDoc = doc(collection(schoolDoc, "students"), userId);
    await updateDoc(userDoc, {
        gender: gender
    });
}

export async function updateUserPhoneNumber(phoneNumber: string) {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    if (!schoolId || !userId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const userDoc = doc(collection(schoolDoc, "students"), userId);
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