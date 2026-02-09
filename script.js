const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const goBackBtn = document.getElementById("goBackBtn");

const mainPage = document.getElementById("mainPage");
const sadPage = document.getElementById("sadPage");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
    message.innerHTML = "Are you sure?!";
});

yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yay! 💖 I knew it! Happy Valentine’s Day 🥰";
});

noBtn.addEventListener("click", () => {
  mainPage.classList.add("hidden");
  sadPage.classList.remove("hidden");
});

goBackBtn.addEventListener("click", () => {
  sadPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
});
