import { useEffect, useState } from "react"
import { Character, EnsembleSection, FullCast, Scene, SceneTileProps, ShowGroup } from "../constants"
import CharacterTile from "./Character_Tile"
import EnsembleSectionTile from "./Ensemble_Section_Tile"
import "./Scene_Tile.css"
import ShowGroupTile from "./Show_Group_Tile"
import TrashIcon from "../assets/trash.png"
import FullCastTile from "./Full_Cast_Tile"

function SceneTile({scene, setScene, isCreate, removeScene, isAssign, characters, showGroups, hasEnsemble} :SceneTileProps){
    const [addedEnsemble, setAddedEnsemble] = useState(false)
    const [addedFullCast, setAddedFullCast] = useState(false)
    const [id, setId] = useState(0)

    useEffect(() => {
        //Generate a unique id for the song
        setId(Math.floor(Math.random() * 100000))
    }, [])
    return (
        <div className="SceneTile" id={"scene-tile-" + scene.sceneId}>
            <div className="header" >
                <div className="SceneNameDiv">
                    <label htmlFor="Scene">Scene Name: </label>
                    <input type="text" name="" id="" value={scene.name} onChange={(val) => {
                        setScene(Scene.fromBlank(val.target.value, scene.characters, scene.sceneId,scene.lastUpdated))
                    
                    }}/>
                </div>
               
                <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        removeScene()
                    }}/>
                </div>
            </div>
            <br />
            <div>
                <label htmlFor="Characters">Characters: </label>
                <div className="scene-characters" id={"characters-" + id}>


                {scene.characters.map((character, index) => {
                    if(character instanceof Character)
                        return <CharacterTile key={index} character={character} isCreate={isCreate} actors={[]} characters={characters} isAssign={isAssign} setCharacter={(newCharacter) => {
                            setScene(Scene.fromBlank(scene.name, scene.characters.map((c, i) => {
                                if (i === index) {
                                    return newCharacter
                                }
                                return c
                            }), scene.sceneId, scene.lastUpdated))
                        }} removeCharacter={() => {
                            setScene(Scene.fromBlank(scene.name, scene.characters.filter((c, i) => i !== index), scene.sceneId,scene.lastUpdated))
                        }}/>
                    else if(character instanceof EnsembleSection)
                        return <EnsembleSectionTile key={index} isGroupChatCreate={false} onAddEnsemble={() => {}} ensembleSection={character} isCustom={false} isCreate={isCreate} isAssign={isAssign} actors={[]} setEnsembleSection={(newEnsembleSection) => {
                            setScene(Scene.fromBlank(scene.name, scene.characters.map((c, i) => {
                                if (i === index) {
                                    return newEnsembleSection
                                }
                                return c
                            }),scene.sceneId, scene.lastUpdated))
                    

                            
                    }} removeEnsembleSection={() => {
                            setAddedEnsemble(false)
                            setScene(Scene.fromBlank(scene.name, scene.characters.filter((c, i) => i !== index),scene.sceneId, scene.lastUpdated))
                    }}/>
                    else if(character instanceof ShowGroup)
                        return <ShowGroupTile key={index} showGroup={character} isCreate={isCreate} isAssign={isAssign} characters={characters} actors={[]} hasEnsemble={hasEnsemble} showGroups={showGroups} setShowGroup={(newShowGroup) => {
                            setScene(Scene.fromBlank(scene.name, scene.characters.map((c, i) => {
                                if (i === index) {
                                    return newShowGroup
                                }
                                return c
                            }),scene.sceneId, scene.lastUpdated))
                        }
                        } removeShowGroup={() => {
                            setScene(Scene.fromBlank(scene.name, scene.characters.filter((c, i) => i !== index), scene.sceneId,scene.lastUpdated))
                        }}/>
                    else if(character instanceof FullCast)
                        return <FullCastTile key={index} canDelete={true} onDelete={() => {
                            setAddedFullCast(false)
                            setScene(Scene.fromBlank(scene.name, scene.characters.filter((c, i) => i !== index), scene.sceneId,scene.lastUpdated))
                        }}/>
                    })}
                </div>
                <br />
                 <button className={"ActionBtn " + (addedFullCast ? "disabled" : "")} disabled={addedFullCast} onClick={() => {
                    const characterId = Math.floor(Math.random() * 100000)
                      setScene(Scene.fromBlank(scene.name, [...scene.characters, Character.fromBlank("Character 1", null,characterId ,0)],scene.sceneId, scene.lastUpdated))
                      setTimeout(() => {
                        const element = document.getElementById("characters-" + id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("scene-tile-" + scene.sceneId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Character</button>
                 <br />
                <button className={"ActionBtn " + (addedFullCast ? "disabled" : "")} disabled={addedFullCast} onClick={() => {
                  //Scroll to bottom of characters div
                  const showGroupId = Math.floor(Math.random() * 100000)
                    setScene(Scene.fromBlank(scene.name, [...scene.characters, ShowGroup.fromBlank("Show Group 1",[],showGroupId, 0)],scene.sceneId, scene.lastUpdated))
                    //get last child of characters div and scroll to it
                    setTimeout(() => {
                        const element = document.getElementById("characters-" + id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("scene-tile-" + scene.sceneId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Show Group</button>
                <br />
                { hasEnsemble &&
                 <button className={"ActionBtn " + (addedEnsemble || addedFullCast ? "disabled" : "")} disabled={addedEnsemble || addedFullCast} onClick={() => {
                        if(addedEnsemble)
                            return
                        setAddedEnsemble(true)
                        //Scroll to bottom
                        setTimeout(() => {
                            const element = document.getElementById("characters-" + id)!;
                            element.scrollTop = element.scrollHeight;
                            const element2 = document.getElementById("scene-tile-" + scene.sceneId)!;
                            element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                        },100)
                        setScene(Scene.fromBlank(scene.name, [...scene.characters, EnsembleSection.fromBlank(true, false, false,false,[] ,0)], scene.sceneId,scene.lastUpdated))
                 }}>
                    Add Ensemble
                 </button>}
                 {hasEnsemble && <br />}
                 <button className={"ActionBtn " + (addedFullCast ? "disabled" : "")} disabled={addedFullCast} onClick={() => {
                        if(addedFullCast)
                            return
                        setAddedFullCast(true)
                        //Scroll to bottom
                        setTimeout(() => {
                            const element = document.getElementById("characters-" + id)!;
                            element.scrollTop = element.scrollHeight;
                            const element2 = document.getElementById("scene-tile-" + scene.sceneId)!;
                            element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                        },100)
                        setScene(Scene.fromBlank(scene.name, [...scene.characters, new FullCast()], scene.sceneId,scene.lastUpdated))
                 }}>
                    Add Full Cast
                 </button>
                 </div>
          
        </div>
    )
}

export default SceneTile