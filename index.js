let homeCount = document.getElementById("homeScore");
let guestCount = document.getElementById("guestScore");
let countHome = 0;
let countGuest = 0;


function addOneToHome() {
    countHome += 1;
    homeCount.textContent = countHome;
    
}

function addTwoToHome() {
    countHome += 2;
    homeCount.textContent = countHome;
    
}

function addThreeToHome() {
    countHome += 3;
    homeCount.textContent = countHome;
    
}

function addOneToGuest() {
    countGuest += 1;
    guestCount.textContent = countGuest;
    
}

function addTwoToGuest() {
    countGuest += 2;
    guestCount.textContent = countGuest;
    
}

function addThreeToGuest() {
    countGuest += 3;
    guestCount.textContent = countGuest;
    
}

function newGame() {
    countHome = 0;
    countGuest = 0;
    homeCount.textContent = countHome;
    guestCount.textContent = countGuest;
}