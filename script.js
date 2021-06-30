
const sectionWelcome = document.querySelector(".welcome-page")
const sectionLogin = document.querySelector(".login-page")
const sectionQuestions = document.querySelector(".questions")

const stepShow = document.querySelector(".where-step")

const question1 = document.querySelector(".sec-one")
const question2 = document.querySelector(".sec-two")
const question3 = document.querySelector(".sec-three")
const question4 = document.querySelector(".sec-four")
const question5 = document.querySelector(".sec-five")
const question6 = document.querySelector(".sec-six")
const question7 = document.querySelector(".sec-seven")
const question8 = document.querySelector(".sec-eight")
const question9 = document.querySelector(".sec-nine")
const question10 = document.querySelector(".sec-ten")

const barNextAndResult = document.querySelector(".bar")

const arrQuesions = [question1,question2,question3,question4,question5,question6,
    question7,question8,question9,question10];

const btnStartPlay = document.querySelector(".start-play");
const btnNextToQuestions = document.querySelector(".next");
const btnNextQuestion = document.querySelector(".next-question")

btnStartPlay.addEventListener("click", () => {
    sectionWelcome.style.display = "none";
    sectionLogin.style.display = "flex";
})

btnNextToQuestions.addEventListener("click", () => {
    sectionLogin.style.display = "none";
    sectionQuestions.style.display = "flex";
})


let step = 1;
btnNextQuestion.addEventListener("click", () => {
    step++;
    stepShow.innerHTML = `${step}/10`;

    
    arrQuesions[step - 2].style.display = "none";
    arrQuesions[step - 1].style.display = "flex";


    // if (step > 10) {
    //     sectionQuestions.style.display = "none";
    //     barNextAndResult.style.display = "none";
    // }


})