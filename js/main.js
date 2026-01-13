const bgImages = [
  "../images/main/main01.png",
  "../images/main/main02.png",
  "../images/main/main03.png"
];

const photoshop = [
    "../images/main/ai.png",
    "../images/main/ps-color.png",
    ""
];

const illustrator = [
    "../images/main/ps.png",
    "../images/main/ai-color.png",
    ""
];

const window1 = [
    "../images/main/window.png",
    "../images/main/window03.png",
    "../images/main/window02.png"
];

const wind = document.querySelector(".wind");
const html5 = document.querySelector(".html5");
const css = document.querySelector(".css");
const js = document.querySelector(".js");

// 바람개비 회전 애니메이션 (처음엔 멈춘 상태)
const windSpin = gsap.to(wind, {
  rotation: 360,
  duration: 2,
  ease: "linear",
  repeat: -1,
  paused: true
});

let bgIndex = 0;
let photoIndex = 0;
let illustratorIndex = 0;
let windowIndex = 0;

//이미지 변경
function changeBg() {
  bgIndex = (bgIndex + 1) % bgImages.length;
  photoIndex = (photoIndex + 1) % photoshop.length;
  illustratorIndex = (illustratorIndex + 1) % illustrator.length;
  windowIndex = (windowIndex + 1) % window1.length;


  document.querySelector(".wrap").style.backgroundImage =
    `url("${bgImages[bgIndex]}")`;
    document.querySelector(".photoshop").src = photoshop[photoIndex];
    document.querySelector(".illustrator").src = illustrator[illustratorIndex];
    document.querySelector(".window").src = window1[windowIndex];

    // 🔥 바람개비 조건
  if (bgIndex === 1) {
    wind.src = "../images/main/wind.png";
    document.querySelector(".wind").classList.add("show-wind");
    windSpin.timeScale(0.6); // 느리게
    windSpin.play();

    document.querySelector(".track").style.opacity = 1;
    document.querySelector(".track-code").style.opacity = 0;

  } else if (bgIndex === 2) {
    wind.src = "../images/main/wind-color.png";
    html5.src = "../images/main/html5.png";
    css.src = "../images/main/css.png";
    js.src = "../images/main/js.png";

    document.querySelector(".wind").classList.add("show-wind");
    document.querySelector(".html5").classList.add("show-wind");
    document.querySelector(".css").classList.add("show-wind");
    document.querySelector(".js").classList.add("show-wind");

    windSpin.timeScale(1.4); // 빠르게
    windSpin.play();

    document.querySelector(".track").style.opacity = 0;
    document.querySelector(".track-code").style.opacity = 1;

  } else {
    document.querySelector(".html5").classList.remove("show-wind");
    document.querySelector(".css").classList.remove("show-wind");
    document.querySelector(".js").classList.remove("show-wind");
    document.querySelector(".wind").classList.remove("show-wind");
    document.querySelector(".track").style.opacity = 0;
    document.querySelector(".track-code").style.opacity = 0;

    windSpin.pause();
  }
}

function pullAnimation() {
  const section = document.querySelector('.main-section01');

  if (section.classList.contains('is-pull')) return;

  section.classList.add('is-pull');

  setTimeout(() => {
    section.classList.remove('is-pull');
  }, 500);

  changeBg();
}



//스크롤마다 헤더 색상 변경
document.addEventListener("DOMContentLoaded", () => {
const header = document.querySelector("#header");
const logo = document.querySelector("#headerLogo");
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
        } else {
          header.classList.remove("on");
          logo.src = blackLogo;
        }
      });
});