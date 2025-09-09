const prompt = require("prompt-sync")();

let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");

function prdt(num1 , num2 ){
    newNum1 = (num1%10)*(num2%10);
    newNum2 = ((num1 - (num1%10))%100)*((num2 - (num2%10))%100);
    summ(newNum1,newNum2);
}

function summ(newNum1 , newNum2){
    console.log(newNum1+newNum2);

}

prdt(num1 , num2);