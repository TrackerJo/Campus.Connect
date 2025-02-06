import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './print.css'

import { isLoggedIn } from '../../../../../api/auth'
import { Character, Dance, EnsembleSection, FullCast, Scene, Show, ShowGroup, Song, StudentData } from '../../../../../constants'
import { getUserData } from '../../../../../api/db'



function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [showId, setShowId] = useState<string>("")
    const [show, setShow] = useState<Show | null>()
    const [characters, setCharacters] = useState<(Character | EnsembleSection)[]>([])
    const [showGroups, setShowGroups] = useState<ShowGroup[]>([])
    const [scenes, setScenes] = useState<Scene[]>([])
    const [songs, setSongs] = useState<Song[]>([])
    const [dances, setDances] = useState<Dance[]>([])
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const addResourceDialogRef = useRef<HTMLDialogElement>(null)
    const [loading, setLoading] = useState(true)
    
    

    useEffect(() => {
        setLoading(true)
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
        }
        const showId = urlParams.get('showId')
        if (showId) {
            setShowId(showId)
        }
        //Get Show from local storage
        const showObj = localStorage.getItem('show-' + showId)
        if (showObj) {
            const show = Show.fromMap(JSON.parse(showObj))
            setShow(show)
            console.log(show)


            getUserData().then((userData) => {
                if (!userData) {
                    return
                }
                const studentData = userData as StudentData;
                const userCharacters: (Character | EnsembleSection)[] = show.characters.filter((character) => character.actor?.userId === studentData.uid)
                if(show.hasEnsemble){
                    if(show.ensemble?.actors.find((actor) => actor.userId === studentData.uid)){
                        userCharacters.push(new EnsembleSection())
                    }
                }
                setCharacters(userCharacters)
                const userShowGroups = show.showGroups.filter((showGroup) => showGroup.characters.find((character) => {
                    if(character instanceof Character) {
                        return character.actor?.userId === studentData.uid
                    } else {
                        if(character.includeAll) {
                            return true
                        } else if(character.customActors) {
                            return character.customActors.find((actor) => actor.userId === studentData.uid)
                        } else if(character.includeFemale && studentData.gender == "female") {
                            return true
                        } else if(character.includeMale && studentData.gender == "male") {
                            return true
                        } else {
                            return false
                        }
                    }

                }))
                setShowGroups(userShowGroups)
                const userScenes:Scene[] = []
                show.layout.forEach((act) => {
                    act.scenes.forEach((scene) => {
                        const hasUser = scene.characters.find((character) => {
                            if(character instanceof FullCast){
                                return true
                            } else if(character instanceof Character) {
                                return character.actor?.userId === studentData.uid
                            } else if(character instanceof EnsembleSection){
                                if(character.includeAll) {
                                    return true
                                } else if(character.customActors) {
                                    return character.customActors.find((actor) => actor.userId === studentData.uid)
                                } else if(character.includeFemale && studentData.gender == "female") {
                                    return true
                                } else if(character.includeMale && studentData.gender == "male") {
                                    return true
                                } else {
                                    return false
                                }
                            } else {
                                return character.characters.find((character) => {
                                    if(character instanceof Character) {
                                        return character.actor?.userId === studentData.uid
                                    } else {
                                        if(character.includeAll) {
                                            return true
                                        } else if(character.customActors) {
                                            return character.customActors.find((actor) => actor.userId === studentData.uid)
                                        } else if(character.includeFemale && studentData.gender == "female") {
                                            return true
                                        } else if(character.includeMale && studentData.gender == "male") {
                                            return true
                                        } else {
                                            return false
                                        }
                                    }
                                })
                            }
                        })
                        if(hasUser){
                            scene.name = act.name + " - " + scene.name
                            userScenes.push(scene)
                        }
                    })
                })
                setScenes(userScenes)
                const userSongs:Song[] = []

                show.songs.forEach((song) => {
                    const hasUser = song.characters.find((character) => {
                        if(character instanceof FullCast){
                            return true
                        } else if(character instanceof Character) {
                            return character.actor?.userId === studentData.uid
                        } else if(character instanceof EnsembleSection){
                            if(character.includeAll) {
                                return true
                            } else if(character.customActors) {
                                return character.customActors.find((actor) => actor.userId === studentData.uid)
                            } else if(character.includeFemale && studentData.gender == "female") {
                                return true
                            } else if(character.includeMale && studentData.gender == "male") {
                                return true
                            } else {
                                return false
                            }
                        } else {
                            return character.characters.find((character) => {
                                if(character instanceof Character) {
                                    return character.actor?.userId === studentData.uid
                                } else {
                                    if(character.includeAll) {
                                        return true
                                    } else if(character.customActors) {
                                        return character.customActors.find((actor) => actor.userId === studentData.uid)
                                    } else if(character.includeFemale && studentData.gender == "female") {
                                        return true
                                    } else if(character.includeMale && studentData.gender == "male") {
                                        return true
                                    } else {
                                        return false
                                    }
                                }
                            })
                        }
                    })
                    if(hasUser){

                        userSongs.push(song)
                    }

                })
                setSongs(userSongs)
                const userDances:Dance[] = []

                show.dances.forEach((dance) => {
                    const hasUser = dance.characters.find((character) => {
                        if(character instanceof FullCast){
                            return true
                        } else if(character instanceof Character) {
                            return character.actor?.userId === studentData.uid
                        } else if(character instanceof EnsembleSection){
                            if(character.includeAll) {
                                return true
                            } else if(character.customActors) {
                                return character.customActors.find((actor) => actor.userId === studentData.uid)
                            } else if(character.includeFemale && studentData.gender == "female") {
                                return true
                            } else if(character.includeMale && studentData.gender == "male") {
                                return true
                            } else {
                                return false
                            }
                        } else {
                            return character.characters.find((character) => {
                                if(character instanceof Character) {
                                    return character.actor?.userId === studentData.uid
                                } else {
                                    if(character.includeAll) {
                                        return true
                                    } else if(character.customActors) {
                                        return character.customActors.find((actor) => actor.userId === studentData.uid)
                                    } else if(character.includeFemale && studentData.gender == "female") {
                                        return true
                                    } else if(character.includeMale && studentData.gender == "male") {
                                        return true
                                    } else {
                                        return false
                                    }
                                }
                            })
                        }
                    })
                    if(hasUser){

                        userDances.push(dance)
                    }

                })
                setDances(userDances)
                setLoading(false)
                setTimeout(() => {
                    print()
                    window.close()
                }, 500)
            });




           
        }
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
            
        }
       

    }, [])

   



    return (
        <>
        <div className='title'>
            <h1>
               Actor Profile
            </h1>
          
        </div>
        <div className='center'> 
        
            {characters.length > 0 && (
                <div className='section'>
                    <h2>Roles</h2>
                    <div className='tiles'>
                        {characters.map((character) => {
                            if(character instanceof Character){
                            return <div className='tile' key={character.name}>
                                <h3>{character.name}</h3>
                            </div>
                            } else {
                                return <div className='tile' key={"EnsembleSection"}>
                                <h3>Ensemble</h3>
                            </div>
                            }
                        })}
                    </div>
                </div>
            )}
            {showGroups.length > 0 && (
                <div className='section'>
                    <h2>Show Groups</h2>
                    <div className='tiles'>
                        {showGroups.map((showGroup) => {
                            return <div className='tile' key={showGroup.name}>
                                <h3>{showGroup.name}</h3>
                            </div>
                        })}
                    </div>
                </div>
            )}
            {scenes.length > 0 && (
                <div className='section'>
                    <h2>Scenes</h2>
                    <div className='tiles'>
                        {scenes.map((scene) => {
                            return <div className='tile' key={scene.name}>
                                <h3>{scene.name}</h3>
                            </div>
                        })}
                    </div>
                </div>
            )}
            {songs.length > 0 && (
                <div className='section'>
                    <h2>Songs</h2>
                    <div className='tiles'>
                        {songs.map((song) => {
                            return <div className='tile' key={song.name}>
                                <h3>{song.name}</h3>
                            </div>
                        })}
                    </div>
                </div>
            )}
            {dances.length > 0 && (
                <div className='section'>
                    <h2>Dances</h2>
                    <div className='tiles'>
                        {dances.map((dance) => {
                            return <div className='tile' key={dance.name}>
                                <h3>{dance.name}</h3>
                            </div>
                        })}
                    </div>
                </div>
            )}
          
        </div>

       
       
        </>
    )
}

export default App
