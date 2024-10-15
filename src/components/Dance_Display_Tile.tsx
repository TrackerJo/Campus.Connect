import { useEffect, useState } from "react"
import { DanceDisplayTileProps } from "../constants"


import "./Dance_Display_Tile.css"



function DanceDisplayTile({dance, onClick} :DanceDisplayTileProps){
   



   
    return (
        <div className={"DanceDisplayTile" } id={"dance-tile-" + dance.danceId} onClick={onClick}>
            <div className="header" >
                <div className="DanceNameDiv">
                    <label htmlFor="Dance">{dance.name}</label>
                   
                </div>
            </div>
            <br />
            
          
        </div>
    )
}

export default DanceDisplayTile