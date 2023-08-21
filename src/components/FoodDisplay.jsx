import React from 'react'

function FoodDisplay({foodTitle,foodImage,foodCalories,foodProtein,foodCarbs,foodFat}) {
                          //basically all the attributes or props from App.js elements
  return (
    <>
      
      <div>
        <h2>{foodTitle}</h2>                       {/* foods title */}
        <img src={foodImage} alt={foodImage}/>     {/* foods image */}
        <h3>Calories - {foodCalories}</h3>         {/* foods calories */}
      </div>

       <div>
        <ul>
          {/* <h3>Protein - {foodProtein}</h3>*/} {/* will have to add nutrients later */}
          {/*<h3>Carbs - {foodCarbs}</h3> */}     {/* proteins,carbs, and fat*/}
          {/*<h3>Fat - {foodFat}</h3> */}
        </ul>
     </div>

    </>
    
  );
}

export default FoodDisplay