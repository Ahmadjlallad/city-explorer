import React from "react";
import { Card, Col } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <Col sm style={{ width: "500px", margin: "1rem 0" }}>
        <Card style={{ width: "500px" }}>
          <Card.Img
            style={{ height: "500px" }}
            variant="top"
            src={this.props.movie.image_url}
          />
          <Card.Body style={{ height: "10rem", overflowY: "scroll" }}>
            {" "}
            <Card.Title>{this.props.movie.title}</Card.Title>
            <Card.Text>{this.props.movie.overview}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default Movie;
