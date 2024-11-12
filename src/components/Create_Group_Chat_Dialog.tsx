import "./Create_Group_Chat_Dialog.css";

import { Activity, ActivityGC, ActivityGroup, ActivityMember, Actor, CreateGroupChatDialogProps, TheaterActivity } from "../constants";
import { useEffect, useRef, useState } from "react";
import { createActivityGroupChat, getActivity } from "../firebase/db";
import AddUserDialog from "./Add_User_Dialog";
import AddFromPlayDialog from "./Add_From_Play_Dialog";
import AddFromGroupDialog from "./Add_From_Group_Dialog";


function CreateGroupChatDialog({ close, dialogRef, activityId, refresh }: CreateGroupChatDialogProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const addMemberDialogRef = useRef<HTMLDialogElement>(null)
    const addFromPlayRef = useRef<HTMLDialogElement>(null)
    const addFromGroupRef = useRef<HTMLDialogElement>(null)

    const [activity, setActivity] = useState<Activity | TheaterActivity | null>(null)
    const [members, setMembers] = useState<(ActivityMember)[]>([])
    const [addedMembers, setAddedMembers] = useState<(ActivityMember)[]>([])
    const [activityGroups, setActivityGroups] = useState<(ActivityGroup)[]>([])




    useEffect(() => {
        //Get activity
        if (!activityId) {
            return
        }
        getActivity(activityId).then((activity: Activity | TheaterActivity| null) => {
            setActivity(activity)
            if (activity != null) {
                if(activity instanceof TheaterActivity){
                    const students = activity.students.map((student) => {
                        return ActivityMember.fromBlank(student.name, student.userId, student.FCMToken)
                    })

                    setMembers([...activity.parents, ...students])
                    setActivityGroups(activity.groups)

                } else {
                    setMembers([...activity.parents, ...activity.students])
                    setActivityGroups(activity.groups)
                }
            }
        })
    }, [activityId])

    return (
        <>
            <dialog className="create-group-chat-dialog" ref={dialogRef}>
                <div className="create-group-chat-dialog-inner">
                    <h1 className="create-group-chat-dialog-title">Create Group Chat</h1>
                    <input type="text" placeholder="Group Chat Name" className="create-group-chat-dialog-input" ref={inputRef}/>
                    {addedMembers.length > 0 && <> <h2 className="create-group-chat-dialog-members-title">Members: </h2>
                    <div className="create-group-chat-dialog-members">
                        {addedMembers.map((member, index) => {
                            return <div key={index} className="create-group-chat-dialog-member">
                                <label htmlFor="">{ member.memberName}</label>
                                <button className="ActionBtn" onClick={() => {
                                    setAddedMembers(addedMembers.filter((addedMember) => addedMember != member))
                                }}>Remove</button>
                            </div>
                        })}

                    </div> </>}
                    <button className="ActionBtn" onClick={() => {
                        addMemberDialogRef.current!.showModal()
                    }}>Add Member</button>
                    {activityGroups.length > 0 && <button className="ActionBtn" onClick={() => {
                        addFromGroupRef.current!.showModal()
                    }}>
                        Add from Group
                    </button>}
                    {
                        activity instanceof TheaterActivity ? (
                            <button className="ActionBtn" onClick={() => {
                                addFromPlayRef.current!.showModal()
                            }}>
                                Add from Play
                            </button>
                        ) : null
                    }
                    <button className="ActionBtn" onClick={async () => {
                        if(inputRef.current!.value == ""){
                            alert("Please enter a name for the group chat")
                            return
                        }
                        if(addedMembers.length == 0){
                            alert("Please add at least one member to the group chat")
                            return
                        }
                        const activityGroup = ActivityGC.fromBlank(inputRef.current!.value, "", addedMembers, "custom", activityId)
                        await createActivityGroupChat(activityGroup)
                        refresh()
                            close()
                    }}>Create</button>
                    <button onClick={close} className="ActionBtn">
                        Close
                    </button>
                </div>
            </dialog>
            <AddUserDialog members={members} dialogRef={addMemberDialogRef} addedMembers={addedMembers} close={() => { 
                addMemberDialogRef.current!.close()
            }} addUser={(newMember: ActivityMember | Actor) => {
                if(newMember instanceof Actor){
                    newMember = ActivityMember.fromBlank(newMember.name, newMember.userId, newMember.FCMToken)
                }
                const newMembers = [...addedMembers, newMember]
                const addedMemberIds: string[] = [];
                const newMembersNoDuplicates = newMembers.filter((member) => {
                    if(addedMemberIds.includes(member.memberUid)){
                        return false
                    }
                    addedMemberIds.push(member.memberUid)
                    return true
                })
                setAddedMembers(newMembersNoDuplicates)
            }} />

            <AddFromGroupDialog dialogRef={addFromGroupRef} close={() => {
                addFromGroupRef.current!.close()
            } } addMembers={(members: ActivityMember[]) => {
                const newMembers = [...addedMembers, ...members]
                const addedMemberIds: string[] = [];
                const newMembersNoDuplicates = newMembers.filter((member) => {
                    if(addedMemberIds.includes(member.memberUid)){
                        return false
                    }
                    addedMemberIds.push(member.memberUid)
                    return true
                })
                setAddedMembers(newMembersNoDuplicates)
                addFromGroupRef.current!.close()
            } } activityGroups={activityGroups} />

            <AddFromPlayDialog dialogRef={addFromPlayRef} close={() => {
                addFromPlayRef.current!.close()
            }} addMembers={(actors: Actor[]) => {
                //Convert actors to members
                const members = actors.map((actor) => {
                    return ActivityMember.fromBlank(actor.name, actor.userId, actor.FCMToken)
                })
                const newMembers = [...addedMembers, ...members]
                const addedMemberIds: string[] = [];
                const newMembersNoDuplicates = newMembers.filter((member) => {
                    if(addedMemberIds.includes(member.memberUid)){
                        return false
                    }
                    addedMemberIds.push(member.memberUid)
                    return true
                })
                setAddedMembers(newMembersNoDuplicates)

                //Remove duplicates 

                addFromPlayRef.current!.close()

            }} setName={(name: string) => {
                // inputRef.current!.value = name
            }} activityId={activityId}/>

        </>
    );
}

export default CreateGroupChatDialog;