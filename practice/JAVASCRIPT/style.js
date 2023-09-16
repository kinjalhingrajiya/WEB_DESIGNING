const audioPlayer = document.getElementById("audio-player");

// Play button
const playButton = document.createElement("button");
playButton.textContent = "Play";
playButton.addEventListener("click", () => {
  audioPlayer.play();
});

// Pause button
const pauseButton = document.createElement("button");
pauseButton.textContent = "Pause";
pauseButton.addEventListener("click", () => {
  audioPlayer.pause();
});

// Append buttons to the music player
const musicPlayer = document.querySelector(".music-player");
musicPlayer.appendChild(playButton);
musicPlayer.appendChild(pauseButton);
