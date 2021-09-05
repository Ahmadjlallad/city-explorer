import React from "react";
import { Card, Row } from "react-bootstrap";

const Header = () => {
  const headerStyle = () => {
    return (
      <Card bg={"black"} text={"white"} className="mb-4 header">
        <Row className="filses" md={4}>
          <Card.Header className="card--header">City Explorer</Card.Header>
          <Card.Body>
            <Card.Title className="title">
              {" "}
              Enter a Location below to learn about the weather, restaurants,
              movies and more{" "}
            </Card.Title>
          </Card.Body>
        </Row>
      </Card>
    );
  };
  return <>{headerStyle()}</>;
};
export default Header;
