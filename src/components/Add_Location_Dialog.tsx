import {  useState } from "react";
import {  AddLocationDialogProps, Location } from "../constants";

import "./Add_Location_Dialog.css"
import { getLatLongFromAddress } from "../api/distance";
import { GeoPoint } from "firebase/firestore";
import LocationSearchTile from "./Location_Search_Tile";

function AddLocationDialog({addLocation, close, dialogRef, savedLocations}: AddLocationDialogProps){
    const [name, setName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [selectedLocation, setSelectedLocation] = useState<Location | undefined>(undefined)
    const [addingNewLocation, setAddingNewLocation] = useState<boolean>(false)

    return (
        <dialog ref={dialogRef}>
            <h2>Add Location</h2>
            <div className="location-info">
                {savedLocations.length > 0 ? <> <h3>Select from saved locations</h3>
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
                <h3>Or add a new location</h3></> : <h3>Add a new location</h3>}
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
                {addingNewLocation ? <div className="loader"></div> : <button className="ActionBtn" onClick={async() => {
                    setAddingNewLocation(true)
                    if((name == "") && selectedLocation == null){
                        alert("Please fill out all fields")
                        setAddingNewLocation(false)
                        return
                    }
                    if(selectedLocation){
                        addLocation(selectedLocation)
                        return
                    }
                    const latLong = await getLatLongFromAddress(address)
                    console.log(latLong)
                    addLocation(Location.fromBlank(name, address, new GeoPoint(latLong.lat, latLong.lon), false))
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