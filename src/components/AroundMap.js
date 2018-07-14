import React from 'react';
import { withGoogleMap, withScriptjs , GoogleMap } from 'react-google-maps'
import { AroundMarker } from './AroundMarker'
import { POS_KEY } from '../constants'

class AroundMap extends React.Component {
  render() {
    const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat, lng: lon }}
      >
        {this.props.posts.map((post) => {
          const postsLocation = post.location;
          const location = { lat: postsLocation.lat, lng: postsLocation.lon };
          return <AroundMarker location={location} key={post.url}/>
        })}
        </GoogleMap>
    );
  }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap))