'use strict'
let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);
let withoutCommas = myString.replace(/,/g, ' ');
console.log(withoutCommas);