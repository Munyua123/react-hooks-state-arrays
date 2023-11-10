import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newArray = [...foods, newFood];
    setFoods(newArray);
    console.log(newFood);
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  // function handleLiClick(id) {
  //   const newFoodArray = foods.filter((food) => food.id !== id);
  //   setFoods(newFoodArray);
  // }
// this is for updating
  function handleLiClick(id) {
    const newFoodsArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodsArray);
  }
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>
        {foodList}
      </ul>
    </div>
  );
}

export default SpicyFoodList;
