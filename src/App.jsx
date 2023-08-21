import { useState, useEffect } from "react";
import Form from "./components/Form";
import FoodDisplay from "./components/FoodDisplay";


function App() {
  //api fetch
  const [foodList, setFood] = useState([]);
  //const [search, setSearch] = useState('');

  const getFood = async () => {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&ignorePantry=true&sort=calories&sortDirection=asc&minCholesterol=0&minFluoride=0&minSaturatedFat=0&minVitaminA=0&minVitaminC=0&minVitaminD=0&minVitaminE=0&minVitaminK=0&minVitaminB1=0&minVitaminB2=0&minVitaminB5=0&minVitaminB3=0&minVitaminB6=0&minVitaminB12=0&minFiber=0&minFolate=0&minFolicAcid=0&minIodine=0&minIron=0&minMagnesium=0&minManganese=0&minPhosphorus=0&minPotassium=0&minSelenium=0&minSodium=0&minSugar=0&minZinc=0&offset=0';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '694f8ca701mshb554bf60b529ddbp1bcd34jsn1b011d23fbef',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
     setFood(result.results)
     console.log(result.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=> {
    getFood()
  },[])


  //title,pic, and nutrition facts in foodDisplay
  return (
    <div className="App">
      <>
      {foodList.map((food) => (
        <FoodDisplay 
        key={food.id} 
        foodTitle={food.title} 
        foodImage={food.image}
        foodCalories={food.nutrition.nutrients[26].amount}
        // foodProtein={food.nutrition.nutrients.protein}
        // foodCarbs={food.nutrition.carbs}
        // foodFat={food.nutrition.Fat}
        />
      ))}
      </>
    </div>
  );
}

export default App;
