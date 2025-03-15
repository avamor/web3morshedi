// console.log("oiuytrdfsd");
// const wrapper = document.querySelector(".wrapper");
// const dino = wrapper.querySelector(".dino");
// const dinoImg = wrapper.querySelector(".dino img");
// const road = wrapper.querySelector(".road img");
// const cactus = wrapper.querySelector(".cactus");
// const cactusImg = wrapper.querySelector(".cactus img");

// const gameStart = false;

// let initGame = () => {
//   if (!gameStart) {
//     startGame();
//   }
//   gameStart = true;
// };
// let startGame = () => {
//   road.classList.add("road-active");
//   cactus.classList.add("cuctus-active");
//   cactusInterval = setInterval(() => {
//     cactusImg.src = `image/${randomCactus()}.png`;
//   }, 1500);
// };
// let randomCactus = () => {
//   let cactusImgs = ["cactus1", "cactus2", "cactus3"];

//   let randomImg = cactusImgs[Math.floor(Math.random() * cactusImgs.length)];
//   return randomImg;
// };
// document.addEventListener("keydown", (e) => {
//   if (e.code === "Space") {
//     initGame();
//   }
// });
