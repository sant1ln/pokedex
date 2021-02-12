import React from "react";
import "./styles/pokecart.css";
import 'animate.css'
export const Pokecart = ({ img, name,id }) => {
  
  const handleChange = () =>{
    window.location.assign(`http://localhost:3000/pokemon/${id}`)
  }

  return (
    
      <div onClick={handleChange} className="pockecart_container animate__animated animate__fadeIn">
        <img src={img} alt="" />
        <h2>{name}</h2>
      </div>
    
  );
};
