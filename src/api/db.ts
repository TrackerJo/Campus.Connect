import { addDoc, arrayRemove, arrayUnion, deleteDoc, DocumentData, getDocs, getFirestore, limit, onSnapshot, orderBy, Query, query, QuerySnapshot, setDoc, updateDoc, where } from "firebase/firestore";
import { app } from "./init";
import { collection, doc, getDoc } from "firebase/firestore"; 
import {

    Activity,
    ActivityEvent,
    ActivityGC,
    ActivityMember,

    ConflictForm,
    ConflictResponse,
    Event,
    EventType,
    Message,

    Resource,
    Show,
    StudentData,
    TeacherData,
    TheaterActivity,
    Location,
    TheaterEvent,
    TheaterLocation,
    ActivityTeacher,
    GroupChatMember,
    Character,
    ShowGroup,
    EnsembleSection,
    FullCast,
    NotificationUser,
    Company,
    Opportunity,
    opportunityTypeFromString,
    OpportunityType,
    Job,
    OneTimeVolunteer,
    RecurringVolunteer,
    ActivityGroup,
    Company,
    EmployerData
} from "../constants";
import { getCurrentUserId } from "./auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { sendGroupChatMessage } from "./functions";


const functions = getFunctions(app);
const db = getFirestore(app);

const schoolsCollection = collection(db, "schools");
const companiesCollection = collection(db, "companies");
const employersCollection = collection(db, "employers");
const opportunitiesCollection = collection(db, "opportunities");

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

export const getCompanies = async () => {
    const companiesSnapshot = await getDocs(companiesCollection);
    const companies: Company[] = [];
    companiesSnapshot.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        companies.push(Company.fromMap(data));
    });
    return companies;
}

export const getIfUserIsInSchool = async (schoolId: string, userId: string, accountType: "student" | "teacher") => {
    const schoolDoc = doc(schoolsCollection, schoolId);
    console.log("School ID: " + schoolId);
    console.log("User ID: " + userId);
    console.log("Account Type: " + accountType);
    const userDoc = doc(collection(schoolDoc, accountType + "s"), userId);
    const userSnap = await getDoc(userDoc);
    return userSnap.exists();
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
    show.lastUpdated = Date.now();
    await updateDoc(showDoc, show.toMap());
}

export async function addShowTemplate(showTemplate: Show): Promise<string> {
    const collectionRef = collection(db, "showTemplates");
    const ref = await addDoc(collectionRef, showTemplate.toMap());
    showTemplate.id = ref.id;
    await updateDoc(ref, {
        id: ref.id
    });
    return ref.id;
}

export async function editShowTemplate(showTemplate: Show): Promise<void> {

    //Remove all the actors from the show
    if(showTemplate.ensemble){
        showTemplate.ensemble.actors = [];
    }

    for(const character of showTemplate.characters){
        if(character instanceof Character){
            character.actor = null;
        } 
    }

    for(const showGroup of showTemplate.showGroups){
        for(const character of showGroup.characters){
            if(character instanceof Character){
                character.actor = null;
            } else if (character instanceof EnsembleSection) {
                character.customActors = [];
            }
        }
    }

    for(const acts of showTemplate.layout){
        for(const scene of acts.scenes){
            for(const character of scene.characters){
                if(character instanceof Character){
                    character.actor = null;
                } else if (character instanceof ShowGroup) {
                    for(const char of character.characters){
                        if(char instanceof Character){
                            char.actor = null;
                        } else if (char instanceof EnsembleSection) {
                            char.customActors = [];
                        }
                    }
                } else if (character instanceof EnsembleSection) {
                    character.customActors = [];
                }
            }
        }
    }

    for(const songs of showTemplate.songs){
        for(const character of songs.characters){
                if(character instanceof Character){
                    character.actor = null;
                } else if (character instanceof ShowGroup) {
                    for(const char of character.characters){
                        if(char instanceof Character){
                            char.actor = null;
                        } else if (char instanceof EnsembleSection) {
                            char.customActors = [];
                        }
                    }
                } else if (character instanceof EnsembleSection) {
                    character.customActors = [];
                }
        }
    }

    for(const dances of showTemplate.dances){
        for(const character of dances.characters){
                if(character instanceof Character){
                    character.actor = null;
                } else if (character instanceof ShowGroup) {
                    for(const char of character.characters){
                        if(char instanceof Character){
                            char.actor = null;
                        } else if (char instanceof EnsembleSection) {
                            char.customActors = [];
                        }
                    }
                } else if (character instanceof EnsembleSection) {
                    character.customActors = [];
                }
        }
    }


    const showTemplateDoc = doc(collection(db, "showTemplates"), showTemplate.templateId);
    showTemplate.lastUpdated = Date.now();
    await updateDoc(showTemplateDoc, showTemplate.toMap());
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

export async function getActivityActors(activityId: string): Promise<ActivityMember[]> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return [];
    console.log("Getting actors for activity " + schoolId);
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const activityDocSnap = await getDoc(activityDoc);
    if (!activityDocSnap.exists()) return [];
    const actors: ActivityMember[] = [];
    activityDocSnap.data().students.forEach((actor: ActivityMember) => {
        actors.push(ActivityMember.fromMap(actor));
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
    console.log("Adding event");
    console.log(theaterEvent.toMap());
    const ref = await addDoc(eventsCol, theaterEvent.toMap());
    theaterEvent.id = ref.id;
    await updateDoc(ref, {
        id: ref.id
    });
}

export async function addActivityEvent(activityEvent: ActivityEvent) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityEvent.activityId);
    const eventsCol = collection(activityDoc, "events");
    const ref = await addDoc(eventsCol, activityEvent.toMap());
    activityEvent.id = ref.id;
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
        deleted: true,
        lastUpdated: Date.now()
    });
    await httpsCallable(functions, "startDeleteActivityEvent")({
        activityId: theaterEvent.activityId,
        eventId: theaterEvent.id,
        schoolId: schoolId
    })

}

export async function deleteActivityEvent(activityEvent: ActivityEvent) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityEvent.activityId);
    const eventDoc = doc(collection(activityDoc, "events"), activityEvent.id);
    await updateDoc(eventDoc, {
        deleted: true,
        lastUpdated: Date.now()
    });
    await httpsCallable(functions, "startDeleteActivityEvent")({
        activityId: activityEvent.activityId,
        eventId: activityEvent.id,
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
        conflictForm: conflictForm.toMap(),
        lastUpdated: Date.now()
    });
    await httpsCallable(functions, "addConflictFormDeadline")({activityId: activityId, showId: showId, schoolId: schoolId, deadline: conflictForm.deadline.toISOString()    });

}

