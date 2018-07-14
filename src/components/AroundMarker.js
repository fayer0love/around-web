import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps'

export class AroundMarker extends React.Component {
  state = {
    isOpen: false,
  }

  toggleOpen = () => {
    this.setState((prevState) => {
      return {
        isOpen : !prevState.isOpen,
      }
    });
  }

  render() {
    const { location } = this.props.post;
    return (
      <Marker
        position={{lat: location.lat, lng: location.lon}}
        onClick={this.toggleOpen}
      >
        {this.state.isOpen ? <InfoWindow>
          <div>hi</div>
        </InfoWindow> : null }
      </Marker>
    );
  }
}