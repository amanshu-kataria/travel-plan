import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class CenterPanel extends Component {
  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{
            lat: this.props.marker.lat,
            lng: this.props.marker.long
          }}
        >
          <Marker
            position={{
              lat: this.props.marker.lat,
              lng: this.props.marker.long
            }}
          />;
        </GoogleMap>
      ))
    );
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBa9rjRnt_NuNSUS3Wh5bMDUJVb2rZR258&libraries=places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: "585px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default CenterPanel;
