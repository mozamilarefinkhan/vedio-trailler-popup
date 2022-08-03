const btnE1 = document.querySelector(".btn");
const closeIconeE1 = document.querySelector(".close-icon");
const trailerContainerE1 = document.querySelector(".trailer-container");
const videoE1 = document.querySelector("video");

btnE1.addEventListener("click", () => {
    trailerContainerE1.classList.remove("active");
});

closeIconeE1.addEventListener("click", () => {
    trailerContainerE1.classList.add("active")
    videoE1.pause();
    videoE1.currentTime = 0;
});