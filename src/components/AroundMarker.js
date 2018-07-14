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
    const { location, url, user, message } = this.props.post;
    return (
      <Marker
        position={{lat: location.lat, lng: location.lon}}
        //onClick={this.toggleOpen}
        onMouseOver={this.toggleOpen}
        onMouseOut={this.toggleOpen}
      >
        {this.state.isOpen ? <InfoWindow>
          <div>
            <img className="around-marker-image" src={url} alt=""/>
            <p>{`${user}: ${message}`}</p>
          </div>
        </InfoWindow> : null }
      </Marker>
    );
  }
}