import React from "react";
import { ListGroup } from "react-bootstrap";
import ErrorGenerator from "./ErrorGenerator";
import WeatherDay from "./WeatherDay";
class Weather extends React.Component {
  handleRequestClose = () => {
    console.log(this.props?.weather);
    console.log(this.props.errorState);
    return !this.props.errorState ? (
      this.props?.weather?.map((item) => {
        return <WeatherDay item={item} />;
      })
    ) : (
      <ErrorGenerator errorMessage="There are No weather Data" />
    );
  };
  render() {
    this.handleRequestClose();
    return (
      <ListGroup
        style={{ flexWrap: "wrap", flexDirection: "row" }}
        variant="flush"
      >
        {this.handleRequestClose()}
      </ListGroup>
    );
  }
}

export default Weather;