export async function updateActivityShowConflictForm(activityId: string, showId: string, conflictForm: ConflictForm) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    await updateDoc(showDoc, {
        conflictForm: conflictForm.toMap(),
        lastUpdated: Date.now()
    });
}

export async function getCurrentUserAsActor(): Promise<ActivityMember | null> {
    const user =  getCurrentUserId();
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return null;
    const schoolDoc = doc(db, "schools", schoolId);

    const actorDoc = doc(schoolDoc, 'students', user!);
    const actorSnap = await getDoc(actorDoc);
    if (!actorSnap.exists()) return null;
    return ActivityMember.fromMap(actorSnap.data());

    
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
    if (!schoolId) return [];
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    const responsesCol = collection(showDoc, "conflictResponses");
    if(accountType == "student"){
        console.log("Getting conflict responses for student");

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
    //Check if user has already joined
    if (activityDoc.data().studentUids.includes(userId) || activityDoc.data().teacherUids.includes(userId)) {
        localStorage.setItem("alreadyJoined", "true");
        return null;
    } else {
        localStorage.setItem("alreadyJoined", "false");
    }

   
    if(activityDoc.data().type == "theater") {
        if((userSnap.data().gender == null || userSnap.data().gender == "")  && accountType == "student") {
            console.log("needsGender");
    
            localStorage.setItem("needsGender", "true");
        }
        if(userSnap.data().phoneNumber == "" && accountType == "student") {
            localStorage.setItem("needsPhoneNumber", "true");
    
        }
        if((userSnap.data().phoneNumber == "" || (userSnap.data().gender == null || userSnap.data().gender == "")) && accountType == "student") {
            return null;
        }
        if(accountType == "student") {
            await updateDoc(activityDoc.ref, {
                studentUids: [...activityDoc.data().studentUids, userId],
                students: [...activityDoc.data().students, ActivityMember.fromMap(userSnap.data()).toMap()],
                lastUpdated: Date.now()
                    
            });
            return TheaterActivity.fromMap(activityDoc.data());
        } else {
            console.log("Joining as teacher");
            console.log(userSnap.data());
            const activityMember = ActivityTeacher.fromBlank(userSnap.data().fullname, userSnap.data().email, userSnap.data().phoneNumber, userSnap.data().uid, userSnap.data().FCMToken);
            console.log(activityMember.toMap());
            await updateDoc(activityDoc.ref, {
                teacherUids: [...activityDoc.data().teacherUids, userId],
                teachers: [...activityDoc.data().teachers, activityMember.toMap()],
                lastUpdated: Date.now()
            });
            return TheaterActivity.fromMap(activityDoc.data());
        }
    } else {
        if(accountType == "student") {
            const activityMember = ActivityMember.fromBlank(userSnap.data().fullname, userSnap.data().gender, userSnap.data().email, userSnap.data().phoneNumber, userSnap.data().uid, userSnap.data().FCMToken);
            await updateDoc(activityDoc.ref, {
                studentUids: [...activityDoc.data().studentUids, userId],
                students: [...activityDoc.data().students, activityMember.toMap()],
                lastUpdated: Date.now()
            });
            return Activity.fromMap(activityDoc.data());
        } else {
            const activityMember = ActivityTeacher.fromBlank(userSnap.data().fullname, userSnap.data().email, userSnap.data().phoneNumber, userSnap.data().uid, userSnap.data().FCMToken);
            await updateDoc(activityDoc.ref, {
                teacherUids: [...activityDoc.data().teacherUids, userId],
                teachers: [...activityDoc.data().teachers, activityMember.toMap()],
                lastUpdated: Date.now()
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
        gender: gender,
        lastUpdated: Date.now()
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
        phoneNumber: phoneNumber,
        lastUpdated: Date.now()
    });
}

export async function editActivityTheaterEvent(theaterEvent: TheaterEvent) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), theaterEvent.activityId);
    const eventDoc = doc(collection(activityDoc, "events"), theaterEvent.id);
    theaterEvent.lastUpdated = Date.now();
    await updateDoc(eventDoc, theaterEvent.toMap());
}

export async function editActivityEvent(activityEvent: ActivityEvent) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityEvent.activityId);
    const eventDoc = doc(collection(activityDoc, "events"), activityEvent.id);
    activityEvent.lastUpdated = Date.now();
    await deleteActivityEvent(activityEvent);
    await addActivityEvent(activityEvent);
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
        const eventsSnapshots: QuerySnapshot[] = [];
        if(activityDoc.data().deleted == true){
            continue;
        }
        if(accountType == "student"){
            console.log("Getting events for student");
            eventsSnapshots.push(await getDocs(query(collection(activityDoc.ref, "events"), where("targetUids", "array-contains", userId))));
            eventsSnapshots.push(await getDocs(query(collection(activityDoc.ref, "events"), where("generalTarget", "==", "students"))));

        } else {
            console.log("Getting events for teacher");
            eventsSnapshots.push(await getDocs(collection(activityDoc.ref, "events")));
        }
        for (const eventsSnapshot of eventsSnapshots) {
            for (const eventDoc of eventsSnapshot.docs) {
                const event = eventDoc.data();
                if(event.deleted) continue;
                console.log(event);
                if (event.type == "activity-theater-event") {
                    events.push(TheaterEvent.fromMap(event));
                } else {
                    events.push(ActivityEvent.fromMap(event));
                }
            }
        }
    }
    return events;
}

