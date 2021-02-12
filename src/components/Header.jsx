import React from "react";
import { Link } from "@reach/router";
import "@fortawesome/fontawesome-free/css/all.css";
import "./styles/header.css";
export const Header = () => {
  return (
    <header className="header_container">
      <Link to="/">
          <h1>Pokedex</h1>
          <i className="fas fa-globe-americas"></i>
      </Link>
    </header>
  );
};
