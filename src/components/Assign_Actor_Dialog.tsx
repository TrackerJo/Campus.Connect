import { useEffect, useState } from "react";
import { Actor, AssignActorDialogProps } from "../constants";

import "./Assign_Actor_Dialog.css"

function AssignActorDialog({actor, setActor, actors, dialogRef, addedActors, close, keepPastResult}: AssignActorDialogProps){
    const [searchResults, setSearchResults] = useState<Actor[]>([])
    const [searchString, setSearchString] = useState<string>("")

    useEffect(() => {
        if(actor.name != "" && !keepPastResult){
            setSearchResults(actors.filter((actor) => {
                return actor.name.toLowerCase().includes(actor.name.toLowerCase())
            }))
            if(actor.name == undefined) return
            setSearchString(actor.name.toLowerCase())
        }
    }, [])



    function search(searchString: string){
        // console.log(searchString)
        setSearchResults(actors.filter((actor) => {
            console.log(actor.name)
            if(actor.name == undefined) return false

            return actor.name.toLowerCase().includes(searchString.toLowerCase()) && !addedActors.includes(actor)
        }))
        

    }

    return (
        <dialog ref={dialogRef} >
            <div className="AssignActorDialog">
                <h2>Find Actor</h2>
            <input type="text" className="ActorSearchInput" value={searchString} onChange={
                (val) => {
                    setSearchString(val.target.value)
                    if(val.target.value == ""){
                        setSearchResults([])
                        return
                    }
                    search(val.target.value)

                }
            }/>

            <h3>Results</h3>
            <div className="ActorResults">
                {searchResults.map((actor, index) => {
                    return <div key={index} className="ActorResult" onClick={() => {
                        setSearchString("")
                        setSearchResults([])

                    }}>
                        <label htmlFor="">{actor.name}</label>
                        <button className="AssignBtn" onClick={() => {
                            console.log("Assigning actor")
                            setActor(actor)

                        }}>
                            Assign
                        </button>
                    </div>
                })}
                </div>

            <button className="AssignCloseBtn" onClick={() => {
                close()
            }
            }>
                Close
            </button>

            </div>
            
            
        </dialog>
    );
}

export default AssignActorDialog;