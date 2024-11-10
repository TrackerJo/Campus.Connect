import { EventClickArg } from "@fullcalendar/core/index.js";
import { EventImpl } from "@fullcalendar/core/internal";
import { DateClickArg } from "@fullcalendar/interaction/index.js";

import { DocumentData, GeoPoint, Timestamp } from "firebase/firestore";
import { LegacyRef } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
export type CalendarProps = {
    events: CalendarEvent[];
    dateClick: (dateClickArg: DateClickArg) => void;
    eventClick: (event: EventClickArg) => void;
    deleteEvent: (event: EventImpl) => void;
    viewConflicts: (date: Date) => void;
    editEvent: (event: EventImpl) => void;
    canOpenContextMenu: boolean;
    
};

export type CalendarEvent = {
    id: string;
    title: string;
    isAllDay: boolean;
    start: string;
    end?: string;
    interactive: boolean;
    color: string;
    description: string;


}

export type ContextMenuItem = {
    name: string;
    onClick: () => void;
}

export type CustomContextMenuProps = {
    items: ContextMenuItem[];
    top: number;
    left: number;
    
};

export type DashboardTileProps = {
    title: string;
    description: string;
    onClick: () => void;
    
};

export type ActTileProps = {
    act: Act;
    setAct: (act: Act) => void;
    isCreate: boolean;
    removeAct: () => void;
    isAssign: boolean;
    characters: Character[];
    showGroups: ShowGroup[];
    hasEnsemble: boolean;


    
};

export type SceneTileProps = {
    scene: Scene;
    setScene: (scene: Scene) => void;
    isCreate: boolean;
    removeScene: () => void;    
    isAssign: boolean;
    characters: Character[];
    showGroups: ShowGroup[];
    hasEnsemble: boolean;

    
};

export type SceneDisplayTileProps = {
    scene: Scene;
    onClick: (scene: Scene) => void;
    
};

export type ActDisplayTileProps = {
    act: Act;
    onClick: (scene: Scene) => void;
};

export type CharacterTileProps = {
    character: Character;
    setCharacter: (character: Character) => void;
    removeCharacter: () => void;
    isCreate: boolean;
    isAssign: boolean;
    characters: Character[];
    actors: Actor[];

    
};

export type CharacterDisplayTileProps = {
    character: Character;
    canDelete: boolean;
    isMini: boolean;
    onDelete: () => void;
};

export type ConflictDateTileProps = {
    conflict: ConflictDate;
    canDelete: boolean;
    onDelete: () => void;
    setConflict: (conflict: ConflictDate) => void;
};

export type ConflictDateFormTileProps = {
    conflict: ConflictDate;
    conflictResponseDate: ConflictResponseDate;
    setConflict: (conflictResponseDate: ConflictResponseDate) => void;
};

export type ConflictDisplayTileProps = {
    conflictResponseDate: ConflictResponseDate;
    actor: Actor;
};

export type DateConflict = {
    conflictResponseDate: ConflictResponseDate;
    actor: Actor;
}

export type EnsembleSectionProps = {
    ensembleSection: EnsembleSection;
    setEnsembleSection: (ensembleSection: EnsembleSection) => void;
    removeEnsembleSection: () => void;
    isCreate: boolean;
    isAssign: boolean;
    isCustom: boolean;
    actors: Actor[];
    isGroupChatCreate: boolean;
    onAddEnsemble: () => void;

    
};

export type ActorTileProps = {
    actor: Actor;
    canDelete: boolean;
    onDelete: () => void;
}

export type EnsembleSectionDisplayTileProps = {
    ensembleSection: EnsembleSection;
    canDelete: boolean;
    isMini: boolean;
    onDelete: () => void;
    
};

export type ShowGroupTileProps = {
    showGroup: ShowGroup;
    setShowGroup: (showGroup: ShowGroup) => void;
    removeShowGroup: () => void;
    isCreate: boolean;
    isAssign: boolean;
    showGroups: ShowGroup[];
    hasEnsemble: boolean;
    characters: Character[];
    actors: Actor[];

    
};

export type ShowGroupDisplayTileProps = {
    showGroup: ShowGroup;
    canDelete: boolean;
    canClick: boolean;
    showCharacters: boolean;
    onClick: () => void;
    onDelete: () => void;  
    
};

export type SongTileProps = {
    song: Song;
    setSong: (song: Song) => void;
    isCreate: boolean;
    removeSong: () => void;
    isAssign: boolean;
    characters: Character[];
    showGroups: ShowGroup[];
    hasEnsemble: boolean;

    
};

export type FullCastTileProps = {
    canDelete: boolean;
    onDelete: () => void;
}

export type DanceTileProps = {
    dance: Dance;
    setDance: (dance: Dance) => void;
    isCreate: boolean;
    removeDance: () => void;
    isAssign: boolean;
    characters: Character[];
    showGroups: ShowGroup[];
    hasEnsemble: boolean;

    
};

export type SongDisplayTileProps = { 
    song: Song;
    onClick: () => void;
    
};

export type DanceDisplayTileProps = {
    dance: Dance;
    onClick: () => void;
    
};


export type AssignActorDialogProps = {
    actor: Actor;
    setActor: (actor: Actor) => void;
    actors: Actor[];
    dialogRef: LegacyRef<HTMLDialogElement>;
    addedActors: Actor[];
    close: () => void;
    keepPastResult: boolean;
}

export type AddConflictDialogProps = {
    date: Date;
    minTime: Date;
    maxTime: Date;
    setConflict: (conflict: ConflictResponseDate) => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
};

export type JoinActivityDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
}

export type CalendarHoverEventTileProps = {
    event: EventImpl;
    top: number;
    left: number;
}

export type AddRecurringConflictDialogProps = {
    addConflicts: (conflicts: ConflictResponseDate[]) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
}

export type SimpleConflictResponseDateDisplayTileProps = {
    conflictResponseDate: ConflictResponseDate;
}

export type AddRehearsalLocationDialogProps = {
    addRehearsalLocation: (rehearsalLocation: TheaterLocation) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;    

}

export type GroupChatDisplayTileProps = {
    groupChat: ActivityGC;
    onClick: () => void;
}

export type MessageTileProps = {
    message: Message;
    isSender: boolean;
}

export type MessageSendBarProps = {
    sendMessage: (message: string) => void;
}

export type CreateGroupChatDialogProps = {
    activityId: string;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    refresh: () => void;    
}

export type AddUserDialogProps = {
    members: (ActivityMember | Actor)[];
    addedMembers: (ActivityMember)[];
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    addUser: (users: (ActivityMember | Actor)) => void;
}

export type AddFromPlayDialogProps = {
    activityId: string;
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    addMembers: (members: Actor[]) => void;
    setName: (name: string) => void;
}

export type AddFromGroupDialogProps = {
    activityGroups: ActivityGroup[];
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    addMembers: (members: ActivityMember[]) => void;
}

export type BroadcastMessageDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    activityId: string;
    userData: DocumentData;
    refresh: () => void;
}

export type AddResourceDialogProps = { 
    addResource: (resource: Resource) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    activityId: string;
}

export type ResourceTileProps = {
    resource: Resource;
    canRemove: boolean;
    removeResource: () => void;
}

export class Activity {
    name: string;
    type: "activity" | "theater";
    id: string;
    joinCode: string;
    students: ActivityMember[];
    parents: ActivityMember[];
    groups: ActivityGroup[];
    teachers: ActivityMember[];
    locations: Location[];
    eventTypes: EventType[];
    defaultLocation: Location;
    showBy: string;
    lastUpdated: number;

    constructor() {
        this.name = "";
        this.id = "";
        this.type = "activity";
        this.joinCode = "";
        this.students = [];
        this.parents = [];
        this.groups = [];
        this.teachers = [];
        this.locations = [];
        this.eventTypes = [];
        this.defaultLocation = Location.fromEmpty("", "", new GeoPoint(0, 0));
        this.showBy = "";
        this.lastUpdated = 0;
    }

    public static fromBlank(name: string, id: string, joinCode: string, students: ActivityMember[], parents: ActivityMember[], groups: ActivityGroup[], teachers: ActivityMember[], locations: Location[], eventTypes: EventType[], defaultLocation: Location, showBy: string, lastUpdated: number, type: "activity" | "theater"): Activity {
        const activity = new Activity();
        activity.name = name;
        activity.id = id;
        activity.type = type;
        activity.joinCode = joinCode;
        activity.students = students;
        activity.parents = parents;

        activity.groups = groups;
        activity.teachers = teachers;
        activity.locations = locations;
        activity.eventTypes = eventTypes;
        activity.defaultLocation = defaultLocation;
        activity.showBy = showBy;
        activity.lastUpdated = lastUpdated;
        return activity;

    }
    

