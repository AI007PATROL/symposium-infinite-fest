/* ================================================
   INFINITE TECHFEST’25 WEBSITE INTERACTIONS
   ================================================ */

// Smooth scrolling for navigation links
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href").includes("#")) {
      e.preventDefault();
      const targetId = link.getAttribute("href").split("#")[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Navbar highlight on scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const header = document.querySelector(".site-header");

  if (scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Button hover animation glow
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = "all 0.3s ease";
    btn.style.boxShadow = "0 0 20px rgba(250, 204, 21, 0.5)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".card, .event-card, .contact-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.transform = "translateY(40px)";
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));

console.log("✅ INFINITE TECHFEST’25 Loaded Successfully!");
