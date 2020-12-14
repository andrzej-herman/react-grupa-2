import React from "react";
import "./Search.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Header = () => {
  const serchForFilms = () => {
    alert("Użytkownik nacisnął przycisk");
  };

  return (
    <InputGroup className="mb-3">
      <FormControl placeholder="proszę wpisać tytuł filmu lub nazwisko aktora" />
      <InputGroup.Append>
        <Button variant="info" onClick={serchForFilms}>
          Szukaj filmów
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Header;
