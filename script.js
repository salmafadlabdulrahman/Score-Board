//I need to write three functions
//The first function will deal with first button and when it's clicked it'll increment the count by 1
//The second function will deal with second button and when it's clicked it'll increment the count by 2
//The third function will deal with third button and when it's clicked it'll increment the count by 3
//let onePoint = document.getElementById("num-el");
let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

let countHome = 0;

function addOneH() {
  countHome += 1;
  scoreHome.innerText = countHome;
  console.log(countHome);
}

function addTwoH() {
  countHome += 2;
  scoreHome.innerText = countHome;
  console.log(countHome);
}

function addThreeH() {
  countHome += 3;
  scoreHome.innerText = countHome;
  console.log(countHome);
}

let countGuest = 0;

function addOneG() {
  countGuest += 1;
  scoreGuest.innerText = countGuest;
  console.log(countGuest);
}

function addTwoG() {
  countGuest += 2;
  scoreGuest.innerText = countGuest;
  console.log(countGuest);
}

function addThreeG() {
  countGuest += 3;
  scoreGuest.innerText = countGuest;
  console.log(countGuest);
}