    toMap(): object {
        return {
        "name": this.name,
        "id": this.id,
        "type": this.type,
        "students": this.students.map((e) => e.toMap()),
        "parents": this.parents.map((e) => e.toMap()),
        "groups": this.groups.map((e) => e.toMap()),
        "joinCode": this.joinCode,
        "teachers": this.teachers.map((e) => e.toMap()),
        "locations": this.locations.map((e) => e.toMap()),
        "teachersUids": this.teachers.map((e) => e.memberUid),
        "studentsUids": this.students.map((e) => e.memberUid),
        "parentsUids": this.parents.map((e) => e.memberUid),
        "defaultLocation": this.defaultLocation.toMap(),
        "showBy": this.showBy,
        "eventTypes": this.eventTypes.map((e) => e.toMap()),
        "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): Activity {
        const activity = new Activity();
        activity.name = map.name;
        activity.id = map.id;
        activity.type = map.type;
        activity.joinCode = map.joinCode;
        const students = map.students;
        const formattedStudents: ActivityMember[] =  [];
        for (const student of students) {
            formattedStudents.push(ActivityMember.fromMap(student));
        }
        activity.students = formattedStudents;
        const parents = map.parents;
        const formattedParents: ActivityMember[] =  [];
        for (const parent of parents) {
            formattedParents.push(ActivityMember.fromMap(parent));
        }
        activity.parents = formattedParents;
        const groups = map.groups;
        const formattedGroups: ActivityGroup[] =  [];
        for (const group of groups) {
            formattedGroups.push(ActivityGroup.fromMap(group));
        }
        activity.groups = formattedGroups;
        const locations = map.locations;
        const formattedLocations: Location[] =  [];
        for (const location of locations) {
            formattedLocations.push(Location.fromMap(location));
        }
        activity.locations = formattedLocations;
        const teachers = map.teachers;
        const formattedTeachers: ActivityMember[] =  [];
        for (const teacher of teachers) {
            formattedTeachers.push(ActivityMember.fromMap(teacher));
        }
        activity.teachers = formattedTeachers;
        activity.showBy = map.showBy;
        activity.lastUpdated = map.lastUpdated;
        const eventTypes = map.eventTypes;
        const formattedEventTypes: EventType[] =  [];
        for (const eventType of eventTypes) {
            formattedEventTypes.push(EventType.fromMap(eventType));
        }
        activity.eventTypes = formattedEventTypes;
        activity.defaultLocation = Location.fromMap(map.defaultLocation);
        return activity;
    }
}

export class TheaterActivity {
    name: string;
    type = "theater" as const;
    id: string;
    joinCode: string;
    students: Actor[];
    parents: ActivityMember[];
    groups: ActivityGroup[];
    teachers: ActivityMember[];
    locations: Location[];
    eventTypes: EventType[];
    defaultLocation: Location;
    rehearsalLocations: TheaterLocation[];
    showBy: string;
    lastUpdated: number;

    constructor() {
        this.name = "";
        this.id = "";
        this.rehearsalLocations = [];

        this.joinCode = "";
        this.students = [];
        this.parents = [];
        this.groups = [];
        this.teachers = [];
        this.locations = [];
        this.eventTypes = [];
        this.defaultLocation = Location.fromEmpty("", "", new GeoPoint(0, 0));
        this.showBy = "";
        this.lastUpdated = 0;
    }

    public static fromBlank(name: string, id: string, joinCode: string, students: Actor[], parents: ActivityMember[], groups: ActivityGroup[], teachers: ActivityMember[], locations: Location[], eventTypes: EventType[], defaultLocation: Location, rehearsalLocations: TheaterLocation[],showBy: string, lastUpdated: number): TheaterActivity {
        const activityTheater = new TheaterActivity();
        activityTheater.name = name;
        activityTheater.id = id;
        activityTheater.rehearsalLocations = rehearsalLocations;
        activityTheater.joinCode = joinCode;
        activityTheater.students = students;
        activityTheater.parents = parents;

        activityTheater.groups = groups;
        activityTheater.teachers = teachers;
        activityTheater.locations = locations;
        activityTheater.eventTypes = eventTypes;
        activityTheater.defaultLocation = defaultLocation;
        activityTheater.showBy = showBy;
        activityTheater.lastUpdated = lastUpdated;
        return activityTheater;

    }
    

    toMap(): object {
        return {
        "name": this.name,
        "id": this.id,
        "type": this.type,
        "students": this.students.map((e) => e.toMap()),
        "parents": this.parents.map((e) => e.toMap()),
        "groups": this.groups.map((e) => e.toMap()),
        "joinCode": this.joinCode,
        "teachers": this.teachers.map((e) => e.toMap()),
        "teachersUids": this.teachers.map((e) => e.memberUid),
        "studentsUids": this.students.map((e) => e.userId),
        "parentsUids": this.parents.map((e) => e.memberUid),
        "locations": this.locations.map((e) => e.toMap()),
        "defaultLocation": this.defaultLocation.toMap(),
        "showBy": this.showBy,
        "eventTypes": this.eventTypes.map((e) => e.toMap()),
        "rehearsalLocations": this.rehearsalLocations.map((e) => e.toMap()),
        "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): TheaterActivity {
        const activity = new TheaterActivity();
        activity.name = map.name;
        activity.id = map.id;
        activity.type = map.type;
        activity.joinCode = map.joinCode;
        const students = map.students;
        const formattedStudents: Actor[] =  [];
        for (const student of students) {
            formattedStudents.push(Actor.fromMap(student));
        }
        activity.students = formattedStudents;
        const parents = map.parents;
        const formattedParents: ActivityMember[] =  [];
        for (const parent of parents) {
            formattedParents.push(ActivityMember.fromMap(parent));
        }
        activity.parents = formattedParents;
        const groups = map.groups;
        const formattedGroups: ActivityGroup[] =  [];
        for (const group of groups) {
            formattedGroups.push(ActivityGroup.fromMap(group));
        }
        activity.groups = formattedGroups;
        const locations = map.locations;
        const formattedLocations: Location[] =  [];
        for (const location of locations) {
            formattedLocations.push(Location.fromMap(location));
        }
        activity.locations = formattedLocations;
        const rehersalLocations = map.rehearsalLocations;
        const formattedRehersalLocations: TheaterLocation[] =  [];
        for (const rehersalLocation of rehersalLocations) {
            formattedRehersalLocations.push(TheaterLocation.fromMap(rehersalLocation));
        }
        activity.rehearsalLocations = formattedRehersalLocations
        const teachers = map.teachers;
        const formattedTeachers: ActivityMember[] =  [];
        for (const teacher of teachers) {
            formattedTeachers.push(ActivityMember.fromMap(teacher));
        }
        activity.teachers = formattedTeachers;
        activity.showBy = map.showBy;
        activity.lastUpdated = map.lastUpdated;
        const eventTypes = map.eventTypes;
        const formattedEventTypes: EventType[] =  [];
        for (const eventType of eventTypes) {
            formattedEventTypes.push(EventType.fromMap(eventType));
        }
        activity.eventTypes = formattedEventTypes;
        activity.defaultLocation = Location.fromMap(map.defaultLocation);
        return activity;
    }
}

export class TheaterLocation {
    name: string;
    color: number;

    constructor() {
        this.name = "";
        this.color = 0;
    }

    public static fromBlank(name: string, color: number): TheaterLocation {
        const theaterLocation = new TheaterLocation();
        theaterLocation.name = name;
        theaterLocation.color = color;
        return theaterLocation;
    }

    toMap(): object {
        return {
        "name": this.name,
        "color": this.color,
        };
    }

    public static fromMap(map: DocumentData): TheaterLocation {
        const theaterLocation = new TheaterLocation();
        theaterLocation.name = map.name;
        theaterLocation.color = map.color;
        return theaterLocation;
    }
}

export class Location {
    name: string;
    address: string;
    location: GeoPoint;

    constructor() {
        this.name = "";
        this.address = "";
        this.location = new GeoPoint(0, 0);
    }

    public static fromEmpty(name: string, address: string, location: GeoPoint): Location {
        const newLocation = new Location();
        newLocation.name = name;
        newLocation.address = address;
        newLocation.location = location;
        return newLocation;
    }


     toMap(): object {
        return {
        "name": this.name,
        "address": this.address,
        "location": this.location,
        };
    }

