const unmuted = document.querySelector(".unmuted")
const muted = document.querySelector(".muted")
const audio = document.querySelector("audio")

document.querySelector("#un-mute").addEventListener("click", () => {
    audio.muted = audio.muted === false;
})