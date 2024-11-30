import { useEffect, useState } from "react";
import {   CreateActivityDialogProps } from "../constants";

import "./Create_Activity_Dialog.css"
import { createActivity } from "../api/db";

function CreateActivityDialog({dialogRef, close}: CreateActivityDialogProps){
    const [activityName, setActivityName] = useState<string>("")
    const [activityType, setActivityType] = useState<"activity" | "theater">("activity")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <dialog ref={dialogRef} className="CreateActivityDialog">
            <div className="dialogContents">
                <h2>Join Activity</h2>
                    <label htmlFor="">Activity Name</label>
                    <input type="text" value={activityName} onChange={(e) => {
                        setActivityName(e.target.value)
                    }}/>
                <br/>
                    <label htmlFor="">Activity Type</label>
                    <select value={activityType} onChange={(e) => {
                        setActivityType(e.target.value as "activity" | "theater")
                    }}>
                        <option value="activity">Basic</option>
                        <option value="theater">Theater</option>
                    </select>

                {isLoading ? <div className={"loader"}></div> : <button className="ActionBtn" onClick={async () => {
                    setIsLoading(true)
                    const activity = await createActivity(activityName, activityType)
                    if (activity === null) {
                        alert("Failed to create activity")
                        return
                    }
                    window.location.href = `/Campus.Connect/Activity/?activityId=${activity.id}`


                }}>
                    Create
                </button>}
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

export default CreateActivityDialog;