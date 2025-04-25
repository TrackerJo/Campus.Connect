import "./Student_Info_Dialog.css";
import { useEffect, useState } from "react";
import { StudentInfoDialogProps } from "../constants";



import CopyIcon from "../assets/copy.png";

function StudentInfoDialog({ student, close, dialogRef, activityId }: StudentInfoDialogProps) {
    const [hasPhoneNumber, setHasPhoneNumber] = useState(false)
    useEffect(() => {
        async function getStudentInfo() {


            setHasPhoneNumber(student.phone !== undefined)

        }
        getStudentInfo()
    }, [student])

    function formatPhoneNumber(phoneNumber?: string): string {
        if (!phoneNumber) {
            return '';
        }
        // Remove all non-numeric characters
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');

        // Check if the input is of correct length
        if (cleaned.length !== 10) {
            return phoneNumber;
        }

        // Format the cleaned number
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }

        return phoneNumber;
    }

    return (
        <dialog className="StudentInfoDialog" ref={dialogRef}>
            <div className="StudentInfoDialogInner">
                <h1 className="StudentInfoDialogTitle">Student Info</h1>
                <label htmlFor="">Name: {student.name}</label>
                <div className="student-contact">
                    <label htmlFor="">Email: {student.email}</label>
                    <img src={CopyIcon} alt="copy email" title="Copy Email" className="copy-icon" onClick={async () => {
                        await navigator.clipboard.writeText(student.email)
                        alert("Email copied to clipboard")
                    }} />
                </div>
                {hasPhoneNumber && <div className="student-contact">
                    <label htmlFor="">Phone: {formatPhoneNumber(student.phone)}</label>
                    <img src={CopyIcon} alt="copy phone number" title="Copy Phone Number" className="copy-icon" onClick={async () => {
                        await navigator.clipboard.writeText(formatPhoneNumber(student.phone))
                        alert("Phone number copied to clipboard")
                    }} />
                </div>}

                {activityId != "" && <button className="ActionBtn" onClick={() => {
                    localStorage.setItem('viewingUser', JSON.stringify(student.toMap()))
                    window.location.href = `/Activity/Messages/?activityId=${activityId}&studentId=${student.userId}`
                }}>Send Message</button>}
                <button className="ActionBtn" onClick={close}>Close</button>
            </div>
        </dialog>
    );
}

export default StudentInfoDialog;