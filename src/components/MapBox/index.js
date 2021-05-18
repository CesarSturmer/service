import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Map } from 'react-leaflet';
import Link from 'next/link';
import styled from 'styled-components'



function MapBox() {
    return (
      <div>

      <MapContainer 
        center={[-27.6192816, -48.5158965]}
        zoom={11}
        style={{ width: '100%', height: '100%' }}
      
      >
      <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

   

      </MapContainer>
    </div>
    )
}

export default MapBox;