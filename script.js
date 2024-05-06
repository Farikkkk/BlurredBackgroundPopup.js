const container = document.querySelector(".container");
const popupContainer = document.querySelector(".popup-container");
const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-icon");

openBtn.addEventListener("click", () => {
  container.classList.add("active");
  popupContainer.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  popupContainer.classList.add("active");
  container.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popupContainer.classList.add("active");
    container.classList.remove("active");
  }
});
