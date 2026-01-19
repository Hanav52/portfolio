document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    '.wrap, .wrapwrap, .canvas, .canvas02, .container, .Produce-section01, .Produce-section02, .Produce-section03, .Produce-section04'
  );

  let currentIndex = 0;
  let isScrolling = false;
  let wheelDelta = 0;

  // 현재 위치 동기화
  function syncIndex() {
    let scrollY = window.scrollY;

    sections.forEach((section, i) => {
      if (scrollY >= section.offsetTop - section.offsetHeight / 2) {
        currentIndex = i;
      }
    });
  }

  window.addEventListener("scroll", syncIndex);

  window.addEventListener(
  "wheel",
  (e) => {
    // 🔥 마지막에서 아래로, 첫 섹션에서 위로 → 기본 스크롤 차단
    if (
      (currentIndex === sections.length - 1 && e.deltaY > 0) ||
      (currentIndex === 0 && e.deltaY < 0)
    ) {
      e.preventDefault();
      return;
    }

    if (isScrolling) return;

    wheelDelta += e.deltaY;
    if (Math.abs(wheelDelta) < 40) return;

    isScrolling = true;

    currentIndex += wheelDelta > 0 ? 1 : -1;
    currentIndex = Math.max(0, Math.min(currentIndex, sections.length - 1));

    sections[currentIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    wheelDelta = 0;

    setTimeout(() => {
      isScrolling = false;
    }, 700);
  },
  { passive: false }
);
});
