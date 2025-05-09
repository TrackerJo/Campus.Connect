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




import { Act, Character, Dance, Ensemble, Scene, Show, ShowGroup, Song } from '../../../constants'
import ActTile from '../../../components/Act_Tile'
import CharacterTile from '../../../components/Character_Tile'
import ShowGroupTile from '../../../components/Show_Group_Tile'
import SongTile from '../../../components/Song_Tile'
import {addShowTemplate, createShow, editShow, editShowEventsCharactersTemplate, editShowTemplate} from '../../../api/db'
import DanceTile from '../../../components/Dance_Tile'
import { isLoggedIn } from '../../../api/auth'
import { json } from 'stream/consumers'
import SceneTile from '../../../components/Scene_Tile'
import BackArrow from '../../../assets/back.png'




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
    const [hasCreatedSchedule, setHasCreatedSchedule] = useState<boolean>(false)
    const [showId, setShowId] = useState<string>("")
    const [templateId, setTemplateId] = useState<string>("")
    const [ensemble, setEnsemble] = useState<Ensemble | null>(null)
    const [edittingShow, setEdittingShow] = useState<Show | null>(null)
    const [seenWarning, setSeenWarning] = useState<boolean>(false)
    const [currentSection, setCurrentSection] = useState<"Characters" | "Show Groups"| "Layout" | "Songs" | "Dances">("Characters")
    const [currentAct, setCurrentAct] = useState<Act | null>(null)

    function getCanCreateSchedule(): boolean {
        let canCreateSchedule = true
        for (let i = 0; i < characters.length; i++) {
            const character = characters[i];





                if(character.actor == null){
                    console.log("Actor is null")
                    canCreateSchedule = false
                }

            
        }
        for (let i = 0; i < showGroups.length; i++) {

            const showGroup = showGroups[i];



            


                //Update characters in show group
                for (let j = 0; j < showGroup.characters.length; j++) {
                    const character = showGroup.characters[j];
                    if(character instanceof Character){



                            if(character.actor == null){
                                canCreateSchedule = false
                            }


                    } 
                }

            
        }
        return canCreateSchedule
    }

    function selectedAllShowGroupsAndCharacters(): boolean {
        let selectedAll = true
        


            showGroups.forEach((showGroup) => {
                showGroup.characters.forEach((character) => {
                    if(character instanceof Character){
                        if(character.name == ""){
                            selectedAll = false
                        }
                    }
                })
            })

            layout.forEach((act) => {
                act.scenes.forEach((scene) => {
                    scene.characters.forEach((character) => {
                        if(character instanceof Character){
                            if(character.name == ""){
                                selectedAll = false
                            }
                        } else if(character instanceof ShowGroup){
                            if(character.name == ""){
                                selectedAll = false
                            }
                        }
                    })
                })
            })

            songs.forEach((song) => {
                song.characters.forEach((character) => {
                    if(character instanceof Character){
                        if(character.name == ""){
                            selectedAll = false
                        }
                    } else if(character instanceof ShowGroup){
                        if(character.name == ""){
                            selectedAll = false
                        }
                    }
                })
            })

            dances.forEach((dance) => {
                dance.characters.forEach((character) => {
                    if(character instanceof Character){
                        if(character.name == ""){
                            selectedAll = false
                        }
                    } else if(character instanceof ShowGroup){
                        if(character.name == ""){
                            selectedAll = false
                        }
                    }
                })
            })
            

        
        return selectedAll
    }

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
            setEdittingShow(show)
            for(const act of show.layout) {
                act.hasCreatedSchedule = true;
                for(const scene of act.scenes) {
                    scene.hasCreatedSchedule = true;
                }

            }
            for(const song of show.songs) {
                song.hasCreatedSchedule = true;
            }
            for(const dance of show.dances) {
                dance.hasCreatedSchedule = true;
            }
            for(const sg of show.showGroups) {
                sg.hasCreatedSchedule = true;
            }
            for(const character of show.characters) {
                character.hasCreatedSchedule = true;
            }
            setTemplateId(show.templateId)
            setShowName(show.name)
            setHasEnsemble(show.hasEnsemble)
            setCharacters(show.characters)
            console.log(show.characters)
            setShowGroups(show.showGroups)
            setLayout(show.layout)
            setSongs(show.songs)
            setDances(show.dances)
            setShowId(show.id)
            setEnsemble(show.ensemble)
            setHasCreatedSchedule(show.isCreatingSchedule)
            if(show.isCreatingSchedule &&!seenWarning){
                setSeenWarning(true)
            //    alert("Since you are editing a show that has already created a schedule, you will not be able to edit the name of the show, when editing the show layout, songs, or dances, this will not update the schedule, only editting characters and show groups will. When editting exisiting show groups you can only add characters that have already been assigned to an actor.")
            }


        }
       

    }, [])

    function fixShow(show: Show): Show {
       for(let i = 0; i < show.showGroups.length; i++) {
              const showGroup = show.showGroups[i]
              for(let j = 0; j < showGroup.characters.length; j++) {
                const character = showGroup.characters[j]
                if(character instanceof Character) {
                     showGroup.characters[j] = show.characters.find((c) => c.characterId == character.characterId)!
                }
              }
       }

       for(let i = 0; i < show.layout.length; i++) {
                const act = show.layout[i]
                for(let j = 0; j < act.scenes.length; j++) {
                    const scene = act.scenes[j]
                    for(let k = 0; k < scene.characters.length; k++) {
                        const character = scene.characters[k]
                        if(character instanceof Character) {
                            scene.characters[k] = show.characters.find((c) => c.characterId == character.characterId)!
                        }
                        if(character instanceof ShowGroup) {
                            scene.characters[k] = show.showGroups.find((sg) => sg.showGroupId == character.showGroupId)!
                        }
                    }
                }
         }

         for(let i = 0; i < show.songs.length; i++) {
            const song = show.songs[i]
            for(let j = 0; j < song.characters.length; j++) {
                const character = song.characters[j]
                if(character instanceof Character) {
                    song.characters[j] = show.characters.find((c) => c.characterId == character.characterId)!
                }
                if(character instanceof ShowGroup) {
                    song.characters[j] = show.showGroups.find((sg) => sg.showGroupId == character.showGroupId)!
                }
            }

        }

        for(let i = 0; i < show.dances.length; i++) {
            const dance = show.dances[i]
            for(let j = 0; j < dance.characters.length; j++) {
                const character = dance.characters[j]
                if(character instanceof Character) {
                    dance.characters[j] = show.characters.find((c) => c.characterId == character.characterId)!
                }
                if(character instanceof ShowGroup) {
                    dance.characters[j] = show.showGroups.find((sg) => sg.showGroupId == character.showGroupId)!
                }
            }

        }

        return show

    }



    return (
        <>
        <div className='title'>
            <h1>
                {hasCreatedSchedule ? "Edit" : "Create"} Show Template
            </h1>
          
        </div>
        <div className='center'>
            <div className='form-question'>
                <label htmlFor="name">Show Name: </label>
                {hasCreatedSchedule ? 
                <label className='showNameLabel'>{showName}</label>
                 : <input type="text" id="name" value={showName} onChange={(e) => setShowName(e.target.value)} />}
            </div>
            {!hasCreatedSchedule && <div className='form-question'>
                <label htmlFor="ensemble">Has Ensemble: </label>
                <label className="custom-checkbox">
                    <input type="checkbox" id="ensemble" checked={hasEnsemble} onChange={(e) => setHasEnsemble(e.target.checked)} />
                    <span className="checkmark"></span>
                </label>
                
            </div>}
            <div className='sections'>
                <h2 className={'section ' + (currentSection == "Characters" ? "selected" : "")}  onClick={() => {
                    setCurrentSection("Characters")
                    
                }}>Characters</h2>
                <h2 className={'section ' + (currentSection == "Show Groups" ? "selected" : "")} onClick={() => {
                    setCurrentSection("Show Groups")
                    
                }}>Show Groups</h2>
                <h2 className={'section ' + (currentSection == "Layout" ? "selected" : "")} onClick={() => {
                    setCurrentSection("Layout")
                    
                }}>Layout</h2>
                <h2 className={'section ' + (currentSection == "Songs" ? "selected" : "")} onClick={() => {
                    setCurrentSection("Songs")
                    
                }}>Songs</h2>
                <h2 className={'section ' + (currentSection == "Dances" ? "selected" : "")} onClick={() => {
                    setCurrentSection("Dances")
                    
                }}>Dances</h2>

            </div>
{currentSection == "Characters"  && <>
            <div className='characters' id='create-characters'>
                {characters.map((character, index) => {
                    return <CharacterTile key={index} actors={[]} character={character} characters={[]} hasCreatedSchedule={character.hasCreatedSchedule} isAssign={false} setCharacter={(newCharacter) => {
                        setCharacters((prev) => {
                            const newCharacters = [...prev]
                            newCharacters[index] = newCharacter
                            return newCharacters
                        })
                    }} removeCharacter={() => {
                        const characterId = character.characterId
                        //Remove character from show groups
                        setShowGroups((prev) => {
                            const newShowGroups = [...prev]
                            for (let i = 0; i < newShowGroups.length; i++) {
                                const showGroup = newShowGroups[i];
                                showGroup.characters = showGroup.characters.filter((c) => {
                                    if(c instanceof Character){
                                        return c.characterId !== characterId
                                    }
                                    return true
                                })
                            }
                            return newShowGroups
                        })
                        //Remove character from layout
                        setLayout((prev) => {
                            const newLayout = [...prev]
                            for (let i = 0; i < newLayout.length; i++) {
                                const act = newLayout[i];
                                act.scenes = act.scenes.filter((s) => {
                                    if(s instanceof Character){
                                        return s.characterId !== characterId
                                    }
                                    return true
                                })
                            }
                            return newLayout
                        })
                        //Remove character from songs
                        setSongs((prev) => {
                            const newSongs = [...prev]
                            for (let i = 0; i < newSongs.length; i++) {
                                const song = newSongs[i];
                                song.characters = song.characters.filter((s) => {
                                    if(s instanceof Character){
                                        return s.characterId !== characterId
                                    }
                                    return true
                                })
                            }
                            return newSongs
                        })
                        //Remove character from dances
                        setDances((prev) => {
                            const newDances = [...prev]
                            for (let i = 0; i < newDances.length; i++) {
                                const dance = newDances[i];
                                dance.characters = dance.characters.filter((s) => {
                                    if(s instanceof Character){
                                        return s.characterId !== characterId
                                    }
                                    return true
                                })
                            }
                            return newDances
                        })

                        setCharacters(characters.filter((c, i) => i !== index))
                    }} isCreate={true}/>
                })}
                
            </div>
            <button className='ActionBtn' onClick={() => {
                const characterId = Date.now()
                    setCharacters([...characters, Character.fromBlank("", null,characterId)])
                    //Scroll to bottom
                    setTimeout(() => {
                        const element = document.getElementById("create-characters")!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("character-tile-" + characterId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Character</button></>}

            {currentSection == "Show Groups" && <><div className='showGroups' id='create-showGroups'>
                {showGroups.map((showGroup, index) => {
                    return <ShowGroupTile key={index} showGroup={showGroup} showGroups={[]} actors={[]} hasCreatedSchedule={showGroup.hasCreatedSchedule} hasEnsemble={hasEnsemble} characters={characters} isAssign={false} setShowGroup={(newShowGroup) => {
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
                const showGroupId = Date.now()
                    setShowGroups([...showGroups, ShowGroup.fromBlank("", [],showGroupId)])
                      //Scroll to bottom
                      setTimeout(() => {
                        const element = document.getElementById("create-showGroups")!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("show-group-tile-" + showGroupId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Show Group</button></>}
{currentSection == "Layout" &&
            <>{currentAct == null ? <><div className='layout' id='create-layout'>
                
                {layout.map((act, index) => {
                    return <ActTile key={index} canMoveDown={layout.indexOf(act) != layout.length - 1} canMoveUp={layout.indexOf(act) != 0} moveDown={() => {
                        //Move down
                        setLayout((prev) => {
                            const newLayout = [...prev]
                            const newIndex = layout.indexOf(act) + 1
                            newLayout[layout.indexOf(act)] = layout[newIndex]
                            newLayout[newIndex] = act
                            return newLayout
                        })

                        //Scroll into view
                        setTimeout(() => {
                            const element = document.getElementById("create-layout")!;
                            element.scrollTop = element.scrollHeight;
                            const element2 = document.getElementById("act-tile-" + act.actId)!;
                            element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                        },100)
                    }} moveUp={() => {
                        //Move up
                        setLayout((prev) => {
                            const newLayout = [...prev]
                            const newIndex = layout.indexOf(act) - 1
                            newLayout[layout.indexOf(act)] = layout[newIndex]
                            newLayout[newIndex] = act
                            return newLayout
                        })

                        //Scroll into view
                        setTimeout(() => {
                            const element = document.getElementById("create-layout")!;
                            element.scrollTop = element.scrollHeight;
                            const element2 = document.getElementById("act-tile-" + act.actId)!;
                            element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                        },100)
                    }} selectAct={(act) => {
                        setCurrentAct(act)
                    }} hasEnsemble={hasEnsemble} act={act} characters={characters} showGroups={showGroups} isAssign={false} setAct={(newAct) => {
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
               
            </div>
            <button className='ActionBtn' onClick={() => {
                    //Randomly generate act id
                    const actId =  Date.now()
                    setLayout([...layout, Act.fromBlank("Act " + (layout.length + 1), [], actId)])
                    //Scroll into view
                    setTimeout(() => {
                        const element = document.getElementById("create-layout")!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("act-tile-" + actId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Act</button></> : <>
                <div>
                    <div className='act-header'>
                        <img src={BackArrow} alt="" onClick={()=> {
                            setCurrentAct(null)
                        }}/>
                    <h2>{currentAct.name}</h2>
                        </div>
                <label htmlFor="Scene">Scenes: </label>
                <div id={"scenes-" + currentAct.actId} className="scenes">

                    {currentAct.scenes.map((scene, index) => {
                        return <SceneTile key={index} canMoveDown={currentAct.scenes.indexOf(scene) != currentAct.scenes.length - 1} canMoveUp={currentAct.scenes.indexOf(scene) != 0} moveDown={() => {
                            //Move down
                            setLayout((prev) => {
                                const newLayout = [...prev]
                                const newIndex = currentAct.scenes.indexOf(scene) + 1   
                                setCurrentAct(Act.fromBlank(currentAct.name, currentAct.scenes.map((s, i) => {
                                    if (i === index) {
                                        return currentAct.scenes[newIndex]
                                    }
                                    if (i === newIndex) {
                                        return scene
                                    }
                                    return s
                                }
                                ), currentAct.actId))
                                newLayout[layout.findIndex((a) => a.actId == currentAct.actId)].scenes[currentAct.scenes.indexOf(scene)] = currentAct.scenes[newIndex]
                                newLayout[layout.findIndex((a) => a.actId == currentAct.actId)].scenes[newIndex] = scene
                                
                                return newLayout
                            }
                            )

                            //Scroll into view
                            setTimeout(() => {
                                const element = document.getElementById("scenes-" + currentAct.actId)!;
                                // element.scrollTop = element.scrollHeight;
                                const element2 = document.getElementById("scene-tile-" + scene.sceneId)!;
                                element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                            },100)
                        }} moveUp={() => {
                            //Move up
                            setLayout((prev) => {
                                const newLayout = [...prev]
                                const newIndex = currentAct.scenes.indexOf(scene) - 1
                                const newScene = currentAct.scenes[newIndex]
                                console.log(newScene)
                                setCurrentAct(Act.fromBlank(currentAct.name, currentAct.scenes.map((s, i) => {
                                    if (i === index) {  
                                        return newScene
                                    }
                                    if (i === newIndex) {
                                        return scene
                                    }
                                    return s
                                }
                                ), currentAct.actId))
                                newLayout[layout.findIndex((a) => a.actId == currentAct.actId)].scenes[currentAct.scenes.indexOf(scene)] = currentAct.scenes[newIndex]
                                newLayout[layout.findIndex((a) => a.actId == currentAct.actId)].scenes[newIndex] = scene
                                return newLayout
                            })

                            //Scroll into view
                            setTimeout(() => {
                                const element = document.getElementById("scenes-" + currentAct.actId)!;
                                // element.scrollTop = element.scrollHeight;
                                const element2 = document.getElementById("scene-tile-" + scene.sceneId)!;
                                element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                            },100)
                        
                        }}  hasEnsemble={hasEnsemble} scene={scene} isCreate={false} characters={characters} showGroups={showGroups} isAssign={false} setScene={(newScene) => {
                            setLayout((prev) => {
                                const newLayout = [...prev]  
                                const ind = newLayout.findIndex((a) => a.actId == currentAct.actId)
                                newLayout[ind] = Act.fromBlank(currentAct.name, currentAct.scenes.map((s, i) => {
                                    if (i === index) {
                                        return newScene
                                    }
                                    return s
                                }), currentAct.actId)
                                setCurrentAct(Act.fromBlank(currentAct.name, currentAct.scenes.map((s, i) => {
                                    if (i === index) {
                                        return newScene
                                    }
                                    return s
                                }), currentAct.actId))
                                return newLayout
                         })

                        }
                        } removeScene={() => {
                            setLayout((prev) => {
                                const newLayout = [...prev]  
                                const i = newLayout.findIndex((a) => a.actId == currentAct.actId)
                                newLayout[i] = Act.fromBlank(currentAct.name, currentAct.scenes.filter((s, i) => i !== index),currentAct.actId )
                                setCurrentAct(Act.fromBlank(currentAct.name, currentAct.scenes.filter((s, i) => i !== index),currentAct.actId ))
                                return newLayout
                         })

                        }}/>


                    } )}
                </div>

                {currentAct.scenes.length == 0 && <br /> }
                <button className="ActionBtn" onClick={() => {
                    const sceneID: number = Date.now()
                    setLayout((prev) => {
                        const newLayout = [...prev]
                        const ind = newLayout.findIndex((a) => a.actId == currentAct.actId)  
                        newLayout[ind] =Act.fromBlank(currentAct.name, [...currentAct.scenes, Scene.fromBlank("Scene " + (currentAct.scenes.length + 1), [],sceneID)],currentAct.actId)
                        setCurrentAct(Act.fromBlank(currentAct.name, [...currentAct.scenes, Scene.fromBlank("Scene " + (currentAct.scenes.length + 1), [],sceneID)],currentAct.actId))
                        return newLayout
                 })

                    setTimeout(() => {
                        const element = document.getElementById("scenes-" + currentAct.actId)!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("scene-tile-" + sceneID)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                        // const element3 = document.getElementById("act-tile-" + currentAct.actId)!
                        // element3.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
               }}>Add Scene</button>
            </div>
          </>}</>}

           { currentSection == "Songs" && <><div className='songs' id='create-songs'>
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
                
                

            </div>
            <button className='ActionBtn' onClick={() => {
                    const songId =Date.now()
                    setSongs([...songs, Song.fromBlank("Song " + (songs.length + 1),[],songId)])
                    //Scroll into view
                    setTimeout(() => {
                        const element = document.getElementById("create-songs")!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("song-tile-" + songId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Song</button> </>}
            {currentSection == "Dances" && <>   
            <div className='dances' id='create-dances'>
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
                
               

            </div>
            <button className='ActionBtn' onClick={() => {
                    const danceId =Date.now()
                    setDances([...dances, Dance.fromBlank("Dance " + (dances.length + 1),[],danceId)])
                    //Scroll into view
                    setTimeout(() => {
                        const element = document.getElementById("create-dances")!;
                        element.scrollTop = element.scrollHeight;
                        const element2 = document.getElementById("dance-tile-" + danceId)!;
                        element2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
                    },100)
                }}>Add Dance</button> </>}
           {isLoading ? <div className="loader"></div> : <button className='ActionBtn' onClick={async () => {
                //Create show template\
                setIsLoading(true)
                if(!selectedAllShowGroupsAndCharacters()){
                    alert("Please select all characters and show groups before creating the show template")
                    setIsLoading(false)
                    return
                }
                const show = fixShow(Show.fromBlank(showName, showId,activityId,templateId,layout, characters ,hasEnsemble ? Ensemble.fromBlank(ensemble?.actors ?? [], Date.now()) : null, showGroups, songs,dances,false,hasEnsemble,null,[],"open", hasCreatedSchedule,Date.now() ))
                show.templateId = templateId
                console.log(templateId)
                console.log(show.toMap())
               let id = showId
                if(!isEditing) {

                    const templateId = await addShowTemplate(show)
                    show.templateId = templateId
                    id = await createShow(show)
                } else {
                    //Make a copy of show
                    const fromMap = Show.fromMap(show.toMap())
                    // await editShowTemplate(fromMap)
                    show.formStatus = edittingShow!.formStatus
                    show.isCreatingSchedule = edittingShow!.isCreatingSchedule
                    show.conflictForm = edittingShow!.conflictForm
                    show.canCreateSchedule = getCanCreateSchedule()
                    show.resources = edittingShow!.resources
                    show.templateId = edittingShow!.templateId

                    if(!show.canCreateSchedule){
                        alert("Since there are characters that haven't been assigned to actors, you will not be able to edit/create the schedule until you assign actors to all characters")
                    }
                    await editShow(show)
                    if(hasCreatedSchedule){
                        await editShowEventsCharactersTemplate(show)
                    }
                    localStorage.removeItem('show')
                    localStorage.setItem('show', JSON.stringify(show?.toMap()))
                }

                window.location.href = `/Activity/Shows/Show/?activityId=${activityId}&showId=${id}`
                setIsLoading(false)
            }}>
                {isEditing ? "Save Show Template" : "Create Show Template"}
            </button>
}
            <button className='ActionBtn' onClick={() => {
                const urlParams = new URLSearchParams(window.location.search)
                const showId = urlParams.get('showId')
                if(isEditing) {
                    window.location.href = `/Activity/Shows/Show/?activityId=${activityId}&showId=${showId}`
                    return
                }

                window.location.href = `/Activity/Shows/Add/?activityId=${activityId}`
            }}>
                Back
            </button>
        </div>

        
        
        </>
    )
}

export default App
