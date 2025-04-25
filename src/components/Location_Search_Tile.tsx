import React, { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import "./Location_Search_Tile.css";
import { LocationSearchTileProps, Place } from "../constants";
import { on } from "events";


const libraries: ["places"] = ["places"];



function LocationSearchTile({onSelect, address, setAddress}: LocationSearchTileProps) {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_GOOGLE_API, libraries });

  const [predictions, setPredictions] = useState<Place[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [justSelected, setJustSelected] = useState(false);

  useEffect(() => {
    if(justSelected){
      setJustSelected(false)
      return
    }
    if (!address) {
      setPredictions([]);
      return;
    }
    
    
    const fetchPredictions = async () => {
      const service = new google.maps.places.AutocompleteService();
      service.getPlacePredictions({ input: address, types: ["geocode"] }, (result, status) => {
        console.log(result);
        if (status === google.maps.places.PlacesServiceStatus.OK && result) {
          setPredictions(result.map(pred => ({ description: pred.description, place_id: pred.place_id })));
        } else {
          setPredictions([]);
        }
      });
    };
    
    const timeout = setTimeout(fetchPredictions, 300);
    return () => clearTimeout(timeout);
  }, [address]);

  const handleSelect = async (place: Place) => {
    const service = new google.maps.places.PlacesService(document.createElement("div"));
    service.getDetails({ placeId: place.place_id }, (details, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && details) {
        setSelectedPlace({
          description: details.formatted_address ?? "",
          place_id: place.place_id,
          lat: details.geometry?.location?.lat(),
          lng: details.geometry?.location?.lng(),
        });
        setJustSelected(true);
        onSelect({
          description: details.formatted_address ?? "",
          place_id: place.place_id,
          lat: details.geometry?.location?.lat(),
          lng: details.geometry?.location?.lng(),
        });
        setAddress(details.formatted_address ?? "");
        setPredictions([]);
      }
    });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Search for an address"
        className="search-input"
      />
      {predictions.length > 0 && (
        <ul className="search-results">
          {predictions.slice(0, 5).map((place) => (
            <li
              key={place.place_id}
              onClick={() => handleSelect(place)}
              className="search-item"
            >
              {place.description}
            </li>
          ))}
        </ul>
      )}
     
    </div>
  );
}

export default LocationSearchTile;