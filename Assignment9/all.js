//Q1)Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function variableScopeExample() {
  if (true) {
      var varVariable = "I am var";      
      let letVariable = "I am let";    
    const constVariable = "I am const"; 

    console.log("Inside block:");
    console.log(varVariable);
    console.log(letVariable);  
    console.log(constVariable);
  }

  console.log("Outside block:");
  console.log(varVariable);  
}

variableScopeExample();

//Q2)Create an array called fruits that contains five different fruit names. Write a function that returns the          second fruit in the array.

console.log("Answer2")
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function SecondFruit() {
  return fruits[1]; 
}

console.log(SecondFruit()); 

//Q3)Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

console.log("Answer3")
function new_Array(arr, newElement) {
  arr.push(newElement);
  arr.pop();
  return arr;
}

const numbers = [1, 2, 3, 4];//array for Q3, Q4 and Q10
console.log(new_Array(numbers, 5));

//Q4)Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

console.log("Answer4")
function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log(squareNumbers(numbers));

//Q5) Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

console.log("Answer5")
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterOddNumbers(numbers1));

//Q6)Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

console.log("Answer6")
const person = {
  name: "Alice",
  age: 25,
  occupation: "C.S. Engineer"
};

function greet(p) {
  console.log(`Hello, my name is ${p.name}. I am ${p.age} years old and work as a ${p.occupation}.`);
}

greet(person);

//Q7)Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

console.log("Answer7")
function getRectangleArea(rect) {
  return rect.width * rect.height;
}

const rectangle = { width: 10, height: 5 };
console.log(getRectangleArea(rectangle));

//Q8)Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

console.log("Answer8")
function getObjectKeys(obj) {
  return Object.keys(obj);
}

const sample = { name: "John", age: 30, city: "Delhi" };
console.log(getObjectKeys(sample));

 //Q9)Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

console.log("Answer9")
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const a = { name: "John", age: 25 };
const b = { city: "Mumbai", occupation: "Designer" };
console.log(mergeObjects(a, b));

//Q10)Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

console.log("Answer10")
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray(numbers));
