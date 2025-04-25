import { ActDisplayTileProps } from "../constants"
import "./Act_Display_Tile.css"


import { useEffect, useState } from "react"
import SceneDisplayTile from "./Scene_Display_Tile"

function ActDisplayTile({act, onClick} :ActDisplayTileProps){
    const [id, setId] = useState(0)

    useEffect(() => {
        //Generate a unique id for the song
        setId(Math.floor(Math.random() * 100000))
    }, [])
    return (
        <div className="ActDisplayTile" id={"act-tile-" + act.actId}>
            <div className="header">
                <div className="ActNameDiv">
                    <label htmlFor="Act">{act.name}</label>
                    
                </div>
                
                
            </div>
            <br />
            <div>
                <label htmlFor="Scene">Scenes: </label>
                <div id={"scenes-" + id} className="scenes">

                    {act.scenes.map((scene, index) => {
                        return <SceneDisplayTile key={index}  scene={scene} showCharacters={false} onClick={onClick} />


                    } )}
                </div>

                
            </div>
          
        </div>
    )
}

export default ActDisplayTile