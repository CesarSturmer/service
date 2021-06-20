import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import styled from 'styled-components'

const ContainerMap = styled.div`
  height: 60vh;
  z-index: -9999;
`

function MapBox({ children, latCircle, lonCircle, radius, zoom, coordinatesProvider }) {

  const defaultProps = {
    center: {
      lat: -27.6192816,
      lng: -48.5158965,
    }    
  }
  return (
    <>
      <ContainerMap>
        <div style={{ height: '50vh', width: '100%' }}>
          {coordinatesProvider.length !== 0 ? (
            coordinatesProvider.map((cepMap, index) => {
              const setDefaultProps = {
                center: {
                  lat: cepMap.lat,
                  lng: cepMap.lon,
                }                
              }
              return(
                <GoogleMapReact
                bootstrapURLKeys={{
                  key: 'AIzaSyCuuOD2A1EY-0qrAy5jpR8-kAR4utBmA0Q',
                }}
                key={index}
                defaultCenter={setDefaultProps.center}
                defaultZoom={zoom}
                onGoogleApiLoaded={({ map, maps }) =>
                  new maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.3,
                    map,
                    center: {
                      lat: +latCircle,
                      lng: +lonCircle,
                    },
                    zoom: 13,
                    radius: radius,
                  })
                }
                yesIWantToUseGoogleMapApiInternals = {true}
              >
                {children}
              </GoogleMapReact>
              )
            })
          ) : (
            <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyCuuOD2A1EY-0qrAy5jpR8-kAR4utBmA0Q',
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={zoom}
            onGoogleApiLoaded={({ map, maps }) =>
              new maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.3,
                map,
                center: {
                  lat: +latCircle,
                  lng: +lonCircle,
                },
                zoom: 13,
                radius: radius,
              })
            }
            yesIWantToUseGoogleMapApiInternals = {true}
          >
            {children}
          </GoogleMapReact>
          )}          
         
        </div>
      </ContainerMap>
    </>
  )
}

export default MapBox
