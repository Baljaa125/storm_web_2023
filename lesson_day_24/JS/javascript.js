console.log('Lesson Day 24 - JS Functions, JS DOM keyboard event')

// functions
// function тодорхойлох - параметргүй, утга буцаадаггүй

function myFunction () {
    console.log('it is my function');
}

// function call
myFunction();

// function - 1 параметртэй, утга буцаадаг. 
// addTwo - 5 -> 7 -> жишээ.

function addTwo(number) {
    let x = number + 2;
    return x;
}

console.log(addTwo(5));
console.log(addTwo(11));
console.log(addTwo(45));


// FUNCTION EXPRESSION
const myFunctionTwo = function(){
    console.log('it is my function expression');
}
myFunction();

const myFunctionTwoWithParameter = function (number) {
    let x = number + 2;
    return x;
}
// call function expression
//заавал эхлээд функцээ тодорхойлсны дараа дуудах ёстой.

//ARROW FUNCTION

const = myArrowFunction =() => {
    console.log('it its my arrow function');
}
myArrowFunction(); // суман функцээ дуудах
const myArrowFunctionWithParameter = (number) => {
    let x = number + 2;
    return x;
}
console.log(myArrowFunctionWithParameter(5));
