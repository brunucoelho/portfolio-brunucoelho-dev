/* main.js */

document.addEventListener("DOMContentLoaded", () => {
  /* ── THEME TOGGLE ── */
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("bc-theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  themeIcon.textContent = savedTheme === "dark" ? "☀" : "☽";

  themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("bc-theme", next);
    themeIcon.textContent = next === "dark" ? "☀" : "☽";
  });

  /* ── MOBILE MENU ── */
  const menuBtn = document.getElementById("menuBtn");
  const navMobile = document.getElementById("navMobile");

  menuBtn.addEventListener("click", () => {
    navMobile.classList.toggle("open");
  });

  // Close on link click
  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMobile.classList.remove("open"));
  });

  /* ── ACTIVE NAV LINK on SCROLL ── */
  const sections = document.querySelectorAll("section[id], div[id]");
  const navLinks = document.querySelectorAll(".nav-links a, .nav-mobile a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.style.color = "";
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.style.color = "var(--text-primary)";
            }
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((s) => observer.observe(s));

  /* ── PROJECT FILTER ── */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectRows = document.querySelectorAll(".project-row");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      projectRows.forEach((row) => {
        if (filter === "all" || row.getAttribute("data-category") === filter) {
          row.classList.remove("hidden");
        } else {
          row.classList.add("hidden");
        }
      });
    });
  });

  /* ── SCROLL REVEAL ── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );

  const revealTargets = document.querySelectorAll(
    ".project-row, .exp-item, .edu-item, .sobre-grid, .skills-layout",
  );

  revealTargets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    revealObserver.observe(el);
  });

  /* ── MARQUEE PAUSE on HOVER ── */
  const marqueeWrap = document.querySelector(".hero-marquee-wrap");
  if (marqueeWrap) {
    marqueeWrap.addEventListener("mouseenter", () => {
      marqueeWrap.classList.add("paused");
    });
    marqueeWrap.addEventListener("mouseleave", () => {
      marqueeWrap.classList.remove("paused");
    });
  }

  /* ── NAV SHADOW on SCROLL ── */
  const nav = document.getElementById("nav");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 20) {
        nav.style.borderBottomColor = "var(--border-md)";
      } else {
        nav.style.borderBottomColor = "var(--border)";
      }
    },
    { passive: true },
  );
});
