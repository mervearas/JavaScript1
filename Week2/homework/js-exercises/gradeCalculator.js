'use strict'

function gradeCalculator(score){
    const scorePercentage = (score / 100) * 100; //This calculates the percentage of the score.
    let grade = '';

    //Convert percentage into grade!
    if(scorePercentage>=90 && scorePercentage <=100){
        grade = 'A';
    }else if(scorePercentage>=80 && scorePercentage < 90){
        grade = 'B';
    }else if(scorePercentage>=70 && scorePercentage < 80){
        grade = 'C';
    }else if(scorePercentage>=60 && scorePercentage < 70){
        grade = 'D';
    }else if(scorePercentage>=50 && scorePercentage < 60){
        grade = 'E';
    }else if(scorePercentage>=0 && scorePercentage < 50){
        grade = 'F';
    }

    console.log(`You got a ${grade} (${scorePercentage}%) !`);
}

//Check each grade!
gradeCalculator(93)
gradeCalculator(89.9)
gradeCalculator(75)
gradeCalculator(69)
gradeCalculator(52)
gradeCalculator(33)