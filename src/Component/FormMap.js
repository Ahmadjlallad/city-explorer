import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

import Weather from "./Weather";

class FormMap extends React.Component {
  #key = `pk.fe3a26c7b39aacd608666617a027497e`;
  state = {
    place: "",
    locationData: {},
    error: false,
    myData: [],
  };
  findExplore = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `https://eu1.locationiq.com/v1/search.php?key=${this.#key}&q=${
          this.state.place
        }&format=json`
      );
      const { data: myData } = await axios.get(
        `https://lab07weatherapi.herokuapp.com/weather?lat=${data[0].lat}&lon=${
          data[0].lon
        }&city_name=${
          data[0].display_name
            .slice(0, data[0].display_name.search(" "))
            .replace(",", "") === `باريس`
            ? `Paris`
            : data[0].display_name
                .slice(0, data[0].display_name.search(" "))
                .replace(",", "")
        }`
      );
      this.setState({
        locationData: data[0],
        error: false,
        myData,
      });
    } catch (e) {
      this.setState({ error: true, locationData: {} });
    }
  };
  renderMap = () => {
    const { lat, lon, display_name } = this.state.locationData;
    return (
      <div>
        <h2>Welcome TO {display_name}</h2>
        <p>
          {display_name} located At {lon} {lat}
        </p>
        <img
          src={`https://maps.locationiq.com/v3/staticmap?key=${
            this.#key
          }&center=${lat},${lon}&zoom=<zoom>&size=5000x500&format=<format>&maptype=<MapType>&markers=icon:small-black-cutout|${lat},${lon}`}
          alt="map"
        />
      </div>
    );
  };
  errorComponent = () => {
    return (
      <Card
        bg={"danger"}
        text="white"
        style={{ width: "18rem", margin: "0 auto" }}
        className="mb-2"
      >
        <Card.Header>Error</Card.Header>
        <Card.Body>
          <Card.Title>Please Enter a valid city </Card.Title>
        </Card.Body>
      </Card>
    );
  };
  render() {
    return (
      <>
        <Form onSubmit={this.findExplore}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Where Would you like to explore</Form.Label>
            <Form.Control
              onChange={(e) => {
                this.setState({ place: e.target.value });
              }}
              type="text"
              placeholder="Enter a place"
              value={this.state.place}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            explore 🤠
          </Button>
        </Form>
        {this.state.error
          ? this.errorComponent()
          : this.state.locationData.display_name && this.renderMap()}
        {this.state.error ? null : <Weather myData={this.state.myData} />}
      </>
    );
  }
}
export default FormMap;
