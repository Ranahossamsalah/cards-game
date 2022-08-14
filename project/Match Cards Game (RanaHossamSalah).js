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

///////////////////////////////////////////page draft///////////////////////////////////////////////////////////////////////////////////////

// //start game
// startbtn.addEventListener("click", startgame);

// function startgame() {
//   randomIntFromInterval;
//   cardorder;
//   console.log("rana");
// }
// console.log(window.onload);
// //randomize array
// function shuffleArray(randomize) {
//   randomize.sort(() => Math.random() - 0.5);
// }
// shuffleArray(back);

// for (var htmlback of back) {
//   var backchidren = htmlback.children;
//   console.log(backchidren);
//   for (var backchild of backchidren) {
//     var src1 = backchild.src;
//     // console.log(src1);
//     src1Arr.push(src1);
//   }
// }
// console.log(src1Arr);
// for (var htmlcard of cardback) {
//   var htmlchidren = htmlcard.children;
//   for (var htmlchild of htmlchidren) {
//     var src = htmlchild.src;
//     for (var iv = 0; iv < 10; iv++) {
//       src = src1Arr[iv];
//       console.log(src);
//     }
//   }
// }
//random 2
// (function randomback() {
//   // var back1 = [...back];
//   var cardback1 = [...cardback];
//   shuffleArray(cardback1);
//   for (var htmlcard of cardback) {
//     var htmlchidren = htmlcard.children;
//     for (var htmlchild of htmlchidren) {
//       var src = htmlchild.src;
//       console.log(src);
//     }
//   }
// })();

// function flib() {
//   for (j = 0; j < 20; j++) {
//     if (arrAtt[1] === face[j]) {
//       face[j].style.zIndex = "-1";
//     }
//   }
// }

// function trans() {
//   for (cardF of face) {
//     if (arrAtt[0] === cardF) {
//       cardF.style.opacity = "0.1";
//       // back[i].style.opacity = "0.1";
//     }
//   }
//   for (cardFa of face) {
//     if (arrAtt[1] === cardFa) {
//       cardFa.style.opacity = "0.1";
//     }
//   }
// }

//set interval flib back

//flib

// // ittrate on all cards working;
// for (var i = 0; i < back.length; i++) {
//   var card = back[i].addEventListener("click", function (e) {
//     // important e is used as a target
//     e.target.style.zIndex = "1"; // back[i] not working because it is new function and the value of (i) is unknown
//   });
// }

// var cardArr = Array.from(imgSrc);
// var index = cardback.indexof(this);
// console.log(index);
//must remove http tp compace src=src
// function removeHttp(url) {
//   return url.replace(/^https?:\/\//, "");
// }
// console.log(removeHttp(arr));

// // working
// var click1 = back[1].addEventListener("click", function () {
//   face[1].style.zIndex = "1";
// });
// var click2 = back[2].addEventListener("click", function () {
//   face[2].style.zIndex = "1";
// });

// //condition 1
// if (click1 !== click2) {
//   face[1].style.zIndex = "-1";
//   face[2].style.zIndex = "-1";
// }
// if (click1 === click2) {
//   face[1].style.visibility = "none";
//   face[2].style.zIndex = "none";
// }

//add start btn
// startbtn.addEventListener("click", function () {
//     console.log("rana");
//   })

// //make a constructor of the card
// function card(visibility,image){
//   this.visible=visibility;
//   this.urlimage=image;
//   Object.prototype.
// }

// //make objects of all cards

// var card1 = new card ();
// var card2 = new card ();
// var card3 = new card ();
// var card4 = new card ();

// if (back2[0].children[0].style.zIndex != "1") {
//   back2[0].children[0].style.zIndex = "1";
//   setTimeout(flibhint, 500);
// } else {
//   for (var iv = 0; iv < 18; iv++) {
//     if (back2[iv].children[0].style.zIndex != "1")
//       back2[iv].children[0].style.zIndex = "1";
//     setTimeout(flibhint, 500);
//     break;
//   }
// }
// }
