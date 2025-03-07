import { useRef, useState } from "react";
import { Job, OneTimeVolunteer, OpportunityTileProps, RecurringVolunteer, ShiftType, StudentData } from "../constants";
import "./Opportunity_Tile.css";
import ConfirmApplyDialog from "./Confirm_Apply_Dialog";
import { updateOpportunity } from "../api/db";
import { getDistanceFromLatLong } from "../api/distance";

function OpportunityTile({opportunity, accountType, studentData, onEdit, onRemove, onApply}: OpportunityTileProps) {
    const confirmApplyRef = useRef<HTMLDialogElement>(null)
    const [isLoadingDelete, setIsLoadingDelete] = useState(false)

    function formatDateTime(date: Date, startTime: Date, endTime: Date): string {
        const dayFormat = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
        
        const timeFormat = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        
        const dateStr = dayFormat.format(date);
        const startTimeStr = timeFormat.format(startTime);
        const endTimeStr = timeFormat.format(endTime);
        
        return `On ${dateStr} from ${startTimeStr} to ${endTimeStr}`;
    }

    function jobOpp (jobOpp: Job){
        return (
            <div className="opportunity-tile">
            <h3>{jobOpp.position}</h3>
            <label htmlFor="">Job</label>
            <div className="divider"></div>
            {accountType === "student" && <label>{jobOpp.companyName} • {getDistanceFromLatLong(jobOpp.location.location.latitude, jobOpp.location.location.longitude, (studentData as StudentData).homeLocation.location.latitude, (studentData as StudentData).homeLocation.location.longitude).toFixed(2)} miles away</label>}
            <label htmlFor="">${jobOpp.hourlyRate.toFixed(2)} per hour</label>
            <label htmlFor="">{jobOpp.shiftType == ShiftType.Weekdays ? "Weekdays" : jobOpp.shiftType == ShiftType.Weekends ? "Weekends" : "Weekdays and Weekends"}</label>
            <br />
            {accountType === "student" && <label>Description: </label>}
            {accountType === "student" && <label>{jobOpp.description}</label>}
            {accountType === "student" && <br/>}
            {accountType === "student" && <button className="ActionBtn" onClick={() => {
                //Apply to opportunity
                window.open(jobOpp.applicationLink, "_blank");
                confirmApplyRef.current?.showModal()

            }}>Apply</button>}

            {accountType === "employer" && <button className="ActionBtn" onClick={() => {
                //Edit opportunity
                onEdit()
            }
            }>Edit</button>}
            {accountType === "employer" ? isLoadingDelete ? <div className="loader"></div> :  <button className="ActionBtn" onClick={async () => {
                //Remove opportunity
                setIsLoadingDelete(true)
                await onRemove()
                setIsLoadingDelete(false)
            }
            }>Remove</button> : <></>}

            
            </div>
        );
    }

    function oneTimeVolunteerOpp (oneTimeOpp: OneTimeVolunteer){
        return (
            <div className="opportunity-tile">
            <h3>{oneTimeOpp.position}</h3>
            <label htmlFor="">One Time Volunteer</label>
            <div className="divider"></div>
            {accountType === "student" && <label>{oneTimeOpp.companyName} • {getDistanceFromLatLong(oneTimeOpp.location.location.latitude, oneTimeOpp.location.location.longitude, (studentData as StudentData).homeLocation.location.latitude, (studentData as StudentData).homeLocation.location.longitude).toFixed(2)} miles away</label>}

            <label htmlFor="">{formatDateTime(oneTimeOpp.eventDate.date,oneTimeOpp.eventDate.from,oneTimeOpp.eventDate.to)}</label>
            <br />
            {accountType === "student" && <label>Description: </label>}
            {accountType === "student" && <label>{oneTimeOpp.description}</label>}
            {accountType === "student" && <br/>}
            {accountType === "student" && <button className="ActionBtn" onClick={() => {
                //Apply to opportunity
                window.open(oneTimeOpp.applicationLink, "_blank");
                confirmApplyRef.current?.showModal()

            }}>Apply</button>}
             {accountType === "employer" && <button className="ActionBtn" onClick={() => {
                //Edit opportunity
                onEdit()
            }
            }>Edit</button>}
            {accountType === "employer" ? isLoadingDelete ? <div className="loader"></div> :  <button className="ActionBtn" onClick={async () => {
                //Remove opportunity
                setIsLoadingDelete(true)
                await onRemove()
                setIsLoadingDelete(false)
            }
            }>Remove</button> : <></>}


            
            </div>
        );
    }

    function recurringVolunteerOpp (recurringOpp: RecurringVolunteer){

        return (
            <div className="opportunity-tile">
            <h3>{recurringOpp.position}</h3>
            <label htmlFor="">Recurring Volunteer</label>
            <div className="divider"></div>
            {accountType === "student" && <label>{recurringOpp.companyName} • {getDistanceFromLatLong(recurringOpp.location.location.latitude, recurringOpp.location.location.longitude, (studentData as StudentData).homeLocation.location.latitude, (studentData as StudentData).homeLocation.location.longitude).toFixed(2)} miles away</label>}
            <label htmlFor="">{recurringOpp.shiftType == ShiftType.Weekdays ? "Weekdays" : recurringOpp.shiftType == ShiftType.Weekends ? "Weekends" : "Weekdays and Weekends"}</label>
            <br />
            {accountType === "student" && <label>Description: </label>}
            {accountType === "student" && <label>{recurringOpp.description}</label>}
            {accountType === "student" && <br/>}
            {accountType === "student" && <button className="ActionBtn" onClick={() => {
                //Apply to opportunity
                window.open(recurringOpp.applicationLink, "_blank");
                confirmApplyRef.current?.showModal()

            }}>Apply</button>}
             {accountType === "employer" && <button className="ActionBtn" onClick={() => {
                //Edit opportunity
                onEdit()
            }
            }>Edit</button>}
            {accountType === "employer" ? isLoadingDelete ? <div className="loader"></div> :  <button className="ActionBtn" onClick={async () => {
                //Remove opportunity
                setIsLoadingDelete(true)
                await onRemove()
                setIsLoadingDelete(false)
            }
            }>Remove</button> : <></>}

            
            </div>
        );
    }
    return (<>{opportunity instanceof Job ? jobOpp(opportunity) : opportunity instanceof OneTimeVolunteer ? oneTimeVolunteerOpp(opportunity) : recurringVolunteerOpp(opportunity as RecurringVolunteer)}
    {
        accountType === "student" && <ConfirmApplyDialog dialogRef={confirmApplyRef} close={() => {
            confirmApplyRef.current?.close()
        }} confirmed={async () => {
            //Apply to opportunity
            opportunity.applicants.push(studentData!.toActivityMember())
            opportunity.lastUpdated = Date.now()
            await updateOpportunity(opportunity, true)
            confirmApplyRef.current?.close()
            onApply()
        }} />
    }</>)
    }

export default OpportunityTile;