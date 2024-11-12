import { useState } from "react";
import { ActivityMember,Actor,AddUserDialogProps } from "../constants";

import "./Add_User_Dialog.css"

function AddUserDialog({members, dialogRef, addUser, close, addedMembers}: AddUserDialogProps){
    const [searchResults, setSearchResults] = useState<(ActivityMember | Actor)[]>([])
    const [searchString, setSearchString] = useState<string>("")


    function search(searchString: string){
        
        // console.log(searchString)
        setSearchResults(members.filter((member) => {
        
            const memberName = member instanceof ActivityMember ? member.memberName : member.name
            const memberUid = member instanceof ActivityMember ? member.memberUid : member.userId
            if(memberName == undefined) return false
            const addedMembersUids = addedMembers.map((member) => member.memberUid)

            return memberName.toLowerCase().includes(searchString.toLowerCase()) && !addedMembersUids.includes(memberUid)
        }))
        

    }

    return (
        <dialog ref={dialogRef} >
            <div className="AddUserDialog">
                <h2>Find User</h2>
            <input type="text" className="UserSearchInput" value={searchString} onChange={
                (val) => {
                    setSearchString(val.target.value)
                    if(val.target.value == ""){
                        setSearchResults([])
                        return
                    }
                    search(val.target.value)

                }
            }/>

            <h3>Results</h3>
            <div className="UserResults">
                {searchResults.map((member, index) => {
                    return <div key={index} className="UserResult" onClick={() => {
                        setSearchString("")
                        setSearchResults([])

                    }}>
                        <label htmlFor="">{member instanceof ActivityMember ? member.memberName : member.name}</label>
                        <button className="ActionBtn" onClick={() => {
                            console.log("Added user")
                            addUser(member)

                        }}>
                            Add
                        </button>
                    </div>
                })}
                </div>

            <button className="ActionBtn" onClick={() => {
                close()
            }
            }>
                Close
            </button>

            </div>
            
            
        </dialog>
    );
}

export default AddUserDialog;