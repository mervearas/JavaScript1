'use strict'

let numChildren = [1, 2, 3, 4, 5]
let partnerNames = ['Emre', 'Emir', 'Merve', 'Nisa', 'Selim']
let locations = ['Amsterdam', 'Leiden', 'Bursa', 'Istanbul', 'Den Haag']
let jobs = ['web Developer', 'teacher', 'doctor', 'dentist', 'lawyer']

function tellFortune(numOfChild, name, location, job) {
    //length of the array is always 5.
    const random = Math.floor(Math.random() * 5);
    const fortune = `You will be a ${jobs[random]} in ${locations[random]}, married to ${partnerNames[random]} with ${numChildren[random]} kids.`
    return fortune
}

tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);