   public static fromMap( map: DocumentData): Location {
        const location = new Location();
        location.name = map.name;
        location.address = map.address;
        location.location = map.location;
        return location;
    }
}

export class ActivityGroup {
   groupName: string;
    groupMembers: ActivityMember[];
    groupColor: number;

    constructor() {
        this.groupName = "";
        this.groupMembers = [];
        this.groupColor = 0;
    }

    public static fromBlank(groupName: string, groupMembers: ActivityMember[], groupColor: number): ActivityGroup {
        const group = new ActivityGroup();
        group.groupName = groupName;
        group.groupMembers = groupMembers;
        group.groupColor = groupColor;
        return group;
    }

    toMap(): object {
        return {
        "groupName": this.groupName,
        "groupMembers": this.groupMembers.map((e) => e.toMap()),
        "groupColor": this.groupColor,
        };
    }

    public static fromMap(map: DocumentData): ActivityGroup {
        const group = new ActivityGroup();
        group.groupName = map.groupName;
        const groupMembers = map.groupMembers;
        const formattedGroupMembers: ActivityMember[] =  [];
        for (const groupMember of groupMembers) {
            formattedGroupMembers.push(ActivityMember.fromMap(groupMember));
        }
        group.groupMembers = formattedGroupMembers;
        group.groupColor = map.groupColor;
        return group;
    }
}

export class ActivityMember {
    memberName: string; 
    memberUid: string;
    memberFCMToken: string;

    constructor() {
        this.memberName = "";
        this.memberUid = "";
        this.memberFCMToken = "";
    }

    public static fromBlank(memberName: string, memberUid: string, memberFCMToken: string): ActivityMember {
        const member = new ActivityMember();
        member.memberName = memberName;
        member.memberUid = memberUid;
        member.memberFCMToken = memberFCMToken;
        return member;
    }

    toMap(): object {
        return {
        "memberName": this.memberName,
        "memberUid": this.memberUid,
        "memberFCMToken": this.memberFCMToken,
        };
    }

    public static fromMap(map: DocumentData): ActivityMember {
        const member = new ActivityMember();
        member.memberName = map.memberName;
        member.memberUid = map.memberUid;
        member.memberFCMToken = map.memberFCMToken;
        return member;
    }
}

export class EventType {
    name: string;
    color: number;
  
    constructor() {
        this.name = "";
        this.color = 0;
    }

    public static fromBlank(name: string, color: number): EventType {
        const eventType = new EventType();
        eventType.name = name;
        eventType.color = color;
        return eventType;
    }

    toMap(): object {
        return {
        "name": this.name,
        "color": this.color,
        };
    }

    public static fromMap(map: DocumentData): EventType {
        const eventType = new EventType();
        eventType.name = map.name;
        eventType.color = map.color;
        return eventType;
    }
}

export class EventDate {
    date: Date; 
    from: Date;
    to: Date;

  
    constructor() {
        this.date = new Date();
        this.from = new Date();
        this.to = new Date();
    }

    public static fromBlank(date: Date, from: Date, to: Date): EventDate {
        const eventDate = new EventDate();
        eventDate.date = date;
        eventDate.from = from;
        eventDate.to = to;
        return eventDate;
    }

  
    toMap():object {
      return {
        "date": this.date,
        "from": this.from.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }),
        "to": this.to.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }),
    };
    }
  
    static _parseTime(time: any): Date {
        if (typeof time === 'string') {
            const timePattern = /(\d{1,2}):(\d{2})\s?(AM|PM)/i;
            const match = time.match(timePattern);
            if (match) {
                let [_, hours, minutes, period] = match;
                hours = parseInt(hours, 10);
                minutes = parseInt(minutes, 10);
                if (period.toUpperCase() === 'PM' && hours < 12) {
                    hours += 12;
                } else if (period.toUpperCase() === 'AM' && hours === 12) {
                    hours = 0;
                }
                const parsedTime = new Date();
                parsedTime.setHours(hours, minutes, 0, 0);
                return parsedTime;
            }
        }
        throw new Error('Invalid time format');

    }
   
  
    public static fromMap(map: DocumentData): EventDate {   
        const eventDate = new EventDate();
        if(map.date instanceof Date){
            eventDate.date = map.date;
        } else if(typeof map.date == "string"){
            eventDate.date = new Date(map.date);

        } else {
            console.log(typeof map.date);
            console.log(map.date);
            eventDate.date = map.date.toDate();
        }
        eventDate.from = this._parseTime(map.from);
        eventDate.to = this._parseTime(map.to);
        return eventDate;
    }
  }

export class Event {
    name: string;
    info: string;
    location: Location;
    date: EventDate;
    type: string;
    lastUpdated: number;
    dateFilter: string;
    id: string | null;


    constructor() {
        this.name = '';
        this.info = '';
        this.location = Location.fromEmpty('', '', new GeoPoint(0, 0));
        this.date = EventDate.fromBlank(new Date(), new Date(), new Date());
        this.type = '';
        this.lastUpdated = 0;
        this.dateFilter = '';
        this.id = null;
        
    }

    public static fromBlank(name: string, info: string, location: Location, date: EventDate, type: string, lastUpdated: number): Event {
        const event = new Event();
        event.name = name;
        event.info = info;
        event.location = location;
        event.date = date;
        event.type = type;
        event.lastUpdated = lastUpdated;
        //format date.date to yyyy-mm-dd
        const dateFilter = date.date.toISOString().split('T')[0];
        event.dateFilter = dateFilter;
        return event;
    }

    toMap(): object {
        return {
        "name": this.name,
        "info": this.info,
        "location": this.location.toMap(),
        "date": this.date.toMap(),
        "dateFilter": this.dateFilter,
        "type": this.type,
        "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): Event {
        const event = new Event();
        event.name = map.name;
        event.info = map.info;
        event.location = Location.fromMap(map.location);
        event.date = EventDate.fromMap(map.date);
        event.type = map.type;
        event.lastUpdated = map.lastUpdated;
        event.dateFilter = map.dateFilter;
        return event;
    }
}
  
export class ActivityEvent {
    activityId: string;
    groupNames: string[];
    targets: ActivityMember[];
    generalTarget: string;
    eventType: EventType;
    groupTargets: ActivityGroup[];
    hasSchoolEvent: boolean;
    schoolEventId: string;
    conflicts: ActivityConflict[];
    activityName: string;
    name: string;
    info: string;
    location: Location;
    date: EventDate;
    type: string;
    lastUpdated: number;
    dateFilter: string;
    id: string | null;


    constructor() {

        this.activityId = '';
        this.groupNames = [];
        this.targets = [];
        this.generalTarget = '';
        this.eventType = new EventType();
        this.groupTargets = [];
        this.hasSchoolEvent = false;
        this.schoolEventId = '';
        this.conflicts = [];
        this.activityName = '';
        this.name = '';
        this.info = '';
        this.location = Location.fromEmpty('', '', new GeoPoint(0, 0));
        this.date = EventDate.fromBlank(new Date(), new Date(), new Date());
        this.type = '';
        this.lastUpdated = 0;
        this.dateFilter = '';
        this.id = null;
    }

    public static fromBlank(
        name: string,
        info: string,
        location: Location,
        date: EventDate,
        type: string,
        lastUpdated: number,
        activityId: string,
        groupNames: string[],
        targets: ActivityMember[],
        generalTarget: string,
        eventType: EventType,
        groupTargets: ActivityGroup[],
        hasSchoolEvent: boolean,
        schoolEventId: string,
        conflicts: ActivityConflict[],
        activityName: string
    ): ActivityEvent {
        const activityEvent = new ActivityEvent();
        activityEvent.name = name;
        activityEvent.info = info;
        activityEvent.location = location;
        activityEvent.date = date;
        activityEvent.type = type;
        activityEvent.lastUpdated = lastUpdated;
        const dateFilter = date.date.toISOString().split('T')[0];
        activityEvent.dateFilter = dateFilter;
        activityEvent.activityId = activityId;
        activityEvent.groupNames = groupNames;
        activityEvent.targets = targets;
        activityEvent.generalTarget = generalTarget;
        activityEvent.eventType = eventType;
        activityEvent.groupTargets = groupTargets;
        activityEvent.hasSchoolEvent = hasSchoolEvent;
        activityEvent.schoolEventId = schoolEventId;
        activityEvent.conflicts = conflicts;
        activityEvent.activityName = activityName;

        return activityEvent;
    }


