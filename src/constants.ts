/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventClickArg } from "@fullcalendar/core/index.js";
import { EventImpl } from "@fullcalendar/core/internal";
import { DateClickArg } from "@fullcalendar/interaction/index.js";

import { DocumentData, GeoPoint } from "firebase/firestore";
import { LegacyRef } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
export type CalendarProps = {
    events: CalendarEvent[];
    dateClick: (dateClickArg: DateClickArg) => void;
    eventClick?: (event: EventClickArg) => void;
    eventIdClick?: (eventId: string) => void;
    deleteEvent: (event: EventImpl) => void;
    viewConflicts: (date: Date) => void;
    editEvent: (event: EventImpl) => void;
    viewEvent: (event: EventImpl) => void;
    copyEvent: (event: EventImpl) => void;
    pasteEvent: (date: Date) => void;
    canViewConflicts: boolean;
    canOpenContextMenu: boolean;
    isCreating?: boolean;
    canPaste: boolean;
    canCopy: boolean;

};

export type MobileCalendarProps = {
    events: CalendarEvent[];
    eventClick: (eventId: string) => void;

};

export type Day = {
    day: Date;

    title: string;
}

export type CalendarEvent = {
    id: string;
    title: string;
    isAllDay: boolean;
    start: string;
    end?: string;
    interactive: boolean;
    color: string;
    description: string;
    location: string;


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
    header?: string;
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
    hasCreatedSchedule?: boolean;
    selectAct: (act: Act) => void;
    canMoveUp: boolean;
    canMoveDown: boolean;
    moveUp: () => void;
    moveDown: () => void;



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
    hasCreatedSchedule?: boolean;
    canMoveUp: boolean;
    canMoveDown: boolean;
    moveUp: () => void;
    moveDown: () => void;


};

export type SceneDisplayTileProps = {
    scene: Scene;
    onClick: (scene: Scene) => void;
    showCharacters: boolean;

};

export type ActDisplayTileProps = {
    act: Act;
    onClick: (scene: Scene) => void;
};

export type ConfirmCreateScheduleDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    confirmed: () => void;
}

export type CreateCustomUserDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    created: () => void;
    activityId: string;
}


export type CharacterTileProps = {
    character: Character;
    setCharacter: (character: Character) => void;
    removeCharacter: () => void;
    isCreate: boolean;
    isAssign: boolean;
    characters: Character[];
    actors: ActivityMember[];
    hasCreatedSchedule?: boolean;


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
    actor: ActivityMember;
};

export type DateConflict = {
    conflictResponseDate: ConflictResponseDate;
    actor: ActivityMember;
}

export type EnsembleSectionProps = {
    ensembleSection: EnsembleSection;
    setEnsembleSection: (ensembleSection: EnsembleSection) => void;
    removeEnsembleSection: () => void;
    isCreate: boolean;
    isAssign: boolean;
    isCustom: boolean;
    actors: ActivityMember[];
    isGroupChatCreate: boolean;
    onAddEnsemble: () => void;


};

export type ActorTileProps = {
    actor: ActivityMember;
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
    hasCreatedSchedule?: boolean;
    actors: ActivityMember[];


};

export type ImportEventTileProps = {
    remove: () => void;
    edit: (newEvent: ActivityEvent) => void;
    event: ActivityEvent;
    activity: Activity;

}

export type LocationTileProps = {
    location: Location;
    onEdit: () => void;
    onDelete: () => void;
    canEdit: boolean;
    canDelete: boolean;
}

export type EditCompanyNameDialogProps = {
    editCompanyName: (companyName: string) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    companyName: string | undefined;
}
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
    hasCreatedSchedule?: boolean;


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
    hasCreatedSchedule?: boolean;


};

export type SongDisplayTileProps = {
    song: Song;
    onClick: () => void;
    showCharacters: boolean;

};

export type DanceDisplayTileProps = {
    dance: Dance;
    onClick: () => void;
    showCharacters: boolean;

};


export type AssignActorDialogProps = {
    actor: ActivityMember;
    setActor: (actor: ActivityMember) => void;
    actors: ActivityMember[];
    dialogRef: LegacyRef<HTMLDialogElement>;
    addedActors: ActivityMember[];
    close: () => void;
    keepPastResult: boolean;
}

export type ExportScheduleDialogProps = {


    dialogRef: LegacyRef<HTMLDialogElement>;
    activity: Activity;
    close: () => void;
    events: (ActivityEvent)[];
}

export type ImportScheduleDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    activity: Activity;
    addEvents: (events: ActivityEvent[]) => void;

}

export type ConfirmApplyDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    confirmed: () => void;
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
    activityJoinCode: string;
    close: () => void;
}

export type AttendeesDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    attendees: (ActivityMember)[];


}

export type CreateActivityDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
}

export type OpportunityTileProps = {
    opportunity: Opportunity;
    accountType: "student" | "employer";
    studentData?: StudentData;
    onEdit: () => void;
    onRemove: () => void;
    onApply: () => void;
    onRSVP: () => void;
    onViewAttendees: () => void;
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

export type AddLocationDialogProps = {
    addLocation: (location: Location) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    savedLocations: Location[];
    existingLocations: Location[];
}

export type AddEventTypeDialogProps = {
    addEventType: (eventType: EventType) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    eventTypes: EventType[];
}

export type GroupChatDisplayTileProps = {
    groupChat: ActivityGC;
    onClick: () => void;
}

export type EditResourceDialogProps = {
    editResource: (resource: Resource) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    resource: Resource | undefined;
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
    students: ActivityMember[];
    parents: ActivityParent[];
    teachers: ActivityTeacher[];
    addedMembers: (ActivityMember)[];
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    addUser: (users: (ActivityMember)) => void;
}

export type AddFromPlayDialogProps = {
    activityId: string;
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    addMembers: (members: ActivityMember[]) => void;
    setName: (name: string) => void;
}

export type AddEventDateDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    addDate: (date: EventDate) => void;
    eventDate: EventDate | undefined;
}

export type EditEventTypeDialogProps = {
    editEventType: (eventType: EventType) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    eventTypes: EventType[];
    eventType: EventType | undefined;
}



export type EditActivityNameDialogProps = {
    editActivityName: (activityName: string) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;

    activityName: string | undefined;
}

export type EditRehearsalLocationDialogProps = {
    editRehearsalLocation: (rehearsalLocation: TheaterLocation) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    rehearsalLocations: TheaterLocation[];
    rehearsalLocation: TheaterLocation | undefined;
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
    activityName: string;
}

export type AddResourceDialogProps = {
    addResource: (resource: Resource) => Promise<void>;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    activityId: string;
}

export type ResourceTileProps = {
    resource: Resource;
    canRemove: boolean;
    removeResource: () => void;
    canEdit: boolean;
    editResource: (newResource: Resource) => Promise<void>;
}

export type EditLocationDialogProps = {
    editLocation: (location: Location) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    location: Location | undefined;
}

export type EditGroupDialogProps = {
    editGroup: (group: ActivityGroup) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    group: ActivityGroup | undefined;
    groups: ActivityGroup[];
    activityStudents: ActivityMember[];
    activityParents: ActivityParent[];
}

export type CreateGroupDialogProps = {
    createGroup: (group: ActivityGroup) => void;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    groups: ActivityGroup[];
    activityStudents: ActivityMember[];
    activityParents: ActivityParent[];
}


export interface Place {
    description: string;
    place_id: string;
    lat?: number;
    lng?: number;
}
export type LocationSearchTileProps = {
    onSelect: (place: Place) => void;
    address: string;
    setAddress: (address: string) => void;
}

export type AddAdditionalDayDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    addDay: (date: ConflictDate) => void;
}

export type StudentListTileProps = {
    students: (ActivityMember)[];
    activityId: string;
    isTeacher: boolean;

}

export type StudentDisplayTileProps = {
    student: ActivityMember;
    activityId: string;
}

export type StudentInfoDialogProps = {
    student: ActivityMember;
    close: () => void;
    dialogRef: LegacyRef<HTMLDialogElement>;
    activityId: string;
}

export type TimeChatSeparator = {
    time: string;
}

export type QRCodeDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
    link: string;
}

export type DownloadAppDialogProps = {
    dialogRef: LegacyRef<HTMLDialogElement>;
    close: () => void;
}

