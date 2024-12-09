import { ActivityMember, EnsembleSection, EnsembleSectionProps } from "../constants"
import "./Ensemble_Section_Tile.css"
import TrashIcon from "../assets/trash.png"
import { LegacyRef, useRef } from "react"
import AssignActorDialog from "./Assign_Actor_Dialog"

function EnsembleSectionTile({ensembleSection, setEnsembleSection, removeEnsembleSection, isCreate, isAssign, actors, isCustom, isGroupChatCreate, onAddEnsemble} :EnsembleSectionProps){
    const dialogRef = useRef<HTMLDialogElement>(null)
    return (
        <div className="EnsembleSectionTile">
            <div className="header">
                <div className="EnsembleSectionName">
                    <label htmlFor="Ensemble">Ensemble</label>
                </div>
                
                {!isGroupChatCreate && <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        removeEnsembleSection()
                    }}/>
                </div>}
                
            </div>
            <br />
            {!isAssign && <div>
                <label htmlFor="">Include Everyone: </label>
                <input type="radio" name="" id="" checked={ensembleSection.includeAll} onChange={(val) => {
                    setEnsembleSection(EnsembleSection.fromBlank(val.target.checked,false, false,false, ensembleSection.customActors,ensembleSection.lastUpdated))
                  
                }}/>

                <br />
                <label htmlFor="">Include Males: </label>
                <input type="radio" name="" id="" checked={ensembleSection.includeMale} onChange={(val) => {
                    setEnsembleSection(EnsembleSection.fromBlank(false, val.target.checked, false,false,ensembleSection.customActors, ensembleSection.lastUpdated))
                  
                }}/>

                <br />
                <label htmlFor="">Include Females: </label>
                <input type="radio" name="" id="" checked={ensembleSection.includeFemale} onChange={(val) => {
                    setEnsembleSection(EnsembleSection.fromBlank(false, false, val.target.checked,false,ensembleSection.customActors, ensembleSection.lastUpdated))
                  
                }}/>
                <br />
                {isGroupChatCreate && 
                <div className="AddEnsembleBtnDiv">
                    <button className="ActionBtn" onClick={onAddEnsemble}>
                    Add Ensemble
                    </button>
                </div>
                }
                {(isCreate || isCustom) && !isGroupChatCreate && <><label htmlFor="">Include Custom Actors: </label>
                <input type="radio" name="" id="" checked={ensembleSection.includeCustom} onChange={(val) => {
                    setEnsembleSection(EnsembleSection.fromBlank(false, false, false,val.target.checked,ensembleSection.customActors, ensembleSection.lastUpdated))
                  
                }}/></> } 
                </div>}
                {(isAssign || isCustom) && ensembleSection.includeCustom && <div>
                    <label htmlFor="">Custom Actors: </label>
                    <br />
                    {ensembleSection.customActors.map((actor, index) => {
                        return <div key={index} className="AssignedActor">
                            <label htmlFor="">{actor.name}</label>
                            <img src={TrashIcon} alt="remove actor" className="RemoveActorImg" onClick={() => {
                                const newActors = ensembleSection.customActors
                                newActors.splice(index, 1)
                                setEnsembleSection(EnsembleSection.fromBlank(ensembleSection.includeAll, ensembleSection.includeMale, ensembleSection.includeFemale,ensembleSection.includeCustom,newActors, ensembleSection.lastUpdated))
                            }} />

                        </div>
                    })}
                    <button className="ActionBtn" onClick={() => {
                        //Open dialog to assign actors
                        dialogRef.current?.showModal()
                    }}>
                        Assign Actors
                    </button>
                     </div>}



            
           {(isAssign || isCustom) && <AssignActorDialog dialogRef={dialogRef as LegacyRef<HTMLDialogElement>} keepPastResult={false} actor={new ActivityMember()} addedActors={ensembleSection.customActors} actors={actors} setActor={(actor) => {
                const newActors = ensembleSection.customActors
                newActors.push(actor)
                console.log("Setting actors")
                setEnsembleSection(EnsembleSection.fromBlank(ensembleSection.includeAll, ensembleSection.includeMale, ensembleSection.includeFemale,ensembleSection.includeCustom,newActors, ensembleSection.lastUpdated))
                dialogRef.current?.close()
           }} close={() => {
                dialogRef.current?.close()
           }}/>}
            

            
          
        </div>
    )
}

export default EnsembleSectionTile