    toMap(): object {
        return {
        "name": this.name,
        "info": this.info,
        "location": this.location.toMap(),
        "date": this.date.toMap(),
        
        "targets":this.targets.map((e) => e.toMap()),
        "generalTarget": this.generalTarget,
        "eventType": this.eventType.toMap(),
        "activityName":this.activityName,
        "groupTargets": this.groupTargets.map((e) => e.toMap()),
        "type": "activity",
        "groupNames": this.groupNames,
        "dateFilter": this.dateFilter,
        "hasSchoolEvent": this.hasSchoolEvent,
        "schoolEventId": this.schoolEventId,
        "activityId": this.activityId,
        "lastUpdated": this.lastUpdated,
        "targetUids": this.targets.map((e) => e.memberUid),
        "conflicts": this.conflicts.map((e) => e.toMap()),
        };
    }

    public static fromMap(map: DocumentData): ActivityEvent {
        const activityEvent = new ActivityEvent();
        activityEvent.name = map.name;
        activityEvent.info = map.info;
        activityEvent.location = Location.fromMap(map.location);
        activityEvent.date = EventDate.fromMap(map.date);
        const targets = map.targets;
        const formattedTargets: ActivityMember[] =  [];
        for (const target of targets) {
        formattedTargets.push(ActivityMember.fromMap(target));
        }
        activityEvent.targets = formattedTargets;
        activityEvent.generalTarget = map.generalTarget;
        activityEvent.eventType = EventType.fromMap(map.eventType);
        activityEvent.activityName = map.activityName;
        const groupTargets = map.groupTargets;
        const formattedGroupTargets: ActivityGroup[] =  [];
        for (const groupTarget of groupTargets) {
        formattedGroupTargets.push(ActivityGroup.fromMap(groupTarget));
        }
        activityEvent.groupTargets = formattedGroupTargets;
        activityEvent.groupNames = map.groupNames;
        activityEvent.dateFilter = map.dateFilter;
        activityEvent.hasSchoolEvent = map.hasSchoolEvent;
        activityEvent.schoolEventId = map.schoolEventId;
        activityEvent.activityId = map.activityId;
        activityEvent.lastUpdated = map.lastUpdated;
        const conflicts = map.conflicts;
        const formattedConflicts: ActivityConflict[] =  [];
        for (const conflict of conflicts) {
        formattedConflicts.push(ActivityConflict.fromMap(conflict));
        }
        activityEvent.conflicts = formattedConflicts;
        return activityEvent;
    }
}

class ActivityConflict {
    userId: string;
    type: string;
    start: Date | null;
    end: Date | null;
    reason: string;
    status: string;
    userName: string;

    constructor() {
        this.userId = '';
        this.type = '';
        this.start = null;
        this.end = null;
        this.reason = '';
        this.status = '';
        this.userName = '';
    }

    public static fromBlank(userId: string, type: string, start: Date | null, end: Date | null, reason: string, status: string, userName: string): ActivityConflict {
        const activityConflict = new ActivityConflict();
        activityConflict.userId = userId;
        activityConflict.type = type;
        activityConflict.start = start;
        activityConflict.end = end;
        activityConflict.reason = reason;
        activityConflict.status = status;
        activityConflict.userName = userName;
        return activityConflict;
    }

    toMap():object {
        return {
        "userId": this.userId,
        "type": this.type,
        "start": this.start != null ? this.start.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }) : "",
        "end": this.end != null ? this.end.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }) : "",
        "reason": this.reason,
        "status": this.status,
        "userName":this.userName,
        };
    }

    static _parseTime(time: any): Date {
        if (typeof time === 'string') {
            const parsedTime = new Date(`1970-01-01T${time}`);
            return parsedTime;
        }
        throw new Error('Invalid time format');
    }

    public static fromMap(map: DocumentData): ActivityConflict {
        const activityConflict = new ActivityConflict();
        activityConflict.userId = map.userId;
        activityConflict.type = map.type;
        activityConflict.start = map.start != "" ? this._parseTime(map.start) : null;
        activityConflict.end = map.end != "" ? this._parseTime(map.end) : null;
        activityConflict.reason = map.reason;
        activityConflict.status = map.status;
        activityConflict.userName = map.userName;
        return activityConflict;
    }
}

export class ActivityGC {
    name: string;
    id: string;
    members: ActivityMember[];
    generalTarget: string;
    activityId: string;
    lastMessage?: Message;


    constructor() {
        this.name = '';
        this.id = '';
        this.members = [];
        this.generalTarget = '';
        this.activityId = '';
    }


    public static fromBlank(name: string, id: string, members: ActivityMember[], generalTarget: string, activityId: string): ActivityGC {
        const activityGC = new ActivityGC();
        activityGC.name = name;
        activityGC.id = id;
        activityGC.members = members;
        activityGC.generalTarget = generalTarget;
        activityGC.activityId = activityId;
        return activityGC;
    }

    toMap():object {
        return {
        "name": this.name,
        "id": this.id,
        "members": this.members.map((e) => e.toMap()),
        "generalTarget": this.generalTarget,
        "activityId": this.activityId,
        };
    }

    public static fromMap(map: DocumentData): ActivityGC {
        const activityGC = new ActivityGC();
        activityGC.name = map.name;
        activityGC.id = map.id;
        const members = map.members;
        const formattedMembers: ActivityMember[] =  [];
        for (const member of members) {
            formattedMembers.push(ActivityMember.fromMap(member));
        }
        activityGC.members = formattedMembers;
        activityGC.generalTarget = map.generalTarget;
        activityGC.activityId = map.activityId;
        return activityGC;
    }

}

export class Message {
    message: string;
    senderUid: string;
    senderName: string;
    senderFCMToken: string;
    gcId: string;
    activityId: string;
    messageId: string;
    timeSent: Date;
    readBy: string[];
    
    constructor() {
        this.message = '';
        this.senderUid = '';
        this.senderName = '';
        this.senderFCMToken = '';
        this.gcId = '';
        this.activityId = '';
        this.messageId = '';
        this.timeSent = new Date();
        this.readBy = [];
    }

    public static fromBlank(message: string, senderUid: string, senderName: string, senderFCMToken: string, gcId: string, activityId: string, messageId: string, timeSent: Date, readBy: string[]): Message {
        const messageObj = new Message();
        messageObj.message = message;
        messageObj.senderUid = senderUid;
        messageObj.senderName = senderName;
        messageObj.senderFCMToken = senderFCMToken;
        messageObj.gcId = gcId;
        messageObj.activityId = activityId;
        messageObj.messageId = messageId;
        messageObj.timeSent = timeSent;
        messageObj.readBy = readBy;
        return messageObj;
    }

    toMap(): object {
        return {
        "message": this.message,
        "senderUid": this.senderUid,
        "senderName": this.senderName,
        "senderFCMToken": this.senderFCMToken,
        "gcId": this.gcId,
        "activityId": this.activityId,
        "messageId": this.messageId,
        "timeSent": this.timeSent,
        "readBy": this.readBy,
        };
    }

    public static fromMap(map: DocumentData): Message {
        const message = new Message();
        message.message = map.message;
        message.senderUid = map.senderUid;
        message.senderName = map.senderName;
        message.senderFCMToken = map.senderFCMToken;
        message.gcId = map.gcId;
        message.activityId = map.activityId;
        message.messageId = map.messageId;
        message.timeSent = map.timeSent.toDate();
        message.readBy = map.readBy;
        return message;
    }
  }

export class TheaterEvent {
    name: string;
    info: string;
    location: Location;
    date: EventDate;
    type: string;
    lastUpdated: number;
    dateFilter: string;
    id: string;
    activityId: string;
    showId: string;
    characters: (Character | ShowGroup | EnsembleSection | FullCast)[];
    targets: ActivityMember[];
    theaterEventType: string;
    rehearsalLocation: TheaterLocation;

    constructor() {
        this.name = '';
        this.info = '';
        this.location = Location.fromEmpty('', '', new GeoPoint(0, 0));
        this.date = EventDate.fromBlank(new Date(), new Date(), new Date());
        this.type = '';
        this.lastUpdated = 0;
        this.dateFilter = '';
        this.id = "";
        this.activityId = '';
        this.showId = '';
        this.characters = [];
        this.targets = [];
        this.theaterEventType = '';
        this.rehearsalLocation = new TheaterLocation();
    }

