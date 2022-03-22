import React, { useState } from "react";
import Ingredients from "./Ingredients;";

const Receipts = () => {
  const [meal, setMeal] = useState([]);
  return (
    <div>
      <h1 style={{ color: "blue" }}>Выберите свое любимое блюдо</h1>
      <div>
        <input
          type="radio"
          name="food"
          value="манты"
          onChange={(e) => setMeal(e.target.value)}
        />
        <label>Манты</label>
      </div>
      <div>
        <input
          type="radio"
          name="food"
          value="куурдак"
          onChange={(e) => setMeal(e.target.value)}
        />
        <label>Куурдак</label>
      </div>
      <div>
        <input
          type="radio"
          name="food"
          value="лагман"
          onChange={(e) => setMeal(e.target.value)}
        />
        <label>Лагман</label>
      </div>
      <Ingredients meal={meal} />
    </div>
  );
};

export default Receipts;
