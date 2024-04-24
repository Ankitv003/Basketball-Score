let scoreCardHome = document.getElementById("scorecard-home");
let scoreHome = 0;
scoreCardHome.textContent = scoreHome;

let scoreCardGuest = document.getElementById("scorecard-guest");
let scoreGuest = 0;
scoreCardGuest.textContent = 0;

// -------------------Home Scoreboard Button-------------

let buttonOne = document.getElementById("btn-one");

buttonOne.addEventListener("click", function () {
  scoreCardHome.textContent = scoreHome + 1;
  scoreHome += 1;
});

let buttonTwo = document.getElementById("btn-two");

buttonTwo.addEventListener("click", function () {
  scoreCardHome.textContent = scoreHome + 2;
  scoreHome += 2;
});

let buttonThree = document.getElementById("btn-three");

buttonThree.addEventListener("click", function () {
  scoreCardHome.textContent = scoreHome + 3;
  scoreHome += 3;
});

// --------------------Guest Scoreboard Button---------------------

let buttonGuestOne = document.getElementById("btn-guest-one");

buttonGuestOne.addEventListener("click", function () {
  scoreCardGuest.textContent = scoreGuest + 1;
  scoreGuest += 1;
});

let buttonGuestTwo = document.getElementById("btn-guest-two");

buttonGuestTwo.addEventListener("click", function () {
  scoreCardGuest.textContent = scoreGuest + 2;
  scoreGuest += 2;
});

let buttonGuestThree = document.getElementById("btn-guest-three");

buttonGuestThree.addEventListener("click", function () {
  scoreCardGuest.textContent = scoreGuest + 3;
  scoreGuest += 3;
});

// ---------------New Game------------------
let buttonGameNew = document.getElementById("btn-new-game");

buttonGameNew.addEventListener("click", function () {
  scoreCardGuest.textContent = 0;
  scoreGuest = 0;
  scoreCardHome.textContent = 0;
  scoreHome = 0;
});