    public static fromBlank(
        name: string,
        info: string,
        location: Location,
        date: EventDate,
        type: string,
        lastUpdated: number,
        activityId: string,
        showId: string,
        characters: (Character | ShowGroup | EnsembleSection | FullCast)[],
        targets: ActivityMember[],
        theaterEventType: string,
        rehearsalLocation: TheaterLocation
    ): TheaterEvent {
        const theaterEvent = new TheaterEvent();
        theaterEvent.name = name;
        theaterEvent.info = info;
        theaterEvent.location = location;
        theaterEvent.date = date;
        theaterEvent.type = type;
        theaterEvent.lastUpdated = lastUpdated;
        const dateFilter = date.date.toISOString().split('T')[0];
        theaterEvent.dateFilter = dateFilter;
        theaterEvent.activityId = activityId;
        theaterEvent.showId = showId;
        theaterEvent.characters = characters;
        theaterEvent.targets = targets;
        theaterEvent.theaterEventType = theaterEventType;
        theaterEvent.rehearsalLocation = rehearsalLocation;
        return theaterEvent;
    }

    toMap(): object {
        return {
        "name": this.name,
        "info": this.info,
        "location": this.location.toMap(),
        "date": this.date.toMap(),
        "type": this.type,
        "lastUpdated": this.lastUpdated,
        "dateFilter": this.dateFilter,
        "activityId": this.activityId,
        "showId": this.showId,
        "characters": this.characters.map((e) => e.toMap()),
        "targets": this.targets.map((e) => e.toMap()),
        "targetUids": this.targets.map((e) => e.memberUid),
        "id": this.id,
        "theaterEventType": this.theaterEventType,
        "rehearsalLocation": this.rehearsalLocation.toMap(),
        };
    }

    public static fromMap(map: DocumentData): TheaterEvent {
        const theaterEvent = new TheaterEvent();
        theaterEvent.name = map.name;
        theaterEvent.info = map.info;
        theaterEvent.location = Location.fromMap(map.location);
        theaterEvent.date = EventDate.fromMap(map.date);
        theaterEvent.type = map.type;
        theaterEvent.lastUpdated = map.lastUpdated;
        theaterEvent.dateFilter = map.dateFilter;
        theaterEvent.activityId = map.activityId;
        theaterEvent.showId = map.showId;
        theaterEvent.theaterEventType = map.theaterEventType;
        const characters = map.characters;
        const formattedCharacters: (Character | ShowGroup | EnsembleSection | FullCast)[] =  [];
        for (const character of characters) {
            if (character.type === "Character") {
                formattedCharacters.push(Character.fromMap(character));
            }  else if (character.type === "ShowGroup") {
                formattedCharacters.push(ShowGroup.fromMap(character));
            } else if (character.type === "EnsembleSection") {
                formattedCharacters.push(EnsembleSection.fromMap(character));
            } if (character.type === "FullCast") {
                formattedCharacters.push(new FullCast());
            }
        }
        theaterEvent.characters = formattedCharacters;
        const targets = map.targets;
        const formattedTargets: ActivityMember[] =  [];
        for (const target of targets) {
            formattedTargets.push(ActivityMember.fromMap(target));
        }
        theaterEvent.targets = formattedTargets;
        theaterEvent.id = map.id;
        theaterEvent.rehearsalLocation = TheaterLocation.fromMap(map.rehearsalLocation);
        return theaterEvent;
    }

}

export class Show {
    name: string;
    id: string;
    layout: Act[];
    characters: Character[];
    ensemble: Ensemble | null;
    showGroups: ShowGroup[];
    lastUpdated: number;
    songs: Song[];
    dances: Dance[];
    canCreateSchedule: boolean;
    hasEnsemble: boolean;
    conflictForm: ConflictForm | null;
    formStatus: "open" | "closed";
    resources: Resource[];

    constructor() {
        this.name = "";
        this.id = "";
        this.layout = [];
        this.characters = [];
        this.ensemble = new Ensemble();
        this.showGroups = [];
        this.lastUpdated = 0;
        this.songs = [];
        this.dances = [];
        this.canCreateSchedule = false;
        this.hasEnsemble = false;
        this.conflictForm = new ConflictForm();
        this.formStatus = "open";
        this.resources = [];
    }

    public static fromBlank(name: string, id: string, layout: Act[], characters: Character[], ensemble: Ensemble | null, showGroups: ShowGroup[], songs: Song[],dances: Dance[], canCreateSchedule: boolean,hasEnsemble: boolean,conflictForm: ConflictForm | null,resources: Resource[],formStatus: "open" | "closed", lastUpdated: number): Show {
        const show = new Show();
        show.name = name;
        show.id = id;
        show.layout = layout;
        show.characters = characters;
        show.ensemble = ensemble;
        show.showGroups = showGroups;
        show.lastUpdated = lastUpdated;
        show.songs = songs;
        show.dances = dances;
        show.canCreateSchedule = canCreateSchedule;
        show.hasEnsemble = hasEnsemble;
        show.conflictForm = conflictForm;
        show.resources = resources;
        show.formStatus = formStatus;
        return show;
    }

    toMap(): object {
        return {
        "name": this.name,
        "id": this.id,
        "layout": this.layout.map((e) => e.toMap()),
        "characters": this.characters.map((e) => e.toMap()),
        "ensemble": this.ensemble ? this.ensemble.toMap() : "null",
        "showGroups": this.showGroups.map((e) => e.toMap()),
        "songs": this.songs.map((e) => e.toMap()),
        "dances": this.dances.map((e) => e.toMap()),
        "canCreateSchedule": this.canCreateSchedule,
        "hasEnsemble": this.hasEnsemble,
        "conflictForm": this.conflictForm ? this.conflictForm.toMap() : "null",
        "resources": this.resources.map((e) => e.toMap()),
        "formStatus": this.formStatus,
        "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): Show {
        const show = new Show();
        show.name = map.name;
        show.id = map.id;
        const layout = map.layout;
        const formattedLayout: Act[] =  [];
        for (const act of layout) {
            formattedLayout.push(Act.fromMap(act));
        }
        show.layout = formattedLayout;
        const characters = map.characters;
        const formattedCharacters: Character[] =  [];
        for (const character of characters) {
            formattedCharacters.push(Character.fromMap(character));
        }
        show.characters = formattedCharacters;
        show.ensemble = map.ensemble != "null" &&  map.ensemble ? Ensemble.fromMap(map.ensemble) : null;
        const showGroups = map.showGroups;
        const formattedShowGroups: ShowGroup[] =  [];
        for (const showGroup of showGroups) {
            formattedShowGroups.push(ShowGroup.fromMap(showGroup));
        }
        show.showGroups = formattedShowGroups;
        const songs = map.songs;
        const formattedSongs: Song[] =  [];
        for (const song of songs) {
            formattedSongs.push(Song.fromMap(song));
        }
        show.songs = formattedSongs;
        const dances = map.dances;
        const formattedDances: Dance[] =  [];
        for (const dance of dances) {
            formattedDances.push(Dance.fromMap(dance));
        }
        show.dances = formattedDances
        show.canCreateSchedule = map.canCreateSchedule;
        show.lastUpdated = map.lastUpdated;
        show.conflictForm = map.conflictForm != "null" &&  map.conflictForm ? ConflictForm.fromMap(map.conflictForm) : null;
        show.hasEnsemble = map.hasEnsemble;
        const resources = map.resources;
        const formattedResources: Resource[] =  [];
        for (const resource of resources) {
            formattedResources.push(Resource.fromMap(resource));
        }
        show.resources = formattedResources;
        show.formStatus = map.formStatus;
        return show;
    }

    
}

export class Act {
    name: string;
    scenes: Scene[];
    actId: number;
    lastUpdated: number;

    constructor() {
        this.name = "";
        this.scenes = [];
        this.lastUpdated = 0;
        this.actId = 0;
    }

    public static fromBlank(name: string, scenes: Scene[], actId: number, lastUpdated: number): Act {
        const act = new Act();
        act.name = name;
        act.scenes = scenes;
        act.lastUpdated = lastUpdated;
        act.actId = actId;
        return act;
    }

    toMap(): object {
        return {
        "name": this.name,
        "scenes": this.scenes.map((e) => e.toMap()),
        "actId": this.actId,
        "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): Act {
        const act = new Act();
        act.name = map.name;
        const scenes = map.scenes;
        const formattedScenes: Scene[] =  [];
        for (const scene of scenes) {
            formattedScenes.push(Scene.fromMap(scene));
        }
        act.scenes = formattedScenes;
        act.actId = map.actId;
        act.lastUpdated = map.lastUpdated;
        return act;
    }

}

export class Scene {
    name: string;
    characters: (Character | ShowGroup | EnsembleSection | FullCast)[];
    sceneId: number;
    lastUpdated: number;

    constructor() {
        this.name = "";
        this.characters = [];
        this.lastUpdated = 0;
        this.sceneId = 0;
    }

