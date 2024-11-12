import { useEffect, useState } from "react";
import {Actor,AddFromPlayDialogProps, Character, EnsembleSection, FullCast, Show, ShowGroup } from "../constants";

import "./Add_From_Play_Dialog.css"
import { getActivityShows } from "../firebase/db";
import ActDisplayTile from "./Act_Display_Tile";
import SongDisplayTile from "./Song_Display_Tile";
import DanceDisplayTile from "./Dance_Display_Tile";
import ShowGroupDisplayTile from "./Show_Group_Display_Tile";

import EnsembleSectionTile from "./Ensemble_Section_Tile";

function AddFromPlayDialog({ dialogRef, close, addMembers, activityId, setName}: AddFromPlayDialogProps){

    const [shows, setShows] = useState<Show[]>([])
    const [selectedShow, setSelectedShow] = useState<Show | null>(null)
    const [ensembleSection, setEnsembleSection] = useState<EnsembleSection | null>(null)



    useEffect(() => {
        if (!activityId) {
            return
        }
        getActivityShows(activityId).then((shows: Show[]) => {
            //filter out shows that cant create schedules
            shows = shows.filter((show) => show.canCreateSchedule)
            setShows(shows)
        });

    }, [activityId])


    return (
        <dialog ref={dialogRef} className="AddFromPlayDialog" >
            <div className="AddFromPlayDiv">
                <h2>Select Play</h2>
                <select className="SelectPlay" onChange={(e) => {
                    setSelectedShow(shows.find((show) => show.id == e.target.value) || null)
                    setEnsembleSection(EnsembleSection.fromBlank(true, false, false, false, [], 333))
                }}>
                    <option value="">Select a Play</option>
                    {shows.map((show, index) => {
                        return <option key={index} value={show.id}>{show.name}</option>
                    })}
                </select>
                {
                    selectedShow && <>
                    <br />
                    <button className="ActionBtn" onClick={() => {
                        const actors: Actor[] = []
                        const actorsUIDs: string[] = []

                        for(const actor of selectedShow!.ensemble!.actors){
                            if(!actorsUIDs.includes(actor.userId)){
                                actors.push(actor)
                                actorsUIDs.push(actor.userId)
                            }
                        }

                        for(const character of selectedShow!.characters!){
                            if(!actorsUIDs.includes(character.actor!.userId)){
                                actors.push(character.actor!)
                                actorsUIDs.push(character.actor!.userId)
                            }
                        }

                        addMembers(actors)
                    }}>Add Full Cast</button>
                    <h2 className="title">Ensemble</h2>
                    <div className="ensemble">
                    <EnsembleSectionTile ensembleSection={ensembleSection!} isAssign={false} actors={[]} isCustom={false} isCreate={true} isGroupChatCreate={true} setEnsembleSection={(newEnsembleSection) => {
                        setEnsembleSection(newEnsembleSection)
                    }}
                    onAddEnsemble={() => {
                        const actors: Actor[] = []
                        const actorsUIDs: string[] = []


                        if(ensembleSection!.includeAll){
                            for(const actor of selectedShow!.ensemble!.actors){
                                if(!actorsUIDs.includes(actor.userId)){
                                    actors.push(actor)
                                    actorsUIDs.push(actor.userId)
                                }
                            }
                        } else if(ensembleSection!.includeMale){
                            for(const actor of selectedShow!.ensemble!.actors){
                                if(actor.gender == "male"){
                                    if(!actorsUIDs.includes(actor.userId)){
                                        actors.push(actor)
                                        actorsUIDs.push(actor.userId)
                                    }
                                }
                            }
                        } else if(ensembleSection!.includeFemale){
                            for(const actor of selectedShow!.ensemble!.actors){
                                if(actor.gender == "female"){
                                    if(!actorsUIDs.includes(actor.userId)){
                                        actors.push(actor)
                                        actorsUIDs.push(actor.userId)
                                    }
                                }
                            }
                        } 


                        addMembers(actors)
                    }}
                    removeEnsembleSection={() => {
                        
                }}/>
                    </div>  
                <h2 className='title'>Show Groups</h2>
                <div className='show-groups'>
                    {
                        selectedShow?.showGroups.map((showGroup, index) => {
                            return<ShowGroupDisplayTile key={index} showGroup={showGroup} canDelete={false} onDelete={() => {}} canClick={true} showCharacters={false} onClick={() => {
                                setName(showGroup.name)
                                const actors: Actor[] = []
                                const actorsUIDs: string[] = []

                                for(const character of showGroup.characters){
                                    if(character instanceof Character){
                                        if(!actorsUIDs.includes(character.actor!.userId)){
                                            actors.push(character.actor!)
                                            actorsUIDs.push(character.actor!.userId)
                                        }
                                    } else if(character instanceof ShowGroup){
                                        for(const showCharacter of character.characters){
                                            if(showCharacter instanceof Character){
                                                if(!actorsUIDs.includes(showCharacter.actor!.userId)){
                                                    actors.push(showCharacter.actor!)
                                                    actorsUIDs.push(showCharacter.actor!.userId)
                                                }
                                            } else if(showCharacter instanceof EnsembleSection){
                                                if(showCharacter.includeAll){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(!actorsUIDs.includes(actor.userId)){
                                                            actors.push(actor)
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeMale){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(actor.gender == "male"){
                                                            if(!actorsUIDs.includes(actor.userId)){
                                                                actors.push(actor)
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeFemale){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(actor.gender == "female"){
                                                            if(!actorsUIDs.includes(actor.userId)){
                                                                actors.push(actor)
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeCustom){
                                                    for(const actor of showCharacter.customActors){
                                                        if(!actorsUIDs.includes(actor.userId)){
                                                            actors.push(actor)
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else if(character instanceof EnsembleSection){
                                        if(character.includeAll){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(!actorsUIDs.includes(actor.userId)){
                                                    actors.push(actor)
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeMale){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    if(!actorsUIDs.includes(actor.userId)){
                                                        actors.push(actor)
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeFemale){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    if(!actorsUIDs.includes(actor.userId)){
                                                        actors.push(actor)
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeCustom){
                                            for(const actor of character.customActors){
                                                if(!actorsUIDs.includes(actor.userId)){
                                                    actors.push(actor)
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        }
                                }
                            }
                                addMembers(actors)
                            }}/>
                        })
                    }
                </div>
                        <h2 className='title'>Show Layout</h2>
                <div className='layout'>
                    {
                        selectedShow?.layout.map((row, index) => {
                            return <ActDisplayTile key={index} act={row} onClick={(scene) => {


                                setName(scene.name + " - " + row.name)


                                const actors: Actor[] = []
                                const actorsUIDs: string[] = []
                                console.log(scene)
                                for(const character of scene.characters){
                                    if(character instanceof Character){
                                        if(!actorsUIDs.includes(character.actor!.userId)){
                                            actors.push(character.actor!)
                                            actorsUIDs.push(character.actor!.userId)
                                        }
                                    } else if(character instanceof ShowGroup){
                                        for(const showCharacter of character.characters){
                                            if(showCharacter instanceof Character){
                                                if(!actorsUIDs.includes(showCharacter.actor!.userId)){
                                                    actors.push(showCharacter.actor!)
                                                    actorsUIDs.push(showCharacter.actor!.userId)
                                                }
                                            } else if(showCharacter instanceof EnsembleSection){
                                                if(showCharacter.includeAll){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(!actorsUIDs.includes(actor.userId)){
                                                            actors.push(actor)
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeMale){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(actor.gender == "male"){
                                                            if(!actorsUIDs.includes(actor.userId)){
                                                                actors.push(actor)
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeFemale){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(actor.gender == "female"){
                                                            if(!actorsUIDs.includes(actor.userId)){
                                                                actors.push(actor)
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeCustom){
                                                    for(const actor of showCharacter.customActors){
                                                        if(!actorsUIDs.includes(actor.userId)){
                                                            actors.push(actor)
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else if(character instanceof EnsembleSection){
                                        if(character.includeAll){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(!actorsUIDs.includes(actor.userId)){
                                                    actors.push(actor)
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeMale){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    if(!actorsUIDs.includes(actor.userId)){
                                                        actors.push(actor)
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeFemale){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    if(!actorsUIDs.includes(actor.userId)){
                                                        actors.push(actor)
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeCustom){
                                            for(const actor of character.customActors){
                                                if(!actorsUIDs.includes(actor.userId)){
                                                    actors.push(actor)
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        }
                                } else if (character instanceof FullCast){
                                    for(const actor of selectedShow!.ensemble!.actors){
                                        if(!actorsUIDs.includes(actor.userId)){
                                            actors.push(actor)
                                            actorsUIDs.push(actor.userId)
                                        }
                                    }
                                    for(const character of selectedShow!.characters!){
                                        if(!actorsUIDs.includes(character.actor!.userId)){
                                            actors.push(character.actor!)
                                            actorsUIDs.push(character.actor!.userId)
                                        }
                                    }
                                }
                            }
                                addMembers(actors)
                            
                            }}/>
                        })
                    }
                </div>
                <h2 className='title'>Songs</h2>
                <div className='songs'>
                    {
                        selectedShow?.songs.map((song, index) => {
                            return <SongDisplayTile key={index} song={song} onClick={() => {


                                setName(song.name)


                                const actors: Actor[] = []
                                const actorsUIDs: string[] = []
                                for(const character of song.characters){
                                    if(character instanceof Character){
                                        if(!actorsUIDs.includes(character.actor!.userId)){
                                            actors.push(character.actor!)
                                            actorsUIDs.push(character.actor!.userId)
                                        }
                                    } else if(character instanceof ShowGroup){
                                        for(const showCharacter of character.characters){
                                            if(showCharacter instanceof Character){
                                                if(!actorsUIDs.includes(showCharacter.actor!.userId)){
                                                    actors.push(showCharacter.actor!)
                                                    actorsUIDs.push(showCharacter.actor!.userId)
                                                }
                                            } else if(showCharacter instanceof EnsembleSection){
                                                if(showCharacter.includeAll){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(!actorsUIDs.includes(actor.userId)){
                                                            actors.push(actor)
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeMale){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(actor.gender == "male"){
                                                            if(!actorsUIDs.includes(actor.userId)){
                                                                actors.push(actor)
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeFemale){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(actor.gender == "female"){
                                                            if(!actorsUIDs.includes(actor.userId)){
                                                                actors.push(actor)
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeCustom){
                                                    for(const actor of showCharacter.customActors){
                                                        if(!actorsUIDs.includes(actor.userId)){
                                                            actors.push(actor)
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else if(character instanceof EnsembleSection){
                                        if(character.includeAll){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(!actorsUIDs.includes(actor.userId)){
                                                    actors.push(actor)
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeMale){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    if(!actorsUIDs.includes(actor.userId)){
                                                        actors.push(actor)
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeFemale){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    if(!actorsUIDs.includes(actor.userId)){
                                                        actors.push(actor)
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeCustom){
                                            for(const actor of character.customActors){
                                                if(!actorsUIDs.includes(actor.userId)){
                                                    actors.push(actor)
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        }
                                } else if (character instanceof FullCast){
                                    for(const actor of selectedShow!.ensemble!.actors){
                                        if(!actorsUIDs.includes(actor.userId)){
                                            actors.push(actor)
                                            actorsUIDs.push(actor.userId)
                                        }
                                    }
                                    for(const character of selectedShow!.characters!){
                                        if(!actorsUIDs.includes(character.actor!.userId)){
                                            actors.push(character.actor!)
                                            actorsUIDs.push(character.actor!.userId)
                                        }
                                    }
                                }
                            }
                                addMembers(actors)
                            
                            }}/>
                        })
                    }
                </div>
                <h2 className='title'>Dances</h2>
                <div className='dances'>
                    {
                        selectedShow?.dances.map((dance, index) => {
                            return <DanceDisplayTile key={index} dance={dance} onClick={() => {


                                setName(dance.name)


                                const actors: Actor[] = []
                                const actorsUIDs: string[] = []
                                for(const character of dance.characters){
                                    if(character instanceof Character){
                                        if(!actorsUIDs.includes(character.actor!.userId)){
                                            actors.push(character.actor!)
                                            actorsUIDs.push(character.actor!.userId)
                                        }
                                    } else if(character instanceof ShowGroup){
                                        for(const showCharacter of character.characters){
                                            if(showCharacter instanceof Character){
                                                if(!actorsUIDs.includes(showCharacter.actor!.userId)){
                                                    actors.push(showCharacter.actor!)
                                                    actorsUIDs.push(showCharacter.actor!.userId)
                                                }
                                                
                                            } else if(showCharacter instanceof EnsembleSection){
                                                if(showCharacter.includeAll){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(!actorsUIDs.includes(actor.userId)){
                                                            actors.push(actor)
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                } else if(showCharacter.includeMale){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(actor.gender == "male"){
                                                            if(!actorsUIDs.includes(actor.userId)){
                                                                actors.push(actor)
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeFemale){
                                                    for(const actor of selectedShow!.ensemble!.actors){
                                                        if(actor.gender == "female"){
                                                            if(!actorsUIDs.includes(actor.userId)){
                                                                actors.push(actor)
                                                                actorsUIDs.push(actor.userId)
                                                            }
                                                        }
                                                    }
                                                } else if(showCharacter.includeCustom){
                                                    for(const actor of showCharacter.customActors){
                                                        if(!actorsUIDs.includes(actor.userId)){
                                                            actors.push(actor)
                                                            actorsUIDs.push(actor.userId)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else if(character instanceof EnsembleSection){
                                        if(character.includeAll){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(!actorsUIDs.includes(actor.userId)){
                                                    actors.push(actor)
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        } else if(character.includeMale){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(actor.gender == "male"){
                                                    if(!actorsUIDs.includes(actor.userId)){
                                                        actors.push(actor)
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeFemale){
                                            for(const actor of selectedShow!.ensemble!.actors){
                                                if(actor.gender == "female"){
                                                    if(!actorsUIDs.includes(actor.userId)){
                                                        actors.push(actor)
                                                        actorsUIDs.push(actor.userId)
                                                    }
                                                }
                                            }
                                        } else if(character.includeCustom){
                                            for(const actor of character.customActors){
                                                if(!actorsUIDs.includes(actor.userId)){
                                                    actors.push(actor)
                                                    actorsUIDs.push(actor.userId)
                                                }
                                            }
                                        }
                                } else if (character instanceof FullCast){
                                    for(const actor of selectedShow!.ensemble!.actors){
                                        if(!actorsUIDs.includes(actor.userId)){
                                            actors.push(actor)
                                            actorsUIDs.push(actor.userId)
                                        }
                                    }

                                    for(const character of selectedShow!.characters!){
                                        if(!actorsUIDs.includes(character.actor!.userId)){
                                            actors.push(character.actor!)
                                            actorsUIDs.push(character.actor!.userId)
                                        }
                                    }
                                }
                            }
                                addMembers(actors)
                            
                            }} />
                        })
                    }
                </div>
                    </>
                }


            <button className="ActionBtn" onClick={() => {
                close()
            }
            }>
                Close
            </button>
            <br />

            </div>
            
            
        </dialog>
    );
}

export default AddFromPlayDialog;