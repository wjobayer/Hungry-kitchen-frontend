import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

export default function MapExample() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
  }
  
  function showPosition(position) {
    setLatitude (position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log(position)
  }
  getLocation();
  console.log(latitude);
  console.log(longitude)
  return (
    <div className="relative w-full rounded-xl shadow-lg">
      <LoadScript googleMapsApiKey="AIzaSyCN5RsuQUGXEAd3TqNpEkHygtmhFxNiDZk">
        <GoogleMap
          mapContainerClassName="w-full h-full rounded-xl"
          zoom={13}
          center={defaultCenter}
        >
          <Marker key="location" position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
