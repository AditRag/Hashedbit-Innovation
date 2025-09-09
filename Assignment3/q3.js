// Q3) let string = 'INDIA'
//     output = 'INDONESIA'
//     Use array.splice

let string = "INDIA";
let arr_str = string.split('')
let new_string = arr_str.splice(3, 0, 'O', 'N', 'E', 'S');
let output = arr_str.join(''); 
console.log("Output = ", output)