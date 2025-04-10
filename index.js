let homeScore = 0
let guestScore = 0
let currentHomeScore = document.getElementById("home-score")
let currentAwayScore = document.getElementById("away-score")
currentHomeScore.textContent = homeScore
currentAwayScore.textContent = awayScore

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

function awayPlusOne(){
    awayScore ++
    currentAwayScore.textContent = awayScore
}

function awayPlusTwo(){
    awayScore += 2
    currentAwayScore.textContent = awayScore
}

function awayPlusThree(){
    awayScore +=3
    currentAwayScore.textContent = awayScore
}

function resetScore(){
    homeScore = 0 
    currentHomeScore.textContent = homeScore    
    awayScore = 0 
    currentAwayScore.textContent = awayScore  
    console.log("Resetting Home and Away Scores to 0")
}

//Stretch goals
let homeWinning = document.getElementById('home-scoreboard');
let awayWinning = document.getElementById('away-scoreboard');

setInterval(function() {

if (homeScore == awayScore){
        homeWinning.classList.remove('highlight');
        awayWinning.classList.remove('highlight');
    }

    if (homeScore > awayScore){
        homeWinning.classList.add('highlight');
        awayWinning.classList.remove('highlight');
    }
    else if (homeScore < awayScore){  
        guestWinning.classList.add('highlight');
        awayWinning.classList.remove('highlight');
    }
}, 100);