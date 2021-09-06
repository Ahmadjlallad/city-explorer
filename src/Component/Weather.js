import React from "react";
import { Container, ListGroup } from "react-bootstrap";
class Weather extends React.Component {
  handleRequestClose = () => {
    return this.props?.myData !== `No city found`
      ? this.props?.myData?.map((item, i) => {
          return (
            <Container key={i} style={{ width: "15rem", marginTop: "1rem" }}>
              <ListGroup.Item variant="success">
                {" "}
                Day: {item.date}
              </ListGroup.Item>
              <ListGroup.Item variant="success">
                {" "}
                Forecast: {item.description}
              </ListGroup.Item>
            </Container>
          );
        })
      : "please chose Amman or Paris or Seattle";
  };
  render() {
    this.handleRequestClose();
    return <ListGroup variant="flush">{this.handleRequestClose()}</ListGroup>;
  }
}

export default Weather;
