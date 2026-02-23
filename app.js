const prompt = require("prompt-sync")();
let Compute = Math.floor((Math.random()*100)+1);
let user ;
let attempt = 0
do{
    attempt++;
    user = Number(prompt("Enter a Number Between 1 to 100:  "))
    if (user>Compute){
        console.log("too large");
    }else if(user < Compute ){
        console.log("too small");
    }else if (user == Compute){
        console.log(`Congratulations, you guessed nuber correctly! ans in ${attempt} Attempt`);
    }else{
        console.log("INVALID NUMBER");
    }
}while(user != Compute);
console.log( `The number is ${Compute}`);
