import React from "react";
import FoodCard from "./FoodCard";

export default function CurrentSeason() {
  return (
    <div>
      <h1>Produce available in June</h1>
      <div class="container">
        <div class="row">
          <div class="col"><FoodCard /></div>
          <div class="col"><FoodCard /></div>
          <div class="col"><FoodCard /></div>
          <div class="col"><FoodCard /></div>
        </div>
      </div>
    </div>
  );
}
