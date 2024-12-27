import {   StrictMode, useEffect } from 'react'
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
import { ActivityMember, ConflictDate, ConflictForm, ConflictResponse, ConflictResponseDate, EventDate, Show } from '../../../../constants'
import ConflictDateTile from '../../../../components/Conflict_Date_Tile'
import { deleteActivityShowConflictResponse, getActivity, getActivityShow, getActvityShowConflictFormResponses, getCurrentUserAsActor, saveActivityShowConflictForm, submitActivityShowConflictForm } from '../../../../api/db'
import ConflictDateFormTile from '../../../../components/Conflict_Date_Form_Tile'
import AddRecurringConflictDialog from '../../../../components/Add_Recurring_Conflict_Dialog'
import SimpleConflictResponseDisplayTile from '../../../../components/Simple_Conflict_Response_Date_Display_Tile'
import AddUserDialog from '../../../../components/Add_User_Dialog'
import AddAdditionalDayDialog from '../../../../components/Add_Additional_Day_Dialog'
import { getCurrentUserId, isLoggedIn } from '../../../../api/auth'










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
    const [excludeWeekends, setExcludeWeekends] = useState<boolean>(true)
    const [formDeadline, setFormDeadline] = useState<Date | null>(null)
    const [addingConflictResponse, setAddingConflictResponse] = useState<boolean>(false)
    const [selectedActor, setSelectedActor] = useState<ActivityMember>()
    const [members, setMembers] = useState<ActivityMember[]>([])
    const [additionalDates, setAdditionalDates] = useState<ConflictDate[]>([])

    const addActorDialogRef = useRef<HTMLDialogElement>(null)
    const addRecurringConflictsDialog = useRef<HTMLDialogElement>(null)
    const addAdditionalDayDialog = useRef<HTMLDialogElement>(null)


    

    useEffect(() => {
        async function getInfo() {
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        let activity = null;
        if (activityId) {
            setActivityId(activityId)
            activity = await getActivity(activityId)

            
        }
        const showId = urlParams.get('showId')
        if (showId) {
            setShowId(showId)
        }
        //Get Show from local storage
        let show;
        const showJSON = localStorage.getItem(`show-${showId}`);
        if (showJSON) {
            show = Show.fromMap(JSON.parse(showJSON))
            setShow(show)
            let allMembers = [];
            for (const character of show.characters) {
                if(character.actor) {
                    allMembers.push(character.actor)
                }
            }
            if(show.ensemble) {
                allMembers = [...allMembers, ...show.ensemble!.actors]
            }
            //Remove duplicates
            allMembers = allMembers.filter((actor, index, self) => {
                return index === self.findIndex((t) => (
                    t!.userId === actor.userId
                ))
            })
        //     let allMembers =[...show.characters.map((character) => {
        //         if(character.actor) {
        //             return character.actor
        //         }
        //     })]
        //     if(show.ensemble) {
        //         allMembers = [...allMembers, ...show.ensemble!.actors]
        //     }
        //     //Remove duplicates
        //     allMembers = allMembers.filter((actor, index, self) => {
        //         if(actor == null) {
        //             return false
        //         }
        //         return index === self.findIndex((t) => (
        //             t!.userId === actor.userId
        //         ))
        // })
            setMembers(allMembers)
            
            console.log(show)
            getActvityShowConflictFormResponses(activityId!, showId!).then((responses) => {
                setFormResponses(responses)
                console.log(responses)
            })
        } else { 
            show = (await getActivityShow(activityId!, showId!))!
        }

        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
            console.log(accountType)
            if(accountType == "teacher" && activity) {
               if(activity.teachers.findIndex((teacher) => {
                   return teacher.userId == getCurrentUserId()
               }) == -1) {
                        
                     window.location.href = `/Activities/?activityJoinCode=${activity.joinCode}&redirect=${window.location.pathname + window.location.search.replace(/&/g, '~')}`
                     return
                  
               }
            } else if(accountType == "student" && activity) {
                if(activity.students.findIndex((member) => {
                    return (member as ActivityMember).userId == getCurrentUserId()
                }) == -1) {
                    window.location.href = `/Activities/?activityJoinCode=${activity.joinCode}&redirect=${window.location.pathname + window.location.search.replace(/&/g, '~')}`
                    return
                }
            }
            if(accountType == "student" && show  && show.conflictForm) {
                const conflictResponseDates: ConflictResponseDate[] = []
                show.conflictForm!.dates.map((conflictDate) => {
                    conflictResponseDates.push(ConflictResponseDate.fromBlank(conflictDate.date.date,null,null, false,""))
                })
                setConflictResponseDates(conflictResponseDates)
            }

        }
    }
    getInfo()
       

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
                <label>Exclude Weekends</label>
                <input type='checkbox' checked={excludeWeekends} onChange={(e) => {
                    setExcludeWeekends(e.target.checked)
                }}/>
                 <br />
                <label>Form Deadline</label>
                <input type='date' onChange={(e) => {
                    const endDate = new Date(e.target.value)
                    //Add 1 day to the end date
                    endDate.setDate(endDate.getDate() + 1)
                    endDate.setHours(0, 0, 0, 0)
                    setFormDeadline(endDate)
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
                            if(excludeWeekends) {
                                while (currentDate.getDay() == 0 || currentDate.getDay() == 6) {
                                    currentDate.setDate(currentDate.getDate() + 1)
                                }
                            }

                        }
                        setConflictDates(dates)
                        setCreationStage("editDates")
                        console.log(dates)

                    }
                }}>
                    Next
                </button> </> :
                <>
                
                <button className='ActionBtn' onClick={() => {
                    addAdditionalDayDialog.current?.showModal()
                }}>Add Additional Day</button>
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
                        if (formDeadline == null) {
                            alert("Please set a form deadline")
                            setIsLoading(false)
                            return
                        }
                        const newShow = Show.fromMap(show!.toMap())
                        newShow!.conflictForm = ConflictForm.fromBlank(conflictDates, formDeadline!,Date.now())
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
                :  accountType == "teacher" && !addingConflictResponse ? 
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
                                                    {date.from!.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {date.to!.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    {
                                                        date.note != "" && <br/>
                                                    }
                                                    {
                                                        date.note != "" && <label htmlFor="Actor">Note: {date.note}</label>
                                                    }
                                                   
                                                   
                                                    
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

                                     <button className='ActionBtn' onClick={async () => {
                                            const newResponses = [...formResponses]
                                            newResponses.splice(formResponses.indexOf(response), 1)
                                            setFormResponses(newResponses)
                                            await deleteActivityShowConflictResponse(activityId, showId, response)
                                     }}>Delete</button>

                                     
                                     </div>
                                </div>
                            )
                        })
                    }

                </div>
                <button className='ActionBtn' onClick={() => {
                    addActorDialogRef.current?.showModal()
                }}>Add Conflict Response</button>
                <button className='ActionBtn' onClick={ async () => {
                    const link = window.location.href
                    await navigator.clipboard.writeText(link)
                    alert("Link copied to clipboard")
                }}>Share Conflict Form</button>
                </>
                : (formResponses.length == 0 && show?.formStatus == "open") || addingConflictResponse ?
                <>
                <h2>Conflict Form</h2>
                <p>Select can attend even if you can't make the full rehersal, just add a conflict</p>
                <div className='quick-actions'>
                    <button className='ActionBtn' onClick={() => {
                        const newDates: ConflictResponseDate[] = []
                        show?.conflictForm?.dates.map((conflictDate) => {
                            newDates.push(ConflictResponseDate.fromBlank(conflictDate.date.date,null, null, true,""))
                        })
                        setConflictResponseDates(newDates)
                    }}>I can attend all the rehersals</button>
                    <button className='ActionBtn' onClick={(e) => {
                        addRecurringConflictsDialog.current?.showModal()
                    }}>Add recurring conflict</button>
                </div>
                
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
                    

                    let currentActor;
                    if(addingConflictResponse) {
                        currentActor = selectedActor
                    } else {
                        currentActor = await getCurrentUserAsActor()
                    }
                    const response: ConflictResponse = ConflictResponse.fromBlank(newDates, "", currentActor!,activityId, showId, Date.now())
                    console.log(response)
                    await submitActivityShowConflictForm(activityId, showId, response)
                    const newFormResponses = [...formResponses]
                    newFormResponses.push(response)
                    setFormResponses(newFormResponses)
                    setIsLoading(false)
                    setAddingConflictResponse(false)

                    // const newShow = Show.fromMap(show!.toMap())
                    // newShow!.conflictForm = ConflictForm.fromBlank(conflictDates, Date.now())
                    // setShow(newShow)
                    // console.log(newShow)
                    // await saveActivityShowConflictForm(activityId, showId, newShow.conflictForm)
                    // setIsLoading(false)
                }}>
                    Submit Conflict Form
                </button>}
                </>  : show?.formStatus == "open" ? <>
                <h2>Conflict Form Response</h2>
                <div className='conflicts'>
                    {formResponses[0].dates.map((date) => {
                        return (
                            <SimpleConflictResponseDisplayTile conflictResponseDate={date}/>
                        )
                    })}
                </div>
                

                </> :
                <>
                <h2>Conflict Form Closed</h2>
                </>}
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = `/Activity/Shows/Show/?activityId=${activityId}&showId=${showId}`
            }}>
                Close
            </button>
        </div>
        <AddRecurringConflictDialog dialogRef={addRecurringConflictsDialog} addConflicts={(conflicts) => {
            const newDates = [...conflictResponseDates]
            //Replace all dates with the new dates
            conflicts.map((conflict) => {
                console.log("FInding conflict")
                console.log(conflict)
                if(conflictResponseDates.findIndex((date) => {
                    console.log("Checking date")
                    console.log(date.date.toDateString())
                    return date.date.toDateString() == conflict.date.toDateString()
                }) == -1) {
                    return
                }
                const index = conflictResponseDates.findIndex((date) => {
                    return date.date.toDateString() == conflict.date.toDateString()
                })
                console.log("Index")
                console.log(index)
                console.log("Current Conflicts")
                console.log(show?.conflictForm?.dates)
                console.log(conflictResponseDates)
                const currentConflictDate = show!.conflictForm!.dates[index]

                //check if new conflict from is before current conflict form
                if(currentConflictDate.date.from && conflict.from! < currentConflictDate.date.from) {
                    conflict.from = currentConflictDate.date.from
                }
                if(currentConflictDate.date.to && conflict.to! > currentConflictDate.date.to) {
                    conflict.to = currentConflictDate.date.to
                }
                newDates[newDates.findIndex((date) => {
                    return date.date.toDateString() == conflict.date.toDateString()
                })] = conflict

            })
            setConflictResponseDates(newDates)
            addRecurringConflictsDialog.current!.close()

        }} close={() => {
            addRecurringConflictsDialog.current!.close()
        }}/>
        <AddUserDialog dialogRef={addActorDialogRef} close={() => {
            addActorDialogRef.current!.close()
        }} members={members} addedMembers={[]} addUser={(newMember: ActivityMember | ActivityMember) => {
            if(newMember instanceof ActivityMember){
                setSelectedActor(newMember)
            }
            addActorDialogRef.current!.close()
            setAddingConflictResponse(true)
            
        }}/>

        <AddAdditionalDayDialog dialogRef={addAdditionalDayDialog} close={() => {
            addAdditionalDayDialog.current!.close()
        }} addDay={(day) => {
            const newDates = [...conflictDates]
            newDates.push(day)
            setConflictDates(newDates)
            addAdditionalDayDialog.current!.close()
        }}/>
        </>
    )
}

export default App
