import {  LegacyRef, StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './assign_roles.css'




import {  ActivityMember, Character, Ensemble, EnsembleSection, Show, ShowGroup } from '../../../../constants'

import CharacterTile from '../../../../components/Character_Tile'
import ShowGroupTile from '../../../../components/Show_Group_Tile'

import {editShowEventsCharacters, getActivityActors, getActivityShow, setActivityShow } from '../../../../api/db'

import ActorTile from '../../../../components/Actor_Tile'
import AssignActorDialog from '../../../../components/Assign_Actor_Dialog'
import { isLoggedIn } from '../../../../api/auth'





function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [showId, setShowId] = useState<string>("")
    const [show, setShow] = useState<Show | null>()
   
    const [characters, setCharacters] = useState<Character[]>([])
    const [showGroups, setShowGroups] = useState<ShowGroup[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [actors, setActors] = useState<ActivityMember[]>([])
    const [ensemble, setEnsemble] = useState<ActivityMember[]>([])
    const [settingUp, setSettingUp] = useState<boolean>(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [hasShowGroup, setHasShowGroup] = useState<boolean>(false)
    const [loadingShow, setLoadingShow] = useState<boolean>(true)
    const [currentSection, setCurrentSection] = useState<"Characters" | "Show Groups"| "Ensemble">("Characters")


    async function assginRoles(){
        let canCreateSchedule = true
        setIsLoading(true)
        if(!show) {
            setIsLoading(false)
            return
        }
        for (let i = 0; i < show.characters.length; i++) {
            const character = show.characters[i];
            const newCharacter = characters.find((ch) => ch.name == character.name)
            if(newCharacter){
                console.log("New Character")
                console.log(newCharacter)
                show.characters[i] = newCharacter
                if(newCharacter.actor == null){
                    console.log("Actor is null")
                    canCreateSchedule = false
                }
            }
            
        }
        for (let i = 0; i < show.showGroups.length; i++) {
            console.log("UPDATING SHOW GROUPS")
            const showGroup = show.showGroups[i];
            console.log("Show Group: " + showGroup.name)
            const newShowGroup = showGroups.find((sg) => sg.name == showGroup.name)
            console.log("New Show Group: " + newShowGroup?.name)
            
            if(newShowGroup){
                showGroup.characters = newShowGroup.characters
                //Update characters in show group
                for (let j = 0; j < showGroup.characters.length; j++) {
                    const character = showGroup.characters[j];
                    if(character instanceof Character){
                        const newCharacter = characters.find((ch) => ch.name == character.name)
                        if(newCharacter){
                            showGroup.characters[j] = newCharacter
                            if(newCharacter.actor == null){
                                canCreateSchedule = false
                            }

                        }
                    } 
                }
            }
            
        }
        for (let i = 0; i < show.layout.length; i++) {
            const act = show.layout[i];
            for (let s = 0; s < act.scenes.length; s++) {
                const scene = act.scenes[s];
                for (let c = 0; c < scene.characters.length; c++) {
                    const character = scene.characters[c];
                    if(character instanceof Character){
                        const newCharacter = characters.find((ch) => ch.name == character.name)
                        if(newCharacter){
                            scene.characters[c] = newCharacter
                        }
                    } else if(character instanceof ShowGroup){
                        const newShowGroup = showGroups.find((sg) => sg.name == character.name)
                        if(newShowGroup){
                            for (let sc = 0; sc < newShowGroup.characters.length; sc++) {
                                const sCharacter = newShowGroup.characters[sc];
                                if(sCharacter instanceof Character){
                                    const newCharacter = characters.find((ch) => ch.name == sCharacter.name)
                                    if(newCharacter){
                                        newShowGroup.characters[sc] = newCharacter
                                    }
                                }
                                
                            }
                            scene.characters[c] = newShowGroup
                        }
                    }
                }
                
            }
            
        }
        for (let i = 0; i < show.songs.length; i++) {
            const song = show.songs[i];
            console.log("Assigning roles to song")
            console.log(song)
            for (let c = 0; c < song.characters.length; c++) {
                const character = song.characters[c];
                console.log("Character")
                console.log(character)
                console.log(typeof character)
                if(character instanceof Character){
                    const newCharacter = characters.find((ch) => ch.name == character.name)
                    if(newCharacter){
                        song.characters[c] = newCharacter
                    }
                } else if(character instanceof ShowGroup){
                    const newShowGroup = showGroups.find((sg) => sg.name == character.name)
                    if(newShowGroup){
                        for (let sc = 0; sc < newShowGroup.characters.length; sc++) {
                            const sCharacter = newShowGroup.characters[sc];
                            if(sCharacter instanceof Character){
                                const newCharacter = characters.find((ch) => ch.name == sCharacter.name)
                                if(newCharacter){
                                    newShowGroup.characters[sc] = newCharacter
                                }
                            }
                            
                        }
                        song.characters[c] = newShowGroup
                    }
                }
                console.log("New Character")
                console.log(song.characters[c])
                console.log(typeof song.characters[c])

            }
            
        }

        for (let i = 0; i < show.dances.length; i++) {
            const dance = show.dances[i];
            for (let c = 0; c < dance.characters.length; c++) {
                const character = dance.characters[c];
                if(character instanceof Character){
                    const newCharacter = characters.find((ch) => ch.name == character.name)
                    if(newCharacter){
                        dance.characters[c] = newCharacter
                    }
                } else if(character instanceof ShowGroup){
                    const newShowGroup = showGroups.find((sg) => sg.name == character.name)
                    if(newShowGroup){
                        for (let sc = 0; sc < newShowGroup.characters.length; sc++) {
                            const sCharacter = newShowGroup.characters[sc];
                            if(sCharacter instanceof Character){
                                const newCharacter = characters.find((ch) => ch.name == sCharacter.name)
                                if(newCharacter){
                                    newShowGroup.characters[sc] = newCharacter
                                }
                            }
                            
                        }
                        dance.characters[c] = newShowGroup
                    }
                }
            }
            
        }

        
        show.canCreateSchedule = canCreateSchedule
        show.ensemble = Ensemble.fromBlank(ensemble, Date.now())
        if(show.isCreatingSchedule){
            if(!canCreateSchedule){
                alert("Cannot update show because not all characters have been assigned actors")
                setIsLoading(false)
                return
            }
            await editShowEventsCharacters( show);

        }
        setShow(show)
        console.log(show.toMap())
        console.log("Can create schedule")
        console.log(canCreateSchedule)
        localStorage.setItem('show-' + showId, JSON.stringify(show))
        await setActivityShow(activityId, showId, show)
        setIsLoading(false)
    }



    useEffect(() => {
        isLoggedIn(() => {})
        setSettingUp(true)
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
            getActivityActors(activityId!).then((actors) => {
                setActors(actors)
                console.log(actors)
                setSettingUp(false)

            })
        }
        const showId = urlParams.get('showId')
        if (showId) {
            setShowId(showId)
        }
        //Get Show from local storage
        const showJSON = localStorage.getItem('show-' + showId)
        if(showJSON){
            const show = Show.fromMap(JSON.parse(showJSON))
        setLoadingShow(true)
        
            if(show == null){
                window.location.href = '/Activity/Shows/Show/?activityId=' + activityId
                return
            }
        
        setShow(show)
        console.log(show)

        setCharacters(show.characters)
        setShowGroups(show.showGroups)
        const showGroups = show.showGroups
        let showGroupHasEnsemble = false
        for (let i = 0; i < showGroups.length; i++) {
            const showGroup = showGroups[i];
            if(showGroup.characters.map((c) => c instanceof EnsembleSection).includes(true)){
                showGroupHasEnsemble = true
            }
        }
        setHasShowGroup(showGroupHasEnsemble)
        if(show?.hasEnsemble){
            setEnsemble(show.ensemble!.actors)
        }
        setLoadingShow(false)
    }

       

    }, [])



    return (
       <> {loadingShow ? <div className='centerLoader'><div className='loader'></div></div>  :  <>
        <div className='title'>
            <h1>
                Assign Roles
            </h1>
          
        </div>
        <div className='center'>
        <div className='sections'>
                <h2 className={'section ' + (currentSection == "Characters" ? "selected" : "")}  onClick={() => {
                    setCurrentSection("Characters")
                    
                }}>Characters</h2>
                {hasShowGroup && <h2 className={'section ' + (currentSection == "Show Groups" ? "selected" : "")} onClick={() => {
                    setCurrentSection("Show Groups")
                    
                }}>Show Groups</h2>}
                {show?.hasEnsemble && <h2 className={'section ' + (currentSection == "Ensemble" ? "selected" : "")} onClick={() => {
                    setCurrentSection("Ensemble")
                    
                }}>Ensemble</h2>}
                

            </div>

           {currentSection == "Characters" &&  <div className='characters' id='create-characters'>
                {characters.map((character, index) => {
                    return <CharacterTile key={index} character={character} actors={actors} characters={[]} isAssign={true} setCharacter={(newCharacter) => {
                        setCharacters((prev) => {
                            const newCharacters = [...prev]
                            newCharacters[index] = newCharacter
                            return newCharacters
                        })
                    }} removeCharacter={() => {
                        setCharacters(characters.filter((c, i) => i !== index))
                    }} isCreate={false}/>
                })}
                
            </div>}
            { hasShowGroup && currentSection == "Show Groups" && <>

            <div className='showGroups' id='create-showGroups'>
                {showGroups.map((showGroup, index) => {


                    //dont show if show group has no ensemble
                    if(!showGroup.characters.map((c) => c instanceof EnsembleSection).includes(true)){
                        return null
                    }
                    return <ShowGroupTile key={index} showGroup={showGroup} showGroups={[]} hasEnsemble={false} characters={characters} actors={actors} isAssign={true} setShowGroup={(newShowGroup) => {
                        setShowGroups((prev) => {
                            const newShowGroups = [...prev]
                            newShowGroups[index] = newShowGroup
                            console.log("NEW SHOW GROUPS")
                            for (let i = 0; i < newShowGroups.length; i++) {
                                const showG = newShowGroups[i];
                                console.log(showG.toMap())
                                
                            }
                            return newShowGroups
                        })
                    }} removeShowGroup={() => {
                        setShowGroups(showGroups.filter((sg, i) => i !== index))
                    }} isCreate={false}/>
                })}
               
            </div></>}
            {
                show?.hasEnsemble && currentSection == "Ensemble" && <>

            <div className='ensemble' id='create-ensemble'>
               {
                     ensemble.map((actor, index) => {
                        console.log(actor)
                          return <ActorTile key={index} actor={actor} canDelete={true} onDelete={() => {
                              setEnsemble(ensemble.filter((a, i) => i !== index))
                          }}/>
                     })
               }
            </div>
            <button className='ActionBtn' onClick={() => {
                dialogRef.current?.showModal()
            }}>Add Actor</button>

                 </> 
            }
            

           {isLoading ? <div className="loader"></div> : <button className='ActionBtn' onClick={async () => {
                await assginRoles()
                window.location.href = '/Activity/Shows/Show/?activityId=' + activityId + '&showId=' + showId


            }}>
               Save
            </button>
}
<button className='ActionBtn' onClick={() => {
                window.location.href = "/Activity/Shows/Show/?activityId=" + activityId + "&showId=" + showId
            }}>
                Back
            </button>
        </div>

       {show?.hasEnsemble && !settingUp && <AssignActorDialog dialogRef={dialogRef as LegacyRef<HTMLDialogElement>} keepPastResult={false} actor={new ActivityMember()} addedActors={ensemble} actors={actors} setActor={(actor) => {
            const newActors = [...ensemble];
            newActors.push(actor)
            console.log("Setting actors")
            setEnsemble(newActors)

       }} close={() => {
            dialogRef.current?.close()
       }}/>}
        
        </>}
        </>
    )
}

export default App
