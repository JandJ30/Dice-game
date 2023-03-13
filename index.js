function rollDice(){
//random number generator for both dice
let randomNumber1 = Math.floor((Math.random()*6) + 1); //random number generator for dice no. 1
let randomNumber2 = Math.floor((Math.random()*6) + 1); //random number generator for dice no. 2
console.log(randomNumber1, randomNumber2);

//assigning the image number for the dies
let diceNum1 = document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png") //random number for dice no. 1
let diceNum2 = document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png") //random number for dice no. 1

//logic for deciding the winner of the dice roll
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
};

};


window.onload = function() {
    document.querySelector("h1").textContent = "Let's Play!";
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}