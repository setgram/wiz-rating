const container = document.querySelector(".main-container");
const thanks = document.querySelector(".thank-you");
const button = document.getElementById("submit");
const rate = document.getElementById("rate");
const rates = document.querySelectorAll(".btn");

button.addEventListener("click", () => {
  thanks.classList.remove("hide");
  container.style.display = "none";
});

rates.forEach((rating) => {
  rating.addEventListener("click", () => {
    rate.innerHTML = rating.innerHTML;
  });
});
