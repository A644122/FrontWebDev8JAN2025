// script.js
const cube = document.getElementById("cube");
const hoverImage = document.getElementById("hoverImage");

// Pause animation on hover
cube.addEventListener("mouseenter", () => {
  cube.style.animationPlayState = "paused";
  hoverImage.style.opacity = "1";
  hoverImage.style.transform = "translate(-50%, -50%) scale(1)";
});

// Resume animation on mouse leave
cube.addEventListener("mouseleave", () => {
  cube.style.animationPlayState = "running";
  hoverImage.style.opacity = "0";
  hoverImage.style.transform = "translate(-50%, -50%) scale(0)";
});
