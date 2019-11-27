let numBanana = 0;
let numShell = 0;
let numStar = 0;
let numGold = 0;
let numBulletbill = 0;

let resultsEl = document.getElementById("results");
// Event Listener
document.getElementById("mainImg").addEventListener("click", openBox);
document.getElementById('5times').addEventListener("click", times5)
document.getElementById('until10Bulletbills').addEventListener('click', until10Bulletbills);
document.getElementById('confirm2').addEventListener('click', confirm2)

function openBox() {
  let randNum = Math.random();

  if (randNum >= 0.75) {
    numBanana++;
    document.getElementById("banana").innerHTML = numBanana;
    resultsEl.innerHTML += '<img src ="images/BananaMK.png" height= 40px>';
  } else if (randNum > 0.5) {
    numShell++;
    document.getElementById("shell").innerHTML = numShell;
    resultsEl.innerHTML += '<img src ="images/GreenShellMK8.png" height= 40px>';
  } else if (randNum > 0.35) {
    numStar++;
    document.getElementById("star").innerHTML = numStar;
    resultsEl.innerHTML += '<img src ="images/StarMK8.png" height= 40px>';
  } else if (randNum > 0.20) {
    numGold++;
    document.getElementById("gold").innerHTML = numGold;
    resultsEl.innerHTML += '<img src ="images/GoldenMushroomMK8.png" height= 40px>';
  } else{
    numBulletbill++;
    document.getElementById("bulletbill").innerHTML = numBulletbill;
    resultsEl.innerHTML += '<img src ="images/Bulletbill.png" height= 40px>'
}
}
function times5() {
  for (let n = 0; n < 5; n++) {
    openBox();
  }
}
function until10Bulletbills  () {
  let count = 0;
  while (numBulletbill < 10) {
    openBox();
    count++;
}
console.log('count: ' + count);
}

function confirm2() {
  let i = document.getElementById('confirm1').value;
  for (let n = 0;  n < i; n++) {
    openBox();
  }
}
