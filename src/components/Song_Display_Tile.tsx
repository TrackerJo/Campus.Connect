
import { Character, EnsembleSection, FullCast, ShowGroup, SongDisplayTileProps } from "../constants"
import CharacterDisplayTile from "./Character_Display_Tile"
import EnsembleSectionDisplayTile from "./Ensemble_Section_Display_Tile"
import FullCastTile from "./Full_Cast_Tile"
import ShowGroupDisplayTile from "./Show_Group_Display_Tile"


import "./Song_Display_Tile.css"



function SongDisplayTile({song, onClick, showCharacters} :SongDisplayTileProps){
    



   
    return (
        <div className={"SongDisplayTile"} id={"song-tile-" + song.songId} onClick={onClick} >
            <div className="header" >
                <div className="SongNameDiv">
                    <label htmlFor="Song">{song.name}</label>
                   
                </div>
            </div>
            <br />
            {showCharacters && <div className="song-characters">
                {song.characters.map((character, index) => {
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

export default SongDisplayTile