import { Actor, Character, CharacterTileProps } from "../constants"
import "./Character_Tile.css"
import TrashIcon from "../assets/trash.png"
import { LegacyRef, useRef } from "react"
import AssignActorDialog from "./Assign_Actor_Dialog"
function CharacterTile({character, setCharacter, isCreate, removeCharacter, isAssign, characters, actors} :CharacterTileProps){
    const dialogRef = useRef<HTMLDialogElement>(null)
    return (
        <div className="CharacterTile" id={"character-tile-" + character.characterId}>
            <div className="header">
                <div className="CharacterNameDiv">
                    <label htmlFor="Character">Character:  {isAssign ? character.name: ""}</label>
                    {isCreate ?
                    <input type="text" name="" id="" value={character.name} onChange={(val) => {
                        setCharacter(Character.fromBlank(val.target.value, character.actor,character.characterId,character.lastUpdated))
                    }}/>: isAssign ? 
                    <>
                        <br />
                        <div className="CharacterActorDiv">
                            {character.actor != null ? <>
                                <label htmlFor="Actor">Actor: {character.actor.name}</label>
                                <button className="ActionBtn" onClick={() => {
                                    dialogRef.current?.showModal()
                                }}>
                                    Edit Actor
                                </button>
                                </> : <>
                                <button className="ActionBtn" onClick={() => {
                                    dialogRef.current?.showModal()
                                }}>
                                    Assign Actor
                                </button>
                                </>
                            }
                        </div>
                       
                    </>
                    :
                    //Dropdown for selecting existing characters
                    <select name="characters" id="characters" onChange={(val) => {
                        if(val.target.value == "null") return
                        setCharacter(characters.find((e) => e.name == val.target.value)!)
                    }}>
                        <option value={"null"}>Select a character</option>
                        {characters.map((c, index) => {
                            return <option value={c.name} key={index}>{c.name}</option>
                        })}
                        </select>
                    }

                    </div>
                    

                <div>
                <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                    removeCharacter()
                }}/>
            </div>
                
            </div>
            
           
            
          <AssignActorDialog actor={character.actor ?? new Actor()}  actors={actors} keepPastResult={false} addedActors={[]} setActor={(actor) => {
                dialogRef.current?.close()
                setCharacter(Character.fromBlank(character.name, actor, character.characterId, character.lastUpdated))
          }} dialogRef={dialogRef as LegacyRef<HTMLDialogElement>} close={() => {
                dialogRef.current?.close()
          }} />
        </div>
    )
}

export default CharacterTile