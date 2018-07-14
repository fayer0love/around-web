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
    return (
      <Marker
        position={this.props.location}
        onClick={this.toggleOpen}
      >
        {this.state.isOpen ? <InfoWindow>
          <div>hi</div>
        </InfoWindow> : null }
      </Marker>
    );
  }
}