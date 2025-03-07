import { Character, EnsembleSection, ShowGroup, ShowGroupTileProps } from "../constants"
import "./Show_Group_Tile.css"
import TrashIcon from "../assets/trash.png"
import CharacterTile from "./Character_Tile"
import EnsembleSectionTile from "./Ensemble_Section_Tile"
import { useEffect, useState } from "react"

function ShowGroupTile({showGroup, setShowGroup, isCreate, removeShowGroup, isAssign, showGroups, hasEnsemble, characters, actors, hasCreatedSchedule} :ShowGroupTileProps){
    const [addedEnsemble, setAddedEnsemble] = useState(false)
    const [id, setId] = useState(0)

    useEffect(() => {
        //Generate a unique id for the show group
        setId(Math.floor(Math.random() * 100000))
    }, [])
    console.log("SHOW GROUP TILE")
    console.log(characters)
    return (
        <div className={"ShowGroupTile" + (isCreate || isAssign ? "Create" : "")} id={"show-group-tile-" + showGroup.showGroupId}>
            <div className="header">
                <div className="ShowGroupNameDiv">
                    <label htmlFor="ShowGroup">Show Group: </label>
                    {isCreate ?
                    <input type="text" name="" id="" value={showGroup.name} onChange={(val) => {
                        setShowGroup(ShowGroup.fromBlank(val.target.value, showGroup.characters,showGroup.showGroupId))
                    }}/>: isAssign ? 
                    <>
                    <label htmlFor="">{showGroup.name}</label>
                    </>
                    :
                    //Dropdown for selecting existing characters
                    <select name="show groups" id="showGroups" value={showGroup.showGroupId} onChange={(val) => {
                        if(val.target.value == "null") return
                        setShowGroup(showGroups.find((e) => e.showGroupId == parseInt(val.target.value))!)
                    }}>
                        <option value={"null"}>Select a show group</option>
                        {showGroups.map((c, index) => {
                            return <option value={c.showGroupId} key={index}>{c.name}</option>
                        })}
                        </select>
                    }
                </div>
                <div>
                    {!isAssign && <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        removeShowGroup()
                    }}/>}
                </div>
            </div>
           { (isCreate || isAssign) && <br />}
            { (isCreate || isAssign) && <div>
                <label htmlFor="Characters">Characters: </label>
                <div className="characters" id={"characters-" + id}>


                {showGroup.characters.map((character, index) => {
                    console.log(character)
                    if(character instanceof Character && !isAssign)
                        return <CharacterTile key={index} character={character} actors={[]} isCreate={false} characters={characters} isAssign={isAssign} hasCreatedSchedule={hasCreatedSchedule} setCharacter={(newCharacter) => {
                            setShowGroup(ShowGroup.fromBlank(showGroup.name, showGroup.characters.map((c, i) => {
                                if (i === index) {
                                    return newCharacter
                                }
                                return c
                            }),showGroup.showGroupId))
                        }} removeCharacter={() => {
                            setShowGroup(ShowGroup.fromBlank(showGroup.name, showGroup.characters.filter((c, i) => i !== index),showGroup.showGroupId))
                        }}/>
                    else if(character instanceof EnsembleSection)
                        return <EnsembleSectionTile key={index} isGroupChatCreate={false} onAddEnsemble={() => {}} ensembleSection={character} isAssign={isAssign} actors={actors} isCustom={false} isCreate={true} setEnsembleSection={(newEnsembleSection) => {
                            console.log("NEW ENSEMBLE SECTION")
                            console.log(newEnsembleSection.toMap())
                            const newShowGroup = ShowGroup.fromBlank(showGroup.name, showGroup.characters.map((c, i) => {
                                if (i === index) {
                                    return newEnsembleSection
                                }
                                return c
                            }), showGroup.showGroupId);
                            console.log("NEW SHOW GROUP")
                            console.log(newShowGroup.toMap())
                            setShowGroup(newShowGroup)
                    

                            
                }} removeEnsembleSection={() => {
                        setAddedEnsemble(false)
                        setShowGroup(ShowGroup.fromBlank(showGroup.name, showGroup.characters.filter((c, i) => i !== index),showGroup.showGroupId))
                }}/>
                
                    })}
                </div>

                {isCreate && <>
                <button className="ActionBtn" onClick={() => {
                        const characterId = Math.floor(Math.random() * 100000)
                        const newShowGroup = ShowGroup.fromBlank(showGroup.name, [...showGroup.characters, Character.fromBlank("", null,characterId )], showGroup.showGroupId)
                        newShowGroup.hasCreatedSchedule = hasCreatedSchedule ?? false
                        setShowGroup(newShowGroup)
                        setTimeout(() => {
                        const element = document.getElementById("characters-" + id)!;
                        element.scrollTop = element.scrollHeight;
                    },100)
                }}>Add Character</button>
                    <br />
                
                { hasEnsemble &&
                    <button className={"ActionBtn " + (addedEnsemble ? "disabled" : "")} disabled={addedEnsemble} onClick={() => {
                        if(addedEnsemble)
                            return
                        setAddedEnsemble(true)
                        //Scroll to bottom
                        setTimeout(() => {
                            const element = document.getElementById("characters-" + id)!;
                        element.scrollTop = element.scrollHeight;
                        },100)
                        const newShowGroup = ShowGroup.fromBlank(showGroup.name, [...showGroup.characters, EnsembleSection.fromBlank(true, false, false,false,[] )],showGroup.showGroupId)
                        newShowGroup.hasCreatedSchedule = hasCreatedSchedule ?? false
                        setShowGroup(newShowGroup)
                    }}>
                    Add Ensemble
                    </button>}
                    </> }
                    </div>
                    }

           
            
          
        </div>
    )
}

export default ShowGroupTile