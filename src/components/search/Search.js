import React, { useState } from "react";
import "./Search.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = (props) => {
  const [whatUserWant, setWhatUserWant] = useState("");

  // const serchForFilms = () => {
  //   props.onSearch(whatUserWant);
  // };

  const userTyped = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="proszę wpisać tytuł filmu lub nazwisko reżysera"
        onChange={userTyped}
      />
      {/*<InputGroup.Append>*/}
      {/*  <Button variant="info" onClick={serchForFilms}>*/}
      {/*    Szukaj filmów*/}
      {/*  </Button>*/}
      {/*</InputGroup.Append>*/}
    </InputGroup>
  );
};

export default Search;
