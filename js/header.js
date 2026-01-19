const header = document.getElementById('header');
const menuBtn = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  header.classList.toggle('is-menu-open');
});


const contactBtn = document.getElementById("contactBtn");
  const contactModal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    contactModal.classList.add("active");
  });

  closeModal.addEventListener("click", () => {
    contactModal.classList.remove("active");
  });

  // 배경 클릭 시 닫기
  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove("active");
    }
  });