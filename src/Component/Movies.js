import React from "react";
import { Container } from "react-bootstrap";
import Movie from "./Movie";
class Movies extends React.Component {
  renderMovies = () => {
    return this.props.errorState
      ? null
      : this.props.movies.map((movie) => {
          if (movie.image_url.match(/null/gm)) return null;
          return <Movie movie={movie} />;
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