    public static fromBlank(name: string, characters: (Character | ShowGroup | EnsembleSection| FullCast)[], sceneId: number,lastUpdated: number): Scene {
        const scene = new Scene();
        scene.name = name;
        scene.characters = characters;
        scene.lastUpdated = lastUpdated;
        scene.sceneId = sceneId;
        return scene;
    }

    toMap(): object {
        return {
        "name": this.name,
        "characters": this.characters.map((e) => e.toMap()),
        "sceneId": this.sceneId,
        "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): Scene {
        const scene = new Scene();
        scene.name = map.name;
        const characters = map.characters;
        const formattedCharacters: (Character | ShowGroup | EnsembleSection | FullCast)[] =  [];
        for (const character of characters) {
            if (character.type === "Character") {
                formattedCharacters.push(Character.fromMap(character));
            }  else if (character.type === "ShowGroup") {
                formattedCharacters.push(ShowGroup.fromMap(character));
            } else if (character.type === "EnsembleSection") {
                formattedCharacters.push(EnsembleSection.fromMap(character));
            } if (character.type === "FullCast") {
                formattedCharacters.push(new FullCast());
            }
        }
        scene.characters = formattedCharacters;
        scene.sceneId = map.sceneId;
        scene.lastUpdated = map.lastUpdated;
        return scene;
    }
    

}


export class Dance {
    name: string;
    characters: (Character | ShowGroup | EnsembleSection | FullCast)[];
    danceId: number;
    lastUpdated: number;

    constructor() {
        this.name = "";
        this.characters = [];
        this.lastUpdated = 0;
        this.danceId = 0;
    }

    public static fromBlank(name: string, characters: (Character | ShowGroup | EnsembleSection | FullCast)[], danceId: number,lastUpdated: number): Dance {
        const dance = new Dance();
        dance.name = name;
        dance.characters = characters;
        dance.lastUpdated = lastUpdated;
        dance.danceId = danceId;
        return dance;
    }

    toMap(): object {
        return {
        "name": this.name,
        "characters": this.characters.map((e) => e.toMap()),
        "danceId": this.danceId,
        "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): Dance {
        const dance = new Dance();
        dance.name = map.name;
        const characters = map.characters;
        const formattedCharacters: (Character | ShowGroup | EnsembleSection | FullCast)[] =  [];
        for (const character of characters) {
            if (character.type === "Character") {
                formattedCharacters.push(Character.fromMap(character));
            }  else if (character.type === "ShowGroup") {
                formattedCharacters.push(ShowGroup.fromMap(character));
            } else if (character.type === "EnsembleSection") {
                formattedCharacters.push(EnsembleSection.fromMap(character));
            } if (character.type === "FullCast") {
                formattedCharacters.push(new FullCast());
            }
        }
        dance.characters = formattedCharacters;
        dance.lastUpdated = map.lastUpdated;
        dance.danceId = map.danceId;
        return dance;
    }
}

export class Song {
    name: string;
    characters: (Character | ShowGroup | EnsembleSection | FullCast)[];
    songId: number;
    lastUpdated: number;

    constructor() {
        this.name = "";
        this.characters = [];
        this.lastUpdated = 0;
        this.songId = 0;
    }

    public static fromBlank(name: string, characters: (Character | ShowGroup | EnsembleSection | FullCast)[],songId: number, lastUpdated: number): Song {
        const song = new Song();
        song.name = name;
        song.characters = characters;
        song.lastUpdated = lastUpdated;
        song.songId = songId;
        return song;
    }

    toMap(): object {
        //print all types of characters
        for (const character of this.characters) {
            console.log(character);
            console.log(character instanceof Character);
        }
        return {
        "name": this.name,
        "characters": this.characters.map((e) => e.toMap()),
        "songId": this.songId,
        "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): Song {
        const song = new Song();
        song.name = map.name;
        const characters = map.characters;
        const formattedCharacters: (Character | ShowGroup | EnsembleSection | FullCast)[] =  [];
        for (const character of characters) {
            if (character.type === "Character") {
                formattedCharacters.push(Character.fromMap(character));
            }  else if (character.type === "ShowGroup") {
                formattedCharacters.push(ShowGroup.fromMap(character));
            } else if (character.type === "EnsembleSection") {
                formattedCharacters.push(EnsembleSection.fromMap(character));
            } if (character.type === "FullCast") {
                formattedCharacters.push(new FullCast());
            }
        }
        song.characters = formattedCharacters;
        song.lastUpdated = map.lastUpdated;
        song.songId = map.songId;
        return song;
    }
}
export class Actor {
    name: string;
    gender: "male" | "female";
    email: string;
    phone: string;
    FCMToken: string;
    userId: string;


    constructor() {
        this.name = "";
        this.gender = "male";
        this.email = "";
        this.phone = "";
        this.FCMToken = "";

        this.userId = "";
    }

    public static fromBlank(name: string, gender: "male" | "female", email: string, phone: string, FCMToken: string, userId: string): Actor {
        const actor = new Actor();
        actor.name = name;
        actor.gender = gender;
        actor.email = email;
        actor.phone = phone;
        actor.FCMToken = FCMToken;
        actor.userId = userId;

        return actor;
    }

    toMap(): object {
        return {
        "fullname": this.name,
        "gender": this.gender,
        "email": this.email,
        "phoneNumber": this.phone,
        "FCMToken": this.FCMToken,
        "uid": this.userId,

        };
    }

    public static fromMap(map: DocumentData): Actor {
        const actor = new Actor();
        actor.name = map.fullname;
        actor.gender = map.gender;
        actor.email = map.email;
        actor.phone = map.phoneNumber;
        actor.FCMToken = map.FCMToken;
        actor.userId = map.uid;

        return actor;
    }






}

export class Character {
    name: string;
    actor: Actor | null;
    characterId: number;
    lastUpdated: number;
    type: string;
    

    constructor() {
        this.name = "";
        this.actor = new Actor();
        this.lastUpdated = 0;
        this.characterId = 0;
        this.type = "Character";
    }

    public static fromBlank(name: string, actor: Actor | null, characterId: number, lastUpdated: number): Character {
        const character = new Character();
        character.name = name;
        character.actor = actor;
        character.lastUpdated = lastUpdated;
        character.characterId = characterId;
        return character;
    }

    toMap(): object {
        return {
        "name": this.name,
        "actor": this.actor ? this.actor.toMap() : "null",
        "characterId": this.characterId,
        "lastUpdated": this.lastUpdated,
        "type": this.type,
        };
    }

    public static fromMap(map: DocumentData): Character {
        const character = new Character();


        character.name = map.name;
        character.actor = map.actor != "null" && !isEmpty(map.actor) ? Actor.fromMap(map.actor) : null;
        character.lastUpdated = map.lastUpdated;
        character.characterId = map.characterId;
        return character;
    }

}
function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
  
    return true
  }
export class Ensemble{
    actors: Actor[];
    lastUpdated: number;

    constructor() {
        this.actors = [];
        this.lastUpdated = 0;
    }

    public static fromBlank(actors: Actor[], lastUpdated: number): Ensemble {
        const ensemble = new Ensemble();
        ensemble.actors = actors;
        ensemble.lastUpdated = lastUpdated;
        return ensemble;
    }

    toMap(): object {
        return {
        "actors": this.actors.map((e) => e.toMap()),
        "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): Ensemble {
        const ensemble = new Ensemble();
        const actors = map.actors;
        const formattedActors: Actor[] =  [];
        for (const actor of actors) {
            formattedActors.push(Actor.fromMap(actor));
        }
        ensemble.actors = formattedActors;
        ensemble.lastUpdated = map.lastUpdated;
        return ensemble;
    }


}

export class FullCast {
    type: string;
    constructor() {
        this.type = "FullCast";
    }

    toMap(): object {
        return {
        "type": this.type,
        };
    }

    public static fromMap(map: DocumentData): FullCast {
        const fullCast = new FullCast();
        return fullCast;
    }
}

export class EnsembleSection {
    includeAll: boolean;
    includeMale: boolean;
    includeFemale: boolean;
    includeCustom: boolean;
    customActors: Actor[];
    lastUpdated: number;
    type: string;

    constructor() {
        this.includeAll = false;
        this.includeMale = false;
        this.includeFemale = false;
        this.includeCustom = false;
        this.customActors = [];
        this.lastUpdated = 0;
        this.type = "EnsembleSection";
    }

