import { useEffect, useState } from "react";
import { ActivityMember,AddUserDialogProps } from "../constants";

import "./Add_User_Dialog.css"

function AddUserDialog({students, teachers, parents, dialogRef, addUser, close, addedMembers}: AddUserDialogProps){
    const [searchResults, setSearchResults] = useState<(ActivityMember)[]>([])
    const [searchString, setSearchString] = useState<string>("")
    const [members, setMembers] = useState<(ActivityMember)[]>(students)
    const [viewState, setViewState] = useState<"students" | "parents" | "teachers">( "students")


    function search(searchString: string){
        
        // console.log(searchString)
        setSearchResults(members.filter((member) => {
        
            const memberName =  member.name
            const memberUid =member.userId
            if(memberName == undefined) return false
            const addedMembersUids = addedMembers.map((member) => member.userId)

            return memberName.toLowerCase().includes(searchString.toLowerCase()) && !addedMembersUids.includes(memberUid)
        }))
        

    }

    useEffect(() => {
        search(searchString)
    }
    , [members])

    useEffect(() => {
        if(viewState == "students"){
            setMembers(students)
        } else if(viewState == "parents"){
            setMembers(parents.map((parent) => parent.toActivityMember()))
        } else {
            setMembers(teachers.map((teacher) => teacher.toActivityMember()))
        }
    }, [viewState])

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
            <div className='sections'>
                <h2 className={'section ' + (viewState == "students" ? "selected" : "")}  onClick={() => {
                    setViewState("students")
                    
                }}>Students</h2>
                {parents.length > 0 && <h2 className={'section ' + (viewState == "parents" ? "selected" : "")} onClick={() => {
                    setViewState("parents")
                    
                }}>Parents</h2>}
                {teachers.length > 0 && <h2 className={'section ' + (viewState == "teachers" ? "selected" : "")} onClick={() => {
                    setViewState("teachers")
                    
                }}>Teachers</h2>}
               

            </div>

            <h3>Results</h3>
            <div className="UserResults">
                {searchResults.map((member, index) => {
                    return <div key={index} className="UserResult" onClick={() => {
                        setSearchString("")
                        setSearchResults([])

                    }}>
                        <label htmlFor="">{ member.name}</label>
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