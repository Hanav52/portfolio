document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.canvas, .canvas02');
const header = document.querySelector('.header');

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',

    onEnter: () => updateHeader(index),
    onEnterBack: () => updateHeader(index),
  });
});

function updateHeader(index) {
  header.classList.remove('dark', 'light');

  // index는 0부터 시작
  // 0 → 1번 페이지(홀수)
  if (index % 2 === 0) {
    header.classList.add('dark');   // 홀수 페이지
  } else {
    header.classList.add('light');  // 짝수 페이지
  }
}

});