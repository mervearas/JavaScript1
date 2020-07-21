'use strict';
let drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];
for (let i = 0; i < 5; i++) {
    drinkTray.push(drinkTypes[i]);
    if (i<= 1) { 
        drinkTray.push(drinkTypes[i]);
    }
}
console.log('"Hey guys, I brought a ' + drinkTray +'!"');
