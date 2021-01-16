import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Catalog from "./components/catalog/Catalog";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const userSearched = (term) => {
    setSearchTerm(term);
  };

  return (
    <Container className="cont">
      <Header />
      <Search onSearch={userSearched} />
      <Catalog term={searchTerm} />
    </Container>
  );
};

export default App;
