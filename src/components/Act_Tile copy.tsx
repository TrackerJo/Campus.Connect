import { Act, ActTileProps, Scene } from "../constants"
import "./Act_Tile.css"
import SceneTile from "./Scene_Tile"
import TrashIcon from "../assets/trash.png"
import { useEffect, useState } from "react"

function ActTile({act, setAct, isCreate, removeAct, isAssign, characters, showGroups, hasEnsemble, selectAct} :ActTileProps){
    const [id, setId] = useState(0)

    useEffect(() => {
        //Generate a unique id for the song
        setId(Math.floor(Math.random() * 100000))
    }, [])
    return (
        <div className="ActTile" id={"act-tile-" + act.actId} onClick={() => {
            selectAct(act)
        }}>
            <div className="header">
                <div className="ActNameDiv">
                    <label htmlFor="Act">Act Name: </label>
                    <input type="text" name="" id="" value={act.name} onChange={(val) => {
                        setAct(Act.fromBlank(val.target.value, act.scenes, act.actId))
                    }}/>
                </div>
                
                 <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        removeAct()
                    }}/>
                </div>
            </div>
            <br />
            <div>
                <label htmlFor="Scene">Scenes: </label>
                <div id={"scenes-" + id} className="scenes">

                    {act.scenes.map((scene, index) => {
                        return <SceneTile key={index} hasEnsemble={hasEnsemble} scene={scene} isCreate={isCreate} characters={characters} showGroups={showGroups} isAssign={isAssign} setScene={(newScene) => {
                            setAct(Act.fromBlank(act.name, act.scenes.map((s, i) => {
                                if (i === index) {
                                    return newScene
                                }
                                return s
                            }), act.actId))
                        }
                        } removeScene={() => {
                            setAct(Act.fromBlank(act.name, act.scenes.filter((s, i) => i !== index),act.actId ))
                        }}/>


                    } )}
                </div>

                {act.scenes.length == 0 && <br /> }
                <button className="ActionBtn" onClick={() => {
                    const sceneID: number = Date.now()
                    setAct(Act.fromBlank(act.name, [...act.scenes, Scene.fromBlank("Scene " + (act.scenes.length + 1), [],sceneID)],act.actId))
                    setTimeout(() => {
                        const element = document.getElementById("scenes-" + id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("scene-tile-" + sceneID)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                        const element3 = document.getElementById("act-tile-" + act.actId)!
                        element3.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
               }}>Add Scene</button>
            </div>
          
        </div>
    )
}

export default ActTile