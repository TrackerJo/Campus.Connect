import {  LegacyRef, StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './conflict_form.css'
import { ConflictDate, ConflictForm, ConflictResponse, ConflictResponseDate, EventDate, Show } from '../../../../constants'
import ConflictDateTile from '../../../../components/Conflict_Date_Tile'
import { getActvityShowConflictFormResponses, getCurrentUserAsActor, saveActivityShowConflictForm, submitActivityShowConflictForm } from '../../../../firebase/db'
import ConflictDateFormTile from '../../../../components/Conflict_Date_Form_Tile'










function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [showId, setShowId] = useState<string>("")
    const [show, setShow] = useState<Show | null>()
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)
    const [defaultStartDate, setDefaultStartDate] = useState<Date | null>(null)
    const [defaultEndDate, setDefaultEndDate] = useState<Date | null>(null)
    const [conflictDates, setConflictDates] = useState<ConflictDate[]>([])
    const [conflictResponseDates, setConflictResponseDates] = useState<ConflictResponseDate[]>([])
    const [creationStage, setCreationStage] = useState<"setDates" | "editDates">("setDates")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const [formResponses, setFormResponses] = useState<ConflictResponse[]>([])
    
    

    useEffect(() => {
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
        }
        const showId = urlParams.get('showId')
        if (showId) {
            setShowId(showId)
        }
        //Get Show from local storage
        const show = localStorage.getItem('show-' + showId)
        if (show) {
            setShow(Show.fromMap(JSON.parse(show)))
            console.log(Show.fromMap(JSON.parse(show)))
            getActvityShowConflictFormResponses(activityId!, showId!).then((responses) => {
                setFormResponses(responses)
                console.log(responses)
            })
        }
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
            if(accountType == "student" && show  && Show.fromMap(JSON.parse(show)).conflictForm) {
                const conflictResponseDates: ConflictResponseDate[] = []
                Show.fromMap(JSON.parse(show)).conflictForm!.dates.map((conflictDate) => {
                    conflictResponseDates.push(ConflictResponseDate.fromBlank(conflictDate.date.date,null,null, false))
                })
                setConflictResponseDates(conflictResponseDates)
            }

        }
       

    }, [])



    return (
        <>
        <div className='title'>
            <h1>
               Conflict Form
            </h1>
          
        </div>
        <div className='center'>
            {
                !show?.conflictForm && accountType == "teacher" ? 
                <>
                <h2>Create Conflict Form</h2>
                <br />
                {creationStage == "setDates" ? <> <label>Start Date</label>
                <input type='date' onChange={(e) => {
                    console.log(new Date(e.target.value))
                    //Add 1 day to the end date
                    const endDate = new Date(e.target.value)
                    endDate.setDate(endDate.getDate() + 1)
                    endDate.setHours(0, 0, 0, 0)
                    setStartDate(endDate)
                }}/>
                <br />
                <label>End Date</label>
                <input type='date' onChange={(e) => {
                    const endDate = new Date(e.target.value)
                    //Add 1 day to the end date
                    endDate.setDate(endDate.getDate() + 1)
                    endDate.setHours(0, 0, 0, 0)
                    setEndDate(endDate)
                }}/>
                <br />
                <label>Default Rehersal Start Time</label>
                <input type='time' onChange={(e) => {
                    console.log(e.target.value)
                    const date = new Date()
                    const time = e.target.value.split(':')
                    date.setHours(parseInt(time[0]), parseInt(time[1]), 0, 0)
                    setDefaultStartDate(date)
                    console.log({date})
                }}/>
                <br />
                <label>Default Rehersal End Time</label>
                <input type='time' onChange={(e) => {
                    console.log(e.target.value)
                    const date = new Date()
                    const time = e.target.value.split(':')
                    date.setHours(parseInt(time[0]), parseInt(time[1]), 0, 0)
                    setDefaultEndDate(date)
                    console.log({date})
                }}/>
                <br />
                <button className='ActionBtn' onClick={() => {
                    if (startDate && endDate && defaultStartDate && defaultEndDate) {
                       //Create x number of conflict dates where x is the number of days between start and end date, including start and end date
                        const dates: ConflictDate[] = []
                        const currentDate = new Date(startDate)
                        console.log("Start Date")
                        console.log(currentDate)
                        while (currentDate <= endDate) {
                            console.log(currentDate)
                            dates.push(ConflictDate.fromBlank(EventDate.fromBlank(new Date(currentDate), defaultStartDate, defaultEndDate), ""))
                            currentDate.setDate(currentDate.getDate() + 1)

                        }
                        setConflictDates(dates)
                        setCreationStage("editDates")
                        console.log(dates)

                    }
                }}>
                    Next
                </button> </> :
                <>
                    <div className='conflicts'>

                        {
                            conflictDates.map((conflictDate, index) => {
                                return (
                                    <ConflictDateTile key={conflictDate.date.date.toISOString()} conflict={conflictDate} canDelete={true} onDelete={() => {
                                        const newDates = [...conflictDates]
                                        newDates.splice(index, 1)
                                        setConflictDates(newDates)
                                    }} setConflict={(newConflictDate) => {
                                        const newDates = [...conflictDates]
                                        newDates[index] = newConflictDate
                                        setConflictDates(newDates)
                                    }}/>
                                )
                            })
                        
                        }
                    </div>
                    <br />
                    {isLoading ? <div className='loader'></div> : <button className='ActionBtn' onClick={async () => {
                        setIsLoading(true)
                        const newShow = Show.fromMap(show!.toMap())
                        newShow!.conflictForm = ConflictForm.fromBlank(conflictDates, Date.now())
                        setShow(newShow)
                        console.log(newShow)
                        await saveActivityShowConflictForm(activityId, showId, newShow.conflictForm)
                        setIsLoading(false)
                    }}>
                        Save Conflict Form
                    </button>}
                    <br />
                    <button className='ActionBtn' onClick={() => {
                        setCreationStage("setDates")
                        setConflictDates([])
                    }}>
                        Back
                    </button>

                 </>}

                </> 
                :  accountType == "teacher" ? 
                <>
                <h2>Conflict Form Responses</h2>
                <div className='conflicts'>
                    {
                        formResponses.map((response) => {
                            return (
                                <div className='conflict-response'>
                                    {response.actor.name}
                        
                                    <br />
                                    <div className='conflict-response-dates'>

                                   
                                    {response.dates.map((date) => {
                                       if(date.canAttend) {
                                             return (
                                                  <div className='conflict-response-date'>
                                                    {date.date!.toDateString()}
                                                    <br />
                                                    {date.from!.toLocaleTimeString()} - {date.to!.toLocaleTimeString()}
                                                   
                                                    
                                                  </div>
                                             )
                                        } else {
                                            return (
                                                <div className='conflict-response-date'>
                                                    {date.date.toDateString()}
                                                    <br />
                                                    Can't Attend
                                                </div>
                                            )
                                        }
                                    })}
                                     </div>
                                </div>
                            )
                        })
                    }

                </div>
                </>
                : formResponses.length == 0 ?
                <>
                <h2>Conflict Form</h2>
                <br />
                <p>Select can attend even if you can't make the full rehersal, just add a conflict</p>
                <div className='conflicts'>
                    {show?.conflictForm?.dates.map((conflictDate, index) => {

                        console.log(conflictDate)
                        return (
                            <ConflictDateFormTile conflict={conflictDate} conflictResponseDate={conflictResponseDates[index]} setConflict={(conflict) => {
                                const newDates = [...conflictResponseDates]
                                console.log(newDates)
                                newDates[index] = conflict
                                setConflictResponseDates(newDates)
                            }}/>
                        )
                    })}
                </div>
                <br />
                {isLoading ? <div className='loader'></div> :  <button className='ActionBtn' onClick={async () => {
                    setIsLoading(true)
                    //Remove all dates where canAttend is true and date is null
                    const newDates = conflictResponseDates.filter((date) => {
                        return (date.canAttend && date.from) || !date.canAttend
                    })
                    const currentActor = await getCurrentUserAsActor()
                    const response: ConflictResponse = ConflictResponse.fromBlank(newDates, "", currentActor!, Date.now())
                    console.log(response)
                    await submitActivityShowConflictForm(activityId, showId, response)
                    const newFormResponses = [...formResponses]
                    newFormResponses.push(response)
                    setFormResponses(newFormResponses)
                    setIsLoading(false)

                    // const newShow = Show.fromMap(show!.toMap())
                    // newShow!.conflictForm = ConflictForm.fromBlank(conflictDates, Date.now())
                    // setShow(newShow)
                    // console.log(newShow)
                    // await saveActivityShowConflictForm(activityId, showId, newShow.conflictForm)
                    // setIsLoading(false)
                }}>
                    Submit Conflict Form
                </button>}
                </> : <>
                <h2>Already Submitted Conflict Form</h2>

                </>}
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = `/Activity/Shows/Show/?activityId=${activityId}&showId=${showId}`
            }}>
                Close
            </button>
        </div>
        </>
    )
}

export default App
