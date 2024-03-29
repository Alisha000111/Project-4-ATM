#! /usr/bin/env node
import inquirer from "inquirer";
let my_balance = 50000
let my_pin = 12345
let pin_check = await inquirer.prompt([
    {message:"Enter your pin",type:"number",name:"Pin"},
]);
if(pin_check.Pin === my_pin){
    let list_ans = await inquirer.prompt([
        {message:"select any option",type:"list",name:"list",choices:["withdraw","check balance"]},
    ]);
    if(list_ans.list === "withdraw"){
        let amount = await inquirer.prompt([
            {message:"Enter your amount",type:"number",name:"amount"},
        ]);
        if(amount.amount <= my_balance && amount.amount >=500){
        my_balance -= amount.amount;
        console.log("your remaining balance is:" + my_balance);
        }
    else{
        console.log("invalid amount");
    }
    }
    else if(list_ans.list === "check balance"){
        console.log("your balance is:" + my_balance);
    }
}
else{
console.log("invalid")
}

