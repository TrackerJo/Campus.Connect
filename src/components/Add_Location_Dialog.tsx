import {  useState } from "react";
import {  AddLocationDialogProps, Location } from "../constants";

import "./Add_Location_Dialog.css"
import { getLatLongFromAddress } from "../api/distance";
import { GeoPoint } from "firebase/firestore";

function AddLocationDialog({addLocation, close, dialogRef, savedLocations}: AddLocationDialogProps){
    const [name, setName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [selectedLocation, setSelectedLocation] = useState<Location | undefined>(undefined)
    const [addingNewLocation, setAddingNewLocation] = useState<boolean>(false)

    return (
        <dialog ref={dialogRef}>
            <h2>Add Location</h2>
            <div className="location-info">
                <h3>Select from saved locations</h3>
                <select name="" id="saved-locations" onChange={(e) => {
                    setSelectedLocation(savedLocations.find((location) => location.name == e.target.value))
                }}>
                    <option value="" selected>Select a location</option>
                    {savedLocations.map((location, index) => {
                        return (
                            <option value={location.name} key={index}>{location.name} ({location.address})</option>
                        )
                    })}
                </select>
                <h3>Or add a new location</h3>
                <label htmlFor="">Name: </label>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                } }/>
                <br />
                <label htmlFor="">Address: </label>
                <input type="text" value={address} onChange={(e) => {
                    setAddress(e.target.value)
                } }/>
                <br />
                {addingNewLocation ? <div className="loader"></div> : <button className="ActionBtn" onClick={async() => {
                    setAddingNewLocation(true)
                    if((name == "" || address == "") && selectedLocation == null){
                        alert("Please fill out all fields")
                        setAddingNewLocation(false)
                        return
                    }
                    if(selectedLocation){
                        addLocation(selectedLocation)
                        return
                    }
                    const latLong = await getLatLongFromAddress(address)
                    addLocation(Location.fromBlank(name, address, new GeoPoint(latLong.lat, latLong.lon)))
                    setAddingNewLocation(false)

                }}>
                    Add Location
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

export default AddLocationDialog;