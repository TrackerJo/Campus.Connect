import {  createRef, useEffect, useState } from "react"
import { ActivityMember, StudentListTileProps } from "../constants";
import "./Students_List_Tile.css"
import StudentDisplayTile from "./Student_Display_Tile";
import CreateCustomUserDialog from "./Create_Custom_User_Dialog";

function StudentListTile({students, activityId, isTeacher}: StudentListTileProps){
    const [id, setId] = useState(0)
    const createCustomDialogRef = createRef<HTMLDialogElement>()

    const [filteredStudents, setFilteredStudents] = useState<(ActivityMember)[]>(students)

    function filterStudents(search: string){
        if(search == ""){
            setFilteredStudents(students)
            return
        }
        setFilteredStudents(students.filter((student) => {
            if(student instanceof ActivityMember){
                return student.name.toLowerCase().includes(search.toLowerCase())
            } 
            return false
        }))
    }

    useEffect(() => {
        filterStudents("")
    }, [students])

    return (
        <>
        <div className={"StudentListTile"}>
            <div className="header">
                <div className="StudentListNameDiv">
                    <label htmlFor="StudentList">Students </label>
                   
                </div>
            </div>
            <br />
            <div className="students-section">
                <input type="text" placeholder="Search" className="search" onChange={(e) => {

                    filterStudents(e.target.value)
                }} />
                <div className="students" id={"students-" + id}>
                    {filteredStudents.map((student, index) => {
                        return (
                            <StudentDisplayTile key={index} activityId={activityId} student={student} />
                        )
                    })}
                </div>
            </div>
            {isTeacher && <button className="ActionBtn" onClick={() => {
                createCustomDialogRef.current?.showModal()
            }}>Create Student</button>}
        </div>
        <CreateCustomUserDialog close={() => {
            createCustomDialogRef.current?.close()
        }} created={() => {
            createCustomDialogRef.current?.close()
            //reload the page
            window.location.reload()
        }} dialogRef={createCustomDialogRef}  activityId={activityId}/>

        </>
    )
}

export default StudentListTile;