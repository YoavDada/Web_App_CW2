import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pinIconUrl from '../../css/pin.png';

const DepartmentMap = () => {
    const center = [51.52103480854149, -0.140157575343908]; 
    const zoom = 25;

    const customPinIcon = L.icon({
        iconUrl: pinIconUrl,
        iconSize: [38, 50],    
        iconAnchor: [22, 94],  
        popupAnchor: [-3, -76]
      });

    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '200px', width: '70%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center} icon={customPinIcon}>
                <Popup>
                    <strong>Headquarters 📍</strong>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default DepartmentMap;