'use strict'

let cartForParty = {
    cake: 2,
    cola: 3,
    cips: 2.5,
    water:1.25,
    chocolate: 4,
}

function calculateTotalPrice(shoppingCart) {
    let price = 0;

    for (const key in shoppingCart){
        price = price + shoppingCart[key];
    }

    return `"Total: €${price}"`;
}

calculateTotalPrice(cartForParty);