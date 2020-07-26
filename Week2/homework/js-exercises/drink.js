'use strict';
let drinkTray = [];
// create count object to write the count of the drinks
const count = {};
const drinkTypes = ["cola", "lemonade", "water"];

for (let i = 0; i < 5; i++) {
    // get drink type from drinkTypes array
    const drinkType = drinkTypes[i];
    // we need to push each item at least once
    drinkTray.push(drinkType);

    // cola and lemonade should be written twice in the drinkTray, Check if it is not water.
    if(drinkType !== "water") {
        // check if the key is already exist in the count object and count is smaller then 2, then add 1 to the count, and push one more to the drinkTray
        // else if the key is not found add the key with the value of 1 and push the drink to the drinkTray
        if(count[drinkType] && count[drinkType] < 2) {
            count[drinkType] = count[drinkType] + 1;
            drinkTray.push(drinkType);
        } else {
            count[drinkType] = 1;
            drinkTray.push(drinkType);
        }
    }
}
console.log('"Hey guys, I brought a ' + drinkTray +'!"');