    public static fromBlank(includeAll: boolean, includeMale: boolean, includeFemale: boolean, includeCustom: boolean, customActors: Actor[],lastUpdated: number): EnsembleSection {
        const ensembleSection = new EnsembleSection();
        ensembleSection.includeAll = includeAll;
        ensembleSection.includeMale = includeMale;
        ensembleSection.includeFemale = includeFemale;
        ensembleSection.includeCustom = includeCustom;
        ensembleSection.customActors = customActors;
        ensembleSection.lastUpdated = lastUpdated;
        return ensembleSection;
    }

    toMap(): object {
        return {
        "includeAll": this.includeAll,
        "includeMale": this.includeMale,
        "includeFemale": this.includeFemale,
        "includeCustom": this.includeCustom,
        "customActors": this.customActors.map((e) => e.toMap()) ?? [],
        "type": this.type,
        "lastUpdated": this.lastUpdated,
        };
    
    }

    public static fromMap(map: DocumentData): EnsembleSection {
        const ensembleSection = new EnsembleSection();
        ensembleSection.includeAll = map.includeAll;
        ensembleSection.includeMale = map.includeMale;
        ensembleSection.includeFemale = map.includeFemale;
        ensembleSection.includeCustom = map.includeCustom;
        const customActors = map.customActors;
        const formattedCustomActors: Actor[] =  [];

        for (const customActor of customActors) {
            formattedCustomActors.push(Actor.fromMap(customActor));
        }
        ensembleSection.customActors = formattedCustomActors;

        ensembleSection.lastUpdated = map.lastUpdated;
        return ensembleSection;
    }


}

export class ShowGroup {
    name: string;
    characters: (Character | EnsembleSection)[];
    showGroupId: number;
    lastUpdated: number;
    type: string;

    constructor() {
        this.name = "";
        this.characters = [];
        this.showGroupId = 0;
        this.lastUpdated = 0;
        this.type = "ShowGroup";
    }

    public static fromBlank(name: string, characters: (Character  | EnsembleSection)[],showGroupId: number ,lastUpdated: number): ShowGroup {
        const showGroup = new ShowGroup();
        showGroup.name = name;
        showGroup.characters = characters;
        showGroup.lastUpdated = lastUpdated;
        showGroup.showGroupId = showGroupId;
        return showGroup;
    }

    toMap(): object {
        return {
        "name": this.name,
        "characters": this.characters.map((e) => e.toMap()),
        "showGroupId": this.showGroupId,
        "lastUpdated": this.lastUpdated,
        "type": this.type,
        };
    }

    public static fromMap(map: DocumentData): ShowGroup {
        const showGroup = new ShowGroup();
        showGroup.name = map.name;
        const characters = map.characters;
        const formattedCharacters: (Character  | EnsembleSection)[] =  [];
        for (const character of characters) {
            if (character.type === "Character") {
                formattedCharacters.push(Character.fromMap(character));
            } else {
                formattedCharacters.push(EnsembleSection.fromMap(character));
            }
        }
        showGroup.characters = formattedCharacters;
        showGroup.showGroupId = map.showGroupId;
        showGroup.lastUpdated = map.lastUpdated;
        return showGroup;
    }
    
}

export class ConflictDate {
    date: EventDate;
    moreInfo: string;
    
    constructor() {
        this.date = new EventDate();
        this.moreInfo = "";
    }

    public static fromBlank(date: EventDate, moreInfo: string): ConflictDate {
        const conflictDate = new ConflictDate();
        conflictDate.date = date;
        conflictDate.moreInfo = moreInfo;
        return conflictDate;
    }

    toMap(): object {
        return {
        "date": this.date.toMap(),
        "moreInfo": this.moreInfo,
        };
    }

    public static fromMap(map: DocumentData): ConflictDate {
        const conflictDate = new ConflictDate();
        conflictDate.date = EventDate.fromMap(map.date);
        conflictDate.moreInfo = map.moreInfo;
        return conflictDate;
    }
}


export class ConflictForm {
    dates: ConflictDate[];
    deadline: Date;

    lastUpdated: number;

    constructor() {
        this.dates = [];
        this.lastUpdated = 0;
        this.deadline = new Date();

    }

    public static fromBlank(dates: ConflictDate[], deadline: Date,lastUpdated: number): ConflictForm {
        const conflictForm = new ConflictForm();
        conflictForm.dates = dates;
        conflictForm.deadline = deadline;

        conflictForm.lastUpdated = lastUpdated;
        return conflictForm;
    }

    toMap(): object {
        return {
        "dates": this.dates.map((e) => e.toMap()),
        "deadline": this.deadline,

        "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): ConflictForm {
        const conflictForm = new ConflictForm();
        const dates = map.dates;
        const formattedDates: ConflictDate[] =  [];
        for (const date of dates) {
            formattedDates.push(ConflictDate.fromMap(date));
        }
        if (typeof map.deadline === 'string' || map.deadline instanceof Date) {
            conflictForm.deadline = new Date(map.deadline);
        } else {
            conflictForm.deadline = map.deadline.toDate();
        }

        conflictForm.dates = formattedDates;

        conflictForm.lastUpdated = map.lastUpdated;
        return conflictForm;
    }



}

export class ConflictResponseDate {
    date: Date;
    from: Date | null;
    to: Date | null;
    canAttend: boolean;
    note: string;

    constructor() {
        this.date = new Date();
        this.from = null;
        this.to = null;
        this.canAttend = false;
        this.note = "";
    }

    public static fromBlank(date: Date, from: Date | null, to: Date | null, canAttend: boolean, note: string): ConflictResponseDate {
        const conflictResponseDate = new ConflictResponseDate();
        conflictResponseDate.date = date;
        conflictResponseDate.from = from;
        conflictResponseDate.to = to;
        conflictResponseDate.canAttend = canAttend;
        conflictResponseDate.note = note;
        return conflictResponseDate;
    }

    toMap(): object {
        return {
        "date": this.date.toISOString(),
        "from": this.from != null ? this.from.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }) : "",
        "to": this.to != null ? this.to.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }) : "",
        "canAttend": this.canAttend,
        "note": this.note,
        };
    }

    static _parseTime(time: any): Date {
        if (typeof time === 'string') {
            const timePattern = /(\d{1,2}):(\d{2})\s?(AM|PM)/i;
            const match = time.match(timePattern);
            if (match) {
                let [_, hours, minutes, period] = match;
                hours = parseInt(hours, 10);
                minutes = parseInt(minutes, 10);
                if (period.toUpperCase() === 'PM' && hours < 12) {
                    hours += 12;
                } else if (period.toUpperCase() === 'AM' && hours === 12) {
                    hours = 0;
                }
                const parsedTime = new Date();
                parsedTime.setHours(hours, minutes, 0, 0);
                return parsedTime;
            }
        }
        throw new Error('Invalid time format');

    }

    public static fromMap(map: DocumentData): ConflictResponseDate {
        const conflictResponseDate = new ConflictResponseDate();
        conflictResponseDate.date = new Date(map.date);
        conflictResponseDate.from = map.from != "" ? this._parseTime(map.from) : null;
        conflictResponseDate.to = map.to != "" ? this._parseTime(map.to) : null;
        conflictResponseDate.canAttend = map.canAttend;
        conflictResponseDate.note = map.note;
        return conflictResponseDate;
    }
}

export class ConflictResponse {
    dates: ConflictResponseDate[];
    id: string;
    actor: Actor;
    lastUpdated: number;
    activityId: string;
    showId: string;

    constructor() {
        this.dates = [];
        this.id = "";
        this.actor = new Actor();
        this.lastUpdated = 0;
        this.activityId = "";
        this.showId = "";
    }

    public static fromBlank(dates: ConflictResponseDate[], id: string, actor: Actor, activityId: string, showId: string, lastUpdated: number): ConflictResponse {
        const conflictResponse = new ConflictResponse();
        conflictResponse.dates = dates;
        conflictResponse.id = id;
        conflictResponse.actor = actor;
        conflictResponse.lastUpdated = lastUpdated;
        conflictResponse.activityId = activityId;
        conflictResponse.showId = showId;
        return conflictResponse;
    }

    toMap(): object {
        return {
        "dates": this.dates.map((e) => e.toMap()),
        "id": this.id,
        "actor": this.actor.toMap(),
        "lastUpdated": this.lastUpdated,
        "submitterId": this.actor.userId,
        "activityId": this.activityId,
        "showId": this.showId,
        };
    }

