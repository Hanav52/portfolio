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
      if (isScrolling) return;

      // 🔥 아주 조금만 움직여도 감지
      wheelDelta += e.deltaY;

      if (Math.abs(wheelDelta) < 40) return; // ← 핵심 (기존보다 훨씬 낮음)

      isScrolling = true;

      if (wheelDelta > 0) {
        currentIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else {
        currentIndex = Math.max(currentIndex - 1, 0);
      }

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
