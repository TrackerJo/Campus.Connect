import { useEffect, useState } from "react"
import { Character, EnsembleSection, FullCast, Scene, SceneTileProps, ShowGroup } from "../constants"
import CharacterTile from "./Character_Tile"
import EnsembleSectionTile from "./Ensemble_Section_Tile"
import "./Scene_Tile.css"
import ShowGroupTile from "./Show_Group_Tile"
import TrashIcon from "../assets/trash.png"
import FullCastTile from "./Full_Cast_Tile"
import UpIcon from "../assets/up.png"
import DownIcon from "../assets/down.png"
import UpGreyIcon from "../assets/up_grey.png"
import DownGreyIcon from "../assets/down_grey.png"

function SceneTile({scene, setScene, isCreate, removeScene, isAssign, characters, showGroups, hasEnsemble, canMoveUp, canMoveDown, moveUp, moveDown} :SceneTileProps){
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
                        setScene(Scene.fromBlank(val.target.value, scene.characters, scene.sceneId))
                    
                    }}/>
                </div>
               
                <div className="SceneActions">
                <img src={canMoveUp ? UpIcon : UpGreyIcon} alt="" className={"UpIcon " + (canMoveUp ? "" : "disabled")} onClick={()=> {
                        if(canMoveUp){
                            moveUp()
                        }
                    }}/>
                    <img src={canMoveDown ? DownIcon : DownGreyIcon} alt=""className={"DownIcon " + (canMoveDown ? "" : "disabled")} onClick={() => {
                        if(canMoveDown){
                            moveDown()
                        }
                    }} />
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
                            }), scene.sceneId))
                        }} removeCharacter={() => {
                            setScene(Scene.fromBlank(scene.name, scene.characters.filter((c, i) => i !== index), scene.sceneId))
                        }}/>
                    else if(character instanceof EnsembleSection)
                        return <EnsembleSectionTile key={index} isGroupChatCreate={false} onAddEnsemble={() => {}} ensembleSection={character} isCustom={false} isCreate={isCreate} isAssign={isAssign} actors={[]} setEnsembleSection={(newEnsembleSection) => {
                            setScene(Scene.fromBlank(scene.name, scene.characters.map((c, i) => {
                                if (i === index) {
                                    return newEnsembleSection
                                }
                                return c
                            }),scene.sceneId))
                    

                            
                    }} removeEnsembleSection={() => {
                            setAddedEnsemble(false)
                            setScene(Scene.fromBlank(scene.name, scene.characters.filter((c, i) => i !== index),scene.sceneId))
                    }}/>
                    else if(character instanceof ShowGroup)
                        return <ShowGroupTile key={index} showGroup={character} isCreate={isCreate} isAssign={isAssign} characters={characters} actors={[]} hasEnsemble={hasEnsemble} showGroups={showGroups} setShowGroup={(newShowGroup) => {
                            setScene(Scene.fromBlank(scene.name, scene.characters.map((c, i) => {
                                if (i === index) {
                                    return newShowGroup
                                }
                                return c
                            }),scene.sceneId))
                        }
                        } removeShowGroup={() => {
                            setScene(Scene.fromBlank(scene.name, scene.characters.filter((c, i) => i !== index), scene.sceneId))
                        }}/>
                    else if(character instanceof FullCast)
                        return <FullCastTile key={index} canDelete={true} onDelete={() => {
                            setAddedFullCast(false)
                            setScene(Scene.fromBlank(scene.name, scene.characters.filter((c, i) => i !== index), scene.sceneId))
                        }}/>
                    })}
                </div>
                <br />
                 <button className={"ActionBtn " + (addedFullCast ? "disabled" : "")} disabled={addedFullCast} onClick={() => {
                    const characterId = Math.floor(Math.random() * 100000)
                      setScene(Scene.fromBlank(scene.name, [...scene.characters, Character.fromBlank("", null,characterId )],scene.sceneId))
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
                    setScene(Scene.fromBlank(scene.name, [...scene.characters, ShowGroup.fromBlank("",[],showGroupId)],scene.sceneId))
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
                        setScene(Scene.fromBlank(scene.name, [...scene.characters, EnsembleSection.fromBlank(true, false, false,false,[])], scene.sceneId))
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
                        setScene(Scene.fromBlank(scene.name, [...scene.characters, new FullCast()], scene.sceneId))
                 }}>
                    Add Full Cast
                 </button>
                 </div>
          
        </div>
    )
}

export default SceneTile