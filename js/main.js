// Interações do portfólio
// Mantém o HTML limpo e concentra os comportamentos em um único arquivo.

document.addEventListener("DOMContentLoaded", () => {
  setupProjectFilters();
  setupActiveNavigation();
});

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter || "all";

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      projectCards.forEach((card) => {
        const cardCategory = card.dataset.category;
        const shouldShow = selectedFilter === "all" || cardCategory === selectedFilter;

        card.hidden = !shouldShow;
      });
    });
  });
}

function setupActiveNavigation() {
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!navLinks.length || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const activeId = `#${entry.target.id}`;

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === activeId);
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));
}
