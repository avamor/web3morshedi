console.log("oiuytrdfsd");
const wrapper = document.querySelector(".wrapper");
const dino = document.getElementById("dino");
const dinoImg = document.getElementById("dino-img");
const road = document.getElementById("road");
const cactus = wrapper.querySelector(".cactus");
const cactus1 = wrapper.querySelector("cactus img");

let gameStart = false;
let jump = true;
function initGame() {
  if (!gameStart) {
    startGame();
  }
  gameStart = true;
}
function startGame() {
  road.classList.add("road");
  cactus.classList.add("cuctus");
  cactusInterval = setInterval(() => {
    cactus1.src = `image/${randomCactus()}.png`;
  }, 1500);
  dinoRun();
}
function dinoRun() {
  runInterval = setInterval(() => {
    dinoImg.src = "image/dinorun1.png";
    setTimeout(() => {
      dinoImg.src = "image/dinorun2.png";
    }, 200);
  }, 300);
}
function dinoJump() {
  dino.classList.add("jump");
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 500);
}

let randomCactus = () => {
  let cactusImgs = ["cactus1", "cactus2", "cactus3"];

  let randomImg = cactusImgs[Math.floor(Math.random() * cactusImgs.length)];
  return randomImg;
};
document.addEventListener("keyup", function (e) {
  if (e.code === "Space") {
    initGame();
  }
  if (e.code === "ArrowUp") {
    if (jump) {
      dinoJump();
    }
  }
});
