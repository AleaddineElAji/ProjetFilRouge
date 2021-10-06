const playButton = document.querySelector("button");
const monAudio = document.querySelector("audio");
playButton.addEventListener("click", function() {
    monAudio.play();
});