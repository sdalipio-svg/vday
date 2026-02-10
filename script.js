const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const goBackBtn = document.getElementById("goBackBtn");
const yesv1Btn= document.getElementById("yesv1Btn");

const areYouSurePage = document.getElementById("areYouSurePage");
const successPage = document.getElementById("successPage");
const mainPage = document.getElementById("mainPage");
const sadPage = document.getElementById("sadPage");
const message = document.getElementById("message");


yesBtn.addEventListener("click", () => {
  mainPage.classList.add("hidden");
  areYouSurePage.classList.remove("hidden");
});

yesv1Btn.addEventListener("click", () => {
  areYouSurePage.classList.add("hidden");
  successPage.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  mainPage.classList.add("hidden");
  sadPage.classList.remove("hidden");
});

goBackBtn.addEventListener("click", () => {
  sadPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
});
