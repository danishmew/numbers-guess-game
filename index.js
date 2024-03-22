#! /usr/bin/env node
//declare above path for publishing project "called SHABANG", it is an executable file
//Secnario
// 1) computer will generate a random number
// 2) user input for gussing number
// 3) compare user input with computer generated number and show result
//import inquirer from library  
import inquirer from "inquirer";
//declare variable naming "randomNumber & answer" variable type const
//Math.random() generate 0 to 1 number it give values in points
//Math.floor() it remove point value as generated with Math.random() 
//set it's value from 1 to 6 random numbers 
const randomNumber = Math.floor(Math.random() * 6 + 1);
//declare Key objects naming "userGuessedNumber"
const answers = await inquirer.prompt([{
        name: "userGuessedNumber", type: "number", message: "Please guess a system generated number."
    },
]);
//conditional statement
//in if condition user guest number is equal to randomNumber generate with Math.floor(Math.random() function
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you gussed right number.");
}
else {
    console.log(`"Sorry! you gussed wrong number. It is ${randomNumber}.`);
}
