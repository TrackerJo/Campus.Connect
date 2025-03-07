import {  useEffect, useRef, useState } from "react";
import {  ActivityGroup, ActivityMember, CreateGroupDialogProps, hexToColor } from "../constants";

import "./Create_Group_Dialog.css"
import AddUserDialog from "./Add_User_Dialog";

function CreateGroupDialog({createGroup, close, dialogRef, groups, activityStudents, activityParents }: CreateGroupDialogProps){
    const [name, setName] = useState<string>("")
    const [color, setColor] = useState<string>("#000000")
    const [members, setMembers] = useState<ActivityMember[]>([])
    const [editting, setEditting] = useState<boolean>(false)
    const addGroupMemberDialogRef = useRef<HTMLDialogElement>(null)
   

    return (
        <>
        <dialog ref={dialogRef}>
            <h2>Create Group</h2>
            <div className="event-type-info">
                <label htmlFor="">Name: </label>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                } }/>
                <br />
                <label htmlFor="">Color: </label>
                <input type="color" value={color} onChange={(e) => {
                    console.log(e.target.value)
                    setColor(e.target.value)
                } }/>
                <br />
                <label htmlFor="">Members: </label>
                <div className="MembersList">
                    {members.map((member, index) => {
                        return <div key={index} className="GroupMember">
                            <label htmlFor="">{member.name}</label>
                            <button className="ActionBtn" onClick={() => {
                                setMembers(members.filter((m) => m != member))
                            }}>Remove</button>
                        </div>
                    })}

                </div>
                <button className="ActionBtn" onClick={() => {
                    addGroupMemberDialogRef.current!.showModal()
                }}>Add Member</button>
                <br />
                {editting ? <div className="loader"></div> :<button className="ActionBtn" onClick={async() => {
                    if(name == ""){
                        alert("Please fill out all fields")
                        return
                    }
                    if(groups.find((e) => e.groupName == name )){ 
                        alert("A group with that name already exists")
                        return
                    }
                    setEditting(true)
                    await createGroup(ActivityGroup.fromBlank(name, members,hexToColor(color)))
                    setEditting(false)

                }}>
                    Create Group
                </button>}

                <button className="ActionBtn" onClick={() => {
                    close()
                }
                }>
                    Close
                </button>
            </div>
          
            

            
        </dialog>
        <AddUserDialog students={activityStudents} parents={activityParents} teachers={[]} dialogRef={addGroupMemberDialogRef} addedMembers={members} close={() => { 
                addGroupMemberDialogRef.current!.close()
            }} addUser={(newMember: ActivityMember | ActivityMember) => {
                
                const newMembers = [...members, newMember]
                const addedMemberIds: string[] = [];
                const newMembersNoDuplicates = newMembers.filter((member) => {
                    if(addedMemberIds.includes(member.name)){
                        return false
                    }
                    addedMemberIds.push(member.name)
                    return true
                })
                setMembers(newMembersNoDuplicates)
            }} />
        </>
    );
}

export default CreateGroupDialog;