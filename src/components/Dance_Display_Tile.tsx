import { useEffect, useState } from "react"
import { Character, DanceDisplayTileProps, EnsembleSection, FullCast, ShowGroup } from "../constants"


import "./Dance_Display_Tile.css"
import CharacterDisplayTile from "./Character_Display_Tile"
import EnsembleSectionDisplayTile from "./Ensemble_Section_Display_Tile"
import FullCastTile from "./Full_Cast_Tile"
import ShowGroupDisplayTile from "./Show_Group_Display_Tile"



function DanceDisplayTile({dance, onClick,showCharacters} :DanceDisplayTileProps){
   



   
    return (
        <div className={"DanceDisplayTile" } id={"dance-tile-" + dance.danceId} onClick={onClick}>
            <div className="header" >
                <div className="DanceNameDiv">
                    <label htmlFor="Dance">{dance.name}</label>
                   
                </div>
            </div>
            <br />
            {showCharacters && <div className="song-characters">
                {dance.characters.map((character, index) => {
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

export default DanceDisplayTile