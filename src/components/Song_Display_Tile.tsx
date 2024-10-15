
import { SongDisplayTileProps } from "../constants"


import "./Song_Display_Tile.css"



function SongDisplayTile({song, onClick} :SongDisplayTileProps){
    



   
    return (
        <div className={"SongDisplayTile"} id={"song-tile-" + song.songId} onClick={onClick} >
            <div className="header" >
                <div className="SongNameDiv">
                    <label htmlFor="Song">{song.name}</label>
                   
                </div>
            </div>
            <br />
            
          
        </div>
    )
}

export default SongDisplayTile