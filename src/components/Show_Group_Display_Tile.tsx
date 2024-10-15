import {  Character, EnsembleSection, ShowGroupDisplayTileProps } from "../constants"
import "./Show_Group_Display_Tile.css"
import TrashIcon from "../assets/trash.png"


import { useEffect, useState } from "react"
import EnsembleSectionDisplayTile from "./Ensemble_Section_Display_Tile"
import CharacterDisplayTile from "./Character_Display_Tile"

function ShowGroupDisplayTile({showGroup, onDelete, canDelete } :ShowGroupDisplayTileProps){

    const [id, setId] = useState(0)

    useEffect(() => {
        //Generate a unique id for the show group
        setId(Math.floor(Math.random() * 100000))
    }, [])
    return (
        <div className={"ShowGroupDisplayTile"} id={"show-group-tile-" + showGroup.showGroupId}>
            <div className="header">
                <div className="ShowGroupNameDiv">
                    <label htmlFor="ShowGroup">Show Group: {showGroup.name}</label>
                   
                </div>
                {canDelete && <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        onDelete()
                    }}/>
                </div>}
            </div>
           <br />
           <div className="characters-section">
                <label htmlFor="Characters">Characters: </label>
                <div className="characters" id={"characters-" + id}>


                {showGroup.characters.map((character, index) => {
                    if(character instanceof Character )
                        return <CharacterDisplayTile key={index} character={character} canDelete={false} onDelete={() => {}} isMini={true}/>
                    else if(character instanceof EnsembleSection)
                        return <EnsembleSectionDisplayTile key={index} ensembleSection={character} canDelete={false} onDelete={() => {}} isMini={true}/>
                
                    })}
                </div>

                
                    </div>


           
            
          
        </div>
    )
}

export default ShowGroupDisplayTile