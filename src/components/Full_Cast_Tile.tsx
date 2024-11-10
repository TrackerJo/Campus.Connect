import {  FullCastTileProps } from "../constants"
import "./Full_Cast_Tile.css"
import TrashIcon from "../assets/trash.png"


function FullCastTile({canDelete, onDelete} :FullCastTileProps){

    return (
        <div className="FullCastTile">
            <div className="header">
                <div className="FullCastTileName">
                    <label htmlFor="Cast">Full Cast</label>
                </div>
                
                {canDelete && <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        onDelete()
                    }}/>
                </div>
                }
            </div>
            

            
          
        </div>
    )
}

export default FullCastTile