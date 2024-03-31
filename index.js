#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 94923;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
//conditions
if (pinAnswer.pin === mypin) {
    console.log("Your Pin is Correct");
    let operatioAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "Fast cash", "check balance"],
        },
    ]);
    // if user select withdraw
    if (operatioAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`the remaining balance is ${balance}`);
        }
        else {
            console.log("You have Insufficient balance");
        }
    }
    // if userselect fast cash
    else if (operatioAns.operation === "Fast cash") {
        let FasthcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "3000", "5000", "15000"],
            },
        ]);
        if (FasthcashAns.amount <= myBalance) {
            let balance2 = myBalance - FasthcashAns.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
        else {
            console.log("You have insufficient amount");
        }
    }
    else if (operatioAns.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Your pin is wrong");
}
