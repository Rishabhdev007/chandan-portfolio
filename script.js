// Smooth Scrolling for navigation buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});

// Contact Form Handling
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector("textarea").value;

  console.log("📩 Form Submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Thank you! Your message has been sent.");

  // Clear fields
  form.reset();
});

// Add small hover animation on project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-4px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
