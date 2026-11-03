document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  renderProjects();

  const filters = document.getElementById("project-filters");
  if (filters) {
    filters.addEventListener("click", event => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;

      filters.querySelectorAll(".filter-btn").forEach(item =>
        item.classList.toggle("active", item === button)
      );
      renderProjects(button.dataset.filter);
    });
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(element =>
    revealObserver.observe(element)
  );
});
