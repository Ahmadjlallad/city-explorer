import React from "react";
import axios from "axios";
import Weather from "./Weather";
import Map from "./Map";
import ErrorGenerator from "./ErrorGenerator";
import Form from "./Form";
import Movies from "./Movies";
import { Container } from "react-bootstrap";

class FormMap extends React.Component {
  state = {
    place: "",
    locationData: {},
    error: false,
    weather: [],
    movies: [],
  };
  setPlace = (place) => {
    this.setState({ place });
  };
  findExplore = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.place}&format=json`
      );
      const correctName =
        data[0].display_name
          .slice(0, data[0].display_name.search(" "))
          .replace(",", "") === `باريس`
          ? `Paris`
          : data[0].display_name
              .slice(0, data[0].display_name.search(" "))
              .replace(",", "");
      const { data: weather } = await axios.get(
        `https://lab07weatherapi.herokuapp.com/weather.json?`,
        {
          params: {
            lat: data[0].lat,
            lon: data[0].lon,
            city_name: correctName,
            key: process.env.REACT_APP_WEATHER_API_KEY,
          },
        }
      );
      const { data: movies } = await axios.get(
        `https://lab07weatherapi.herokuapp.com/movies?`,
        {
          params: {
            key: process.env.REACT_APP_MOVIES_API_KEY,
            name: correctName,
            page: 1,
          },
        }
      );
      this.setState({
        locationData: data[0],
        error: false,
        weather,
        movies,
      });
    } catch (e) {
      this.setState({ error: true, locationData: {} });
    }
  };

  render() {
    return (
      <Container>
        <Form
          findExplore={this.findExplore}
          setPlace={this.setPlace}
          placeState={this.state.place}
        />
        {this.state.error ? (
          <ErrorGenerator errorMessage="Please Enter a valid city" />
        ) : (
          this.state.locationData.display_name && (
            <>
              {" "}
              <Map locationData={this.state.locationData} />
              <Weather
                weather={this.state.weather}
                errorState={this.state.errorState}
              />
              <Movies
                movies={this.state.movies}
                errorState={this.state.errorState}
              />
            </>
          )
        )}
      </Container>
    );
  }
}
export default FormMap;