export class Activity {
    name: string;
    type: "activity" | "theater";
    id: string;
    joinCode: string;
    students: ActivityMember[];
    parents: ActivityParent[];
    groups: ActivityGroup[];
    teachers: ActivityTeacher[];
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
        this.defaultLocation = Location.fromBlank("", "", new GeoPoint(0, 0), false);
        this.showBy = "";
        this.lastUpdated = 0;
    }

    public static fromBlank(name: string, id: string, joinCode: string, students: ActivityMember[], parents: ActivityParent[], groups: ActivityGroup[], teachers: ActivityTeacher[], locations: Location[], eventTypes: EventType[], defaultLocation: Location, showBy: string, lastUpdated: number, type: "activity" | "theater"): Activity {
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
            "teacherUids": this.teachers.map((e) => e.userId),
            "studentUids": this.students.map((e) => e.userId),
            "parentUids": this.parents.map((e) => e.userId),
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
        const formattedStudents: ActivityMember[] = [];
        for (const student of students) {
            formattedStudents.push(ActivityMember.fromMap(student));
        }
        activity.students = formattedStudents;
        const parents = map.parents;
        const formattedParents: ActivityParent[] = [];
        for (const parent of parents) {
            formattedParents.push(ActivityParent.fromMap(parent));
        }
        activity.parents = formattedParents;
        const groups = map.groups;
        const formattedGroups: ActivityGroup[] = [];
        for (const group of groups) {
            formattedGroups.push(ActivityGroup.fromMap(group));
        }
        activity.groups = formattedGroups;
        const locations = map.locations;
        const formattedLocations: Location[] = [];
        for (const location of locations) {
            formattedLocations.push(Location.fromMap(location));
        }
        activity.locations = formattedLocations;
        const teachers = map.teachers;
        const formattedTeachers: ActivityTeacher[] = [];
        for (const teacher of teachers) {
            formattedTeachers.push(ActivityTeacher.fromMap(teacher));
        }
        activity.teachers = formattedTeachers;
        activity.showBy = map.showBy;
        activity.lastUpdated = map.lastUpdated;
        const eventTypes = map.eventTypes;
        const formattedEventTypes: EventType[] = [];
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
    students: ActivityMember[];
    parents: ActivityParent[];
    groups: ActivityGroup[];
    teachers: ActivityTeacher[];
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
        this.defaultLocation = Location.fromBlank("", "", new GeoPoint(0, 0), false);
        this.showBy = "";
        this.lastUpdated = 0;
    }

    public static fromBlank(name: string, id: string, joinCode: string, students: ActivityMember[], parents: ActivityParent[], groups: ActivityGroup[], teachers: ActivityTeacher[], locations: Location[], eventTypes: EventType[], defaultLocation: Location, rehearsalLocations: TheaterLocation[], showBy: string, lastUpdated: number): TheaterActivity {
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
            "teacherUids": this.teachers.map((e) => e.userId),
            "studentUids": this.students.map((e) => e.userId),
            "parentUids": this.parents.map((e) => e.userId),
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
        const formattedStudents: ActivityMember[] = [];
        for (const student of students) {
            formattedStudents.push(ActivityMember.fromMap(student));
        }
        activity.students = formattedStudents;
        const parents = map.parents;
        const formattedParents: ActivityParent[] = [];
        for (const parent of parents) {
            formattedParents.push(ActivityParent.fromMap(parent));
        }
        activity.parents = formattedParents;
        const groups = map.groups;
        const formattedGroups: ActivityGroup[] = [];
        for (const group of groups) {
            formattedGroups.push(ActivityGroup.fromMap(group));
        }
        activity.groups = formattedGroups;
        const locations = map.locations;
        const formattedLocations: Location[] = [];
        for (const location of locations) {
            formattedLocations.push(Location.fromMap(location));
        }
        activity.locations = formattedLocations;
        const rehersalLocations = map.rehearsalLocations;
        const formattedRehersalLocations: TheaterLocation[] = [];
        for (const rehersalLocation of rehersalLocations) {
            formattedRehersalLocations.push(TheaterLocation.fromMap(rehersalLocation));
        }
        activity.rehearsalLocations = formattedRehersalLocations
        const teachers = map.teachers;
        const formattedTeachers: ActivityTeacher[] = [];
        for (const teacher of teachers) {
            formattedTeachers.push(ActivityTeacher.fromMap(teacher));
        }
        activity.teachers = formattedTeachers;
        activity.showBy = map.showBy;
        activity.lastUpdated = map.lastUpdated;
        const eventTypes = map.eventTypes;
        const formattedEventTypes: EventType[] = [];
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
    color: Color;

    constructor() {
        this.name = "";
        this.color = Color.fromBlank(0, 0, 0, 0);
    }

    public static fromBlank(name: string, color: Color): TheaterLocation {
        const theaterLocation = new TheaterLocation();
        theaterLocation.name = name;
        theaterLocation.color = color;
        return theaterLocation;
    }

    toMap(): object {
        return {
            "name": this.name,
            "color": this.color.toMap(),
        };
    }

    public static fromMap(map: DocumentData): TheaterLocation {
        const theaterLocation = new TheaterLocation();
        theaterLocation.name = map.name;
        theaterLocation.color = Color.fromMap(map.color);
        return theaterLocation;
    }
}

export class Location {
    name: string;
    address: string;
    location: GeoPoint;
    isSchool: boolean;

    constructor() {
        this.name = "";
        this.address = "";
        this.location = new GeoPoint(0, 0);
        this.isSchool = false;
    }

    public static fromBlank(name: string, address: string, location: GeoPoint, isSchool: boolean): Location {
        const newLocation = new Location();
        newLocation.name = name;
        newLocation.address = address;
        newLocation.location = location;
        newLocation.isSchool = isSchool
        return newLocation;
    }


    toMap(): object {
        return {
            "name": this.name,
            "address": this.address,
            "location": this.location,
            "isSchool": this.isSchool ?? false,
        };
    }

    public static fromMap(map: DocumentData): Location {
        const location = new Location();
        location.name = map.name;
        location.address = map.address;
        location.location = map.location;
        location.isSchool = map.isSchool;
        return location;
    }
}

export class ActivityGroup {
    groupName: string;
    groupMembers: ActivityMember[];
    groupColor: Color;

    constructor() {
        this.groupName = "";
        this.groupMembers = [];
        this.groupColor = Color.fromBlank(0, 0, 0, 0);
    }

    public static fromBlank(groupName: string, groupMembers: ActivityMember[], groupColor: Color): ActivityGroup {
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
            "groupColor": this.groupColor.toMap(),
        };
    }

    public static fromMap(map: DocumentData): ActivityGroup {
        const group = new ActivityGroup();
        group.groupName = map.groupName;
        const groupMembers = map.groupMembers;
        const formattedGroupMembers: ActivityMember[] = [];
        for (const groupMember of groupMembers) {
            formattedGroupMembers.push(ActivityMember.fromMap(groupMember));
        }
        group.groupMembers = formattedGroupMembers;
        group.groupColor = Color.fromMap(map.groupColor);
        return group;
    }
}



export class EventType {
    name: string;
    color: Color;

    constructor() {
        this.name = "";
        this.color = Color.fromBlank(0, 0, 0, 0);
    }

    public static fromBlank(name: string, color: Color): EventType {
        const eventType = new EventType();
        eventType.name = name;
        eventType.color = color;
        return eventType;
    }

    toMap(): object {
        return {
            "name": this.name,
            "color": this.color.toMap(),
        };
    }

