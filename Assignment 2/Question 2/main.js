const prompt = require("prompt-sync")();

const num1 = prompt("Enter the first number");

console.log("\n");
const num2 = prompt("Enter the second number");

console.log("\n");

const calculate = (num1, num2, operation) => {
  console.log("\n");

  switch (operation) {
    case 1:
      console.log(num1 + num2);
      break;
    case 2:
      console.log(num1 - num2);
      break;
    case 3:
      console.log(num1 * num2);
      break;
    case 4:
      console.log(num1 / num2);
      break;
    case 5:
      console.log(`
            Add : ${num1 + num2}
            Subtract : ${num1 - num2}
            Multiply : ${num1 * num2}
            Divide : ${num1 / num2}
            `);
      break;
    default:
      console.log("Wrong Input");
  }
};

console.log(`Press 1 : ADD
Press 2 : SUBTRACT
Press 3 : MULTIPLY
Press 4 : DIVIDE
Press 5 : To do above all`);

const operation = prompt("Enter the operation to perform\n");

calculate(parseInt(num1), parseInt(num2), parseInt(operation));
