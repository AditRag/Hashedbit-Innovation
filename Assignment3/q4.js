// Q4) Take any string with minimum 20 characters. Count 
//     number of consonant and vowel in the string.
const prompt = require("prompt-sync")();
const string = prompt("Enter a string of 20 characters");

let new_string = string.toUpperCase();

let arr = new_string.split('');
let vowels = 0;
let consonant = 0;
let space = 0;

if(arr.length == 20){
for(let i = 0 ; i<arr.length ; i++){
    if((arr[i]=='A')||(arr[i]=='E')||(arr[i]=='I')||(arr[i]=='O')||(arr[i]=='U')){
        vowels++;
    }
    else if(arr[i]==" "){
        space++;
    }
    else{
        consonant++;
    }
}

console.log("Vowels : ",vowels , "Consonants : ",consonant , "Spaces : ",space)
}
else if(arr.length<20){
    console.log("You have entered less than 20 characters");
}
else{
    console.log("You have entered more than 20 characters");
}