    public static fromMap(map: DocumentData): EventType {
        const eventType = new EventType();
        eventType.name = map.name;
        eventType.color = Color.fromMap(map.color);
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

    static formatDate(date: Date): string {

        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}-${day}-${year}`;
    }

    toMap(): object {
        return {
            "date": EventDate.formatDate(this.date),
            "from": this.from.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }),
            "to": this.to.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }),
        };
    }

    getDateStart(): Date {
        const date = new Date(this.date);
        date.setHours(this.from.getHours());
        date.setMinutes(this.from.getMinutes());
        return date;
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
            } else {
                //Time must be 2024-11-11T08:30:00.000Z
                return new Date(time);
            }
        }

        throw new Error('Invalid time format');

    }


    public static fromMap(map: DocumentData): EventDate {
        const eventDate = new EventDate();
        const splitDate = map.date.split('-');
        const year = parseInt(splitDate[2], 10);
        const month = parseInt(splitDate[0], 10);
        const day = parseInt(splitDate[1], 10);
        eventDate.date = new Date(year, month - 1, day);


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
        this.location = Location.fromBlank('', '', new GeoPoint(0, 0), false);
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
        const month = date.date.getMonth() + 1; // getMonth() returns 0-11
        const day = date.date.getDate();
        const year = date.date.getFullYear();

        const dateFilter = `${month}-${day}-${year}`;
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
    eventType?: EventType;
    groupTargets: ActivityGroup[];
    hasSchoolEvent: boolean;
    schoolEventId: string;
    conflicts: ActivityConflict[];
    activityName: string;
    name: string;
    info: string;
    location?: Location;
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
        this.location = Location.fromBlank('', '', new GeoPoint(0, 0), false);
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
        const month = date.date.getMonth() + 1; // getMonth() returns 0-11
        const day = date.date.getDate();
        const year = date.date.getFullYear();

        const dateFilter = `${month}-${day}-${year}`;
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

            "targets": this.targets.map((e) => e.toMap()),
            "generalTarget": this.generalTarget,
            "eventType": this.eventType.toMap(),
            "activityName": this.activityName,
            "groupTargets": this.groupTargets.map((e) => e.toMap()),
            "type": "activity",
            "groupNames": this.groupNames,
            "dateFilter": this.dateFilter,
            "hasSchoolEvent": this.hasSchoolEvent,
            "schoolEventId": this.schoolEventId,
            "activityId": this.activityId,
            "lastUpdated": this.lastUpdated,
            "targetUids": this.targets.map((e) => e.userId),
            "conflicts": this.conflicts.map((e) => e.toMap()),
        };
    }

    public static fromMap(map: DocumentData): ActivityEvent {
        const activityEvent = new ActivityEvent();
        activityEvent.name = map.name;
        activityEvent.info = map.info;
        activityEvent.id = map.id;

        activityEvent.location = Location.fromMap(map.location);
        activityEvent.date = EventDate.fromMap(map.date);
        const targets = map.targets;
        const formattedTargets: ActivityMember[] = [];
        for (const target of targets) {
            formattedTargets.push(ActivityMember.fromMap(target));
        }
        activityEvent.targets = formattedTargets;
        activityEvent.generalTarget = map.generalTarget;
        activityEvent.eventType = EventType.fromMap(map.eventType);
        activityEvent.activityName = map.activityName;
        const groupTargets = map.groupTargets;
        const formattedGroupTargets: ActivityGroup[] = [];
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
        const formattedConflicts: ActivityConflict[] = [];
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

    toMap(): object {
        return {
            "userId": this.userId,
            "type": this.type,
            "start": this.start != null ? this.start.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }) : "",
            "end": this.end != null ? this.end.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true }) : "",
            "reason": this.reason,
            "status": this.status,
            "userName": this.userName,
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
    members: GroupChatMember[];
    generalTarget: string;
    activityId: string;
    lastMessage?: Message;
    lastUpdated: number;


    constructor() {
        this.name = '';
        this.id = '';
        this.members = [];
        this.generalTarget = '';
        this.activityId = '';
        this.lastUpdated = 0;
    }


    public static fromBlank(name: string, id: string, members: GroupChatMember[], generalTarget: string, activityId: string, lastUpdated: number): ActivityGC {
        const activityGC = new ActivityGC();
        activityGC.name = name;
        activityGC.id = id;
        activityGC.members = members;
        activityGC.generalTarget = generalTarget;
        activityGC.activityId = activityId;
        activityGC.lastUpdated = lastUpdated;
        return activityGC;
    }

    toMap(): object {
        return {
            "name": this.name,
            "id": this.id,
            "members": this.members.map((e) => e.toMap()),
            "generalTarget": this.generalTarget,
            "activityId": this.activityId,
            "lastUpdated": this.lastUpdated,
        };
    }

    public static fromMap(map: DocumentData): ActivityGC {
        const activityGC = new ActivityGC();
        activityGC.name = map.name;
        activityGC.id = map.id;
        const members = map.members;
        const formattedMembers: GroupChatMember[] = [];
        for (const member of members) {
            formattedMembers.push(GroupChatMember.fromMap(member));
        }
        activityGC.members = formattedMembers;
        activityGC.generalTarget = map.generalTarget;
        activityGC.activityId = map.activityId;
        activityGC.lastUpdated = map.lastUpdated;
        return activityGC;
    }

}

export class Message {
    message: string;
    senderUid: string;
    senderName: string;

    gcId: string;
    activityId: string;
    messageId: string;
    timeSent: Date;
    readBy: string[];

    constructor() {
        this.message = '';
        this.senderUid = '';
        this.senderName = '';

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

            "gcId": this.gcId,
            "activityId": this.activityId,
            "messageId": this.messageId,
            "timeSent": this.timeSent,
            "readBy": this.readBy,
            "lastUpdated": this.timeSent.getTime(),
        };
    }

    public static fromMap(map: DocumentData): Message {
        const message = new Message();
        message.message = map.message;
        message.senderUid = map.senderUid;
        message.senderName = map.senderName;

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
    activityName: string;
    showId: string;
    showName: string;
    characters: (Character | ShowGroup | EnsembleSection | FullCast)[];
    targets: ActivityMember[];
    theaterEventType: string;
    activityEventType: EventType;
    rehearsalLocation: TheaterLocation;
    scene?: Scene;
    song?: Song;
    dance?: Dance;


    constructor() {
        this.name = '';
        this.info = '';
        this.location = Location.fromBlank('', '', new GeoPoint(0, 0), false);
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
        this.showName = '';
        this.activityName = '';
        this.activityEventType = new EventType();
        this.rehearsalLocation = new TheaterLocation();
        this.scene = undefined;
        this.song = undefined;
        this.dance = undefined;
    }

    public static fromBlank(
        name: string,
        info: string,
        location: Location,
        date: EventDate,
        type: string,
        lastUpdated: number,
        activityId: string,
        activityName: string,
        showId: string,
        showName: string,
        characters: (Character | ShowGroup | EnsembleSection | FullCast)[],
        targets: ActivityMember[],
        theaterEventType: string,
        activityEventType: EventType,
        rehearsalLocation: TheaterLocation,
        scene?: Scene,
        song?: Song,
        dance?: Dance
    ): TheaterEvent {
        const theaterEvent = new TheaterEvent();
        theaterEvent.name = name;
        theaterEvent.info = info;
        theaterEvent.location = location;
        theaterEvent.date = date;
        theaterEvent.type = type;
        theaterEvent.lastUpdated = lastUpdated;
        const month = date.date.getMonth() + 1; // getMonth() returns 0-11
        const day = date.date.getDate();
        const year = date.date.getFullYear();

        const dateFilter = `${month}-${day}-${year}`;
        theaterEvent.dateFilter = dateFilter;
        theaterEvent.activityId = activityId;
        theaterEvent.showId = showId;
        theaterEvent.characters = characters;
        theaterEvent.targets = targets;
        theaterEvent.theaterEventType = theaterEventType;
        theaterEvent.rehearsalLocation = rehearsalLocation;
        theaterEvent.activityName = activityName;
        theaterEvent.showName = showName;
        theaterEvent.activityEventType = activityEventType;
        theaterEvent.scene = scene;
        theaterEvent.song = song;
        theaterEvent.dance = dance;
        return theaterEvent;
    }

    toMap(): object {
        const newCharacters = [];
        for (const character of this.characters) {
            if (character != undefined) {
                newCharacters.push(character.toMap());
            }
        }
        return {
            "name": this.name,
            "info": this.info,
            "location": this.location.toMap(),
            "date": this.date.toMap(),
            "type": this.type,
            "lastUpdated": this.lastUpdated,
            "dateFilter": this.dateFilter,
            "activityId": this.activityId,
            "activityName": this.activityName,
            "showId": this.showId,
            "showName": this.showName,
            "characters": newCharacters,
            "targets": this.targets.map((e) => e.toMap()),
            "targetUids": this.targets.map((e) => e.userId),
            "id": this.id,
            "theaterEventType": this.theaterEventType,
            "activityEventType": this.activityEventType.toMap(),
            "rehearsalLocation": this.rehearsalLocation.toMap(),
            "scene": this.scene ? this.scene.toMap() : null,
            "song": this.song ? this.song.toMap() : null,
            "dance": this.dance ? this.dance.toMap() : null,
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
        const formattedCharacters: (Character | ShowGroup | EnsembleSection | FullCast)[] = [];
        for (const character of characters) {
            if (character.type === "Character") {
                formattedCharacters.push(Character.fromMap(character));
            } else if (character.type === "ShowGroup") {
                formattedCharacters.push(ShowGroup.fromMap(character));
            } else if (character.type === "EnsembleSection") {
                formattedCharacters.push(EnsembleSection.fromMap(character));
            } if (character.type === "FullCast") {
                formattedCharacters.push(new FullCast());
            }
        }
        theaterEvent.characters = formattedCharacters;
        const targets = map.targets;
        const formattedTargets: ActivityMember[] = [];
        for (const target of targets) {
            formattedTargets.push(ActivityMember.fromMap(target));
        }
        theaterEvent.targets = formattedTargets;
        theaterEvent.id = map.id;
        theaterEvent.activityName = map.activityName;
        theaterEvent.showName = map.showName;
        theaterEvent.activityEventType = EventType.fromMap(map.activityEventType);
        theaterEvent.rehearsalLocation = TheaterLocation.fromMap(map.rehearsalLocation);
        theaterEvent.scene = map.scene ? Scene.fromMap(map.scene) : undefined;
        theaterEvent.song = map.song ? Song.fromMap(map.song) : undefined;
        theaterEvent.dance = map.dance ? Dance.fromMap(map.dance) : undefined;
        return theaterEvent;
    }

}

export class Show {
    name: string;
    id: string;
    activityId: string;
    activityName: string;
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
    templateId: string;
    isCreatingSchedule: boolean;

    constructor() {
        this.name = "";
        this.id = "";
        this.activityId = "";
        this.layout = [];
        this.characters = [];
        this.ensemble = new Ensemble();
        this.showGroups = [];
        this.lastUpdated = 0;
        this.isCreatingSchedule = false;
        this.songs = [];
        this.dances = [];
        this.activityName = "";
        this.canCreateSchedule = false;
        this.hasEnsemble = false;
        this.conflictForm = new ConflictForm();
        this.formStatus = "open";
        this.resources = [];
        this.templateId = "";
    }

    public static fromBlank(name: string, id: string, activityId: string, templateId: string, layout: Act[], characters: Character[], ensemble: Ensemble | null, showGroups: ShowGroup[], songs: Song[], dances: Dance[], canCreateSchedule: boolean, hasEnsemble: boolean, conflictForm: ConflictForm | null, resources: Resource[], formStatus: "open" | "closed", isCreatingSchedule: boolean, lastUpdated: number): Show {
        const show = new Show();
        show.name = name;
        show.id = id;
        show.activityId = activityId;
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
        show.templateId = templateId;
        show.isCreatingSchedule = isCreatingSchedule;
        return show;
    }

    toMap(): object {
        return {
            "name": this.name,
            "id": this.id,
            "activityId": this.activityId,
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
            "isCreatingSchedule": this.isCreatingSchedule,
            "formStatus": this.formStatus,
            "lastUpdated": this.lastUpdated,
            "templateId": this.templateId,
        };
    }

    public static fromMap(map: DocumentData): Show {
        const show = new Show();
        show.name = map.name;
        show.id = map.id;
        show.activityId = map.activityId;
        const layout = map.layout;
        const formattedLayout: Act[] = [];
        for (const act of layout) {
            formattedLayout.push(Act.fromMap(act));
        }
        show.layout = formattedLayout;
        const characters = map.characters;
        const formattedCharacters: Character[] = [];
        for (const character of characters) {
            formattedCharacters.push(Character.fromMap(character));
        }
        //Sort Characters by name
        formattedCharacters.sort((a, b) => a.name.localeCompare(b.name));
        show.characters = formattedCharacters;
        show.ensemble = map.ensemble != "null" && map.ensemble ? Ensemble.fromMap(map.ensemble) : null;
        const showGroups = map.showGroups;
        const formattedShowGroups: ShowGroup[] = [];
        for (const showGroup of showGroups) {
            formattedShowGroups.push(ShowGroup.fromMap(showGroup));
        }
        //Sort show groups by name
        formattedShowGroups.sort((a, b) => a.name.localeCompare(b.name));
        show.showGroups = formattedShowGroups;
        const songs = map.songs;
        const formattedSongs: Song[] = [];
        for (const song of songs) {
            formattedSongs.push(Song.fromMap(song));
        }
        //Sort songs by name
        formattedSongs.sort((a, b) => a.name.localeCompare(b.name));
        show.songs = formattedSongs;
        const dances = map.dances;
        const formattedDances: Dance[] = [];
        for (const dance of dances) {
            formattedDances.push(Dance.fromMap(dance));
        }
        //Sort dances by name
        formattedDances.sort((a, b) => a.name.localeCompare(b.name));
        show.dances = formattedDances
        show.canCreateSchedule = map.canCreateSchedule;
        show.lastUpdated = map.lastUpdated;
        show.conflictForm = map.conflictForm != "null" && map.conflictForm ? ConflictForm.fromMap(map.conflictForm) : null;
        show.hasEnsemble = map.hasEnsemble;
        const resources = map.resources;
        const formattedResources: Resource[] = [];
        for (const resource of resources) {
            console.log("FROM MAP RESOURCE");
            console.log(resource);
            console.log(Resource.fromMap(resource));
            formattedResources.push(Resource.fromMap(resource));
        }
        show.resources = formattedResources;
        show.formStatus = map.formStatus;
        show.templateId = map.templateId;
        show.isCreatingSchedule = map.isCreatingSchedule ?? false;
        return show;
    }


}

export class Act {
    name: string;
    scenes: Scene[];
    actId: number;
    hasCreatedSchedule: boolean;

    constructor() {
        this.name = "";
        this.scenes = [];
        this.hasCreatedSchedule = false;
        this.actId = 0;
    }

    public static fromBlank(name: string, scenes: Scene[], actId: number): Act {
        const act = new Act();
        act.name = name;
        act.scenes = scenes;

        act.actId = actId;
        return act;
    }

    toMap(): object {
        return {
            "name": this.name,
            "scenes": this.scenes.map((e) => e.toMap()),
            "actId": this.actId,

        };
    }

    public static fromMap(map: DocumentData): Act {
        const act = new Act();
        act.name = map.name;
        const scenes = map.scenes;
        const formattedScenes: Scene[] = [];
        for (const scene of scenes) {
            formattedScenes.push(Scene.fromMap(scene));
        }
        act.scenes = formattedScenes;
        act.actId = map.actId;

        return act;
    }

}

export class Scene {
    name: string;
    characters: (Character | ShowGroup | EnsembleSection | FullCast)[];
    sceneId: number;

    hasCreatedSchedule: boolean;

    constructor() {
        this.name = "";
        this.characters = [];
        this.hasCreatedSchedule = false;
        this.sceneId = 0;
    }

    public static fromBlank(name: string, characters: (Character | ShowGroup | EnsembleSection | FullCast)[], sceneId: number): Scene {
        const scene = new Scene();
        scene.name = name;
        scene.characters = characters;

        scene.sceneId = sceneId;
        return scene;
    }

    toMap(): object {
        return {
            "name": this.name,
            "characters": this.characters.map((e) => e.toMap()),
            "sceneId": this.sceneId,

        };
    }

    public static fromMap(map: DocumentData): Scene {
        const scene = new Scene();
        scene.name = map.name;
        const characters = map.characters;
        const formattedCharacters: (Character | ShowGroup | EnsembleSection | FullCast)[] = [];
        for (const character of characters) {
            if (character.type === "Character") {
                formattedCharacters.push(Character.fromMap(character));
            } else if (character.type === "ShowGroup") {
                formattedCharacters.push(ShowGroup.fromMap(character));
            } else if (character.type === "EnsembleSection") {
                formattedCharacters.push(EnsembleSection.fromMap(character));
            } if (character.type === "FullCast") {
                formattedCharacters.push(new FullCast());
            }
        }
        scene.characters = formattedCharacters;
        scene.sceneId = map.sceneId;

        return scene;
    }


}


export class Dance {
    name: string;
    characters: (Character | ShowGroup | EnsembleSection | FullCast)[];
    danceId: number;
    hasCreatedSchedule: boolean;

    constructor() {
        this.name = "";
        this.characters = [];
        this.hasCreatedSchedule = false;
        this.danceId = 0;
    }

    public static fromBlank(name: string, characters: (Character | ShowGroup | EnsembleSection | FullCast)[], danceId: number): Dance {
        const dance = new Dance();
        dance.name = name;
        dance.characters = characters;

        dance.danceId = danceId;
        return dance;
    }

    toMap(): object {
        return {
            "name": this.name,
            "characters": this.characters.map((e) => e.toMap()),
            "danceId": this.danceId,

        };
    }

    public static fromMap(map: DocumentData): Dance {
        const dance = new Dance();
        dance.name = map.name;
        const characters = map.characters;
        const formattedCharacters: (Character | ShowGroup | EnsembleSection | FullCast)[] = [];
        for (const character of characters) {
            if (character.type === "Character") {
                formattedCharacters.push(Character.fromMap(character));
            } else if (character.type === "ShowGroup") {
                formattedCharacters.push(ShowGroup.fromMap(character));
            } else if (character.type === "EnsembleSection") {
                formattedCharacters.push(EnsembleSection.fromMap(character));
            } if (character.type === "FullCast") {
                formattedCharacters.push(new FullCast());
            }
        }
        dance.characters = formattedCharacters;

        dance.danceId = map.danceId;
        return dance;
    }
}

export class Song {
    name: string;
    characters: (Character | ShowGroup | EnsembleSection | FullCast)[];
    songId: number;
    hasCreatedSchedule: boolean;

    constructor() {
        this.name = "";
        this.characters = [];
        this.hasCreatedSchedule = false;
        this.songId = 0;
    }

    public static fromBlank(name: string, characters: (Character | ShowGroup | EnsembleSection | FullCast)[], songId: number): Song {
        const song = new Song();
        song.name = name;
        song.characters = characters;

        song.songId = songId;
        return song;
    }

    toMap(): object {
        //print all types of characters

        return {
            "name": this.name,
            "characters": this.characters.map((e) => e.toMap()),
            "songId": this.songId,

        };
    }

    public static fromMap(map: DocumentData): Song {
        const song = new Song();
        song.name = map.name;
        const characters = map.characters;
        const formattedCharacters: (Character | ShowGroup | EnsembleSection | FullCast)[] = [];
        for (const character of characters) {
            if (character.type === "Character") {
                formattedCharacters.push(Character.fromMap(character));
            } else if (character.type === "ShowGroup") {
                formattedCharacters.push(ShowGroup.fromMap(character));
            } else if (character.type === "EnsembleSection") {
                formattedCharacters.push(EnsembleSection.fromMap(character));
            } if (character.type === "FullCast") {
                formattedCharacters.push(new FullCast());
            }
        }
        song.characters = formattedCharacters;

        song.songId = map.songId;
        return song;
    }
}

export class NotificationUser {
    userId: string;
    email: string;

    constructor() {
        this.userId = "";
        this.email = "";
    }

    public static fromBlank(userId: string, email: string): NotificationUser {
        const notificationUser = new NotificationUser();
        notificationUser.userId = userId;
        notificationUser.email = email;
        return notificationUser;
    }
}

export class GroupChatMember {
    name: string;
    email: string;
    phone: string;

    userId: string;


    constructor() {
        this.name = "";
        this.email = "";
        this.phone = "";

        this.userId = "";
    }

    public static fromBlank(name: string, email: string, phone: string, FCMToken: string, userId: string): GroupChatMember {
        const actor = new GroupChatMember();
        actor.name = name;

        actor.email = email;
        actor.phone = phone;

        actor.userId = userId;

        return actor;
    }

    toMap(): object {
        return {
            "fullname": this.name,
            "email": this.email,
            "phoneNumber": this.phone,

            "uid": this.userId,

        };
    }

    public static fromMap(map: DocumentData): GroupChatMember {
        const actor = new GroupChatMember();
        actor.name = map.fullname;
        actor.email = map.email;
        actor.phone = map.phoneNumber;

        actor.userId = map.uid;

        return actor;
    }
}

export class ActivityMember {
    name: string;
    gender: "male" | "female";
    email: string;
    phone: string;

    userId: string;


    constructor() {
        this.name = "";
        this.gender = "male";
        this.email = "";
        this.phone = "";


        this.userId = "";
    }

    public static fromBlank(name: string, gender: "male" | "female", email: string, phone: string, FCMToken: string, userId: string): ActivityMember {
        const actor = new ActivityMember();
        actor.name = name;
        actor.gender = gender;
        actor.email = email;
        actor.phone = phone;

        actor.userId = userId;

        return actor;
    }

    toMap(): object {
        return {
            "fullname": this.name,
            "gender": this.gender,
            "email": this.email,
            "phoneNumber": this.phone,

            "uid": this.userId,

        };
    }

    toGroupChatMember(): GroupChatMember {
        return GroupChatMember.fromBlank(this.name, this.email, this.phone, "", this.userId);
    }

    public static fromMap(map: DocumentData): ActivityMember {
        const actor = new ActivityMember();
        actor.name = map.fullname ?? map.name;
        actor.gender = map.gender ?? "male";
        actor.email = map.email;
        actor.phone = map.phoneNumber ?? map.phone;

        actor.userId = map.uid ?? map.userId;

        return actor;
    }






}

export class ActivityParent {
    name: string;

    email: string;
    phone: string;

    userId: string;
    childrenInActivity: string[];


    constructor() {
        this.name = "";
        this.childrenInActivity = [];
        this.email = "";
        this.phone = "";


        this.userId = "";
    }

    public static fromBlank(name: string, email: string, phone: string, userId: string, childrenInActivity: string[]): ActivityParent {
        const actor = new ActivityParent();
        actor.name = name;
        actor.childrenInActivity = childrenInActivity;
        actor.email = email;
        actor.phone = phone;

        actor.userId = userId;

        return actor;
    }

    toMap(): object {
        return {
            "fullname": this.name,

            "email": this.email,
            "phoneNumber": this.phone,
            "children": this.childrenInActivity,

            "uid": this.userId,

        };
    }

    toGroupChatMember(): GroupChatMember {
        return GroupChatMember.fromBlank(this.name, this.email, this.phone, "", this.userId);
    }

    public static fromMap(map: DocumentData): ActivityParent {
        const actor = new ActivityParent();
        actor.name = map.fullname ?? map.name;

        actor.email = map.email;
        actor.phone = map.phoneNumber ?? map.phone;
        actor.childrenInActivity = map.children;
        actor.userId = map.uid ?? map.userId;

        return actor;
    }

    toActivityMember(): ActivityMember {

        return ActivityMember.fromBlank(this.name, "male", this.email, this.phone, "", this.userId);
    }






}

export class ActivityTeacher {
    name: string;
    email: string;
    phone: string;

    userId: string;


    constructor() {
        this.name = "";
        this.email = "";
        this.phone = "";


        this.userId = "";
    }

    public static fromBlank(name: string, email: string, phone: string, FCMToken: string, userId: string): ActivityTeacher {
        const actor = new ActivityTeacher();
        actor.name = name;
        actor.email = email;
        actor.phone = phone;

        actor.userId = userId;

        return actor;
    }

    toMap(): object {
        return {
            "fullname": this.name,
            "email": this.email,
            "phoneNumber": this.phone,

            "uid": this.userId,

        };
    }

    toActivityMember(): ActivityMember {
        return ActivityMember.fromBlank(this.name, "male", this.email, this.phone, "", this.userId);
    }

    public static fromMap(map: DocumentData): ActivityTeacher {
        const actor = new ActivityTeacher();
        actor.name = map.fullname;
        actor.email = map.email;
        actor.phone = map.phoneNumber;

        actor.userId = map.uid;

        return actor;
    }






}

export class Character {
    name: string;
    actor: ActivityMember | null;
    characterId: number;
    type: string;
    hasCreatedSchedule: boolean;


    constructor() {
        this.name = "";
        this.actor = new ActivityMember();
        this.hasCreatedSchedule = false;
        this.characterId = 0;
        this.type = "Character";
    }

    public static fromBlank(name: string, actor: ActivityMember | null, characterId: number): Character {
        const character = new Character();
        character.name = name;
        character.actor = actor;
        character.characterId = characterId;
        return character;
    }

    toMap(): object {
        return {
            "name": this.name,
            "actor": this.actor ? this.actor.toMap() : "null",
            "characterId": this.characterId,
            "type": this.type,
        };
    }

    public static fromMap(map: DocumentData): Character {
        const character = new Character();


        character.name = map.name;
        character.actor = map.actor != "null" && !isEmpty(map.actor) ? ActivityMember.fromMap(map.actor) : null;
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
export class Ensemble {
    actors: ActivityMember[];
    lastUpdated: number;

    constructor() {
        this.actors = [];
        this.lastUpdated = 0;
    }

    public static fromBlank(actors: ActivityMember[], lastUpdated: number): Ensemble {
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
        const formattedActors: ActivityMember[] = [];
        for (const actor of actors) {
            formattedActors.push(ActivityMember.fromMap(actor));
        }
        //sort actors by name
        formattedActors.sort((a, b) => a.name.localeCompare(b.name));
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
    customActors: ActivityMember[];

    type: string;

    constructor() {
        this.includeAll = false;
        this.includeMale = false;
        this.includeFemale = false;
        this.includeCustom = false;
        this.customActors = [];

        this.type = "EnsembleSection";
    }

    public static fromBlank(includeAll: boolean, includeMale: boolean, includeFemale: boolean, includeCustom: boolean, customActors: ActivityMember[]): EnsembleSection {
        const ensembleSection = new EnsembleSection();
        ensembleSection.includeAll = includeAll;
        ensembleSection.includeMale = includeMale;
        ensembleSection.includeFemale = includeFemale;
        ensembleSection.includeCustom = includeCustom;
        ensembleSection.customActors = customActors;

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

        };

    }

    public static fromMap(map: DocumentData): EnsembleSection {
        const ensembleSection = new EnsembleSection();
        ensembleSection.includeAll = map.includeAll;
        ensembleSection.includeMale = map.includeMale;
        ensembleSection.includeFemale = map.includeFemale;
        ensembleSection.includeCustom = map.includeCustom;
        const customActors = map.customActors;
        const formattedCustomActors: ActivityMember[] = [];

        for (const customActor of customActors) {
            formattedCustomActors.push(ActivityMember.fromMap(customActor));
        }
        ensembleSection.customActors = formattedCustomActors;


        return ensembleSection;
    }


}

export class ShowGroup {
    name: string;
    characters: (Character | EnsembleSection)[];
    showGroupId: number;
    type: string;
    hasCreatedSchedule: boolean;

    constructor() {
        this.name = "";
        this.characters = [];
        this.showGroupId = 0;
        this.hasCreatedSchedule = false;
        this.type = "ShowGroup";
    }

    public static fromBlank(name: string, characters: (Character | EnsembleSection)[], showGroupId: number): ShowGroup {
        const showGroup = new ShowGroup();
        showGroup.name = name;
        showGroup.characters = characters;
        showGroup.showGroupId = showGroupId;
        return showGroup;
    }

    toMap(): object {
        return {
            "name": this.name,
            "characters": this.characters.map((e) => e.toMap()),
            "showGroupId": this.showGroupId,
            "type": this.type,
        };
    }

    public static fromMap(map: DocumentData): ShowGroup {
        const showGroup = new ShowGroup();
        showGroup.name = map.name;
        const characters = map.characters;
        const formattedCharacters: (Character | EnsembleSection)[] = [];
        for (const character of characters) {
            if (character.type === "Character") {
                formattedCharacters.push(Character.fromMap(character));
            } else {
                formattedCharacters.push(EnsembleSection.fromMap(character));
            }
        }
        showGroup.characters = formattedCharacters;
        showGroup.showGroupId = map.showGroupId;
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

    public static fromBlank(dates: ConflictDate[], deadline: Date, lastUpdated: number): ConflictForm {
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
        const formattedDates: ConflictDate[] = [];
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
    actor: ActivityMember;
    lastUpdated: number;
    activityId: string;
    showId: string;

    constructor() {
        this.dates = [];
        this.id = "";
        this.actor = new ActivityMember();
        this.lastUpdated = 0;
        this.activityId = "";
        this.showId = "";
    }

    public static fromBlank(dates: ConflictResponseDate[], id: string, actor: ActivityMember, activityId: string, showId: string, lastUpdated: number): ConflictResponse {
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
        const formattedDates: ConflictResponseDate[] = [];
        for (const date of dates) {
            formattedDates.push(ConflictResponseDate.fromMap(date));
        }
        conflictResponse.dates = formattedDates;
        conflictResponse.id = map.id;
        conflictResponse.actor = ActivityMember.fromMap(map.actor);
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
    showId: string;
    activityId: string;

    constructor() {
        this.name = "";
        this.description = "";
        this.type = "link";
        this.link = "";
        this.file = new FBFile();
        this.showId = "";
        this.activityId = "";
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
            "resourceType": this.type,
            "link": this.link,
            "type": this.type,
            "file": this.file != undefined ? this.file.toMap() : "null",
            "id": "",
        };
    }

    public static fromMap(map: DocumentData): Resource {
        const resource = new Resource();
        resource.name = map.name;
        resource.description = map.description;
        resource.type = map.resourceType;
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
    gender: "male" | "female";

    searchKey: string;
    fullname: string;
    email: string;
    distanceToSchoolMembers: { [key: string]: number };
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
        this.gender = "male";
        this.distanceToSchoolMembers = {};
        this.homeLocation = new Location();
    }

    public static fromBlank(uid: string, schoolId: string, rideShareStatus: string, distanceToSchool: number, FCMToken: string, accountType: string, phoneNumber: string, gender: "male" | "female", driverStatus: string, searchKey: string, fullname: string, email: string, distanceToSchoolMembers: { [key: string]: number }, homeLocation: Location): StudentData {
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
        studentData.gender = gender;
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
            "gender": this.gender,
        };
    }

    toActivityMember(): ActivityMember {
        return ActivityMember.fromBlank(this.fullname, this.gender, this.email, this.phoneNumber, this.FCMToken, this.uid);
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
        studentData.gender = map.gender ?? "";
        return studentData;
    }
}



export class TeacherData {
    uid: string;
    schoolId: string;

    FCMToken: string;
    phoneNumber: string;
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
        this.phoneNumber = "";
    }

    public static fromBlank(uid: string, schoolId: string, phoneNumber: string, FCMToken: string, accountType: string, searchKey: string, fullname: string, email: string): TeacherData {
        const teacherData = new TeacherData();
        teacherData.uid = uid;
        teacherData.schoolId = schoolId;
        teacherData.FCMToken = FCMToken;
        teacherData.accountType = accountType;
        teacherData.searchKey = searchKey;
        teacherData.fullname = fullname;
        teacherData.email = email;
        teacherData.phoneNumber = phoneNumber;
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
            "phoneNumber": this.phoneNumber,
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
        teacherData.phoneNumber = map.phoneNumber;
        return teacherData;
    }
}

export class Color {
    red: number;
    green: number;
    blue: number;
    alpha: number;

    constructor() {
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.alpha = 0;
    }

    public static fromBlank(red: number, green: number, blue: number, alpha: number): Color {
        const color = new Color();
        color.red = red;
        color.green = green;
        color.blue = blue;
        color.alpha = alpha;
        return color;
    }

    public setAlpha(alpha: number): Color {
        this.alpha = alpha;
        return this;
    }

    toMap(): object {

        return {
            "red": this.red,
            "green": this.green,
            "blue": this.blue,
            "alpha": this.alpha,
        };
    }

    toHex(): string {

        // Ensure all values are within the valid range (0–255)
        if (
            this.red < 0 || this.red > 255 ||
            this.green < 0 || this.green > 255 ||
            this.blue < 0 || this.blue > 255 ||
            this.alpha < 0 || this.alpha > 255
        ) {
            throw new RangeError("RGBA values must be in the range 0–255.");
        }

        // Convert each value to a 2-digit hexadecimal and concatenate
        const redHex = this.red.toString(16).padStart(2, "0");
        const greenHex = this.green.toString(16).padStart(2, "0");
        const blueHex = this.blue.toString(16).padStart(2, "0");
        const alphaHex = this.alpha.toString(16).padStart(2, "0");

        return `#${alphaHex}${redHex}${greenHex}${blueHex}`;
    }

