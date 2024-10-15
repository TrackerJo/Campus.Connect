
import { ActorTileProps } from "../constants"
import "./Actor_Tile.css"
import TrashIcon from "../assets/trash.png"

function ActorTile({actor, canDelete, onDelete} :ActorTileProps){
    return (
        <div className={"ActorTile" } id={"actor-tile-" + actor.userId}>
            <div className="header">
                <div className="ActorNameDiv">


                    <label htmlFor="Actor">Actor: {actor.name}</label>

                 </div>
                    

               {canDelete && <div className="ActorTrashDiv">
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        onDelete()
                    }}/>
                </div>}
                
            </div>
            
           
            
       
        </div>
    )
}

export default ActorTile