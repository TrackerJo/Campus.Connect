import "./Student_Display_Tile.css";

import { useRef, useState } from "react";

import { ActivityMember, StudentDisplayTileProps } from "../constants";

import PersonIcon from "../assets/person_circle.png";
import StudentInfoDialog from "./Student_Info_Dialog";

function StudentDisplayTile({ student, activityId }: StudentDisplayTileProps) {
    const studentInfoDialogRef = useRef<HTMLDialogElement>(null)
    return (
        <>
        <div className={"StudentDisplayTile"}>
           <label htmlFor="">{student.name }</label>

            <img src={PersonIcon} alt="" className="PersonIcon" onClick={() => {
                studentInfoDialogRef.current?.showModal()
            }} />

        </div>
        <StudentInfoDialog student={student} activityId={activityId} close={() => {
            studentInfoDialogRef.current?.close()
        }} dialogRef={studentInfoDialogRef} />
        </>
    );
}

export default StudentDisplayTile;