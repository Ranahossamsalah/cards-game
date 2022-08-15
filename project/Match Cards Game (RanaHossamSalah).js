var cardface = document.getElementsByClassName("face");
var cardback = document.getElementsByClassName("back");
var startbtn = document.getElementById("start");
var hearts = document.getElementById("heart").children;
var back = Array.from(cardback); //                     return img array
var face = Array.from(cardface); //                     return img array
var arr = [];
var arrAtt = [];
var indexArr = [];
var src1Arr = [];
var condition = true;
var tarnscard;
var flibcard;
//function to random numbers from 1 to 18
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//function to put random numbers in array
function shuffleArray2() {
  var array = [];
  for (i = 0; i < 18; i++) {
    array.push(randomIntFromInterval(1, 18));
  }
  return array;
}
var shuflledarray3 = shuffleArray2();
//function to change the card order according to the new array
function cardorder() {
  for (var i = 0; i < 18; i++) {
    back[i].style.order = shuflledarray3[i];
  }
}
cardorder();

//ittrate on card by for of and add event listener (working)
for (var card of back) {
  var click = card.addEventListener("click", btn);
}
//function to change the zindex of this(the selected element to  -1)
function btn() {
  var cardindex = back.indexOf(this);
  console.log(cardindex);
  this.children[0].style.zIndex = "1";
  var imgSrc = this.children[0].src;
  var att = this.children[0];
  //also add array of index of only 2 clicked cards
  indexArr.push(cardindex);
  //if the 2 cards in the index array are the same flib card back
  if (indexArr.length === 2 && indexArr[0] === indexArr[1]) {
    this.children[0].style.zIndex = "-1";
    indexArr = [];
    arr = [];
    arrAtt = [];
    //if the 2 cards in the index array are not the same push the div array and img src array in 2 new arrays
  } else {
    arrAtt.push(att); //                     return img array
    console.log(arrAtt);

    arr.push(imgSrc); //                     return HTTP array
    console.log(arr);
  }
  //if the 2 div arrays are the same trun transparent
  if (arr.length === 2 && arr[0] === arr[1]) {
    tarnscard = setTimeout(trans, 1000);
    arr = [];
    indexArr = [];
  }
  //if the 2 div arrays are not the same flib them back
  if (arr.length === 2 && arr[0] !== arr[1]) {
    flibcard = setTimeout(flib, 200);
    arr = [];
    indexArr = [];
  }
}

//set interval transparency (for back of card)
function trans() {
  for (i = 0; i < 20; i++) {
    if (arrAtt[0] === face[i]) {
      face[i].style.opacity = "0.1";
      back[i].style.opacity = "0.1";
    }
  }
  //set interval transparency (for face of card)
  for (ii = 0; ii < 20; ii++) {
    if (arrAtt[1] === face[ii]) {
      face[ii].style.opacity = "0.1";
      back[ii].style.opacity = "0.1";
    }
  }
  arrAtt = [];
  clearTimeout(tarnscard);
  i = 0;
  ii = 0;
}
//set interval flib back
function flib() {
  for (cardFac of face) {
    cardFac.style.zIndex = "-1";
  }
  arrAtt = [];
  clearTimeout(flibcard);
}

//hint button
for (var heart of hearts) {
  var clickhint = heart.addEventListener("click", hint);
}

// randomize array needed for hint
function shuffleArray(randomize) {
  randomize.sort(() => Math.random() - 0.5);
  return randomize;
}
//hint function
function hint() {
  back2 = [...back]; //deepcopy
  this.style.display = "none";
  shuffleArray(back2);
  back2[0].children[0].style.zIndex = "1";
  setTimeout(flibhint, 500);
}
function flibhint() {
  back2[0].children[0].style.zIndex = "-1";
  clearTimeout;
}

