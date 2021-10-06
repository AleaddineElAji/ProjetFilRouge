const playButton = document.querySelector("button");
const pauseButton = document.querySelector(".pause");
const monAudio = document.querySelector("audio");

playButton.addEventListener("click", function () {
    monAudio.play();
});

pauseButton.addEventListener("click", function () {
    monAudio.pause();
});