document.addEventListener("DOMContentLoaded", () => {
const header = document.querySelector("#header");
const logo = document.querySelector("#headerLogo");
const section01 = document.querySelector("#section01");
const blackLogo = "../images/headerlogo-black.png";
const whiteLogo = "../images/headerlogo.png";

      window.addEventListener("scroll", function () {
        if ((window.scrollY >= 847) && (window.scrollY < 1800)) {
          header.classList.add("on");
          logo.src = whiteLogo;

        } else if ((window.scrollY >= 1800) && (window.scrollY < 2745)) {
          header.classList.remove("on");
          logo.src = blackLogo;

        } else if ((window.scrollY >= 2745) && (window.scrollY < 3700)) {
          header.classList.add("on");
          logo.src = whiteLogo;
        }
          else if (window.scrollY >= 3700) {
          header.classList.remove("on");
          logo.src = blackLogo;
        } else {
          header.classList.remove("on");
          logo.src = blackLogo;
        }
      });

});