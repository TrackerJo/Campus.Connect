import { Act, ActTileProps, Scene } from "../constants"
import "./Act_Tile.css"

import TrashIcon from "../assets/trash.png"
import { useEffect, useState } from "react"
import ForwardIcon from "../assets/arrow_forward.png"
import UpIcon from "../assets/up.png"
import DownIcon from "../assets/down.png"
import UpGreyIcon from "../assets/up_grey.png"
import DownGreyIcon from "../assets/down_grey.png"

function ActTile({act, setAct, isCreate, removeAct, isAssign, characters, showGroups, hasEnsemble, selectAct, canMoveDown, canMoveUp, moveDown, moveUp}:ActTileProps){
    const [id, setId] = useState(0)

    useEffect(() => {
        //Generate a unique id for the song
        setId(Math.floor(Math.random() * 100000))
    }, [])
    return (
        <div className="ActTile" id={"act-tile-" + act.actId} onClick={(e) => {
            //check if the click was on the trash icon or the input field
            if((e.target as HTMLElement).classList.contains("TrashIcon")){
                return
            }
            if((e.target as HTMLElement).tagName == "INPUT"){
                return
            }
            if((e.target as HTMLElement).classList.contains("UpIcon")){
                return
            }
            if((e.target as HTMLElement).classList.contains("DownIcon")){
                return
            }
            selectAct(act)
        }}>
            <div className="header">
            <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        removeAct()
                    }}/>
                </div>
                <div className="ActNameDiv">
                    <label htmlFor="Act">Act Name: </label>
                    <input type="text" name="" id="" value={act.name} onChange={(val) => {
                        setAct(Act.fromBlank(val.target.value, act.scenes, act.actId))
                    }}/>
                </div>
                <div className="ActActions">
                    <img src={canMoveUp ? UpIcon : UpGreyIcon} alt="" className={"UpIcon " + (canMoveUp ? "" : "disabled")} onClick={()=> {
                        if(canMoveUp){
                            moveUp()
                        }
                    }}/>
                    <img src={canMoveDown ? DownIcon : DownGreyIcon} alt=""className={"DownIcon " + (canMoveDown ? "" : "disabled")} onClick={() => {
                        if(canMoveDown){
                            moveDown()
                        }
                    }} />
                    <img src={ForwardIcon} alt="" className="ForwardIcon" />
                </div>
                
            </div>

            
        </div>
    )
}

export default ActTile