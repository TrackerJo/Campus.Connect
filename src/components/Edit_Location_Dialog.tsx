import {  useEffect, useState } from "react";
import {  EditLocationDialogProps, Location } from "../constants";

import "./Edit_Location_Dialog.css"
import { getLatLongFromAddress } from "../api/distance";
import { GeoPoint } from "firebase/firestore";
import LocationSearchTile from "./Location_Search_Tile";

function EditLocationDialog({editLocation, close, dialogRef, location}: EditLocationDialogProps){
    const [name, setName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [selectedLocation, setSelectedLocation] = useState<Location | undefined>(undefined)
    const [editingLocation, setEditingLocation] = useState<boolean>(false)


    useEffect(() => {
        if(location){
            setName(location.name)
            setAddress(location.address)
        }
    }, [location])
    return (
        <dialog ref={dialogRef}>
            <h2>Edit Location</h2>
            <div className="location-info">
               
                <label htmlFor="">Name: </label>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                } }/>
                <br />
                <label htmlFor="">Address: </label>
                <LocationSearchTile onSelect={(location) => {
                    const newLocation = Location.fromBlank(name, location.description, new GeoPoint(location.lat as number, location.lng as number), false)
                    setAddress(location.description)
                    console.log(location.description)
                    setSelectedLocation(newLocation)
                }}
                />
                <br />
                {editingLocation ? <div className="loader"></div> : <button className="ActionBtn" onClick={async() => {
                    setEditingLocation(true)
                    if((name == "" || address == "" ) && selectedLocation == null){
                        alert("Please fill out all fields")
                        setEditingLocation(false)
                        return
                    }
                    

                   await editLocation(Location.fromBlank(name, address,selectedLocation!.location , location!.isSchool))
                    setEditingLocation(false)

                }}>
                    Edit Location
                </button>}

                <button className="ActionBtn" onClick={() => {
                    close()
                }
                }>
                    Close
                </button>
            </div>
          
            

            
        </dialog>
    );
}

export default EditLocationDialog;