    public static fromMap(map: DocumentData): Color {
        const color = new Color();
        color.red = map.red;
        color.green = map.green;
        color.blue = map.blue;
        color.alpha = map.alpha;
        return color;
    }

    toRBGAString(): string {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }
}

// export function intToHexColor(value: number) {
//     let hexString;

//     if (value > 0xFFFFFF) {
//         // Handle ARGB (32-bit with alpha)
//         let alpha = ((value >> 24) & 0xFF).toString(16).padStart(2, '0').toUpperCase();
//         let red = ((value >> 16) & 0xFF).toString(16).padStart(2, '0').toUpperCase();
//         let green = ((value >> 8) & 0xFF).toString(16).padStart(2, '0').toUpperCase();
//         let blue = (value & 0xFF).toString(16).padStart(2, '0').toUpperCase();
//         hexString = `#${alpha}${red}${green}${blue}`;
//     } else {
//         // Handle RGB (24-bit without alpha)
//         hexString = value.toString(16).toUpperCase().padStart(6, '0');
//         hexString = `#${hexString}`;
//     }

//     return hexString;
// }


export function intToHexColor(value: number): string {
    let radix = 16;
    if (radix < 2 || radix > 36) {
        throw new RangeError("Radix argument must be between 2 and 36.");
    }

    // Handle 0 case
    if (value === 0) return "0";

    const isNegative = value < 0;
    let absValue = Math.abs(value);
    let result = "";

    // Convert the number to the desired radix
    while (absValue > 0) {
        const digit = absValue % radix;
        result = (digit < 10 ? digit.toString() : String.fromCharCode(87 + digit)) + result;
        absValue = Math.floor(absValue / radix);
    }

    // Add negative sign for negative numbers

    return isNegative ? `-${result}` : "#" + result;
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

function hexToRGBA(hex: string): { r: number; g: number; b: number; a: number } {
    // Remove the leading '#' if present
    if (hex.startsWith("#")) {
        hex = hex.slice(1);
    }

    // Handle shorthand hex (#RGB or #ARGB) by expanding it
    if (hex.length === 3 || hex.length === 4) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
    }

    // Parse the color components based on length
    let r = 0, g = 0, b = 0, a = 255; // Default alpha to 255 (fully opaque)
    if (hex.length === 6) {
        // #RRGGBB format
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
    } else if (hex.length === 8) {
        // #AARRGGBB format
        a = parseInt(hex.slice(0, 2), 16);
        r = parseInt(hex.slice(2, 4), 16);
        g = parseInt(hex.slice(4, 6), 16);
        b = parseInt(hex.slice(6, 8), 16);
    } else {
        throw new Error("Invalid hex color format.");
    }

    return { r, g, b, a };
}

