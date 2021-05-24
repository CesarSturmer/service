import React from 'react';
import GoogleMapReact from 'google-map-react';
import {FaMapMarkerAlt} from 'react-icons/fa'

import styled from 'styled-components';

const ContainerMap = styled.div`
  height: 60vh;
  z-index: -1;
`;

function MapBox({coordinates}) {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: -27.6192816,
      lng: -48.5158965,
    },
    zoom: 11,
  };

  return (
    <>
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyCuuOD2A1EY-0qrAy5jpR8-kAR4utBmA0Q',
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {coordinates.map((item, index) => {
            return (
              <AnyReactComponent
                key={index}
                lat={item.lat}
                lng={item.lon}
                text={<FaMapMarkerAlt />}
              />
            )
          })}
        </GoogleMapReact>
      </div>

      {/* <MapContainer 
    center={[-27.6192816, -48.5158965]}
    zoom={11}
    style={{ width: '100%', height: '100%' }}

  >
  <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />



  </MapContainer> */}
    </>
  );
}

export default MapBox;
