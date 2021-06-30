const btnStartPlay = document.querySelector(".start-play");
const sectionWelcome = document.querySelector(".welcome-page")
const sectionLogin = document.querySelector(".login-page")

btnStartPlay.addEventListener("click", () => {
    sectionWelcome.style.display = "none";
    sectionLogin.style.display = "flex";


})