export async function getActivityEvents(activityId: string) : Promise<(ActivityEvent )[]> {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    const accountType = localStorage.getItem("accountType");
    if (!schoolId || !userId) return [];
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);

    const eventsSnapshots: QuerySnapshot[] = [];
    const events: (ActivityEvent)[] = [];
    if(accountType == "student"){
        console.log("Getting events for student");
        eventsSnapshots.push(await getDocs(query(collection(activityDoc, "events"), where("targetUids", "array-contains", userId))));
        eventsSnapshots.push(await getDocs(query(collection(activityDoc, "events"), where("generalTarget", "==", "students"))));

    } else {
        console.log("Getting events for teacher");
        eventsSnapshots.push(await getDocs(collection(activityDoc, "events")));
    }
    for (const eventsSnapshot of eventsSnapshots) {
        for (const eventDoc of eventsSnapshot.docs) {
            const event = eventDoc.data();
            if(event.deleted) continue;
            console.log(event);
            event["id"] = eventDoc.id;
            console.log(event);
            events.push(ActivityEvent.fromMap(event));
            
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
        rehearsalLocations: theatherLocations.map((location) => location.toMap()),
        lastUpdated: Date.now()
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

        onSnapshot(collection(activityDoc, "groupChats"), async (docs) => {
            const gcs: ActivityGC[] = [];
            for (const doc of docs.docs) {
                const gc = ActivityGC.fromMap(doc.data());
                if(gc.generalTarget == "direct" || gc.generalTarget == "custom"){

                    if(!gc.members.find((member) => member.userId == userId)){
                        continue;
                    }
                }
                if(gc.generalTarget == "direct"){
                    const otherMember = gc.members.find((member) => member.userId != userId);
                    gc.name = otherMember?.name || "Unknown";
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
            for (const doc of docs.docs) {
                const gc = ActivityGC.fromMap(doc.data());
                if(!(gc.generalTarget == "everyone" || gc.generalTarget == "students")){
                    if(gc.generalTarget == "parents"){
                        continue;
                    }
                    if(!gc.members.find((member) => member.userId == userId)){
                        continue;
                    }

                }
                if(gc.generalTarget == "direct"){
                    const otherMember = gc.members.find((member) => member.userId != userId);
                    gc.name = otherMember?.name || "Unknown";
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

export async function getUserData(): Promise<StudentData | TeacherData | null> {
    const schoolId = localStorage.getItem("schoolId");
    const userId = localStorage.getItem("userId");
    const accountType = localStorage.getItem("accountType");
    if (!schoolId || !userId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const userDoc = doc(collection(schoolDoc, accountType == "student" ? "students" : "teachers"), userId);
    const userSnap = await getDoc(userDoc);
    if (!userSnap.exists()) return null;
    if (accountType == "student") {
        return StudentData.fromMap(userSnap.data());
    }
    return TeacherData.fromMap(userSnap.data());
}

export async function getParentMap(userId: string): Promise<DocumentData | null> {



    
    const userDoc = doc(collection(db, "parents"), userId);
    const userSnap = await getDoc(userDoc);
    if (!userSnap.exists()) return null;
    return userSnap.data(); 
}

export async function sendActivityGCMessage(activityId: string, gcId: string,message: Message,activityName: string, recipientData?: ActivityMember ) {
    if(message.message == "") return;
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
        const userData = await getUserData();
        if (!userData) return;
        //Create group chat
        const gc = ActivityGC.fromBlank("", recipientData.userId, [
            GroupChatMember.fromBlank(userData.fullname, userData.email, userData.phoneNumber, userData.FCMToken, userData.uid),
            recipientData
            
        ], "direct", activityId, Date.now());

        await setDoc(gcDoc, gc.toMap());
        //Create messages collection
        const messagesCol = collection(gcDoc, "messages");
        const messageRef = await addDoc(messagesCol, message.toMap());
        message.messageId = messageRef.id;
        await updateDoc(messageRef, {
            messageId: messageRef.id,
            lastUpdated: Date.now()
        });
        //Send email
        sendGroupChatMessage(message, [NotificationUser.fromBlank(recipientData.userId, recipientData.email)], gc, activityName);
        return;
    }
    //Get group chat
    const gc = ActivityGC.fromMap(gcSnap.data());

    const messagesCol = collection(gcDoc, "messages");
    const ref = await addDoc(messagesCol, message.toMap());
    message.messageId = ref.id;
    await updateDoc(ref, {
        messageId: ref.id,
        lastUpdated: Date.now()
    });

    //Send email
    if(gc.generalTarget != "direct" && gc.generalTarget != "custom" && gc.generalTarget != "group") {
        const activity = await getActivity(activityId);
        if (!activity) return;
        if(gc.generalTarget == "everyone") {
            let targets: NotificationUser[] = activity.students.map((student) => NotificationUser.fromBlank(student.userId, student.email));
            targets = targets.concat(activity.teachers.map((teacher) => NotificationUser.fromBlank(teacher.userId, teacher.email)));
            targets = targets.concat(activity.parents.map((parent) => NotificationUser.fromBlank(parent.userId, parent.email)));
            //Remove sender
            targets = targets.filter((target) => target.userId != message.senderUid);
            sendGroupChatMessage(message, targets, gc, activity.name);
        } else if(gc.generalTarget == "students") {
            let targets: NotificationUser[] = activity.students.map((student) => NotificationUser.fromBlank(student.userId, student.email));
            //Remove sender
            targets = targets.filter((target) => target.userId != message.senderUid);
            sendGroupChatMessage(message, targets, gc, activity.name);
        } else if(gc.generalTarget == "parents") {
            let targets: NotificationUser[] = activity.parents.map((parent) => NotificationUser.fromBlank(parent.userId, parent.email));
            //Remove sender
            targets = targets.filter((target) => target.userId != message.senderUid);
            sendGroupChatMessage(message, targets, gc, activity.name);
        }

        return;

    }
    if(gc.generalTarget == "direct") {
        const otherMember = gc.members.find((member) => member.userId != userId);
        if (!otherMember) return;
        sendGroupChatMessage(message, [NotificationUser.fromBlank(otherMember.userId, otherMember.email)], gc, activityName);
        return;
    }
    if(gc.generalTarget == "custom") {
        const targets: NotificationUser[] = gc.members.filter((member) => member.userId != userId).map((member) => NotificationUser.fromBlank(member.userId, member.email));
        sendGroupChatMessage(message, targets, gc, activityName);
        return;
    }
    



}

export async function createActivityGroupChat(activityGC: ActivityGC) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityGC.activityId);
    const gcsCol = collection(activityDoc, "groupChats");
    //Get userData
    const userData = await getUserData();   
    if (!userData) return;
    const userAsMember = GroupChatMember.fromBlank(userData.fullname, userData.email, userData.phoneNumber, userData.FCMToken, userData.uid);
    activityGC.members.push(userAsMember);
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
         resources: arrayUnion(resource.toMap()),
         lastUpdated: Date.now()
    });
}

export async function deleteActivityShowResource(activityId: string, showId: string, resource: Resource) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    updateDoc(showDoc, {
        resources: arrayRemove(resource.toMap()),
        lastUpdated: Date.now()
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

export async function createUser(type: "student" | "teacher" | "employer", user: StudentData | TeacherData | EmployerData) {
   if(type == "employer"){
         await setDoc(doc(db, "employers", user.uid), user.toMap());
         const companyId = localStorage.getItem("companyId");
            if (!companyId) return;
            const companyDoc = doc(db, "companies", companyId);
            await updateDoc(companyDoc, {
                employerUids: arrayUnion(user.uid),
                employers: arrayUnion(user.toMap()),
                lastUpdated: Date.now()
            });
            return;

   }
   
    const schoolId = localStorage.getItem("schoolId");

    if (!schoolId) return;


    const schoolDoc = doc(db, "schools", schoolId);
    const usersCol = collection(schoolDoc, type + "s");
    await setDoc(doc(usersCol, user.uid), user.toMap());

    //Add user to school
    let activityUser;
    if(user instanceof StudentData) {
        activityUser = ActivityMember.fromBlank(user.fullname, user.gender, user.email, user.phoneNumber, user.FCMToken, user.uid);
    } else {
        activityUser = ActivityTeacher.fromBlank(user.fullname, user.email, user.phoneNumber, user.FCMToken, user.uid);
    }
    await updateDoc(schoolDoc, {
        [type + "Uids"]: arrayUnion(user.uid),
        [type + "s"]: arrayUnion(activityUser.toMap()),
        lastUpdated: Date.now()
    });
}

export function createActivityJoinCode(name: string): string {
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
    console.log(joinCode);
    const defaultTheaterEventTypes: EventType[] = [
        EventType.fromMap({
            name: "Rehearsal",
            color: {
                red: 255,
                green: 0,
                blue: 0,
                alpha: 255
            }
        }),
        EventType.fromMap({
            name: "Performance",
            color: {
                red: 0,
                green: 255,
                blue: 0,
                alpha: 255
            }
        }),
    ];

    const defaultEventTypes: EventType[] = [
        EventType.fromMap({
            name: "Practice",
            color: {
                red: 255,
                green: 0,
                blue: 0,
                alpha: 255
            }
        }),
        EventType.fromMap({
            name: "Game",
            color: {
                red: 0,
                green: 255,
                blue: 0,
                alpha: 255
            }
        }),
        ];

    const defautTheaterLocations: TheaterLocation[] = [
        TheaterLocation.fromMap({
            name: "Auditorium",
            color: {
                red: 0,
                green: 0,
                blue: 255,
                alpha: 255
            }
        }),

    ];

    const defaultLocation: Location = Location.fromMap(schoolData.location);
    const defaultLocations: Location[] = [defaultLocation];
    const teacherData = await getUserData();
    if (!teacherData) return null;
    const teacher = ActivityTeacher.fromBlank(teacherData.fullname, teacherData.email, teacherData.phoneNumber, teacherData.FCMToken, teacherData.uid);
    let activity: Activity | TheaterActivity;
    if (activityType == "theater") {
        activity = TheaterActivity.fromBlank(activityName, "", joinCode,[],[],[],[teacher],defaultLocations, defaultTheaterEventTypes, defaultLocation, defautTheaterLocations, "type", Date.now());
    } else {
        activity = Activity.fromBlank(activityName, "", joinCode, [],[],[],[teacher], defaultLocations, defaultEventTypes, defaultLocation, "type", Date.now(), "activity");
    }
    console.log(activity.toMap());
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

export async function getStudent(studentId: string): Promise<StudentData | null> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const studentDoc = doc(collection(schoolDoc, "students"), studentId);
    const studentSnap = await getDoc(studentDoc);
    if (!studentSnap.exists()) return null;
    return StudentData.fromMap(studentSnap.data());
}

export async function fixTeachers() {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const teachersCol = collection(schoolDoc, "teachers");
    const teachersSnap = await getDocs(teachersCol);
    for(const doc of teachersSnap.docs) {
        const teacherData = TeacherData.fromMap(doc.data());
        const schoolData = await getSchool(schoolId);
        if (!schoolData) return;
        const teacher = ActivityTeacher.fromBlank(teacherData.fullname, teacherData.email, teacherData.phoneNumber, teacherData.FCMToken, teacherData.uid);
        let teachers = schoolData.teachers as DocumentData[];
        teachers = teachers.filter((teacher) => teacher.uid != teacherData.uid);
        teachers.push(teacher.toMap());
        await updateDoc(schoolDoc, {
            teachers: teachers,
            lastUpdated: Date.now()
        });
        const activitiesCol = collection(schoolDoc, "activities");
        const activitiesSnap = await getDocs(query(activitiesCol, where("teacherUids", "array-contains", teacherData.uid)));
        activitiesSnap.forEach(async (doc) => {
            const activityData = doc.data();
            let teachers = activityData.teachers as DocumentData[];
            teachers = teachers.filter((teacher) => teacher.uid != teacherData.uid);
            teachers.push(teacher.toMap());
            await updateDoc(doc.ref, {
                teachers: teachers,
                lastUpdated: Date.now()
            });
        });
    };
}

export async function createActivityDirectChat(currentUser: GroupChatMember, recipient: GroupChatMember, activityId: string): Promise<ActivityGC | null> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return null;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const gcsCol = collection(activityDoc, "groupChats");

    const gc = ActivityGC.fromBlank("", recipient.userId, [currentUser, recipient], "direct", activityId, Date.now());

     await setDoc(doc(gcsCol, recipient.userId), gc.toMap());
    gc.name = recipient.name;
    return gc;
}

export async function getSavedLocations(): Promise<Location[]> {
    const schoolData = await getSchool( localStorage.getItem("schoolId") || "");

    if (!schoolData) return [];
    const savedLocations: Location[] = [];
    schoolData.savedLocations.forEach((location: Location) => {
        savedLocations.push(Location.fromMap(location));
    });
    return savedLocations;
}

export async function addLocationToActivity(activityId: string, location: Location) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    await updateDoc(activityDoc, {
        locations: arrayUnion(location.toMap()),
        lastUpdated: Date.now()
    });
}

export async function addLocationToSavedLocations(location: Location) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    await updateDoc(schoolDoc, {
        savedLocations: arrayUnion(location.toMap()),
        lastUpdated: Date.now()
    });
}

export async function addEventTypeToActivity(activityId: string, eventType: EventType) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    await updateDoc(activityDoc, {
        eventTypes: arrayUnion(eventType.toMap()),
        lastUpdated: Date.now()
    });
}

export async function setActivityShowCreatingSchedule(activityId: string, showId: string) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const showDoc = doc(collection(activityDoc, "shows"), showId);
    await updateDoc(showDoc, {
        isCreatingSchedule: true,
        lastUpdated: Date.now()
    });
}

export async function createCustomUser(user: StudentData, activityId: string) {
    const schoolId = localStorage.getItem("schoolId");

    if (!schoolId) return;


    const schoolDoc = doc(db, "schools", schoolId);
    const usersCol = collection(schoolDoc, "students");
    await setDoc(doc(usersCol, user.uid), user.toMap());

    //Add user to school
    const activityUser = ActivityMember.fromBlank(user.fullname, user.gender, user.email, user.phoneNumber, user.FCMToken, user.uid);

    await updateDoc(schoolDoc, {
        ["studentUids"]: arrayUnion(user.uid),
        ["students"]: arrayUnion(activityUser.toMap()),
        lastUpdated: Date.now()
    });

    const userId = activityUser.userId;

    if (!schoolId || !userId) return null;

    const activityQuery = doc(collection(schoolDoc, "activities"), activityId);
    const activityDoc = await getDoc(activityQuery);
    if (!activityDoc.exists()) return null;


   
    if(activityDoc.data().type == "theater") {
       

            await updateDoc(activityDoc.ref, {
                studentUids: [...activityDoc.data().studentUids, userId],
                students: [...activityDoc.data().students, activityUser.toMap()],
                lastUpdated: Date.now()
                    
            });
            return TheaterActivity.fromMap(activityDoc.data());
       
    } else {


            await updateDoc(activityDoc.ref, {
                studentUids: [...activityDoc.data().studentUids, userId],
                students: [...activityDoc.data().students, activityUser.toMap()],
                lastUpdated: Date.now()
            });
            return Activity.fromMap(activityDoc.data());
       
    }
}

export async function editShowEventsCharacters(show: Show) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), show.activityId);
    const eventsQuery = query(collection(activityDoc, "events"), where("showId", "==", show.id));
    const eventsSnap = await getDocs(eventsQuery);
    for (const doc of eventsSnap.docs) {
        const event = TheaterEvent.fromMap(doc.data());
        for (let i = 0; i < event.characters.length; i++) {
            const character = event.characters[i];
            if(character instanceof Character){
                event.characters[i] = show.characters.find((c) => c.name == character.name)!;
            } else if(character instanceof ShowGroup){
                event.characters[i] = show.showGroups.find((g) => g.name == character.name)!;
            }
            
        }
        const targets: ActivityMember[] = [];
  
        for(const character of event.characters){
            if(character instanceof FullCast){
                for(const actor of show!.ensemble!.actors){
                    targets.push(actor)
                }
                for(const character of show!.characters){
                    if(targets.find((e) => e.userId == character.actor!.userId) != undefined){
                        continue
                    }
                    targets.push(character.actor!)
                }
                break
            } 
            if(character instanceof Character){
                if(targets.find((e) => e.userId == character.actor!.userId) != undefined){
                    continue
                }
                targets.push(character.actor!)
            }
            if(character instanceof EnsembleSection){
                if(character.includeAll){
                
                    for(const actor of show!.ensemble!.actors){
                        if(targets.find((e) => e.userId == actor.userId) != undefined){
                            continue
                        }
                        targets.push(actor)
                    }
                } else if(character.includeMale){
                    for(const actor of show!.ensemble!.actors){
                        if(actor.gender == "male"){
                            if(targets.find((e) => e.userId == actor.userId) != undefined){
                                continue
                            }
                            targets.push(actor)
                        } 
                    }
                } else if(character.includeFemale){
                    for(const actor of show!.ensemble!.actors){
                        if(actor.gender == "female"){
                            if(targets.find((e) => e.userId == actor.userId) != undefined){
                                continue
                            }
                            targets.push(actor)
                        }
                    }
                } else if(character.includeCustom){
                    for(const actor of character.customActors){
                        if(targets.find((e) => e.userId == actor.userId) != undefined){
                            continue
                        }
                        targets.push(actor)
                    }
                }

            }
            if(character instanceof ShowGroup){
                for(const showCharacter of character.characters){
                    if(showCharacter instanceof Character){
                        if(targets.find((e) => e.userId == showCharacter.actor!.userId) != undefined){
                            continue
                        }
                        targets.push(showCharacter.actor!)
                    }
                    if(showCharacter instanceof EnsembleSection){
                        if(showCharacter.includeAll){
                            for(const actor of show!.ensemble!.actors){
                                if(targets.find((e) => e.userId == actor.userId) != undefined){
                                    continue
                                }
                                targets.push(actor)
                            }
                        } else if(showCharacter.includeMale){
                            for(const actor of show!.ensemble!.actors){
                                if(actor.gender == "male"){
                                    if(targets.find((e) => e.userId == actor.userId) != undefined){
                                        continue
                                    }
                                    targets.push(actor)
                                }
                            }
                        } else if(showCharacter.includeFemale){
                            for(const actor of show!.ensemble!.actors){
                                if(actor.gender == "female"){
                                    if(targets.find((e) => e.userId == actor.userId) != undefined){
                                        continue
                                    }
                                    targets.push(actor)
                                }
                            }
                        } else if(showCharacter.includeCustom){
                            for(const actor of showCharacter.customActors){
                                if(targets.find((e) => e.userId == actor.userId) != undefined){
                                    continue
                                }
                                targets.push(actor)
                            }
                        }
                    }
                }

            }

        }
        event.targets = targets;
        event.lastUpdated = Date.now();

        await updateDoc(doc.ref, event.toMap());
    }
}

