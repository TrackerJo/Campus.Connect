import { on } from "events"
import { LocationTileProps } from "../constants"
import "./Location_Tile.css"


import { useEffect, useState } from "react"


function LocationTile({location, onEdit, onDelete, canEdit, canDelete} :LocationTileProps){
    const [isLoadingDelete, setIsLoadingDelete] = useState(false)
    const [isLoadingEdit, setIsLoadingEdit] = useState(false)
   
    return (
        <div className='location-tile'>
            <label htmlFor="">{location.name}</label>
            <label htmlFor="">{location.address}</label>
            {canEdit ? isLoadingEdit ? <div className="loader"></div> : <button className='ActionBtn' onClick={async () => {
                setIsLoadingEdit(true)
                await onEdit()
                setIsLoadingEdit(false)
            }}>Edit</button> : <></>}
            {canDelete ? isLoadingDelete ? <div className="loader"></div> :<button className='ActionBtn' onClick={async () => {
                setIsLoadingDelete(true)
                await onDelete()
                setIsLoadingDelete(false)

            }}>Delete</button> : <></>}
        </div>
    )
}

export default LocationTile