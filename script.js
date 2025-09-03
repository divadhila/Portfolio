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

// Navbar Active Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});
