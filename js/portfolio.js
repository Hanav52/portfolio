document.addEventListener("DOMContentLoaded", () => {
const header = document.querySelector("#header");
const logo = document.querySelector("#headerLogo");
const blackLogo = "../images/headerlogo-black.png";
const whiteLogo = "../images/headerlogo.png";

 const landingModal = document.getElementById("landingModal");
  const landingImage = document.getElementById("landingImage");
  const closeLanding = document.getElementById("closeLanding");

  document.querySelectorAll("[data-landing]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      landingImage.src = btn.dataset.landing;

      landingModal.classList.add("active");
      document.body.classList.add("modal-open"); // ⭐ 배경 고정
    });
  });

  function closeModal() {
    landingModal.classList.remove("active");
    document.body.classList.remove("modal-open"); // ⭐ 복구
  }

  closeLanding.addEventListener("click", closeModal);

  landingModal.addEventListener("click", (e) => {
    if (e.target === landingModal) {
      closeModal();
    }
  });

      window.addEventListener("scroll", function () {
        if ((window.scrollY >= 847) && (window.scrollY < 1800)) {
          header.classList.remove("on");
          logo.src = blackLogo;
        } else if ((window.scrollY >= 1800) && (window.scrollY < 2745)) {
          header.classList.add("on");
          logo.src = whiteLogo;
        } else if ((window.scrollY >= 2745) && (window.scrollY < 3700)) {
          header.classList.remove("on");
          logo.src = blackLogo;
        } else if ((window.scrollY >= 3700) && (window.scrollY < 4634)) {
          header.classList.add("on");
          logo.src = whiteLogo;
        } else if ((window.scrollY >= 4634) && (window.scrollY < 5580)) {
          header.classList.remove("on");
          logo.src = blackLogo;
        } else if ((window.scrollY >= 5580)) {
          header.classList.add("on");
          logo.src = whiteLogo;
        } else {
          header.classList.add("on");
          logo.src = whiteLogo;
        }
      });

});