export async function editShowEventsCharactersTemplate(show: Show) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), show.activityId);
    const eventsQuery = query(collection(activityDoc, "events"), where("showId", "==", show.id));
    const eventsSnap = await getDocs(eventsQuery);
    for (const doc of eventsSnap.docs) {
        const event = TheaterEvent.fromMap(doc.data());
        const newCharacters: (Character | ShowGroup)[] = [];
        for (let i = 0; i < event.characters.length; i++) {
            const character = event.characters[i];
            if(character instanceof Character){
                const char = show.characters.find((c) => c.characterId == character.characterId);
                if(char){
                    newCharacters.push(char);
                }
            } else if(character instanceof ShowGroup){
                const sg = show.showGroups.find((g) => g.showGroupId == character.showGroupId);
                if(sg){
                    newCharacters.push(sg);
                }
            }
            event.characters = newCharacters;
            
        }
        const targets: ActivityMember[] = [];
  
        for(const character of newCharacters){
            if(character instanceof FullCast){
                for(const actor of show!.ensemble!.actors){
                    targets.push(actor)
                }
                for(const character of show!.characters){
                    if(targets.find((e) => e.userId == character.actor!.userId) != undefined){
                        continue
                    }
                    targets.push(character.actor!)
                }
                break
            } 
            if(character instanceof Character){
                if(targets.find((e) => e.userId == character.actor!.userId) != undefined){
                    continue
                }
                targets.push(character.actor!)
            }
            if(character instanceof EnsembleSection){
                if(character.includeAll){
                
                    for(const actor of show!.ensemble!.actors){
                        if(targets.find((e) => e.userId == actor.userId) != undefined){
                            continue
                        }
                        targets.push(actor)
                    }
                } else if(character.includeMale){
                    for(const actor of show!.ensemble!.actors){
                        if(actor.gender == "male"){
                            if(targets.find((e) => e.userId == actor.userId) != undefined){
                                continue
                            }
                            targets.push(actor)
                        } 
                    }
                } else if(character.includeFemale){
                    for(const actor of show!.ensemble!.actors){
                        if(actor.gender == "female"){
                            if(targets.find((e) => e.userId == actor.userId) != undefined){
                                continue
                            }
                            targets.push(actor)
                        }
                    }
                } else if(character.includeCustom){
                    for(const actor of character.customActors){
                        if(targets.find((e) => e.userId == actor.userId) != undefined){
                            continue
                        }
                        targets.push(actor)
                    }
                }

            }
            if(character instanceof ShowGroup){
                for(const showCharacter of character.characters){
                    if(showCharacter instanceof Character){
                        if(targets.find((e) => e.userId == showCharacter.actor!.userId) != undefined){
                            continue
                        }
                        targets.push(showCharacter.actor!)
                    }
                    if(showCharacter instanceof EnsembleSection){
                        if(showCharacter.includeAll){
                            for(const actor of show!.ensemble!.actors){
                                if(targets.find((e) => e.userId == actor.userId) != undefined){
                                    continue
                                }
                                targets.push(actor)
                            }
                        } else if(showCharacter.includeMale){
                            for(const actor of show!.ensemble!.actors){
                                if(actor.gender == "male"){
                                    if(targets.find((e) => e.userId == actor.userId) != undefined){
                                        continue
                                    }
                                    targets.push(actor)
                                }
                            }
                        } else if(showCharacter.includeFemale){
                            for(const actor of show!.ensemble!.actors){
                                if(actor.gender == "female"){
                                    if(targets.find((e) => e.userId == actor.userId) != undefined){
                                        continue
                                    }
                                    targets.push(actor)
                                }
                            }
                        } else if(showCharacter.includeCustom){
                            for(const actor of showCharacter.customActors){
                                if(targets.find((e) => e.userId == actor.userId) != undefined){
                                    continue
                                }
                                targets.push(actor)
                            }
                        }
                    }
                }

            }

        }
        event.targets = targets;
        event.lastUpdated = Date.now();
        await updateDoc(doc.ref, event.toMap());
    }
}

