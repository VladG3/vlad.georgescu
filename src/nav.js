// Minimal mobile nav toggle. No framework, no build step.
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

toggle?.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

links?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});
