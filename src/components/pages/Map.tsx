"use client";
import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import L, { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Define the type for marker position (latitude and longitude)
interface MarkerPosition {
  lat: number;
  lng: number;
}

const RealTimeMap: React.FC = () => {
  const [markers, setMarkers] = useState<MarkerPosition[]>([]); // Store marker positions
  const [mapCenter, setMapCenter] = useState<LatLng>(
    new L.LatLng(51.505, -0.09)
  ); // Initial center of the map
  const [zoomLevel, setZoomLevel] = useState<number>(13); // Initial zoom level
  const [isClient, setIsClient] = useState(false); // Check if the code is running on the client

  // Ensure that the component is rendered only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Capture zoom, pan, and double-click events using the map events
  const MapEvents: React.FC = () => {
    // Update zoom level on zoom end
    useMapEvent("zoomend", (event) => {
      setZoomLevel(event.target.getZoom());
    });

    // Update map center on pan end
    useMapEvent("moveend", (event) => {
      setMapCenter(event.target.getCenter());
    });

    // Add a marker when the map is double-clicked
    useMapEvent("dblclick", (event) => {
      const { lat, lng } = event.latlng;
      setMarkers((prevMarkers) => [...prevMarkers, { lat, lng }]);
    });

    return null;
  };

  if (!isClient) {
    // Render nothing on the server or while determining the client
    return null;
  }

  return (
    <div>
      <h3>
        Interactive Map with Zoom, Pan, and Marker Placement on Double-Click
      </h3>
      <p>Current Zoom Level: {zoomLevel}</p>
      <p>
        Map Center: {mapCenter.lat.toFixed(4)}, {mapCenter.lng.toFixed(4)}
      </p>

      <MapContainer
        center={[mapCenter.lat, mapCenter.lng]}
        zoom={zoomLevel}
        style={{ height: "500px", width: "100%" }}
        doubleClickZoom={false} // Disable default zoom on double-click
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Render all markers */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={markerIcon}
          >
            <Popup>
              Marker {index + 1}: [{marker.lat.toFixed(4)},{" "}
              {marker.lng.toFixed(4)}]
            </Popup>
          </Marker>
        ))}

        {/* Map events to handle zoom, pan, and double-click */}
        <MapEvents />
      </MapContainer>
    </div>
  );
};

export default RealTimeMap;
