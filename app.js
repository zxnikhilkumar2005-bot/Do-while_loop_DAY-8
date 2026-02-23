const prompt = require("prompt-sync")();
// let Compute = Math.floor((Math.random()*100)+1);
// let user ;
// let attempt = 0
// do{
//     attempt++;
//     user = Number(prompt("Enter a Number Between 1 to 100:  "))
//     if (user>Compute){
//         console.log("too large");
//     }else if(user < Compute ){
//         console.log("too small");
//     }else if (user == Compute){
//         console.log(`Congratulations, you guessed nuber correctly! ans in ${attempt} Attempt`);
//     }else{
//         console.log("INVALID NUMBER");
//     }
// }while(user != Compute);
// console.log( `The number is ${Compute}`);


// Q 33. Sasta Calculator 
// let n;
// do {
//     console.log("Enter 1 for addition ");
//     console.log("Enter 1 for subtraction");
//     n =Number(prompt("Enter a number"))
//     switch
// }while()

// let n = Number(prompt("Enter a number: "));
// let temp = n;//18 
// let sum = 0;

// do {
//     let digit = temp % 10;   // last digit 18 % 10 = 8 
//     sum += digit;            // add in sum
//     temp = Math.floor(temp / 10); // remove last digit
// } while (temp > 0);

// // Check Harshad
// if (n % sum === 0) {
//     console.log("Harshad Number");
// } else {
//     console.log("Not a Harshad Number");
// }

//  Abundant Number 

// let n = Number(prompt("Enter a number: "));
// let i = 1;
// let sum = 0;

// do {
//     if (n % i === 0) {
//         sum += i;  
//     }
//     i++;
// } while (i < n);   

// if (sum > n) {
//     console.log("Abundant Number");
// } else {
//     console.log("Not an Abundant Number");
// }

// let n = Number(prompt("Enter a number: "));

// if (n <= 1) {
//     console.log("No prime factors");
// } else {
//     let i = 2;

//     do {
//         if (n % i === 0) {
//             console.log(i);   
//             n = n / i;       
//         } else {
//             i++;             
//         }
//     } while (n > 1);
// }

class Solution {
    isNeon(n) {
        let square = n * n;
        let sum = 0;

        // square ke digits ka sum nikalna
        do {
            sum += square % 10;
            square = Math.floor(square / 10);
        } while (square > 0);

        if (sum === n) {
            return "Yes";
        } else {
            return "No";
        }
    }
}

module.exports = Solution;