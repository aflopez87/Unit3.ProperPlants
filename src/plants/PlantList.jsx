import "./plants.css";
import React from "react";
import PlantAdd from  "./PlantAdd"

export default function PlantList({ plants, addToCart }) {
  return (
    <div className="plant-list" >
        {plants.map((plant) => (
          <div key={plant.id}>
            <p>{plant.image}</p>
            <h3>{plant.name}</h3>
            <PlantAdd onClick={()=> addToCart(plant)}/>
          </div>
        ))}
    </div>
  );
};

