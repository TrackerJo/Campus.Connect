import { useEffect, useState } from "react"
import { Character, EnsembleSection, FullCast, SceneDisplayTileProps, ShowGroup } from "../constants"


import "./Scene_Display_Tile.css"
import { type } from "os"
import activity from "../Activity/activity"
import show from "../Activity/Shows/Show/show"
import CharacterDisplayTile from "./Character_Display_Tile"
import CharacterTile from "./Character_Tile"
import EnsembleSectionDisplayTile from "./Ensemble_Section_Display_Tile"
import EnsembleSectionTile from "./Ensemble_Section_Tile"
import FullCastTile from "./Full_Cast_Tile"
import ShowGroupDisplayTile from "./Show_Group_Display_Tile"
import ShowGroupTile from "./Show_Group_Tile"



function SceneDisplayTile({scene, onClick, showCharacters} :SceneDisplayTileProps){
   



   
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
            {showCharacters && <div className="scene-characters">
                {scene.characters.map((character, index) => {
                        if(character instanceof Character){
                            
                            return <CharacterDisplayTile key={index} character={character} canDelete={false} onDelete={() => {

                            }} isMini={false}/>
                            }
                            if(character instanceof EnsembleSection){
                                
                                return <EnsembleSectionDisplayTile key={index} ensembleSection={character} canDelete={false} onDelete={() => {


                                }} isMini={false}/>
                            }
                            if(character instanceof ShowGroup){
                               
                                return <ShowGroupDisplayTile key={index} showGroup={character} showCharacters={true} canClick={false} onClick={() => {}} canDelete={false} onDelete={() => {
                                   
                                }}/>
                            }
                            if(character instanceof FullCast) {
                                return <FullCastTile key={index} canDelete={false} onDelete={() => {
                                   
                                }}/>
                            }

                }) }
                </div>} 
            
          
        </div>
    )
}

export default SceneDisplayTile