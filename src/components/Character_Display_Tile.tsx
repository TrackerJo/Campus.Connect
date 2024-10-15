import { CharacterDisplayTileProps } from "../constants"
import "./Character_Display_Tile.css"
import TrashIcon from "../assets/trash.png"

function CharacterDisplayTile({character, canDelete, onDelete, isMini} :CharacterDisplayTileProps){
    return (
        <div className={"CharacterDisplayTile "+ (isMini ? "mini-tile" : "") } id={"character-tile-" + character.characterId}>
            <div className="header">
                <div className="CharacterNameDiv">
                    <label htmlFor="Character">Character: {character.name}</label>
                    <br />
                    <label htmlFor="Actor">Actor: {character.actor?.name}</label>

                 </div>
                    

               {canDelete && <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        onDelete()
                    }}/>
                </div>}
                
            </div>
            
           
            
       
        </div>
    )
}

export default CharacterDisplayTile