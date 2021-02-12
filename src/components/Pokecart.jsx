import React from "react";
import "./styles/pokecart.css";
export const Pokecart = ({ img, name,id }) => {
  const handleChange = () =>{
    window.location.assign(`http://localhost:3000/pokemon/${id}`)
  }

  return (
    
      <div onClick={handleChange} className="pockecart_container">
        <img src={img} alt="" />
        <h2>{name}</h2>
      </div>
    
  );
};
