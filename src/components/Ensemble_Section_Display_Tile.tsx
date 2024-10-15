import { EnsembleSectionDisplayTileProps } from "../constants"
import "./Ensemble_Section_Display_Tile.css"
import TrashIcon from "../assets/trash.png"



function EnsembleSectionDisplayTile({ensembleSection, canDelete, onDelete} :EnsembleSectionDisplayTileProps){

    return (
        <div className="EnsembleSectionDisplayTile">
            <div className="header">
                <div className="EnsembleSectionName">
                    <label htmlFor="Ensemble">{"Ensemble " + (!ensembleSection.includeCustom ? ensembleSection.includeAll ? "(Everyone)" : ensembleSection.includeFemale ? "(Females)" : "(Males)" : "(Custom)"  )}</label>
                </div>
                
            {canDelete && <div>
                    <img src={TrashIcon} alt="" className="TrashIcon" onClick={() => {
                        onDelete()
                    }}/>
                </div>}
                
            </div>
            <br />
                {ensembleSection.includeCustom && <div>
                    <label htmlFor="">Custom Actors: </label>
                    <br />
                    {ensembleSection.customActors.map((actor, index) => {
                        return <div key={index} className="AssignedActor">
                            <label htmlFor="">{actor.name}</label>

                        </div>
                    })}
                   
                     </div>}



            

         
            

            
          
        </div>
    )
}

export default EnsembleSectionDisplayTile