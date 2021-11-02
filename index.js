/*Defining a function that:
Gives the coin a random value between 1 and 2 with the same probabilities
Each coin's value has a result*/

function flipCoin(){

    let valueCoin= Math.floor(Math.random()*2);

    if(valueCoin == 1){
        console.log("Head!");
    }

    else {
        console.log("Tails!"); 
    }
}