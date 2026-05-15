// script.js

// Typing Animation

var typed = new Typed("#typing", {
  strings: [
    "Product Marketing Specialist",
    "Digital Transformation Professional",
    "Mendix Low-Code Consultant",
    "GTM & Demand Generation Expert"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});


// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if(navLinks.classList.contains("active")){
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.right = "20px";
    navLinks.style.background = "#1e293b";
    navLinks.style.padding = "20px";
    navLinks.style.borderRadius = "10px";
  } else {
    navLinks.style.display = "none";
  }
});