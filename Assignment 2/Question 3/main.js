const prompt = require("prompt-sync")();
const salary = prompt("Enter your salary in numeric")

function findTax(salary, type_salary , tax){

    if((salary<=500000) && (salary>0)){
        type_salary = 1;
        tax = 0;
    }
    else if((salary<=1000000) && (salary >500000)){
        type_salary = 2;
        tax = salary*0.1;
    }
    else if ((salary<=1500000) && (salary > 1000000)){
        type_salary =3;
        tax = salary*0.2;
    }
    else if(salary>1500000){
        type_salary =4
        tax = salary*0.3;
    }
    else{
         type_salary = 5;
    }

    switch(type_salary){
        case 1:
            console.log(`Tax on salary of ${salary} is 0%`);
            console.log(`Tax : ${tax}`);
            break;
        case 2:
            console.log(`Tax on salary of ${salary} is 10%`);
            console.log(`Tax : ${tax}`);
            break;
            
        case 3:
            console.log(`Tax on salary of ${salary} is 20%`);
            console.log(`Tax : ${tax}`);
            break;
            
        case 4:
            console.log(`Tax on salary of ${salary} is 30%`);
            console.log(`Tax : ${tax}`);
            break;
            
        default:
            console.log(`Salary entered cannot be negative`);
            break;
            
    }

}
findTax(salary , type_salary , tax)