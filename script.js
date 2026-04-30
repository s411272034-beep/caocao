// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();

      const target = document.querySelector(targetId);
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
