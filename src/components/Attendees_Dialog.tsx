import { useState } from "react"
import { AttendeesDialogProps } from "../constants";
import "./Attendees_Dialog.css"
import StudentDisplayTile from "./Student_Display_Tile";


function AttendeesDialog({ attendees, dialogRef, close }: AttendeesDialogProps) {
    const [id, setId] = useState(0)







    return (
        <dialog className="AttendeesDialog" ref={dialogRef}>
            <div className={"StudentListTile"}>
                <div className="header">
                    <div className="StudentListNameDiv">
                        <label htmlFor="StudentList">Attendees</label>

                    </div>
                </div>
                <br />
                <div className="students-section">

                    <div className="students" id={"students-" + id}>
                        {attendees.map((student, index) => {
                            return (
                                <StudentDisplayTile key={index} activityId={""} student={student} />
                            )
                        })}
                    </div>
                </div>
                <div className="footer">
                    <button className="ActionBtn" onClick={() => {
                        close()
                    }}>Close</button>

                </div>
            </div>


        </dialog>
    )
}

export default AttendeesDialog;