export async function getAllResources(): Promise<Resource[]> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return [];
    const activities = await getActivities();
    const resources: Resource[] = [];
    for (const activity of activities) {
        console.log("Getting resources for " + activity.name);
        if(activity.type == "theater"){
           const shows = await getActivityShows(activity.id);

              for(const show of shows){
                console.log("Getting resources for " + show.name);
                resources.push(...show.resources);
              }
        }
    }
    return resources;
}

export async function getAllUserShows(): Promise<Show[]> {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return [];
    const activities = await getActivities();
    const shows: Show[] = [];
    for (const activity of activities) {
        console.log("Getting resources for " + activity.name);
        if(activity.type == "theater"){
           const rShows = await getActivityShows(activity.id);

              for(const show of rShows){
                show.activityName = activity.name;
                shows.push(show);
              }
        }
    }
    return shows;
}

export async function acceptParentChildRequest( parentUid: string) {

    const userId = localStorage.getItem("userId");

   const parentDoc = doc(collection(db, "parents"), parentUid);
    const parentSnap = await getDoc(parentDoc);
    if (!parentSnap.exists()) return null;
    const parentData = parentSnap.data();
    const requestedChildren = parentData.requestedChildren;
    const children = parentData.children;
    const child = requestedChildren.find((child) => child.uid == userId);
    if (!child) return null;
    requestedChildren.splice(requestedChildren.indexOf(child), 1);
    children.push(child);
    await updateDoc(parentDoc, {
        requestedChildren: requestedChildren,
        children: children,
        "lastUpdated": Date.now()
    });
}

