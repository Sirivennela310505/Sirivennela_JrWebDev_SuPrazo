// MOBILE MENU
const menuIcon = document.getElementById("menuIcon");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    alert("Mobile menu can be expanded in future versions.");
  });
}


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
  `
  .section-title,
  .about-box,
  .feature-card,
  .skill-card,
  .project-card,
  .step,
  .testimonial-card,
  .workflow-step,
  .resource-card,
  .unique-card,
  .mentor-box,
  .hackathon-card,
  .cta
  `
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 90) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// BUTTON HOVER GLOW

const buttons = document.querySelectorAll(
  ".primary-btn, .secondary-btn, .nav-btn, .cta a"
);

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow =
      "0 12px 30px rgba(37, 99, 235, 0.35)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});