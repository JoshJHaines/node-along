const getInput = require("./get-input.js");

const userAge = getInput();
const mentalAge = userAge / 2 + 3;

if (userAge === "--help"){
    console.log("Enter your actual age to find out your mental age.")
} else {
    console.log(mentalAge);
}