export async function editActivityLocation(activityId: string, newLocation: Location, oldLocation: Location) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);

    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const activitySnap = await getDoc(activityDoc);
    if (!activitySnap.exists()) return;
    const activityData = activitySnap.data();
    const locations = activityData.locations as DocumentData[];
    for (let i = 0; i < locations.length; i++) {
        const location = Location.fromMap(locations[i]);
        if (location.name == oldLocation.name) {
            locations[i] = newLocation.toMap();
        }
    }
    let defaultLocation = Location.fromMap(activityData.defaultLocation);
    if(defaultLocation.name == oldLocation.name){
        defaultLocation = newLocation
    } 
    await updateDoc(activityDoc, {
        locations: locations,
        defaultLocation: defaultLocation.toMap(),
        lastUpdated: Date.now()
    });
    const eventsQuery = query(collection(activityDoc, "events"), where("location", "==", oldLocation.toMap()));
    const eventsSnap = await getDocs(eventsQuery);
    eventsSnap.docs.forEach(async (doc) => {
        if(doc.data().deleted == true){
            return;
        }
        //check type of event
        const event = doc.data();
        if(event.type == "activity-theater-event"){
            const theaterEvent = TheaterEvent.fromMap(event);
            theaterEvent.id = doc.id;
            await deleteActivityTheaterEvent(theaterEvent);
            theaterEvent.location = newLocation;
            theaterEvent.lastUpdated = Date.now();
            await addActivityTheaterEvent(theaterEvent);
        } else {
            const activityEvent = ActivityEvent.fromMap(event);
            activityEvent.id = doc.id;
            await deleteActivityEvent(activityEvent);
            activityEvent.location = newLocation;
            activityEvent.lastUpdated = Date.now();
            await addActivityEvent(activityEvent);
        }
    })


}

export async function editActivityRehearsalLocation(activityId: string, newLocation: TheaterLocation, oldLocation: TheaterLocation) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);

    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const activitySnap = await getDoc(activityDoc);
    if (!activitySnap.exists()) return;
    const activityData = activitySnap.data();
    if(activityData.type != "theater") return;
    const locations = activityData.rehearsalLocations as DocumentData[];
    for (let i = 0; i < locations.length; i++) {
        const location = TheaterLocation.fromMap(locations[i]);
        if (location.name == oldLocation.name) {
            locations[i] = newLocation.toMap();
        }
    }
    
    await updateDoc(activityDoc, {
        rehearsalLocations: locations,

        lastUpdated: Date.now()
    });
    const eventsQuery = query(collection(activityDoc, "events"), where("rehearsalLocation", "==", oldLocation.toMap()));
    const eventsSnap = await getDocs(eventsQuery);
    eventsSnap.docs.forEach(async (doc) => {
        if(doc.data().deleted == true){
            return;
        }
        //check type of event
        const event = doc.data();
        if(event.type == "activity-theater-event"){
            const theaterEvent = TheaterEvent.fromMap(event);
            theaterEvent.id = doc.id;
            await deleteActivityTheaterEvent(theaterEvent);
            theaterEvent.rehearsalLocation = newLocation;
            theaterEvent.lastUpdated = Date.now();
            await addActivityTheaterEvent(theaterEvent);
        } 
    });


}

