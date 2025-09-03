// Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});