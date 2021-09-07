import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import ErrorGenerator from "./ErrorGenerator";
class Weather extends React.Component {
  handleRequestClose = () => {
    console.log(this.props?.weather);
    console.log(this.props.errorState);
    return !this.props.errorState ? (
      this.props?.weather?.map((item) => {
        return (
          <Container md={4} style={{ width: "40rem", margin: "1rem 0" }}>
            <ListGroup.Item variant="success"> Day: {item.date}</ListGroup.Item>
            <ListGroup.Item variant="success">
              {" "}
              Forecast: {item.description}
            </ListGroup.Item>
          </Container>
        );
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