export async function editActivityName(activityId: string, newName: string) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);

    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const activitySnap = await getDoc(activityDoc);
    if (!activitySnap.exists()) return;
    const activityData = activitySnap.data();
    
    
    await updateDoc(activityDoc, {
        name: newName,

        lastUpdated: Date.now()
    });
    const eventsQuery = collection(activityDoc, "events");
    const eventsSnap = await getDocs(eventsQuery);
    eventsSnap.docs.forEach(async (doc) => {
        if(doc.data().deleted == true){
            return;
        }
        //check type of event
        const event = doc.data();
        if(event.type == "activity-theater-event"){
            const theaterEvent = TheaterEvent.fromMap(event);
            theaterEvent.id = doc.id;
            await deleteActivityTheaterEvent(theaterEvent);
            theaterEvent.activityName = newName;
            theaterEvent.lastUpdated = Date.now();
            await addActivityTheaterEvent(theaterEvent);
        }  else {
            const activityEvent = ActivityEvent.fromMap(event);
            activityEvent.id = doc.id;
            await deleteActivityEvent(activityEvent);
            activityEvent.activityName = newName;
            activityEvent.lastUpdated = Date.now();
            await addActivityEvent(activityEvent);
        }
    })


}

export async function editActivityEventType(activityId: string, newEventType: EventType, oldEventType: EventType, isTheater: boolean) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);

    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const activitySnap = await getDoc(activityDoc);
    if (!activitySnap.exists()) return;
    const activityData = activitySnap.data();
    const eventTypes = activityData.eventTypes as DocumentData[];
    for (let i = 0; i < eventTypes.length; i++) {
        const eventType = EventType.fromMap(eventTypes[i]);
        if (eventType.name == oldEventType.name) {
            eventTypes[i] = newEventType.toMap();
        }
    }
    
    await updateDoc(activityDoc, {
        eventTypes: eventTypes,

        lastUpdated: Date.now()
    });
    const eventsQuery = query(collection(activityDoc, "events"), where(isTheater ? "activityEventType": "eventType", "==", oldEventType.toMap()));
    const eventsSnap = await getDocs(eventsQuery);
    eventsSnap.docs.forEach(async (doc) => {
        if(doc.data().deleted == true){
            return;
        }
        //check type of event
        const event = doc.data();
        if(event.type == "activity-theater-event"){
            const theaterEvent = TheaterEvent.fromMap(event);
            theaterEvent.id = doc.id;
            await deleteActivityTheaterEvent(theaterEvent);
            theaterEvent.activityEventType = newEventType;
            theaterEvent.lastUpdated = Date.now();

            await addActivityTheaterEvent(theaterEvent);
        } else {
            const activityEvent = ActivityEvent.fromMap(event);
            activityEvent.id = doc.id;
            await deleteActivityEvent(activityEvent);
            activityEvent.eventType = newEventType;
            activityEvent.lastUpdated = Date.now();
            await addActivityEvent(activityEvent);
        }
    });


}

export async function editActivityGroup(activityId: string, newActivityGroup: ActivityGroup, oldActivityGroup: ActivityGroup) {
    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    console.log("Editing group");
    console.log(newActivityGroup);
    console.log(activityId);

    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
    const activitySnap = await getDoc(activityDoc);
    if (!activitySnap.exists()) return;
    const activityData = activitySnap.data();

    const activityGroups = activityData.groups as DocumentData[];
    for (let i = 0; i < activityGroups.length; i++) {
        const activityGroup = ActivityGroup.fromMap(activityGroups[i]);
        if (activityGroup.groupName == oldActivityGroup.groupName) {
            activityGroups[i] = newActivityGroup.toMap();
        }
    }
    
    await updateDoc(activityDoc, {
        groups: activityGroups,

        lastUpdated: Date.now()
    });
    const eventsQuery = query(collection(activityDoc, "events"), where("groupNames", "array-contains", oldActivityGroup.groupName));
    const eventsSnap = await getDocs(eventsQuery);
    eventsSnap.docs.forEach(async (doc) => {
        if(doc.data().deleted == true){
            return;
        }
        //check type of event
        const event = doc.data();
        if(event.type != "activity-theater-event"){
           
            const activityEvent = ActivityEvent.fromMap(event);
            activityEvent.id = doc.id;
            console.log("deleting event");
            await deleteActivityEvent(activityEvent);
            activityEvent.groupNames = activityEvent.groupNames.map((groupName) => groupName == oldActivityGroup.groupName ? newActivityGroup.groupName : groupName);
            activityEvent.groupTargets = activityEvent.groupTargets.map((groupTarget) => groupTarget.groupName == oldActivityGroup.groupName ? newActivityGroup : groupTarget);
            const targets: ActivityMember[] = [];
            for(const groupTarget of activityEvent.groupTargets){
                for(const member of groupTarget.groupMembers){
                    if(targets.find((e) => e.userId == member.userId) != undefined){
                        continue
                    }
                    targets.push(member);
                }
            }
            activityEvent.targets = targets;
            activityEvent.lastUpdated = Date.now();
            console.log("adding event");
            await addActivityEvent(activityEvent);
        }


    });
    

    const groupChatsQuery = query(collection(activityDoc, "groupChats"), where("name", "==", oldActivityGroup.groupName), where("generalTarget", "==", "group"));
    const groupChatsSnap = await getDocs(groupChatsQuery);
    for(const doc of groupChatsSnap.docs){
        const gc = ActivityGC.fromMap(doc.data());
        gc.name = newActivityGroup.groupName;
        gc.members = newActivityGroup.groupMembers.map((member) => member.toGroupChatMember());
        gc.lastUpdated = Date.now();
        await updateDoc(doc.ref, gc.toMap());
    }
}

