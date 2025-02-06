import { useEffect, useState } from "react"
import { Character, Dance, DanceTileProps, EnsembleSection, FullCast, ShowGroup } from "../constants"
import CharacterTile from "./Character_Tile"
import EnsembleSectionTile from "./Ensemble_Section_Tile"
import "./Dance_Tile.css"
import ShowGroupTile from "./Show_Group_Tile"
import TrashIcon from "../assets/trash.png"
import FullCastTile from "./Full_Cast_Tile"

function DanceTile({dance, setDance, isCreate, removeDance, isAssign, characters, showGroups, hasEnsemble} :DanceTileProps){
    const [addedEnsemble, setAddedEnsemble] = useState(false)
    const [addedFullCast, setAddedFullCast] = useState(false)
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
                        setDance(Dance.fromBlank(val.target.value, dance.characters,dance.danceId))
                    
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
                            }),dance.danceId))
                        }} removeCharacter={() => {
                            setDance(Dance.fromBlank(dance.name, dance.characters.filter((c, i) => i !== index), dance.danceId))
                        }}/>
                    else if(character instanceof EnsembleSection)
                        return <EnsembleSectionTile key={index} isGroupChatCreate={false} onAddEnsemble={() => {}} isAssign={false}  ensembleSection={character} isCustom={false} isCreate={isCreate} actors={[]} setEnsembleSection={(newEnsembleSection) => {
                            setDance(Dance.fromBlank(dance.name, dance.characters.map((c, i) => {
                                if (i === index) {
                                    return newEnsembleSection
                                }
                                return c
                            }),dance.danceId))
                    

                            
                }} removeEnsembleSection={() => {
                        setAddedEnsemble(false)
                        setDance(Dance.fromBlank(dance.name, dance.characters.filter((c, i) => i !== index),dance.danceId))
                }}/>
                else if(character instanceof ShowGroup)
                    return <ShowGroupTile key={index} showGroup={character} hasEnsemble={hasEnsemble} characters={characters} actors={[]} isCreate={isCreate} isAssign={isAssign} showGroups={showGroups} setShowGroup={(newShowGroup) => {
                        setDance(Dance.fromBlank(dance.name, dance.characters.map((c, i) => {
                            if (i === index) {
                                return newShowGroup
                            }
                            return c
                        }),dance.danceId))
                    }
                    } removeShowGroup={() => {
                        setDance(Dance.fromBlank(dance.name, dance.characters.filter((c, i) => i !== index),dance.danceId))
                    }}/>
                else if (character instanceof FullCast)
                    return <FullCastTile key={index} canDelete={true} onDelete={() => {
                        setDance(Dance.fromBlank(dance.name, dance.characters.filter((c, i) => i !== index),dance.danceId))
                        setAddedFullCast(false)
                    }}/>
                    })}
                </div>
                <br />
                 <button className={"ActionBtn " + (addedFullCast ? "disabled" : "")} disabled={addedFullCast} onClick={() => {
                    const characterId = Math.floor(Math.random() * 100000)
                      setDance(Dance.fromBlank(dance.name, [...dance.characters, Character.fromBlank("", null,characterId )],dance.danceId))
                      setTimeout(() => {
                        const element = document.getElementById("characters-" + id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("dance-tile-" + dance.danceId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center",inline: "center"})
                    },100)
                }}>Add Character</button>
                 <br />
                <button className={"ActionBtn " + (addedFullCast ? "disabled" : "")} disabled={addedFullCast} onClick={() => {
                  //Scroll to bottom of characters div
                  const showGroupId = Math.floor(Math.random() * 100000)
                  setDance(Dance.fromBlank(dance.name, [...dance.characters, ShowGroup.fromBlank("", [],showGroupId)],dance.danceId))
                    //get last child of characters div and scroll to it
                    setTimeout(() => {
                        const element = document.getElementById("characters-"+id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("dance-tile-" + dance.danceId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Show Group</button>
                <br />
                <button className={"ActionBtn " + (addedFullCast ? "disabled" : "")} disabled={addedFullCast} onClick={() => {
                    //Scroll to bottom of characters div

                    setAddedFullCast(true)
                    setDance(Dance.fromBlank(dance.name, [...dance.characters, new FullCast()],dance.danceId))
                    //get last child of characters div and scroll to it
                    setTimeout(() => {
                        const element = document.getElementById("characters-"+id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("dance-tile-" + dance.danceId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Full Cast</button>

                <br />
                { hasEnsemble &&
                    <button className={"ActionBtn " + ((addedEnsemble || addedFullCast) ? "disabled" : "")} disabled={addedEnsemble || addedFullCast} onClick={() => {
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
                    setDance(Dance.fromBlank(dance.name, [...dance.characters, EnsembleSection.fromBlank(true, false, false,false, [])],dance.danceId))
                }}>
                Add Ensemble
                </button>}
                 </div>
          
        </div>
    )
}

export default DanceTile