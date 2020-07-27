'use strict'

function validateCreditNumber(cardNumber) {
    // Input must be 16 characters
    if(cardNumber.length !== 16){
        return 'Invalid! The input ' + cardNumber + ' should contain 16 characters.';
    }
    
    // All characters must be numbers
    for(let i=0; i<cardNumber.length; i++){
        if(!Number.isInteger(parseInt(cardNumber[i]))){
            return 'Invalid! The input ' + cardNumber + ' should contain only numbers.';
        }   
    }

    // At least two different numbers should be represented
    let occurancyOfFirstNumber = 0;

    for(let i = 0; i < cardNumber.length; i++) {
        if(cardNumber[0] === cardNumber[i]){
            occurancyOfFirstNumber = occurancyOfFirstNumber + 1;
        }
    }

    if(occurancyOfFirstNumber === 16) {
        return 'Invalid! The input ' + cardNumber + ' should contain al least 2 different number.';
    }

    // The last number must be even
    const lastNumber = cardNumber.slice(-1);

    if(lastNumber % 2 !== 0 ){
        return 'Invalid! The input ' + cardNumber + ' should end with an even number';
    }

    // The sum of all the numbers must be greater than 16
    let total = 0;

    for(let i=0; i<cardNumber.length; i++){
        total = total + parseInt(cardNumber[i])
    }

    if( total < 16 ) {
        return 'Invalid! The sum of the input ' + cardNumber + ' should be greater than 16.';
    }

    return 'Success! The input ' + cardNumber + ' is a valid credit card number!';

}

console.log(validateCreditNumber('b92332119e011114'));
console.log(validateCreditNumber('5555555555555555'));
console.log(validateCreditNumber('8888888818888888'));

