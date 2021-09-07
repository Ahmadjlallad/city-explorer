import React from "react";
import { Button, Form } from "react-bootstrap";

class MyForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.findExplore}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Where Would you like to explore</Form.Label>
          <Form.Control
            onChange={(e) => {
              this.props.setPlace(e.target.value);
            }}
            type="text"
            placeholder="Enter a place"
            value={this.props.placeState}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          explore 🤠
        </Button>
      </Form>
    );
  }
}
export default MyForm;