export function hexToColor(hex: string): Color {
    const { r, g, b, a } = hexToRGBA(hex);
    return Color.fromBlank(r, g, b, a);
}

export enum ShiftType {
    Weekdays = "weekdays",
    Weekends = "weekends",
    All = "all"
}

function shiftTypeFromString(type: string): ShiftType {
    return Object.values(ShiftType).find(e => e === type) as ShiftType;
}

export enum OpportunityType {
    Job = "job",
    OneTimeVolunteer = "oneTimeVolunteer",
    RecurringVolunteer = "recurringVolunteer"
}

export function opportunityTypeFromString(type: string): OpportunityType {
    return Object.values(OpportunityType).find(e => e === type) as OpportunityType;
}




export class Opportunity {
    id: string;
    lastUpdated: number;
    companyName: string;
    companyId: string;
    position: string;
    location: Location;
    description: string;
    isAvailable: boolean;
    applicants: ActivityMember[];
    type: OpportunityType;
    applicationLink: string;
    creatorId: string;

    constructor({
        id,
        lastUpdated,
        companyName,
        companyId,
        position,
        location,
        description,
        isAvailable,
        applicants,
        type,
        applicationLink,
        creatorId,
    }: {
        id: string;
        lastUpdated: number;
        companyName: string;
        companyId: string;
        position: string;
        location: Location;
        description: string;
        isAvailable: boolean;
        applicants: ActivityMember[];
        type: OpportunityType;
        applicationLink: string;
        creatorId: string;
    }) {
        this.id = id;
        this.lastUpdated = lastUpdated;
        this.companyName = companyName;
        this.position = position;
        this.companyId = companyId;
        this.location = location;
        this.description = description;
        this.isAvailable = isAvailable;
        this.applicants = applicants;
        this.type = type;
        this.applicationLink = applicationLink;
        this.creatorId = creatorId;
    }

