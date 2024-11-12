import { useEffect, useState } from "react"
import { Character, EnsembleSection, FullCast, Scene, ShowGroup, Song, SongTileProps } from "../constants"
import CharacterTile from "./Character_Tile"
import EnsembleSectionTile from "./Ensemble_Section_Tile"
import "./Song_Tile.css"
import ShowGroupTile from "./Show_Group_Tile"
import TrashIcon from "../assets/trash.png"
import FullCastTile from "./Full_Cast_Tile"

function SongTile({song, setSong, isCreate, removeSong, isAssign, characters, showGroups, hasEnsemble} :SongTileProps){
    const [addedEnsemble, setAddedEnsemble] = useState(false)
    const [addedFullCast, setAddedFullCast] = useState(false)
    const [id, setId] = useState(0)

    useEffect(() => {
        //Generate a unique id for the song
        setId(Math.floor(Math.random() * 100000))
    }, [])

    return (
        <div className="SongTile" id={"song-tile-" + song.songId}>
            <div className="header">
                <div className="SongNameDiv">
                    <label htmlFor="Scene">Song Name: </label>
                    <input type="text" name="" id="" value={song.name} onChange={(val) => {
                        setSong(Song.fromBlank(val.target.value, song.characters, song.songId,song.lastUpdated))
                    
                    }}/>
                </div>
               
                <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        removeSong()
                    }}/>
                </div>
            </div>
            <br />
            <div>
                <label htmlFor="Characters">Characters: </label>
                <div className="song-characters" id={"characters-"+id}>


                {song.characters.map((character, index) => {
                    if(character instanceof Character)
                        return <CharacterTile key={index} character={character} isCreate={isCreate} actors={[]} characters={characters} isAssign={isAssign} setCharacter={(newCharacter) => {
                            setSong(Song.fromBlank(song.name, song.characters.map((c, i) => {
                                if (i === index) {
                                    return newCharacter
                                }
                                return c
                            }), song.songId,song.lastUpdated))
                        }} removeCharacter={() => {
                            setSong(Song.fromBlank(song.name, song.characters.filter((c, i) => i !== index),song.songId, song.lastUpdated))
                        }}/>
                    else if(character instanceof EnsembleSection)
                        return <EnsembleSectionTile key={index} isGroupChatCreate={false} onAddEnsemble={() => {}} ensembleSection={character} isAssign={isAssign} actors={[]} isCustom={false} isCreate={isCreate} setEnsembleSection={(newEnsembleSection) => {
                            setSong(Song.fromBlank(song.name, song.characters.map((c, i) => {
                                if (i === index) {
                                    return newEnsembleSection
                                }
                                return c
                            }),song.songId, song.lastUpdated))
                    

                            
                }} removeEnsembleSection={() => {
                        setAddedEnsemble(false)
                        setSong(Song.fromBlank(song.name, song.characters.filter((c, i) => i !== index),song.songId, song.lastUpdated))
                }}/>
                else if(character instanceof ShowGroup)
                    return <ShowGroupTile key={index} showGroup={character} hasEnsemble={hasEnsemble} actors={[]} characters={characters} isCreate={isCreate} isAssign={isAssign} showGroups={showGroups} setShowGroup={(newShowGroup) => {
                        setSong(Song.fromBlank(song.name, song.characters.map((c, i) => {
                            if (i === index) {
                                return newShowGroup
                            }
                            return c
                        }),song.songId, song.lastUpdated))
                    }
                    } removeShowGroup={() => {
                        setSong(Song.fromBlank(song.name, song.characters.filter((c, i) => i !== index),song.songId, song.lastUpdated))
                    }}/>
                    else if(character instanceof FullCast)
                        return <FullCastTile key={index} canDelete={true} onDelete={() => {
                            setAddedFullCast(false)
                            setSong(Song.fromBlank(song.name, song.characters.filter((c, i) => i !== index), song.songId,song.lastUpdated))
                        }}/>
                    })}
                </div>
                <br />
                 <button className={"ActionBtn " + (addedFullCast ? "disabled" : "")} disabled={addedFullCast} onClick={() => {
                    const characterId = Math.floor(Math.random() * 100000)
                      setSong(Song.fromBlank(song.name, [...song.characters, Character.fromBlank("Character 1", null, characterId ,0)],song.songId, song.lastUpdated))
                      setTimeout(() => {
                        const element = document.getElementById("characters-" + id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("song-tile-" + song.songId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center",inline: "center"})
                    },100)
                }}>Add Character</button>
                 <br />
                <button className={"ActionBtn " + (addedFullCast ? "disabled" : "")} disabled={addedFullCast} onClick={() => {
                  //Scroll to bottom of characters div
                  const showGroupId = Math.floor(Math.random() * 100000)
                  setSong(Song.fromBlank(song.name, [...song.characters, ShowGroup.fromBlank("Show Group 1", [],showGroupId, 0)],song.songId, song.lastUpdated))
                    //get last child of characters div and scroll to it
                    setTimeout(() => {
                        const element = document.getElementById("characters-"+id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("song-tile-" + song.songId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center",inline: "center"})
                    },100)
                }}>Add Show Group</button>
                <br />
                <button className={"ActionBtn " + (addedFullCast ? "disabled" : "")} disabled={addedFullCast} onClick={() => {
                    setAddedFullCast(true)
                    setSong(Song.fromBlank(song.name, [...song.characters, new FullCast()],song.songId, song.lastUpdated))
                    //Scroll to bottom
                    setTimeout(() => {
                        const element = document.getElementById("characters"+id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("song-tile-" + song.songId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)

                }}>Add Full Cast</button>
                <br />
                { hasEnsemble &&
                    <button className={"ActionBtn " + ((addedEnsemble || addedFullCast) ? "disabled" : "")} disabled={addedEnsemble || addedFullCast} onClick={() => {
                    if(addedEnsemble)
                        return
                    setAddedEnsemble(true)
                    //Scroll to bottom
                    setTimeout(() => {
                        const element = document.getElementById("characters-" + id)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("song-tile-" + song.songId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                    setSong(Song.fromBlank(song.name, [...song.characters, EnsembleSection.fromBlank(true, false, false,false, [],0)],song.songId, song.lastUpdated))
                }}>
                Add Ensemble
                </button>}
                 </div>
          
        </div>
    )
}

export default SongTile