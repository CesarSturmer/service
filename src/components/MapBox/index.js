import React from 'react'
import GoogleMapReact from 'google-map-react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import styled from 'styled-components'

const ContainerMap = styled.div`
  height: 60vh;
  z-index: -9999;
`

function MapBox({coordinates}) {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: -27.6192816,
      lng: -48.5158965,
    },
    zoom: 10,
  }

  return (
    <>
    <ContainerMap>
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
                text={<FaMapMarkerAlt size={20} />}  
              />
            )
          })}
        </GoogleMapReact>
      </div>
      </ContainerMap>
    </>
  )
}

export default MapBox