    toMap(): Record<string, any> {
        return {
            id: this.id,
            lastUpdated: this.lastUpdated,
            companyName: this.companyName,
            companyId: this.companyId,
            position: this.position,
            location: this.location.toMap(),
            description: this.description,
            isAvailable: this.isAvailable,
            applicants: this.applicants.map(e => e.toMap()),
            type: this.type,
            applicationLink: this.applicationLink,
            creatorId: this.creatorId,
        };
    }

    static fromMap(data: DocumentData): Opportunity {
        return new Opportunity({
            id: data.id,
            lastUpdated: data.lastUpdated,
            companyName: data.companyName,
            companyId: data.companyId,
            position: data.position,
            location: Location.fromMap(data.location),
            description: data.description,
            type: opportunityTypeFromString(data.type),
            isAvailable: data.isAvailable,
            applicationLink: data.applicationLink,
            creatorId: data.creatorId,
            applicants: (data.applicants as never[]).map(e => ActivityMember.fromMap(e)),
        });
    }
}

export class Job extends Opportunity {
    hourlyRate: number;
    shiftType: ShiftType;

    constructor({
        position,
        companyName,
        companyId,
        location,
        hourlyRate,
        description,
        shiftType,
        id,
        lastUpdated,
        isAvailable,
        applicationLink,
        applicants,
        creatorId,
        type = OpportunityType.Job,
    }: {
        position: string;
        companyName: string;
        companyId: string;
        location: Location;
        hourlyRate: number;
        description: string;
        shiftType: ShiftType;
        id: string;
        lastUpdated: number;
        isAvailable: boolean;
        applicationLink: string;
        applicants: ActivityMember[];
        type?: OpportunityType;
        creatorId: string;
    }) {
        super({
            position,
            companyName,
            companyId,
            location,
            description,
            id,
            lastUpdated,
            isAvailable,
            applicationLink,
            type,
            applicants,
            creatorId,
        });
        this.hourlyRate = hourlyRate;
        this.shiftType = shiftType;
    }

