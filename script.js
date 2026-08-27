const nav = document.querySelector("#site-nav");
const toggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 60), { passive: true });
toggle.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  toggle.classList.toggle("active", open);
  toggle.setAttribute("aria-expanded", String(open));
});
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  toggle.classList.remove("active");
  toggle.setAttribute("aria-expanded", "false");
}));

const autoVideoObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) target.play().catch(() => {});
    else target.pause();
  });
}, { threshold: 0.2 });
document.querySelectorAll(".auto-video").forEach((video) => autoVideoObserver.observe(video));

document.querySelectorAll(".hover-video").forEach((video) => {
  const card = video.closest(".project-card");
  card.addEventListener("mouseenter", () => video.play().catch(() => {}));
  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
document.querySelector("form").addEventListener("submit", (event) => event.preventDefault());
