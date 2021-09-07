import React from "react";
import { Card } from "react-bootstrap";
class ErrorGenerator extends React.Component {
  render() {
    return (
      <Card
        bg={"danger"}
        text="white"
        style={{ width: "18rem", margin: "0 auto" }}
        className="mb-2"
      >
        <Card.Header>Error</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.errorMessage}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default ErrorGenerator;
