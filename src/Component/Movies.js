import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

class Movies extends React.Component {
  renderMovies = () => {
    return this.props.errorState
      ? null
      : this.props.movies.map((movie) => {
          if (movie.image_url.match(/null/gm)) return null;
          return (
            <Col sm style={{ width: "500px", margin: "1rem 0" }}>
              <Card style={{ width: "500px" }}>
                <Card.Img
                  style={{ height: "500px" }}
                  variant="top"
                  src={movie.image_url}
                />
                <Card.Body style={{ height: "10rem", overflowY: "scroll" }}>
                  {" "}
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        });
  };
  render() {
    return (
      <Container
        style={{ flexWrap: "wrap", flexDirection: "row" }}
        className="flex justify-content-md-center list-group"
      >
        {this.renderMovies()}
      </Container>
    );
  }
}
export default Movies;
