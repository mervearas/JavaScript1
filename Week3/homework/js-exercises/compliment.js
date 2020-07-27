'use strict'

function giveCompliment(name) {
    let compliments = ['great', 'amazing', 'beautiful', 'wonderful', 'supersmart', 'hardworking', 'brave', 'cool', 'gorgeous', 'creative']
    const random = Math.floor(Math.random() * compliments.length);
    const compliment = `You are ${compliments[random]}, ${name}!`;
    return compliment;
}

giveCompliment('Merve');
giveCompliment('Merve');
giveCompliment('Merve');