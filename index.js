#!/usr/bin/env node
import inquirer from "inquirer";
let exchangeRate = {
    "USD": 1,
    "EUR": 0.9,
    "CAD": 1.3,
    "PKR": 280,
    "JYP": 113,
    "AUD": 1.65
};
// prompt to select currencies to convert from and to:
let userAnswer = await inquirer.prompt([
    {
        name: "FromCurrency",
        type: "list",
        message: "Select the currency to convert from: ",
        choices: ["USD", "EUR", "CAD", "PKR", "JYP", "AUD"]
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select the currency to convert into: ",
        choices: ["USD", "EUR", "CAD", "PKR", "JYP", "AUD"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount for conversion: "
    }
]);
// Currency conversion:
let from_amount = exchangeRate[userAnswer.FromCurrency];
let to_amount = exchangeRate[userAnswer.toCurrency];
let amount = userAnswer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Print converted amount 
console.log("Converted Amount = ", converted_amount);
