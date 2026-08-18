const root = document.documentElement;

window.addEventListener(
  "pointermove",
  (event) => {
    root.style.setProperty("--mouse-x", `${event.clientX}px`);
    root.style.setProperty("--mouse-y", `${event.clientY}px`);
  },
  { passive: true },
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("is-open");
  navigation?.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const wasOpen = item?.classList.contains("is-open");

    document.querySelectorAll(".faq-item").forEach((entry) => {
      entry.classList.remove("is-open");
      entry.querySelector("button")?.setAttribute("aria-expanded", "false");
      const symbol = entry.querySelector("button i");
      if (symbol) symbol.textContent = "+";
    });

    if (!wasOpen && item) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      const symbol = button.querySelector("i");
      if (symbol) symbol.textContent = "−";
    }
  });
});

document.querySelector(".booking-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const message = [
    "Hi Muskaan, I would like to check your availability.",
    `Name: ${data.get("name")}`,
    `Event: ${data.get("event")}`,
    `Date: ${data.get("date") || "To be decided"}`,
    `City: ${data.get("city")}`,
    `Guests / brief: ${data.get("brief") || "I will share details on WhatsApp"}`,
  ].join("\n");

  window.open(`https://wa.me/919711895250?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