    public static fromMap(map: DocumentData): ConflictResponse {
        const conflictResponse = new ConflictResponse();
        const dates = map.dates;
        const formattedDates: ConflictResponseDate[] =  [];
        for (const date of dates) {
            formattedDates.push(ConflictResponseDate.fromMap(date));
        }
        conflictResponse.dates = formattedDates;
        conflictResponse.id = map.id;
        conflictResponse.actor = Actor.fromMap(map.actor);
        conflictResponse.showId = map.showId;
        conflictResponse.activityId = map.activityId;
        conflictResponse.lastUpdated = map.lastUpdated;
        return conflictResponse;
    }



}

export class FBFile {
    name: string;
    url: string;

    constructor() {
        this.name = "";
        this.url = "";
    }

    public static fromBlank(name: string, url: string): FBFile {
        const file = new FBFile();
        file.name = name;
        file.url = url;
        return file;
    }

    toMap(): object {
        return {
        "name": this.name,
        "url": this.url,
        };
    }

    public static fromMap(map: DocumentData): FBFile {
        const file = new FBFile();
        file.name = map.name;
        file.url = map.url;
        return file;
    }
}

export class Resource {
    name: string;
    description: string;
    type: "link" | "image" | "video";
    link?: string;
    file?: FBFile;

    constructor() {
        this.name = "";
        this.description = "";
        this.type = "link";
        this.link = "";
        this.file = new FBFile();
    }

    public static fromBlank(name: string, description: string, type: "link" | "image" | "video", link: string, file?: FBFile): Resource {
        const resource = new Resource();
        resource.name = name;
        resource.description = description;
        resource.type = type;
        resource.link = link;
        resource.file = file;
        return resource;
    }

    toMap(): object {
        return {
        "name": this.name,
        "description": this.description,
        "type": this.type,
        "link": this.link,
        "file":  this.file != undefined ? this.file.toMap(): "null",
        };
    }

    public static fromMap(map: DocumentData): Resource {
        const resource = new Resource();
        resource.name = map.name;
        resource.description = map.description;
        resource.type = map.type;
        resource.link = map.link;
        resource.file = map.file != "null" && map.file ? FBFile.fromMap(map.file) : undefined;
        return resource;
    }




}

export class StudentData {
    uid: string;
    schoolId: string;
    rideShareStatus: string;
    distanceToSchool: number;
    FCMToken: string;
    phoneNumber: string;
    driverStatus: string;
  
    searchKey: string;
    fullname: string;
    email: string;
    distanceToSchoolMembers: {[key: string]: number};
    homeLocation: Location;

    accountType: string;
  
    constructor() {
        this.uid = "";
        this.schoolId = "";
        this.rideShareStatus = "";
        this.distanceToSchool = 0;
        this.FCMToken = "";
        this.accountType = "";
        this.phoneNumber = "";
        this.driverStatus = "";
        this.searchKey = "";
        this.fullname = "";
        this.email = "";
        this.distanceToSchoolMembers = {};
        this.homeLocation = new Location();
    }

    public static fromBlank(uid: string, schoolId: string, rideShareStatus: string, distanceToSchool: number, FCMToken: string, accountType: string, phoneNumber: string, driverStatus: string, searchKey: string, fullname: string, email: string, distanceToSchoolMembers: {[key: string]: number}, homeLocation: Location): StudentData {
        const studentData = new StudentData();
        studentData.uid = uid;
        studentData.schoolId = schoolId;
        studentData.rideShareStatus = rideShareStatus;
        studentData.distanceToSchool = distanceToSchool;
        studentData.FCMToken = FCMToken;
        studentData.accountType = accountType;
        studentData.phoneNumber = phoneNumber;
        studentData.driverStatus = driverStatus;
        studentData.searchKey = searchKey;
        studentData.fullname = fullname;
        studentData.email = email;
        studentData.distanceToSchoolMembers = distanceToSchoolMembers;
        studentData.homeLocation = homeLocation;
        return studentData;
    }

    toMap(): object {
        return {
        "uid": this.uid,
        "schoolId": this.schoolId,
        "rideShareStatus": this.rideShareStatus,
        "distanceToSchool": this.distanceToSchool,
        "FCMToken": this.FCMToken,
        "accountType": this.accountType,
        "phoneNumber": this.phoneNumber,
        "driverStatus": this.driverStatus,
        "searchKey": this.searchKey,
        "fullname": this.fullname,
        "email": this.email,
        "distanceToSchoolMembers": this.distanceToSchoolMembers,
        "homeLocation": this.homeLocation.toMap(),
        };
    }

    public static fromMap(map: DocumentData): StudentData {
        const studentData = new StudentData();
        studentData.uid = map.uid;
        studentData.schoolId = map.schoolId;
        studentData.rideShareStatus = map.rideShareStatus;
        studentData.distanceToSchool = map.distanceToSchool;
        studentData.FCMToken = map.FCMToken;
        studentData.accountType = map.accountType;
        studentData.phoneNumber = map.phoneNumber;
        studentData.driverStatus = map.driverStatus;
        studentData.searchKey = map.searchKey;
        studentData.fullname = map.fullname;
        studentData.email = map.email;
        studentData.distanceToSchoolMembers = map.distanceToSchoolMembers;
        studentData.homeLocation = Location.fromMap(map.homeLocation);
        return studentData;
    }
  }
  
export class TeacherData {
    uid: string;
    schoolId: string;
  
    FCMToken: string;
  
    searchKey: string;
    fullname: string;
    email: string;
  
    accountType: string;
    
    constructor() {
        this.uid = "";
        this.schoolId = "";
        this.FCMToken = "";
        this.accountType = "";
        this.searchKey = "";
        this.fullname = "";
        this.email = "";
    }

    public static fromBlank(uid: string, schoolId: string, FCMToken: string, accountType: string, searchKey: string, fullname: string, email: string): TeacherData {
        const teacherData = new TeacherData();
        teacherData.uid = uid;
        teacherData.schoolId = schoolId;
        teacherData.FCMToken = FCMToken;
        teacherData.accountType = accountType;
        teacherData.searchKey = searchKey;
        teacherData.fullname = fullname;
        teacherData.email = email;
        return teacherData;
    }

    toMap(): object {
        return {
        "uid": this.uid,
        "schoolId": this.schoolId,
        "FCMToken": this.FCMToken,
        "accountType": this.accountType,
        "searchKey": this.searchKey,
        "fullname": this.fullname,
        "email": this.email,
        };
    }

    public static fromMap(map: DocumentData): TeacherData {
        const teacherData = new TeacherData();
        teacherData.uid = map.uid;
        teacherData.schoolId = map.schoolId;
        teacherData.FCMToken = map.FCMToken;
        teacherData.accountType = map.accountType;
        teacherData.searchKey = map.searchKey;
        teacherData.fullname = map.fullname;
        teacherData.email = map.email;
        return teacherData;
    }
  }

  export class MiniUser {
    name: string;
    fcmToken: string;
    uid: string;

    constructor() {
        this.name = "";
        this.fcmToken = "";
        this.uid = "";
    }

    public static fromBlank(name: string, fcmToken: string, uid: string): MiniUser {
        const miniUser = new MiniUser();
        miniUser.name = name;
        miniUser.fcmToken = fcmToken;
        miniUser.uid = uid;
        return miniUser;
    }

    toMap(): object {
        return {
        "name": this.name,
        "fcmToken": this.fcmToken,
        "uid": this.uid,
        };
    }

    public static fromMap(map: DocumentData): MiniUser {
        const miniUser = new MiniUser();
        miniUser.name = map.name;
        miniUser.fcmToken = map.fcmToken;
        miniUser.uid = map.uid;
        return miniUser;
    }
  }

export function intToHexColor(value: number) {
    let hexString;
    
    if (value > 0xFFFFFF) {
        // Handle ARGB (32-bit with alpha)
        let alpha = ((value >> 24) & 0xFF).toString(16).padStart(2, '0').toUpperCase();
        let red = ((value >> 16) & 0xFF).toString(16).padStart(2, '0').toUpperCase();
        let green = ((value >> 8) & 0xFF).toString(16).padStart(2, '0').toUpperCase();
        let blue = (value & 0xFF).toString(16).padStart(2, '0').toUpperCase();
        hexString = `#${alpha}${red}${green}${blue}`;
    } else {
        // Handle RGB (24-bit without alpha)
        hexString = value.toString(16).toUpperCase().padStart(6, '0');
        hexString = `#${hexString}`;
    }

    return hexString;
}

export function addAlpha(color, opacity) {
    // coerce values so it is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity ?? 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
}

export function hexToInt(hex: string) {
    // Remove the '#' if present
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }

    // Parse the hex string into an integer
    const intValue = parseInt(hex, 16);

    return intValue;
}