import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newArray= [...foods, newFood]
    setFoods(newArray)
    console.log(newFood);
  }

  
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleClick (food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  
  function handleClick(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
  setFoods(newFoodArray);
  }
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
