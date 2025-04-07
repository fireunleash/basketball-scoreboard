let homeScore = 0
let guestScore = 0
let currentHomeScore = document.getElementById("home-score")
let currentGuestScore = document.getElementById("guest-score")
currentHomeScore.textContent = homeScore
currentGuestScore.textContent = guestScore

function homePlusOne(){
    homeScore ++
    currentHomeScore.textContent = homeScore
}

function homePlusTwo(){
    homeScore += 2
    currentHomeScore.textContent = homeScore
}

function homePlusThree(){
    homeScore +=3
    currentHomeScore.textContent = homeScore
}

function guestPlusOne(){
    guestScore ++
    currentGuestScore.textContent = guestScore
}

function guestPlusTwo(){
    guestScore += 2
    currentGuestScore.textContent = guestScore
}

function guestPlusThree(){
    guestScore +=3
    currentGuestScore.textContent = guestScore
}

function resetScore(){
    homeScore = 0 
    currentHomeScore.textContent = homeScore    
    guestScore = 0 
    currentGuestScore.textContent = guestScore  
    console.log("Resetting Home and Guest Scores to 0")
}

//Stretch goals
let homeWinning = document.getElementById('home-scoreboard');
let guestWinning = document.getElementById('guest-scoreboard');

setInterval(function() {

if (homeScore == guestScore) {
    homeWinning.classList.remove('highlight');
    guestWinning.classList.remove('highlight');
}

    if (homeScore > guestScore){
        homeWinning.classList.add('highlight');
        guestWinning.classList.remove('highlight');
    }
    else{  
        guestWinning.classList.add('highlight');
        homeWinning.classList.remove('highlight');
    }
}, 100);
    





