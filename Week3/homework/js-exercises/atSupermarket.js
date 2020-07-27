'use strict'
let shoppingCart = ['bananas', 'milk'];

function addToShoppingCart(groceryItem) { 
    shoppingCart.push(groceryItem);

    if(shoppingCart.length > 3){
        shoppingCart.shift();
    }

    let shoppingList = '';
    // loops through the array in order to list out items
    for(let i = 0; i < shoppingCart.length; i++){
        if(shoppingList === ''){
            shoppingList = shoppingCart[i];
        } else {
            shoppingList = shoppingList + ", " + shoppingCart[i];
        }
    }

    //returns with the shoppingCard
    return "You bought " + shoppingList + "!";
}

console.log(addToShoppingCart('grapes'));
console.log(addToShoppingCart('bread'));
console.log(addToShoppingCart('cola'));