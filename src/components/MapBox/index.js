import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const ContainerMap = styled.div `
  height: 60vh;
  z-index: -1;
`


function MapBox() {

  return (
    <ContainerMap >
     
      <MapContainer
        center={[-27.6192816, -48.5158965]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
        
        
      url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZWR1YXJkb3NjIiwiYSI6ImNrZ2F4a3h4bTBiamIycnJ5YWVpMXVrdGoifQ.b3Duv25Uxi-UxcjkjAnC0w`} />

        <Marker position={[-27.6192816, -48.5158965]} draggable={true} animate={true}>
          <Popup>Hey ! you found me</Popup>
        </Marker>
      </MapContainer>
      

      {/* <MapContainer 
        center={[-27.6192816, -48.5158965]}
        zoom={11}
        style={{ width: '100%', height: '100%' }}
      
      >
      <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

   

      </MapContainer> */}
    </ContainerMap>
  );
}

export default MapBox;
