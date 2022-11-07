"use strict";
// const heads = 1;
// const tails = 0;

// function tossCoin(){
//     const x = math.random

//     if (x < 0.5){
//         return tails;
//     }
//     else{
//         return heads;
//     }
// }

//  Things to do: 
//  Figure out how to prevent users from reseting the timer/making it go faster
//  Implement live chat
//  Implement websockets
//  Implement score functionality

// Time left to choose
var timeLeft = 5;

const heads = "Heads";
const tails = "Tails";

var playerChoice = "coin";
var outcome = "coin";

const youSuck = new Audio('/sounds/YouSuckActual.mp3');
const AUGH = new Audio('/sounds/AUUGH.mp3')
const drumRoll = new Audio('/sounds/DrumRoll.mp3')
// Sets players choice to heads
function headsFunction(){
    document.getElementById("choice").innerHTML = "You chose: Heads";
    playerChoice = heads;
    startFlipTimer();
}

// Sets players choice to tails
function tailsFunction(){
    document.getElementById("choice").innerHTML = "You chose: Tails";
    playerChoice = tails;
    startFlipTimer();
}

// Starts countdown for both players
function startFlipTimer(){
    var timer = setInterval(function(){
        document.getElementById('timerNumber').innerHTML= "Timer:"+timeLeft;
        document.getElementById('timer').value -= .01;
        timeLeft-= .01;
        if(timeLeft<0){
            clearInterval(timer);
            document.getElementById('timer').value = 5;
            timeLeft = 5;
        }
    }, 10);
    // Flips coin after 7.8 seconds
    setTimeout(flipCoin, 5000)
}

// Helper function for setting color of coin
function randomColor(){
    return Math.floor(Math.random() * 255);
}

// Actual flipping of coin
function flipCoin(){
    drumRoll.play();
    var iterations = 24;
    // interval to build some suspense so we don't have to watch something extremely static
    var suspense = setInterval(function(){
        var x = Math.random();
        document.getElementById("coinValue").style="color: rgba("+randomColor()+","+randomColor()+","+randomColor()+");"
        // if x is greater or less than .5 set the values respectively
        if(x < .5){
            document.getElementById("coinValue").innerHTML = "Heads";
            outcome = heads;
        }
        else{
            document.getElementById("coinValue").innerHTML = "Tails";
            outcome = tails;
            }
        iterations-= 1;
        if(iterations<0){
            clearInterval(suspense);
        }
    }, 150);

    // Checks win condition after 2 seconds
    setTimeout(function(){
        checkWinner();
    }, 4500);
}

// Checks win condition
function checkWinner(){
    if (playerChoice == outcome){
        document.getElementById("outcome").innerHTML = "You have: WON :D";
        AUGH.play();
    }
    else{
        document.getElementById("outcome").innerHTML = "You have: LOST >:( BOO YOU SUCK!";
        youSuck.play();
    }
}


//document.getElementById("coinValue").innerHTML = "Heads";
//document.getElementById("coinValue").innerHTML = "Tails";