    toMap(): Record<string, any> {
        return {
            position: this.position,
            companyName: this.companyName,
            companyId: this.companyId,
            location: this.location.toMap(),
            hourlyRate: this.hourlyRate,
            description: this.description,
            shiftType: this.shiftType,
            id: this.id,
            lastUpdated: this.lastUpdated,
            isAvailable: this.isAvailable,
            applicationLink: this.applicationLink,
            applicants: this.applicants.map(e => e.toMap()),
            type: this.type,
            creatorId: this.creatorId,
        };
    }

    static fromMap(data: DocumentData): Job {
        return new Job({
            position: data.position,
            companyName: data.companyName,
            companyId: data.companyId,
            location: Location.fromMap(data.location),
            hourlyRate: data.hourlyRate,
            description: data.description,
            shiftType: shiftTypeFromString(data.shiftType),
            id: data.id,
            lastUpdated: data.lastUpdated,
            isAvailable: data.isAvailable,
            applicationLink: data.applicationLink,
            creatorId: data.creatorId,
            applicants: (data.applicants as never[]).map(e => ActivityMember.fromMap(e)),
        });
    }
}

export class Volunteer extends Opportunity {
    volunteers: ActivityMember[];

    constructor({
        position,
        companyName,
        companyId,
        location,
        description,
        id,
        lastUpdated,
        isAvailable,
        applicationLink,
        volunteers,
        creatorId,
        type = OpportunityType.RecurringVolunteer,
        applicants,
    }: {
        position: string;
        companyName: string;
        companyId: string;
        location: Location;
        description: string;
        id: string;
        lastUpdated: number;
        isAvailable: boolean;
        applicationLink: string;
        volunteers: ActivityMember[];
        type?: OpportunityType;
        creatorId: string;
        applicants: ActivityMember[];
    }) {
        super({
            position,
            companyName,
            companyId,
            location,
            description,
            id,
            lastUpdated,
            isAvailable,
            applicationLink,
            type,
            applicants,
            creatorId,
        });
        this.volunteers = volunteers;
    }

    toMap(): Record<string, any> {
        return {
            position: this.position,
            companyName: this.companyName,
            companyId: this.companyId,
            location: this.location.toMap(),
            description: this.description,
            id: this.id,
            lastUpdated: this.lastUpdated,
            isAvailable: this.isAvailable,
            applicationLink: this.applicationLink,
            volunteers: this.volunteers.map(e => e.toMap()),
            type: this.type,
            creatorId: this.creatorId,
            applicants: this.applicants.map(e => e.toMap()),
        };
    }

    static fromMap(data: DocumentData): Volunteer {
        return new Volunteer({
            position: data.position,
            companyName: data.companyName,
            companyId: data.companyId,
            location: Location.fromMap(data.location),
            description: data.description,
            id: data.id,
            lastUpdated: data.lastUpdated,
            isAvailable: data.isAvailable,
            applicationLink: data.applicationLink,
            creatorId: data.creatorId,
            type: opportunityTypeFromString(data.type),
            applicants: (data.applicants as any[]).map(e => ActivityMember.fromMap(e)),
            volunteers: (data.volunteers as any[]).map(e => ActivityMember.fromMap(e)),
        });
    }
}

export class OneTimeVolunteer extends Volunteer {
    eventDate: EventDate;
    taskId: string;

    constructor({
        position,
        companyName,
        companyId,
        location,
        description,
        id,
        lastUpdated,
        isAvailable,
        applicationLink,
        volunteers,
        applicants,
        eventDate,
        creatorId,
        taskId,
        type = OpportunityType.OneTimeVolunteer,
    }: {
        position: string;
        companyName: string;
        companyId: string;
        location: Location;
        description: string;
        id: string;
        lastUpdated: number;
        isAvailable: boolean;
        applicationLink: string;
        volunteers: ActivityMember[];
        applicants: ActivityMember[];
        eventDate: EventDate;
        taskId: string;
        creatorId: string;
        type?: OpportunityType;
    }) {
        super({
            position,
            companyName,
            companyId,
            location,
            description,
            id,
            lastUpdated,
            isAvailable,
            applicationLink,
            volunteers,
            creatorId,
            type,
            applicants,
        });
        this.eventDate = eventDate;
        this.taskId = taskId;
    }

