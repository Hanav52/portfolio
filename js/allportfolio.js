document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     1. HEADER SCROLL COLOR
  ========================= */
  const header = document.querySelector("#header");
  const logo = document.querySelector("#headerLogo");
  const blackLogo = "../images/headerlogo-black.png";
  const whiteLogo = "../images/headerlogo.png";

  window.addEventListener("scroll", () => {
    const y = window.scrollY;

    if (y >= 847 && y < 1800) {
      header.classList.remove("on");
      logo.src = blackLogo;
    } else if (y >= 1800 && y < 2745) {
      header.classList.add("on");
      logo.src = whiteLogo;
    } else if (y >= 2745 && y < 3700) {
      header.classList.remove("on");
      logo.src = blackLogo;
    } else if (y >= 3700 && y < 4634) {
      header.classList.add("on");
      logo.src = whiteLogo;
    } else if (y >= 4634 && y < 5580) {
      header.classList.remove("on");
      logo.src = blackLogo;
    } else {
      header.classList.add("on");
      logo.src = whiteLogo;
    }
  });

  /* =========================
     2. PAGINATION
  ========================= */
  const pagerButtons = document.querySelectorAll(".produce-pagination button");
  const sections = document.querySelectorAll(
    "#canvas01, #canvas02, #canvas03, #canvas04, #canvas05, #canvas06, #canvas07"
  );

  const purpleSections = ["canvas02", "canvas04", "canvas06"];

  pagerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      document
        .getElementById(btn.dataset.target)
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  function updatePagination() {
    let current = "canvas01";

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - section.offsetHeight / 3) {
        current = section.id;
      }
    });

    pagerButtons.forEach(btn => {
      btn.classList.remove("active", "green", "purple");

      if (btn.dataset.target === current) {
        btn.classList.add("active");
        btn.classList.add(
          purpleSections.includes(current) ? "purple" : "green"
        );
      }
    });
  }

  window.addEventListener("scroll", updatePagination);
  window.addEventListener("load", updatePagination);

  /* =========================
     3. LANDING MODAL
  ========================= */
  const landingModal = document.getElementById("landingModal");
  const landingImage = document.getElementById("landingImage");
  const closeLanding = document.getElementById("closeLanding");

  document.querySelectorAll("[data-landing]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();

      landingImage.src = btn.dataset.landing;
      landingModal.classList.add("active");

      // ⭐ 배경 스크롤 완전 차단
      document.body.classList.add("modal-open");
    });
  });

  function closeModal() {
    landingModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  closeLanding.addEventListener("click", closeModal);

  landingModal.addEventListener("click", e => {
    if (e.target === landingModal) closeModal();
  });

  /* =========================
     4. WHEEL SCROLL (모달 열리면 차단)
  ========================= */
  let currentIndex = 0;
  let isScrolling = false;
  let wheelDelta = 0;

  function syncIndex() {
    sections.forEach((section, i) => {
      if (window.scrollY >= section.offsetTop - section.offsetHeight / 2) {
        currentIndex = i;
      }
    });
  }

  window.addEventListener("scroll", syncIndex);

  window.addEventListener(
    "wheel",
    e => {
      // ⭐ 모달 열렸으면 휠 스크롤 완전 차단
      if (document.body.classList.contains("modal-open")) {
        return;
      }

      if (isScrolling) return;

      wheelDelta += e.deltaY;
      if (Math.abs(wheelDelta) < 40) return;

      isScrolling = true;
      currentIndex += wheelDelta > 0 ? 1 : -1;
      currentIndex = Math.max(0, Math.min(currentIndex, sections.length - 1));

      sections[currentIndex].scrollIntoView({ behavior: "smooth" });
      wheelDelta = 0;

      setTimeout(() => (isScrolling = false), 700);
    },
    { passive: false }
  );
});
