const bread = document.querySelector('.bread');
const scene1 = document.getElementById('scene1');
const scene2 = document.getElementById('scene2');

let triggered = false;

// 15초 타이머 (인트로 제한)
setTimeout(() => {
  if (!triggered) {
    switchScene();
  }
}, 15000);

bread.addEventListener('click', () => {
  if (triggered) return;
  triggered = true;

  // 줄 당기는 모션
  bread.style.transform = 'translateX(-50%) translateY(40px)';
  bread.style.transition = '0.4s ease';



  setTimeout(switchScene, 400);
});

function switchScene() {
  scene1.classList.remove('active');
  scene2.classList.add('active');
}

bread.addEventListener('click', () => {
  if (triggered) return;
  triggered = true;

  // 줄 아래로 당김
  string.classList.add('pull');

  // 다시 올라오기
  setTimeout(() => {
    string.classList.remove('pull');
  }, 300);

  // 화면 전환
  setTimeout(() => {
    switchScene();
  }, 600);
});

function switchScene() {
  scene1.classList.remove('active');
  scene2.classList.add('active');
}
