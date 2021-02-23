const getInput = require("./get-input.js");

const userAge = getInput();
const mentalAge = userAge / 2 + 3;
const ageNextYear = parseInt(userAge) + 1

if (userAge === "--help"){
    console.log("Enter your actual age to find out your mental age.")
} else {
    console.log("----------------------------------------------------")
    console.log("You are " + userAge + " years old. So your mental age is " + mentalAge + "!");
    console.log("You will be " + ageNextYear + " next year!")
    console.log("----------------------------------------------------")
}


