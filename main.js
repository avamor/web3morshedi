console.log("oiuytrdfsd");
const wrapper = document.querySelector(".wrapper");
const dino = document.getElementById("dino");
const dinoImg = document.getElementById("dino-img");
const road = document.getElementById("road");
const cactus = wrapper.querySelector(".cactus");
const cactusImg = document.getElementById("cactus-img");
const clouds = document.querySelectorAll(".wrapper .clouds div");
const scoreText = document.querySelector(".score");
const gameOver = document.querySelector(".game-over");
const restartgame = document.querySelector(" .restart-btn");
const highScoreText = document.querySelector(".high-score");
const par = document.querySelector(".par");

let gameStart = false;
let jump = true;
let score = 0;
let globalRunInterval, globalCactusInterval, globalScoreInterval;

let highScore = localStorage.getItem("high-score") || "00000";
highScoreText.innerHTML = "HI " + highScore;

function initGame() {
  if (!gameStart) {
    startGame();
  }
  gameStart = true;
}
function startGame() {
  scoreInterval = setInterval(() => {
    score++;
    score < 10
      ? (score = "0000" + score)
      : score < 100
      ? (score = "000" + score)
      : score < 1000
      ? (score = "00" + score)
      : score < 10000
      ? (score = "0" + score)
      : score;

    scoreText.innerHTML = score;
  }, 150);
  globalScoreInterval = scoreInterval;

  road.classList.add("road-active");
  cactus.classList.add("cactus-active");
  cactusInterval = setInterval(() => {
    cactusImg.src = `image/${randomCactus()}.png`;
  }, 1500);
  globalCactusInterval = cactusInterval;

  dinoRun();
  generateClouds();
  par.innerHTML = "";
}
function dinoRun() {
  runInterval = setInterval(() => {
    dinoImg.src = "image/dinorun1.png";
    setTimeout(() => {
      dinoImg.src = "image/dinorun2.png";
    }, 100);
  }, 200);
  globalRunInterval = runInterval;
}
function dinoJump() {
  dino.classList.add("jump-active");
  setTimeout(() => {
    dino.classList.remove("jump-active");
  }, 500);
}

let randomCactus = () => {
  let cactusImgs = ["cactus1", "cactus2", "cactus3"];

  let randomImg = cactusImgs[Math.floor(Math.random() * cactusImgs.length)];
  return randomImg;
};
function generateClouds() {
  clouds.forEach((cloud) => {
    cloud.classList.add("clouds-active");
  });
}
let result = setInterval(() => {
  let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
  let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue("left"));

  if (dinoBottom <= 100 && cactusLeft > 0 && cactusLeft <= 20) {
    gameEnd();
  }
}, 10);

function gameEnd() {
  updateHighScore();

  jump = false;

  road.style.animationPlayState = "paused";
  cactus.style.animationPlayState = "paused";
  dino.style.animationPlayState = "paused";

  clouds.forEach((cloud) => {
    cloud.style.animationPlayState = "paused";
  });
  clearInterval(globalRunInterval);
  clearInterval(globalCactusInterval);
  clearInterval(globalScoreInterval);
  clearInterval(result);

  gameOver.style.display = "block";
}
function updateHighScore() {
  let highScore = localStorage.getItem("high-score");

  if (score > highScore) {
    localStorage.setItem("high-score", score);
  }
}

restartgame.addEventListener("click", function () {
  window.location.reload();
});

document.addEventListener("keyup", function (e) {
  if (e.code === "Space") {
    initGame();
  }
  if (e.code === "ArrowUp") {
    if (jump) {
      dinoJump();
      document.body.pointerEvents = "none";
      setTimeout(() => {
        document.body.pointerEvents = "auto";
      }, 500);
    }
  }
});
