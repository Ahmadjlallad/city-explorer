import React from "react";
import { Container, ListGroup } from "react-bootstrap";

class WeatherDay extends React.Component {
  render() {
    return (
      <Container md={4} style={{ width: "40rem", margin: "1rem 0" }}>
        <ListGroup.Item variant="success">
          {" "}
          Day: {this.props.item.date}
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          {" "}
          Forecast: {this.props.item.description}
        </ListGroup.Item>
      </Container>
    );
  }
}
export default WeatherDay;
