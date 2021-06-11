import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

const ContainerMap = styled.div`
  height: 60vh;
  z-index: -9999;
`;

function MapBox({ coordinates, coordinatesMap }) {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: -27.6192816,
      lng: -48.5158965,
    },
    zoom: 12,
  };

  return (
    <>
      <ContainerMap>
        <div style={{ height: '50vh', width: '100%' }}>
          {coordinatesMap.length !== 0 ? (
            coordinatesMap.map((cepMap, index) => {
              const setDefaultProps = {
                center: {
                  lat: cepMap.lat,
                  lng: cepMap.lon,
                },
                zoom: 13,
              };

              return (
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyCuuOD2A1EY-0qrAy5jpR8-kAR4utBmA0Q',
                  }}
                  defaultCenter={setDefaultProps.center}
                  defaultZoom={setDefaultProps.zoom}
                  key={index}
                  yesIWantToUseGoogleMapApiInternals={true}
                  onGoogleApiLoaded={({ map, maps }) =>
                    new maps.Circle({
                      strokeColor: '#FF0000',
                      strokeOpacity: 0.8,
                      strokeWeight: 2,
                      fillColor: '#FF0000',
                      fillOpacity: 0.3,
                      map,
                      center: {
                        lat: setDefaultProps.center.lat,
                        lng: setDefaultProps.center.lng,
                      },
                      radius: 1000,
                    })
                  }
                >
                  {coordinates.map((item, index) => {
                    return (
                      <AnyReactComponent
                        key={index}
                        lat={item.lat}
                        lng={item.lon}
                        text={<FaMapMarkerAlt size={20} />}
                      />
                    );
                  })}
                </GoogleMapReact>
              );
            })
          ) : (
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
                    text={<FaMapMarkerAlt size={20} />}
                  />
                );
              })}
            </GoogleMapReact>
          )}
        </div>
      </ContainerMap>
    </>
  );
}

export default MapBox;