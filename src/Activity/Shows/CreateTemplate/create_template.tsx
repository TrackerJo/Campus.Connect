import {  StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './create_template.css'




import { Act, Character, Dance, Ensemble, Show, ShowGroup, Song } from '../../../constants'
import ActTile from '../../../components/Act_Tile'
import CharacterTile from '../../../components/Character_Tile'
import ShowGroupTile from '../../../components/Show_Group_Tile'
import SongTile from '../../../components/Song_Tile'
import {addShowTemplate, createShow, editShow} from '../../../api/db'
import DanceTile from '../../../components/Dance_Tile'
import { isLoggedIn } from '../../../api/auth'




function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [layout, setLayout] = useState<Act[]>([

    ])
    const [characters, setCharacters] = useState<Character[]>([])
    const [showGroups, setShowGroups] = useState<ShowGroup[]>([])
    const [songs, setSongs] = useState<Song[]>([])
    const [dances, setDances] = useState<Dance[]>([])
    const [showName, setShowName] = useState<string>("")
    const [hasEnsemble, setHasEnsemble] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [showId, setShowId] = useState<string>("")



    useEffect(() => {
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
        }
        const isEditing = urlParams.get('isEditing')
        if (isEditing) {
            setIsEditing(true)
            const show = Show.fromMap(JSON.parse(localStorage.getItem('show')!))
            setShowName(show.name)
            setHasEnsemble(show.hasEnsemble)
            setCharacters(show.characters)
            setShowGroups(show.showGroups)
            setLayout(show.layout)
            setSongs(show.songs)
            setDances(show.dances)
            setShowId(show.id)


        }
       

    }, [])



    return (
        <>
        <div className='title'>
            <h1>
                Create Show Template
            </h1>
          
        </div>
        <div className='center'>
            <div className='form-question'>
                <label htmlFor="name">Show Name: </label>
                <input type="text" id="name" value={showName} onChange={(e) => setShowName(e.target.value)} />
            </div>
            <div className='form-question'>
                <label htmlFor="ensemble">Has Ensemble: </label>
                <label className="custom-checkbox">
                    <input type="checkbox" id="ensemble" checked={hasEnsemble} onChange={(e) => setHasEnsemble(e.target.checked)} />
                    <span className="checkmark"></span>
                </label>
                
            </div>
            <h2>Create Characters</h2>
            <div className='characters' id='create-characters'>
                {characters.map((character, index) => {
                    return <CharacterTile key={index} actors={[]} character={character} characters={[]} isAssign={false} setCharacter={(newCharacter) => {
                        setCharacters((prev) => {
                            const newCharacters = [...prev]
                            newCharacters[index] = newCharacter
                            return newCharacters
                        })
                    }} removeCharacter={() => {
                        setCharacters(characters.filter((c, i) => i !== index))
                    }} isCreate={true}/>
                })}
                
            </div>
            <button className='ActionBtn' onClick={() => {
                const characterId = Date.now()
                    setCharacters([...characters, Character.fromBlank("", null,characterId, 0)])
                    //Scroll to bottom
                    setTimeout(() => {
                        const element = document.getElementById("create-characters")!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("character-tile-" + characterId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Character</button>
            <h2>Create Show Groups</h2>
            <div className='showGroups' id='create-showGroups'>
                {showGroups.map((showGroup, index) => {
                    return <ShowGroupTile key={index} showGroup={showGroup} showGroups={[]} actors={[]} hasEnsemble={hasEnsemble} characters={characters} isAssign={false} setShowGroup={(newShowGroup) => {
                        setShowGroups((prev) => {
                            const newShowGroups = [...prev]
                            newShowGroups[index] = newShowGroup
                            return newShowGroups
                        })
                    }} removeShowGroup={() => {
                        setShowGroups(showGroups.filter((sg, i) => i !== index))
                    }} isCreate={true}/>
                })}
               
            </div>
            <button className='ActionBtn' onClick={() => {
                const showGroupId = Math.floor(Math.random() * 100000)
                    setShowGroups([...showGroups, ShowGroup.fromBlank("", [],showGroupId, 0)])
                      //Scroll to bottom
                      setTimeout(() => {
                        const element = document.getElementById("create-showGroups")!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("show-group-tile-" + showGroupId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Show Group</button>
            <h2>Create Layout</h2>
            <div className='layout'>
                {layout.map((act, index) => {
                    return <ActTile key={index} hasEnsemble={hasEnsemble} act={act} characters={characters} showGroups={showGroups} isAssign={false} setAct={(newAct) => {
                       setLayout((prev) => {
                           const newLayout = [...prev]  
                           newLayout[index] = newAct
                           return newLayout
                    })
                    }} isCreate={false} removeAct={() => {
                        setLayout(layout.filter((a, i) => i !== index))
                    }}/>
                })}
                {/* <br /> */}
                <button className='ActionBtn' onClick={() => {
                    //Randomly generate act id
                    const actId =  Date.now()
                    setLayout([...layout, Act.fromBlank("Act " + (layout.length + 1), [], actId, 0)])
                    //Scroll into view
                    setTimeout(() => {
                        const element = document.getElementById("act-tile-" + actId)!;
                        element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Act</button>
            </div>
            <h2>Create Songs</h2>
            <div className='songs'>
                {songs.map((song, index) => {
                    return <SongTile key={index} song={song} hasEnsemble={hasEnsemble} characters={characters} showGroups={showGroups} isAssign={false} setSong={(newSong) => {
                        setSongs((prev) => {
                            const newSongs = [...prev]
                            newSongs[index] = newSong
                            return newSongs
                        })
                    }} removeSong={() => {
                        setSongs(songs.filter((s, i) => i !== index))
                    }} isCreate={false}/>
                })}
                
                <button className='ActionBtn' onClick={() => {
                    const songId =Date.now()
                    setSongs([...songs, Song.fromBlank("Song " + (songs.length + 1),[],songId ,0)])
                    //Scroll into view
                    setTimeout(() => {
                        const element = document.getElementById("song-tile-" + songId)!;
                        element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Song</button>

            </div>
            <h2>Create Dances</h2>
            <div className='dances'>
                {dances.map((dance, index) => {
                    return <DanceTile key={index} dance={dance} hasEnsemble={hasEnsemble} characters={characters} showGroups={showGroups} isAssign={false} setDance={(newDance) => {
                        setDances((prev) => {
                            const newDances = [...prev]
                            newDances[index] = newDance
                            return newDances
                        })
                    }} removeDance={() => {
                        setDances(dances.filter((s, i) => i !== index))
                    }} isCreate={false}/>
                })}
                
                <button className='ActionBtn' onClick={() => {
                    const danceId =Date.now()
                    setDances([...dances, Dance.fromBlank("Dance " + (dances.length + 1),[],danceId ,0)])
                    //Scroll into view
                    setTimeout(() => {
                        const element = document.getElementById("dance-tile-" + danceId)!;
                        element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Dance</button>

            </div>
           {isLoading ? <div className="loader"></div> : <button className='ActionBtn' onClick={async () => {
                //Create show template\
                setIsLoading(true)
                const show = Show.fromBlank(showName, showId,activityId,layout, characters ,hasEnsemble ? Ensemble.fromBlank([], Date.now()) : null, showGroups, songs,dances,false,hasEnsemble,null,[],"open", Date.now() )
                console.log(show.toMap())
               let id = showId
                if(!isEditing) {
                    await addShowTemplate(show)
                    id = await createShow(show)
                } else {
                    await editShow(show)
                    localStorage.removeItem('show')
                }

                window.location.href = `/Activity/Shows/Show/?activityId=${activityId}&showId=${id}`
                setIsLoading(false)
            }}>
                {isEditing ? "Save Show Template" : "Create Show Template"}
            </button>
}
            <button className='ActionBtn' onClick={() => {
                window.location.href = `/Activity/Shows/Add/?activityId=${activityId}`
            }}>
                Back
            </button>
        </div>

        
        
        </>
    )
}

export default App