export async function addActivityGroup(activityId: string, group: ActivityGroup): Promise<ActivityGroup> {

    const schoolId = localStorage.getItem("schoolId");
    if (!schoolId) return;
    const schoolDoc = doc(db, "schools", schoolId);
    const activityDoc = doc(collection(schoolDoc, "activities"), activityId);
   


    await updateDoc(activityDoc, {
        groups: arrayUnion(group.toMap()),

        lastUpdated: Date.now()
    });
    const activityGC = ActivityGC.fromBlank(
group.groupName,
"",
group.groupMembers.map((member) => member.toGroupChatMember()),


"group",
activityId,
Date.now());
await createActivityGroupChat(activityGC);
        return group;

}

export async function getCompanyOpportunities(): Promise<Opportunity[]> {
    const companyId = localStorage.getItem("companyId");
    if (!companyId) return [];
   const opportunitiesQuery = query(opportunitiesCollection, where("companyId", "==", companyId));
   const opportunitiesSnap = await getDocs(opportunitiesQuery);
    const opportunities: Opportunity[] = [];
    opportunitiesSnap.forEach((doc) => {
        const data = doc.data();
        if(data.deleted) return;
        data.id = doc.id;
        const opportunityType = opportunityTypeFromString( data.type);
        if(opportunityType == OpportunityType.Job){
            opportunities.push(Job.fromMap(data));
        } else if(opportunityType == OpportunityType.OneTimeVolunteer){
            opportunities.push(OneTimeVolunteer.fromMap(data));
        } else if(opportunityType == OpportunityType.RecurringVolunteer){
            opportunities.push(RecurringVolunteer.fromMap(data));
        }

    });
    return opportunities;
}

export async function getOpportunities(): Promise<Opportunity[]> {



   const opportunitiesSnap = await getDocs(opportunitiesCollection);
    const opportunities: Opportunity[] = [];
    opportunitiesSnap.forEach((doc) => {
        const data = doc.data();
        if(data.deleted) return;
        data.id = doc.id;
        const opportunityType = opportunityTypeFromString( data.type);
        if(opportunityType == OpportunityType.Job){
            opportunities.push(Job.fromMap(data));
        } else if(opportunityType == OpportunityType.OneTimeVolunteer){
            opportunities.push(OneTimeVolunteer.fromMap(data));
        } else if(opportunityType == OpportunityType.RecurringVolunteer){
            opportunities.push(RecurringVolunteer.fromMap(data));
        }

    });
    return opportunities;
}

export async function updateOpportunity(opportunity: Opportunity, justApplied: boolean) {
    if(!justApplied && opportunity instanceof OneTimeVolunteer){
        await httpsCallable(functions, "deleteCloudTask")({
            "taskId": opportunity.taskId,
          });
        const result = await httpsCallable(functions, "startRemoveVolunteerOpportunity")({
            "opportunityId": opportunity.id,
            "date": opportunity.eventDate.getDateStart().getTime(),
          });
          opportunity.taskId = result.data as string;
    }
    
    const opportunityDoc = doc(opportunitiesCollection, opportunity.id);
    await updateDoc(opportunityDoc, opportunity.toMap());
}

export async function getCompany(): Promise<Company | null> {
    const companyId = localStorage.getItem("companyId");
    if (!companyId) return null;
    const companyDoc = doc(companiesCollection, companyId);
    const companySnap = await getDoc(companyDoc);
    if (!companySnap.exists()) return null;
    return Company.fromMap(companySnap.data());
}

export async function deleteCloudTask(taskId: string) {
    await httpsCallable(functions, "deleteCloudTask")({
        "taskId": taskId,
      });
    }


export async function addOpportunity(opportunity: Opportunity): Promise<Opportunity> {
    if(opportunity instanceof OneTimeVolunteer){

         
          
          const result = await httpsCallable(functions, "startRemoveVolunteerOpportunity")({
            "opportunityId": opportunity.id,
            "date": opportunity.eventDate.getDateStart().getTime(),
          });
          opportunity.taskId = result.data as string;

    }
    
    const ref = await addDoc(opportunitiesCollection, opportunity.toMap());
    opportunity.id = ref.id;
    return opportunity;
}

export async function deleteOpportunity(opportunity: Opportunity) {
    if(opportunity instanceof OneTimeVolunteer){
        console.log(opportunity.taskId);
        await httpsCallable(functions, "deleteCloudTask")({
            "taskId": opportunity.taskId,
          });
    }
    const opportunityDoc = doc(opportunitiesCollection, opportunity.id);
    await updateDoc(opportunityDoc, {
        deleted: true,
        lastUpdated: Date.now()
    });

    await httpsCallable(functions, "startDeleteOpportunity")({
        "opportunityId": opportunity.id,
      });
}

export async function createCompany(company: Company): Promise<Company> {
    const ref = await addDoc(companiesCollection, company.toMap());
    company.id = ref.id;
    return company;
}

export async function joinCompany(companyId: string, employer: EmployerData) {
    const companyDoc = doc(companiesCollection, companyId);
    await updateDoc(companyDoc, {
        employers: arrayUnion(employer.toMap()),
        employerUids: arrayUnion(employer.uid),
        lastUpdated: Date.now()
    });

}

export async function updateCompany(company: Company) {
    const companyDoc = doc(companiesCollection, company.id);
    await updateDoc(companyDoc, company.toMap());
}

export async function updateCompanyName(companyId: string, newName: string) {
    const opportunitiesQuery = query(opportunitiesCollection, where("companyId", "==", companyId));
    const opportunitiesSnap = await getDocs(opportunitiesQuery);
    opportunitiesSnap.forEach(async (doc) => {
        const opportunity = doc.data();
        if(opportunity.deleted) return;
        opportunity.companyName = newName;
        await updateDoc(doc.ref, opportunity);
    });
}


// export async function fixEventDates(){
//     const schoolId = localStorage.getItem("schoolId");
//     if (!schoolId) return;
//     const schoolDoc = doc(db, "schools", schoolId);

//     const activitiesSnap = await getDocs(collection(schoolDoc, "activities"));
//     for(const doc of activitiesSnap.docs){
//         const eventsSnap = await getDocs(collection(doc.ref, "events"));


//         for(const eventDoc of eventsSnap.docs){
//             const event = eventDoc.data();
//             const eventDate = event.date.date;
//             console.log(eventDate);
//             if( typeof eventDate === 'string' && eventDate.includes("-")){
//                 continue;
//             }
//             //Convert date to string mm-dd-yyyy
//             const date = eventDate.toDate();
//             const month = date.getMonth() + 1;
//             const day = date.getDate();
//             const year = date.getFullYear();
//             const dateString = `${month}-${day}-${year}`;
//             event.date.date = dateString;
//             await updateDoc(eventDoc.ref, event);


//         }
//     }
// }