import React from "react";
import "./MovieCard.css";
import { Card } from "react-bootstrap";

const MovieCard = (props) => {
  return (
    <Card className="movieCard">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.director}
        </Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link href="#">Zobacz w Filmweb</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
