import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const DepartmentMap = () => {
    const center = [51.505, -0.09];  // Change this to your desired center
    const zoom = 13;

    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '70%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default DepartmentMap;