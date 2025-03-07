import "./Broadcast_Message_Dialog.css";

import { Activity, ActivityGroup, ActivityMember, ActivityTeacher, BroadcastMessageDialogProps, Message, TheaterActivity } from "../constants";
import { useEffect, useRef, useState } from "react";
import { getActivity, sendActivityGCMessage } from "../api/db";
import AddUserDialog from "./Add_User_Dialog";
import AddFromPlayDialog from "./Add_From_Play_Dialog";
import AddFromGroupDialog from "./Add_From_Group_Dialog";


function BroadcastMessageDialog({ close, dialogRef, activityId, userData, refresh, activityName }: BroadcastMessageDialogProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const addMemberDialogRef = useRef<HTMLDialogElement>(null)
    const addFromPlayRef = useRef<HTMLDialogElement>(null)
    const addFromGroupRef = useRef<HTMLDialogElement>(null)

    const [activity, setActivity] = useState<Activity | TheaterActivity | null>(null)
    const [members, setMembers] = useState<(ActivityMember)[]>([])
    const [parents, setParents] = useState<(ActivityMember)[]>([])
    const [students, setStudents] = useState<(ActivityMember)[]>([])
    const [teachers, setTeachers] = useState<(ActivityTeacher)[]>([])
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
                   
                    setMembers([...activity.parents, ...activity.students, ...activity.teachers.map((teacher) => teacher.toActivityMember())])
                    setStudents(activity.students)
                    setParents(activity.parents)
                    setTeachers(activity.teachers)

                    setActivityGroups(activity.groups)

                } else {
                    setMembers([...activity.parents, ...activity.students, ...activity.teachers.map((teacher) => teacher.toActivityMember())])
                    setStudents(activity.students)
                    setParents(activity.parents)
                    setTeachers(activity.teachers)
                    setActivityGroups(activity.groups)
                }
            }
        })
    }, [activityId])

    return (
        <>
            <dialog className="broadcast-message-dialog" ref={dialogRef}>
                <div className="broadcast-message-dialog-inner">
                    <h1 className="broadcast-message-dialog-title">Broadcast message</h1>
                    <input type="text" placeholder="Message" className="broadcast-message-dialog-input" ref={inputRef}/>
                    {addedMembers.length > 0 && <> <h2 className="broadcast-message-dialog-members-title">Recipient: </h2>
                    <div className="broadcast-message-dialog-members">
                        {addedMembers.map((member, index) => {
                            return <div key={index} className="broadcast-message-dialog-member">
                                <label htmlFor="">{ member.name}</label>
                                <button className="ActionBtn" onClick={() => {
                                    setAddedMembers(addedMembers.filter((addedMember) => addedMember != member))
                                }}>Remove</button>
                            </div>
                        })}

                    </div> </>}
                    <button className="ActionBtn" onClick={() => {
                        addMemberDialogRef.current!.showModal()
                    }}>Add Recipient</button>
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
                            alert("Please enter a message to broadcast")
                            return
                        }
                        if(addedMembers.length == 0){
                            alert("Please add at least one recipient")
                            return
                        }
                        const messageObj = Message.fromBlank(inputRef.current!.value, userData!.uid, userData!.fullname,userData!.FCMToken,"", activityId,'', new Date(), [userData!.uid] )
                        for (let i = 0; i < addedMembers.length; i++) {
                            const currentMember = addedMembers[i];
                            messageObj.gcId = currentMember.userId
                            console.log("Sending message to " + currentMember.userId)
                            console.log(messageObj.toMap())
                            await sendActivityGCMessage(activityId, currentMember.userId, messageObj,activityName, currentMember)
                            
                        }
                        refresh()
                        close()
                    }}>Send</button>
                    <button onClick={close} className="ActionBtn">
                        Close
                    </button>
                </div>
            </dialog>
            <AddUserDialog students={students} parents={parents} teachers={teachers} dialogRef={addMemberDialogRef} addedMembers={addedMembers} close={() => { 
                addMemberDialogRef.current!.close()
            }} addUser={(newMember: ActivityMember | ActivityMember) => {
                
                const newMembers = [...addedMembers, newMember]
                const addedMemberIds: string[] = [];
                const newMembersNoDuplicates = newMembers.filter((member) => {
                    if(addedMemberIds.includes(member.userId)){
                        return false
                    }
                    addedMemberIds.push(member.userId)
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
                    if(addedMemberIds.includes(member.userId)){
                        return false
                    }
                    addedMemberIds.push(member.userId)
                    return true
                })
                setAddedMembers(newMembersNoDuplicates)
                addFromGroupRef.current!.close()
            } } activityGroups={activityGroups} />

            <AddFromPlayDialog dialogRef={addFromPlayRef} close={() => {
                addFromPlayRef.current!.close()
            }} addMembers={(actors: ActivityMember[]) => {
                //Convert actors to members
               
                const newMembers = [...addedMembers, ...actors]
                const addedMemberIds: string[] = [];
                const newMembersNoDuplicates = newMembers.filter((member) => {
                    if(addedMemberIds.includes(member.userId)){
                        return false
                    }
                    addedMemberIds.push(member.userId)
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

export default BroadcastMessageDialog;