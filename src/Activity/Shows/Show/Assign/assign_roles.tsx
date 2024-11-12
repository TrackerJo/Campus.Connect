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




import { Act, Actor, Character, Dance, Ensemble, EnsembleSection, Show, ShowGroup, Song } from '../../../../constants'
import ActTile from '../../../../components/Act_Tile'
import CharacterTile from '../../../../components/Character_Tile'
import ShowGroupTile from '../../../../components/Show_Group_Tile'

import {getActivityActors, setActivityShow } from '../../../../firebase/db'

import ActorTile from '../../../../components/Actor_Tile'
import AssignActorDialog from '../../../../components/Assign_Actor_Dialog'





function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [showId, setShowId] = useState<string>("")
    const [show, setShow] = useState<Show | null>()
   
    const [characters, setCharacters] = useState<Character[]>([])
    const [showGroups, setShowGroups] = useState<ShowGroup[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [actors, setActors] = useState<Actor[]>([])
    const [ensemble, setEnsemble] = useState<Actor[]>([])
    const [settingUp, setSettingUp] = useState<boolean>(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [hasShowGroup, setHasShowGroup] = useState<boolean>(false)


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
            const showGroup = show.showGroups[i];
            const newShowGroup = showGroups.find((sg) => sg.name == showGroup.name)
            if(newShowGroup){
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
        setShow(show)
        console.log(show.toMap())
        console.log("Can create schedule")
        console.log(canCreateSchedule)
        localStorage.setItem('show-' + showId, JSON.stringify(show))
        await setActivityShow(activityId, showId, show)
        setIsLoading(false)
    }



    useEffect(() => {
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
        const show = localStorage.getItem('show-' + showId)
        if (show) {
            console.log(JSON.parse(show))
            setShow(Show.fromMap(JSON.parse(show)))
            console.log(Show.fromMap(JSON.parse(show)))

            setCharacters(Show.fromMap(JSON.parse(show)).characters)
            setShowGroups(Show.fromMap(JSON.parse(show)).showGroups)
            const showGroups = Show.fromMap(JSON.parse(show)).showGroups
            let showGroupHasEnsemble = false
            for (let i = 0; i < showGroups.length; i++) {
                const showGroup = showGroups[i];
                if(showGroup.characters.map((c) => c instanceof EnsembleSection).includes(true)){
                    showGroupHasEnsemble = true
                }
            }
            setHasShowGroup(showGroupHasEnsemble)
        }
       

    }, [])



    return (
        <>
        <div className='title'>
            <h1>
                Assign Roles
            </h1>
          
        </div>
        <div className='center'>
            <h2>Assign Characters</h2>
            <div className='characters' id='create-characters'>
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
                
            </div>
            { hasShowGroup && <>
            <h2>Assign Show Groups</h2>
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
                            return newShowGroups
                        })
                    }} removeShowGroup={() => {
                        setShowGroups(showGroups.filter((sg, i) => i !== index))
                    }} isCreate={false}/>
                })}
               
            </div></>}
            {
                show?.hasEnsemble && <>
                 <h2>Assign Ensemble</h2>
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
                window.location.href = '/Campus.Connect/Activity/Shows/Show/?activityId=' + activityId + '&showId=' + showId


            }}>
               Save
            </button>
}
<button className='ActionBtn' onClick={() => {
                window.location.href = "/Campus.Connect/Activity/Shows/Show/?activityId=" + activityId + "&showId=" + showId
            }}>
                Back
            </button>
        </div>

       {show?.hasEnsemble && !settingUp && <AssignActorDialog dialogRef={dialogRef as LegacyRef<HTMLDialogElement>} keepPastResult={false} actor={new Actor()} addedActors={ensemble} actors={actors} setActor={(actor) => {
            const newActors = [...ensemble];
            newActors.push(actor)
            console.log("Setting actors")
            setEnsemble(newActors)
            dialogRef.current?.close()
       }} close={() => {
            dialogRef.current?.close()
       }}/>}
        
        </>
    )
}

export default App
