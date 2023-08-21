import React from 'react'

function FoodDisplay({foodTitle,foodImage,foodCalories,foodProtein,foodCarbs,foodFat}) {
  return (
    <>

      <div>
        <h2>{foodTitle}</h2>
        <img src={foodImage} alt={foodImage}/>
        <h3>Calories - {foodCalories}</h3>
      </div>

       <div>
        <ul>
          {/* <h3>Protein - {foodProtein}</h3>
          <h3>Carbs - {foodCarbs}</h3>
          <h3>Fat - {foodFat}</h3> */}
        </ul>
     </div>

    </>
    
  );
}

export default FoodDisplay