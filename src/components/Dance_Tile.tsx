import { useEffect, useState } from "react"
import { Character, Dance, DanceTileProps, EnsembleSection, ShowGroup } from "../constants"
import CharacterTile from "./Character_Tile"
import EnsembleSectionTile from "./Ensemble_Section_Tile"
import "./Dance_Tile.css"
import ShowGroupTile from "./Show_Group_Tile"
import TrashIcon from "../assets/trash.png"

function DanceTile({dance, setDance, isCreate, removeDance, isAssign, characters, showGroups, hasEnsemble} :DanceTileProps){
    const [addedEnsemble, setAddedEnsemble] = useState(false)
    const [id, setId] = useState(0)

    useEffect(() => {
        //Generate a unique id for the song
        setId(Math.floor(Math.random() * 100000))
    }, [])

    return (
        <div className="DanceTile" id={"dance-tile-" + dance.danceId}> 
            <div className="header">
                <div className="DanceNameDiv">
                    <label htmlFor="Scene">Song Name: </label>
                    <input type="text" name="" id="" value={dance.name} onChange={(val) => {
                        setDance(Dance.fromBlank(val.target.value, dance.characters,dance.danceId, dance.lastUpdated))
                    
                    }}/>
                </div>
               
                <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        removeDance()
                    }}/>
                </div>
            </div>
            <br />
            <div>
                <label htmlFor="Characters">Characters: </label>
                <div className="characters" id={"characters-"+id}>


                {dance.characters.map((character, index) => {
                    if(character instanceof Character)
                        return <CharacterTile key={index} character={character} actors={[]} isCreate={isCreate} characters={characters} isAssign={isAssign} setCharacter={(newCharacter) => {
                            setDance(Dance.fromBlank(dance.name, dance.characters.map((c, i) => {
                                if (i === index) {
                                    return newCharacter
                                }
                                return c
                            }),dance.danceId, dance.lastUpdated))
                        }} removeCharacter={() => {
                            setDance(Dance.fromBlank(dance.name, dance.characters.filter((c, i) => i !== index), dance.danceId,dance.lastUpdated))
                        }}/>
                    else if(character instanceof EnsembleSection)
                        return <EnsembleSectionTile key={index} isAssign={false}  ensembleSection={character} isCreate={isCreate} actors={[]} setEnsembleSection={(newEnsembleSection) => {
                            setDance(Dance.fromBlank(dance.name, dance.characters.map((c, i) => {
                                if (i === index) {
                                    return newEnsembleSection
                                }
                                return c
                            }),dance.danceId, dance.lastUpdated))
                    

                            
                }} removeEnsembleSection={() => {
                        setAddedEnsemble(false)
                        setDance(Dance.fromBlank(dance.name, dance.characters.filter((c, i) => i !== index),dance.danceId, dance.lastUpdated))
                }}/>
                else if(character instanceof ShowGroup)
                    return <ShowGroupTile key={index} showGroup={character} hasEnsemble={hasEnsemble} characters={characters} actors={[]} isCreate={isCreate} isAssign={isAssign} showGroups={showGroups} setShowGroup={(newShowGroup) => {
                        setDance(Dance.fromBlank(dance.name, dance.characters.map((c, i) => {
                            if (i === index) {
                                return newShowGroup
                            }
                            return c
                        }),dance.danceId, dance.lastUpdated))
                    }
                    } removeShowGroup={() => {
                        setDance(Dance.fromBlank(dance.name, dance.characters.filter((c, i) => i !== index),dance.danceId, dance.lastUpdated))
                    }}/>
                    })}
                </div>
                <br />
                 <button className="AddCharacterBtn" onClick={() => {
                    const characterId = Math.floor(Math.random() * 100000)
                      setDance(Dance.fromBlank(dance.name, [...dance.characters, Character.fromBlank("Character 1", null,characterId ,0)],dance.danceId, dance.lastUpdated))
                      setTimeout(() => {
                        const element = document.getElementById("characters-" + id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("dance-tile-" + dance.danceId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center",inline: "center"})
                    },100)
                }}>Add Character</button>
                 <br />
                <button className="AddShowGroupBtn" onClick={() => {
                  //Scroll to bottom of characters div
                  const showGroupId = Math.floor(Math.random() * 100000)
                  setDance(Dance.fromBlank(dance.name, [...dance.characters, ShowGroup.fromBlank("Show Group 1", [],showGroupId, 0)],dance.danceId, dance.lastUpdated))
                    //get last child of characters div and scroll to it
                    setTimeout(() => {
                        const element = document.getElementById("characters-"+id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("dance-tile-" + dance.danceId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Show Group</button>
                <br />
                { hasEnsemble &&
                    <button className={"AddEnsembleBtn " + (addedEnsemble ? "disabled" : "")} disabled={addedEnsemble} onClick={() => {
                    if(addedEnsemble)
                        return
                    setAddedEnsemble(true)
                    //Scroll to bottom
                    setTimeout(() => {
                        const element = document.getElementById("characters-" + id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("dance-tile-" + dance.danceId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                    setDance(Dance.fromBlank(dance.name, [...dance.characters, EnsembleSection.fromBlank(true, false, false,false, [],0)],dance.danceId, dance.lastUpdated))
                }}>
                Add Ensemble
                </button>}
                 </div>
          
        </div>
    )
}

export default DanceTile