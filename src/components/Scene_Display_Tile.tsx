import { useEffect, useState } from "react"
import { SceneDisplayTileProps } from "../constants"


import "./Scene_Display_Tile.css"



function SceneDisplayTile({scene, onClick} :SceneDisplayTileProps){
   



   
    return (
        <div className={"SceneDisplayTile"} id={"scene-tile-" + scene.sceneId} onClick={() => {
            onClick(scene)
        }} >
            <div className="header" >
                <div className="SceneNameDiv">
                    <label htmlFor="Scene">{scene.name}</label>
                   
                </div>
            </div>
            <br />
            
          
        </div>
    )
}

export default SceneDisplayTile