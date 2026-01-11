document.querySelectorAll('.hover').forEach(card => {
  const img = card.dataset.img;
  card.style.setProperty('--hover-img', `url(${img})`);
});
