import React from 'react';
import { withGoogleMap, withScriptjs , GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { AroundMarker } from './AroundMarker'

class AroundMap extends React.Component {

  render() {
    const location = { lat: -34.397, lng: 150.644 };
    const location1 = { lat: -34.497, lng: 150.544 };

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <AroundMarker location={location}/>
        <AroundMarker location={location1}/>
      </GoogleMap>
    );
  }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap))