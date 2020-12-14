import React from "react";
import "./Header.css";
import { Jumbotron, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron className="jumbo">
      <h1>Filmoteka</h1>
      <p>Portal filmowy z wyszukiwarką filmów oraz aktorów</p>
      <p>
        <Button variant="info">Pokaż najnowsze filmy</Button>
      </p>
    </Jumbotron>
  );
};

export default Header;
