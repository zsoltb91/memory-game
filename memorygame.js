let clickedArr = [];
let score_number = 0;
let score = document.getElementById("score-text");
score.textContent = score_number;

function imgAdd() {
  let g = getArr();

  for (let i = 1; i < 17; i++) {
    let idsel = document.getElementById("id" + i);
    let imgapp = document.createElement("img");
    imgapp.setAttribute("id", "imgid" + i);
    imgapp.setAttribute("src", "./images/" + g[i - 1] + ".png");
    idsel.addEventListener("click", () => {
      imgapp.style.visibility = "visible";
      clickedArr.push(idsel.id);
      clickedArr.push(imgapp.id);
    });
    imgapp.style.width = "140px";
    imgapp.style.height = "140px";
    imgapp.style.visibility = "hidden";
    idsel.append(imgapp);
  }
}

function randomNum() {
  let nuRand = Math.floor(Math.random() * 8 + 1);
  return nuRand;
}

function getArr() {
  let arr = [];

  while (arr.length != 16) {
    let randN = randomNum();
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (randN == arr[i]) {
        count += 1;
      }
    }

    if (count != 2) {
      arr.push(randN);
    }
  }
  return arr;
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {}
}

function reCall() {
  let clickornot = document.getElementById("cont");
  clickornot.style.pointerEvents = "auto";
  console.log(clickedArr);

  if (clickedArr.length == 4) {
    let sel1 = document.getElementById(clickedArr[1]);
    let sel2 = document.getElementById(clickedArr[3]);
    let clickornot = document.getElementById("cont");
    clickornot.style.pointerEvents = "none";
    clickedArr = [];

    if (sel1.getAttribute("src") != sel2.getAttribute("src")) {
      sleep(800);
      sel1.style.visibility = "hidden";
      sel2.style.visibility = "hidden";
    } else if (sel1.getAttribute("src") == sel2.getAttribute("src")) {
      let score = document.getElementById("score-text");
      score_number += 1;
      score.textContent = score_number;
    }
  }
}

imgAdd();
setInterval(reCall, 200);
