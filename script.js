// Selecting the DOM Element(s)
let homeScoreBtnOne = document.getElementById('home-btn-1')
let homeScoreEl = document.getElementById('home-score')

let guestScoreEl = document.getElementById('guest-score')

// Count variable
let homeScore = 0;
let guestScore = 0;

// Button Functions
function addHomeScoreOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function addHomeScoreTwo() {}

function addHomeScoreThree() {}