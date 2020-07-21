'use strict'
let myRecipe={ 
    mealName: 'Menemen',
    serves: 2,
    ingredients: ['3 tomatoes', '2 tsp butter', '2 eggs', 'spices']
}
for(let key in myRecipe){
    console.log(`${key} : ${myRecipe[key]}`)
}