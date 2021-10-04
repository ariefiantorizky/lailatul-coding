const buttonMucicContainer = document.getElementById("button-music-container");
const closeMusicContainer = document.getElementById("close-music-container");
const musicContainer = document.querySelector(".music-container");

buttonMucicContainer.addEventListener("click", function () {
    musicContainer.classList.remove("d-none");
    closeMusicContainer.classList.remove("d-none");
    buttonMucicContainer.classList.add("d-none");
})

closeMusicContainer.addEventListener("click", function () {
    musicContainer.classList.add("d-none");
    closeMusicContainer.classList.add("d-none");
    buttonMucicContainer.classList.remove("d-none");
})