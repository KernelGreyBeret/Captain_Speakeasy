const LINKS = {
  twitch: "https://www.twitch.tv/captain_speakeasy",
  youtube: "https://www.youtube.com/@captain_Speakeasy?sub_confirmation=1",
  tiktok: "https://www.tiktok.com/@captain_speakeasy",
  instagram: "https://www.instagram.com/captain_speakeasy/",
  discord: "https://discord.gg/hAJgjGZUZv",
  cosoc: "https://cosoc.com/CAPTAINx_xMORGAN",
  tip: "https://streamelements.com/captain_speakeasy/tip",
  treatstream: "https://treatstream.com/t/treat/captainx_xmorgan",
  x: "https://x.com/CPTSpeakeasy",
  patreon: "https://www.patreon.com/CAPTAINx_XMORGAN",
  shop: "https://captainspeakeasy-shop.fourthwall.com/",
  buymeacoffee: "https://buymeacoffee.com/captainspeakeasy"
};

document.querySelectorAll("[data-link]").forEach((element) => {
  const target = LINKS[element.dataset.link];
  if (target) element.href = target;
});

const navToggle = document.querySelector(".nav-toggle");
navToggle?.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".topnav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();


const featuredTutorial = document.getElementById("featured-tutorial");

function startFeaturedTutorial() {
  if (!featuredTutorial || featuredTutorial.dataset.started === "true") return;
  featuredTutorial.src = featuredTutorial.dataset.src;
  featuredTutorial.dataset.started = "true";
}

if (featuredTutorial && "IntersectionObserver" in window) {
  const tutorialObserver = new IntersectionObserver((entries, observer) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      startFeaturedTutorial();
      observer.disconnect();
    }
  }, { threshold: 0.28 });

  tutorialObserver.observe(featuredTutorial);
} else {
  startFeaturedTutorial();
}
