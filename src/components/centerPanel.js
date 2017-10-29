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
          defaultCenter={{ lat: 31.51903, lng: 75.903393 }}
        >
          <Marker
            position={{
              lat: 31.51903,
              lng: 75.903393
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
