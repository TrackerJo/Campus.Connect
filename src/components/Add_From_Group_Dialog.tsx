import { useState } from "react";
import {ActivityGroup, AddFromGroupDialogProps } from "../constants";

import "./Add_From_Group_Dialog.css"


function AddFromGroupDialog({ dialogRef, close, addMembers, activityGroups}: AddFromGroupDialogProps){


    const [selectedGroup, setSelectedGroup] = useState<ActivityGroup | null>(null)



    return (
        <dialog ref={dialogRef} className="AddFromGroupDialog" >
            <div className="AddFromGroupDiv">
                <h2>Select Group</h2>
                <select className="SelectPlay" onChange={(e) => {
                    setSelectedGroup(activityGroups.find((group) => group.groupName == e.target.value) || null)

                }}>
                    <option value="">Select a Group</option>
                    {activityGroups.map((group, index) => {
                        return <option key={index} value={group.groupName}>{group.groupName}</option>
                    })}
                </select>
                <br />
                <button className="ActionBtn" onClick={() => {
                    if(selectedGroup){
                        addMembers(selectedGroup.groupMembers)
                    }
                    close()
                }}>
                    Add Group
                </button>
                


            <button className="AddUserCloseBtn" onClick={() => {
                close()
            }
            }>
                Close
            </button>
            <br />

            </div>
            
            
        </dialog>
    );
}

export default AddFromGroupDialog;