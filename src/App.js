import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

const App = () => {
  return (
    <Container className="cont">
      <Header />
      <Search />
    </Container>
  );
};

export default App;
