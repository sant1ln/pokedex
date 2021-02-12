import React from "react";
import { Link } from "@reach/router";
import "./styles/pokecart.css";
export const Pokecart = ({ img, name,id }) => {
  return (
    <Link to={`pokemon/${id}`}>
      <div className="pockecart_container">
        <img src={img} alt="" />
        <h2>{name}</h2>
      </div>
    </Link>
  );
};
