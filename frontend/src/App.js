import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker issue with Leaflet in React
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = new L.Icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const center = [60.1695, 24.9354]; // Default to Helsinki

function App() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/trains");
        setTrains(response.data);
      } catch (error) {
        console.error("Error fetching train data", error);
      }
    };

    fetchTrainData();
    const interval = setInterval(fetchTrainData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={center} zoom={6} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {trains.map((train, index) => (
        <Marker
          key={index}
          position={[train.location.coordinates[1], train.location.coordinates[0]]}
          icon={defaultIcon}
        >
          <Popup>
            <strong>Train Number:</strong> {train.trainNumber} <br />
            <strong>Speed:</strong> {train.speed} km/h
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
