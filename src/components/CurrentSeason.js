import React from "react";
import FoodCard from "./FoodCard";
import "../styles/CurrentSeason.css";

export default function CurrentSeason() {
  return (
    <div>
      <h1>Produce available in June</h1>
      <div className="container">
        <div className="row foodCardRow">
          <div className="col"><FoodCard /></div>
          <div className="col"><FoodCard /></div>
          <div className="col"><FoodCard /></div>
          <div className="col"><FoodCard /></div>
        </div>
        <div className="row foodCardRow">
          <div className="col"><FoodCard /></div>
          <div className="col"><FoodCard /></div>
          <div className="col"><FoodCard /></div>
          <div className="col"><FoodCard /></div>
        </div>
      </div>
    </div>
  );
}