    toMap(): Record<string, any> {
        return {
            position: this.position,
            companyName: this.companyName,
            companyId: this.companyId,
            location: this.location.toMap(),
            description: this.description,
            id: this.id,
            lastUpdated: this.lastUpdated,
            isAvailable: this.isAvailable,
            applicationLink: this.applicationLink,
            volunteers: this.volunteers.map(e => e.toMap()),
            eventDate: this.eventDate.toMap(),
            type: this.type,
            creatorId: this.creatorId,
            taskId: this.taskId,
            applicants: this.applicants.map(e => e.toMap()),
        };
    }

    static fromMap(data: DocumentData): OneTimeVolunteer {
        return new OneTimeVolunteer({
            position: data.position,
            companyName: data.companyName,
            companyId: data.companyId,
            location: Location.fromMap(data.location),
            description: data.description,
            id: data.id,
            lastUpdated: data.lastUpdated,
            isAvailable: data.isAvailable,
            applicationLink: data.applicationLink,
            creatorId: data.creatorId,
            type: opportunityTypeFromString(data.type),
            applicants: (data.applicants as any[]).map(e => ActivityMember.fromMap(e)),
            volunteers: (data.volunteers as any[]).map(e => ActivityMember.fromMap(e)),
            taskId: data.taskId,
            eventDate: EventDate.fromMap(data.eventDate),
        });
    }
}

export class RecurringVolunteer extends Volunteer {
    shiftType: ShiftType;

    constructor({
        position,
        companyName,
        companyId,
        location,
        description,
        id,
        lastUpdated,
        isAvailable,
        applicationLink,
        volunteers,
        applicants,
        shiftType,
        creatorId,
        type = OpportunityType.RecurringVolunteer,
    }: {
        position: string;
        companyName: string;
        companyId: string;
        location: Location;
        description: string;
        id: string;
        lastUpdated: number;
        isAvailable: boolean;
        applicationLink: string;
        volunteers: ActivityMember[];
        applicants: ActivityMember[];
        shiftType: ShiftType;
        type?: OpportunityType;
        creatorId: string;
    }) {
        super({
            position,
            companyName,
            companyId,
            location,
            description,
            id,
            lastUpdated,
            isAvailable,
            applicationLink,
            volunteers,
            type,
            applicants,
            creatorId,
        });
        this.shiftType = shiftType;
    }

    toMap(): Record<string, any> {
        return {
            position: this.position,
            companyName: this.companyName,
            companyId: this.companyId,
            location: this.location.toMap(),
            description: this.description,
            id: this.id,
            lastUpdated: this.lastUpdated,
            isAvailable: this.isAvailable,
            applicationLink: this.applicationLink,
            volunteers: this.volunteers.map(e => e.toMap()),
            shiftType: this.shiftType,
            creatorId: this.creatorId,
            type: this.type,
            applicants: this.applicants.map(e => e.toMap()),
        };
    }

    static fromMap(data: DocumentData): RecurringVolunteer {
        return new RecurringVolunteer({
            position: data.position,
            companyName: data.companyName,
            companyId: data.companyId,
            location: Location.fromMap(data.location),
            description: data.description,
            id: data.id,
            lastUpdated: data.lastUpdated,
            isAvailable: data.isAvailable,
            applicationLink: data.applicationLink,
            creatorId: data.creatorId,
            type: opportunityTypeFromString(data.type),
            applicants: (data.applicants as any[]).map(e => ActivityMember.fromMap(e)),
            volunteers: (data.volunteers as any[]).map(e => ActivityMember.fromMap(e)),
            shiftType: shiftTypeFromString(data.shiftType),
        });
    }
}

export enum CompanyType {
    Job = "Job",
    Volunteer = "Volunteer"
}

export function companyTypeFromString(type: string): CompanyType {
    return Object.values(CompanyType).find(e => e === type) as CompanyType;
}

function companyTypeToString(type: CompanyType): string {
    switch (type) {
        case CompanyType.Job:
            return "Job";
        case CompanyType.Volunteer:
            return "Volunteer";
    }
}


export class EmployerData {
    uid: string;
    FCMToken: string;
    phoneNumber: string;
    fullname: string;
    email: string;
    companyId: string;
    accountType: string;

    constructor({
        uid,
        FCMToken,
        accountType,
        fullname,
        email,
        companyId,
        phoneNumber,
    }: {
        uid: string;
        FCMToken: string;
        accountType: string;
        fullname: string;
        email: string;
        companyId: string;
        phoneNumber: string;
    }) {
        this.uid = uid;
        this.FCMToken = FCMToken;
        this.phoneNumber = phoneNumber;
        this.accountType = accountType;
        this.fullname = fullname;
        this.companyId = companyId;
        this.email = email;
    }

    static empty(): EmployerData {
        return new EmployerData({
            uid: "",
            FCMToken: "",
            accountType: "employer",
            fullname: "",
            email: "",
            companyId: "",
            phoneNumber: "",
        });
    }

    toMap(): { [key: string]: string } {
        return {
            "uid": this.uid,
            "FCMToken": this.FCMToken,
            "phoneNumber": this.phoneNumber,
            "accountType": this.accountType,
            "fullname": this.fullname,
            "companyId": this.companyId,
            "email": this.email,
        };
    }

    static fromMap(map: DocumentData): EmployerData {
        return new EmployerData({
            uid: map.uid,
            FCMToken: map.FCMToken,
            phoneNumber: map.phoneNumber,
            accountType: map.accountType,
            fullname: map.fullname,
            companyId: map.companyId,
            email: map.email,
        });
    }
}

export class Company {
    id: string;
    name: string;
    location: Location;
    lastUpdated: number;
    employers: EmployerData[];
    joinCode: string;
    savedLocations: Location[];
    type: CompanyType;

    constructor({
        id,
        name,
        location,
        lastUpdated,
        employers,
        joinCode,
        savedLocations,
        type,
    }: {
        id: string;
        name: string;
        location: Location;
        lastUpdated: number;
        employers: EmployerData[];
        joinCode: string;
        savedLocations: Location[];
        type: CompanyType;
    }) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.lastUpdated = lastUpdated;
        this.employers = employers;
        this.joinCode = joinCode;
        this.savedLocations = savedLocations;
        this.type = type;
    }

    toMap(): Record<string, any> {
        return {
            id: this.id,
            name: this.name,
            location: this.location.toMap(),
            lastUpdated: this.lastUpdated,
            employers: this.employers.map(e => e.toMap()),
            joinCode: this.joinCode,
            savedLocations: this.savedLocations.map(e => e.toMap()),
            employerUids: this.employers.map(e => e.uid),
            type: companyTypeToString(this.type),
        };
    }





    static fromMap(data: DocumentData): Company {
        return new Company({
            id: data.id,
            name: data.name,
            location: Location.fromMap(data.location),
            lastUpdated: data.lastUpdated,
            employers: (data.employers as any[]).map(e => EmployerData.fromMap(e)),
            joinCode: data.joinCode,
            savedLocations: (data.savedLocations as any[]).map(e => Location.fromMap(e)),
            type: companyTypeFromString(data.type),
        });
    }
}

export enum OpportunityNotificationType {
    all = "all", volunteer = "volunteer", job = "job", none = "none"
}
function opportunityNotificationTypeFromString(type: string): OpportunityNotificationType {
    return Object.values(OpportunityNotificationType).find(e => e === type) as OpportunityNotificationType;
}



export class OpportunityPreference {
    homeLocation: Location;
    notifications: OpportunityNotificationType;
    userId: string;

    constructor() {
        this.homeLocation = new Location();
        this.notifications = OpportunityNotificationType.all;
        this.userId = "";
    }

    public static fromBlank(homeLocation: Location, notifications: OpportunityNotificationType, userId: string): OpportunityPreference {
        const opportunityPreference = new OpportunityPreference();
        opportunityPreference.homeLocation = homeLocation;
        opportunityPreference.notifications = notifications;
        opportunityPreference.userId = userId;
        return opportunityPreference;
    }

    toMap(): object {
        return {
            "homeLocation": this.homeLocation.toMap(),
            "notifications": this.notifications,
            "userId": this.userId,
        };
    }

    public static fromMap(map: DocumentData): OpportunityPreference {
        const opportunityPreference = new OpportunityPreference();
        opportunityPreference.homeLocation = Location.fromMap(map.homeLocation);
        opportunityPreference.notifications = opportunityNotificationTypeFromString(map.notifications);
        opportunityPreference.userId = map.userId;
        return opportunityPreference;
    }
}