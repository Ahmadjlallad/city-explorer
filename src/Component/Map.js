import React from "react";
import { Container } from "react-bootstrap";
class Map extends React.Component {
  render() {
    const { lat, lon, display_name } = this.props.locationData;
    return (
      <Container>
        <h2>Welcome TO {display_name}</h2>
        <p>
          {display_name} located At {lon} {lat}
        </p>
        <img
          src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${lat},${lon}&zoom=<zoom>&size=5000x500&format=<format>&maptype=<MapType>&markers=icon:small-black-cutout|${lat},${lon}`}
          alt="map"
        />
      </Container>
    );
  }
}
export default Map;
