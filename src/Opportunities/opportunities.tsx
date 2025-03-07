import {  StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './opportunities.css'
import { isLoggedIn } from '../api/auth'
import { Company, Opportunity, OpportunityType, ShiftType, Location, CompanyType, Job, OneTimeVolunteer, EventDate, RecurringVolunteer, StudentData } from '../constants'
import { addOpportunity, deleteCloudTask, deleteOpportunity, getCompany, getCompanyOpportunities, getOpportunities, getStudent, getUserData, updateOpportunity } from '../api/db'
import OpportunityTile from '../components/Opportunity_Tile'







function App() {
   
    const [accountType, setAccountType] = useState<"student" | "employer">("student")
    const [opportunities, setOpportunities] = useState<Opportunity[]>([])
    const [loading, setLoading] = useState(true)
    const [createOpportunity, setCreateOpportunity] = useState(false)
    const [company, setCompany] = useState<Company | null>(null)
    const [opportunityType, setOpportunityType] = useState<OpportunityType>(OpportunityType.Job)
    const [shiftType, setShiftType] = useState<ShiftType>(ShiftType.Weekdays)
    const [salary, setSalary] = useState<number>(0)
    const [position, setPosition] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [location, setLocation] = useState<Location | null>()
    const [date, setDate] = useState<Date | null>()
    const [startTime, setStartTime] = useState<Date | null>()
    const [endTime, setEndTime] = useState<Date | null>()
    const [startTimeString, setStartTimeString] = useState<string>("")
    const [endTimeString, setEndTimeString] = useState<string>("")
    const [locations, setLocations] = useState<Location[]>([])
    const [applicationLink, setApplicationLink] = useState<string>("")
    const [isCreatingOpportunity, setIsCreatingOpportunity] = useState(false)
    const [editOpportunity, setEditOpportunity] = useState<Opportunity | null>(null)
    const [isEditingOpportunity, setIsEditingOpportunity] = useState(false)
    const [studentData, setStudentData] = useState<StudentData | undefined>(undefined)

    
    

    useEffect(() => {
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
      
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "employer")
            
            
        }

        if(accountType == "student"){
            getUserData().then((studentData) => {
                const student = studentData as StudentData
                setStudentData(studentData as StudentData)

                getOpportunities().then((opportunities) => {
                    
                    setOpportunities(opportunities.filter((opp) => {
                        if(opp.applicants.find((applicant) => applicant.userId == student!.uid)){
                            return false
                        }
                        return true
                    }))
                    setLoading(false)
                })
            }
            )
           
        } else {
        

        getCompany().then((company) => {    
            if (!company) {
                window.location.href = '/'
            }
            setCompany(company)
            setLocations([...company!.savedLocations, company!.location])
            setLocation(company!.location)
            if(company?.type == CompanyType.Job){
                setOpportunityType(OpportunityType.Job)
            } else {
                setOpportunityType(OpportunityType.OneTimeVolunteer)
            }
            getCompanyOpportunities().then((opportunities) => {
                setOpportunities(opportunities)
                setLoading(false)
                console.log(opportunities)
            })
        }
        )
    }

       

    }, [])

    const handleStartTimeChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const timeString = val.target.value; // "HH:mm"
        const [hours, minutes] = timeString.split(':').map(Number);
        const newDate = new Date(date!);
        newDate.setHours(hours, minutes, 0, 0);
        setStartTime(newDate);
        setStartTimeString(newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));

    };

    const handleEndTimeChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const timeString = val.target.value; // "HH:mm"
        const [hours, minutes] = timeString.split(':').map(Number);
        const newDate = new Date(date!);
        newDate.setHours(hours, minutes, 0, 0);
        setEndTime(newDate);
        setEndTimeString(newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));

    };
    Date.prototype.addHours = function(h) {
        this.setTime(this.getTime() + (h*60*60*1000));
        return this;
      }


    function createOpportunityTile() {
        return (
            <>
            <div className='createOpportunity'>
                <h1>
                    {isEditingOpportunity ? "Edit" : "Create"} Opportunity
                </h1>
                <div className='FormRow'>
                    <label htmlFor="">Position: </label>
                <input placeholder='Position' value={position} onChange={(e) => {
                    setPosition(e.target.value)
                }}/>
                </div>
                <div className='FormRow'>
                    <label htmlFor="">Description: </label>
                <textarea placeholder='Description' value={description}  onChange={(e) => {
                    setDescription(e.target.value)
                }}/>
                </div>
                <div className='FormRow'>
                    <label htmlFor="">Locaiton: </label>
                <select name="location" id="" value={location?.address} onChange={(e) => {
                    const location = locations.find((location) => location.address == e.target.value)
                    if (location) {
                        setLocation(location)
                    }
                }}>
                    {locations.map((location) => {
                        return <option value={location.address}>{location.name}</option>
                    }
                    )}
                </select>
                </div>
                <div className='FormRow'>
                    <label htmlFor="">Opporunity Type: </label>
                <select name="opportunityType" id="" value={opportunityType} onChange={(e) => {
                    setOpportunityType(e.target.value as OpportunityType)
                }}>
                    <option value={OpportunityType.Job}>Job</option>
                    <option value={OpportunityType.OneTimeVolunteer}>One Time Volunteer</option>
                    <option value={OpportunityType.RecurringVolunteer}>Recurring Volunteer</option>
                   
                </select>
                </div>
                {opportunityType == OpportunityType.Job && <>
                <div className='FormRow'>
                    <label htmlFor="">Salary: </label>
                <input type='number' placeholder='Salary' value={salary} onChange={(e) => {
                    setSalary(parseFloat(e.target.value))
                }}/>
                </div>
                <div className='FormRow'>
                    <label htmlFor="">Shift Type: </label>
                <select name="shiftType" id="" value={shiftType} onChange={(e) => {
                    setShiftType(e.target.value as ShiftType)
                }
                }>

                    <option value={ShiftType.Weekdays}>Weekdays</option>
                    <option value={ShiftType.Weekends}>Weekends</option>
                    <option value={ShiftType.All}>Weekdays and Weekends</option>
                </select>
                </div>
                </>}
                {opportunityType == OpportunityType.OneTimeVolunteer && <>
                <div className='FormRow'>

                <label htmlFor="">Date: </label>
                                <input type="date" value={date?.toISOString().split('T')[0]} onChange={(val) => {
                                    const date = new Date(val.target.value)
                                    date.setHours(0, 0, 0, 0)
                                    date.setDate(date.getDate() + 1)
                                    setDate(date)
                                    //change start time date and end time date
                                    const newStartTime = new Date(date)
                                    newStartTime.setHours(startTime!.getHours(), startTime!.getMinutes(), 0, 0)
                                    setStartTime(newStartTime)
                                    setStartTimeString(newStartTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                                    const newEndTime = new Date(date)
                                    newEndTime.setHours(endTime!.getHours(), endTime!.getMinutes(), 0, 0)
                                    setEndTime(newEndTime)
                                    setEndTimeString(newEndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                
                                }}/>
                                </div>
                                <div className='FormRow'>
                
                                <label htmlFor="StartTime">Start Time: </label>
                                <input type="time" value={startTimeString} onChange={handleStartTimeChange}/>    
                                </div>
                                <div className='FormRow'>
                                <label htmlFor="EndTime">End Time: </label>
                                <input type="time" value={endTimeString} onChange={handleEndTimeChange}/>
                                </div>
                </>}
                {opportunityType == OpportunityType.RecurringVolunteer && <>
                <div className='FormRow'>
                    <label htmlFor="">Shift Type: </label>
                    <select name="shiftType" id="" value={shiftType} onChange={(e) => {
                        setShiftType(e.target.value as ShiftType)
                    }
                    }>
                            
                        <option value={ShiftType.Weekdays}>Weekdays</option>
                        <option value={ShiftType.Weekends}>Weekends</option>
                        <option value={ShiftType.All}>Weekdays and Weekends</option>
                    </select>
                </div>
                </>}
                <div className='FormRow'>
                    <label htmlFor="">Application Link: </label>
                <input placeholder='Application Link' value={applicationLink} onChange={(e) => {
                    setApplicationLink(e.target.value)
                }} />
                </div>

                {isCreatingOpportunity ? <div className='loader'></div> : <button className='ActionBtn' onClick={ async () => {
                    if(position == "" || description == "" || location == null || applicationLink == ""){
                        alert("Please fill out all fields")
                        return
                    }
                    if(opportunityType == OpportunityType.Job && (salary == 0 || shiftType == null)){
                        alert("Please fill out all fields")
                        return
                    }
                    if(opportunityType == OpportunityType.OneTimeVolunteer && (date == null || startTime == null || endTime == null)){
                        alert("Please fill out all fields")
                        return
                    }
                    if(opportunityType == OpportunityType.RecurringVolunteer && shiftType == null){
                        alert("Please fill out all fields")
                        return
                    }
                    setIsCreatingOpportunity(true)
                    //Create opportunity
                    let newOpportunity: Opportunity;
                    if(opportunityType == OpportunityType.Job){
                        newOpportunity = new Job({
                            companyName: company!.name,
                            position: position,
                            description: description,
                            location: location!,
                            shiftType: shiftType,
                            hourlyRate: salary,
                            applicationLink: applicationLink,
                            companyId: company!.id,
                            id: "",
                            type: OpportunityType.Job,
                            isAvailable: true,
                            lastUpdated: Date.now(),
                            applicants: []
                        });
                    }
                    else if(opportunityType == OpportunityType.OneTimeVolunteer){
                        const eventDate: EventDate = EventDate.fromBlank(date!, startTime!, endTime!)
                        
                        newOpportunity = new OneTimeVolunteer({
                            companyName: company!.name,
                            position: position,
                            description: description,
                            location: location!,
                            eventDate: eventDate,
                            applicationLink: applicationLink,
                            companyId: company!.id,
                            id: "",
                            type: OpportunityType.OneTimeVolunteer,
                            isAvailable: true,
                            lastUpdated: Date.now(),
                            applicants: [],
                            volunteers: [],
                            taskId: isEditingOpportunity ? (editOpportunity as OneTimeVolunteer).taskId : ""
                        })

                    } else {
                        newOpportunity = new RecurringVolunteer({
                            companyName: company!.name,
                            position: position,
                            description: description,
                            location: location!,
                            shiftType: shiftType,
                            applicationLink: applicationLink,
                            companyId: company!.id,
                            id: "",
                            type: OpportunityType.RecurringVolunteer,
                            isAvailable: true,
                            lastUpdated: Date.now(),
                            applicants: [],
                            volunteers: [],

                        })
                    }
                    console.log(newOpportunity)
                    if(isEditingOpportunity){
                        //Edit opportunity
                        newOpportunity.id = editOpportunity!.id
                        if(editOpportunity?.type == OpportunityType.OneTimeVolunteer && newOpportunity.type != OpportunityType.OneTimeVolunteer){
                            await deleteCloudTask((editOpportunity as OneTimeVolunteer).taskId)

                        }
                        await updateOpportunity(newOpportunity, false)
                        setOpportunities(opportunities.map((opp) => {
                            if(opp.id == editOpportunity?.id){
                                return newOpportunity
                            }
                            return opp
                        }))
                        setEditOpportunity(null)
                        setIsEditingOpportunity(false)
                    } else {
                    const newOpp = await addOpportunity(newOpportunity)
                    newOpportunity = newOpp
                    opportunities.push(newOpportunity)
                    setOpportunities(opportunities)

                    
                    setCreateOpportunity(false)
                    }
                    setIsCreatingOpportunity(false)

                }}>{isEditingOpportunity ? "Save" : "Create"}</button>}
            </div>
            </>
        )
    }

    return (
        <>
        <div className='title'>
            <h1>
             Opportunities
            </h1>
          
        </div>
        <div className='center'> 
            {loading && <div className='loader'></div>}
            {createOpportunity || isEditingOpportunity ? createOpportunityTile() : <><div className='opportunities'>
                {opportunities.map((opportunity) => {
                    return <OpportunityTile opportunity={opportunity} accountType={accountType} studentData={studentData}
                    onApply={ () => {
                        //remove opportunity from list
                        setOpportunities(opportunities.filter((opp) => opp.id != opportunity.id))
                    }}
                    onEdit={() =>{
                        setEditOpportunity(opportunity)
                        setOpportunityType(opportunity.type)
                        setPosition(opportunity.position)
                        setDescription(opportunity.description)
                        setLocation(opportunity.location)
                        if(opportunity.type == OpportunityType.Job){
                            setSalary((opportunity as Job).hourlyRate)
                            setShiftType((opportunity as Job).shiftType)
                        }
                        if(opportunity.type == OpportunityType.OneTimeVolunteer){
                            const eventDate = (opportunity as OneTimeVolunteer).eventDate
                            setDate(eventDate.date)
                            setStartTime(eventDate.from)
                            setEndTime(eventDate.to)
                            setStartTimeString(eventDate.from.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                            setEndTimeString(eventDate.to.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
                        }
                        if(opportunity.type == OpportunityType.RecurringVolunteer){
                            setShiftType((opportunity as RecurringVolunteer).shiftType)
                        }
                        setApplicationLink(opportunity.applicationLink)
                        setIsEditingOpportunity(true)
                    }} onRemove={async () => {
                        //Remove opportunity
                        await deleteOpportunity(opportunity)
                        setOpportunities(opportunities.filter((opp) => opp.id != opportunity.id))

                    }}/>
                })}

            </div>
            
            {accountType == "employer" && <button className='ActionBtn' onClick={() => {
                setCreateOpportunity(true)
            }}>Create Opportunity</button>}</>}
          
            <button className='ActionBtn' onClick={() => {
                if(createOpportunity) {
                    setCreateOpportunity(false)
                } else {
                window.location.href = `/`
                }
            }}>
                Back
            </button>
        </div>

        </>
    )
}

export default App
