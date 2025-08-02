document.addEventListener('DOMContentLoaded', () => {
  const giftBox   = document.getElementById('giftBox');
  const surprise  = document.getElementById('surpriseImg');
  const resetBtn  = document.getElementById('resetBtn');
  const openSound = document.getElementById('openSound');

  // Abrir caja al click
  giftBox.addEventListener('click', () => {
    if (giftBox.classList.contains('closed')) {
      openSound.currentTime = 0;
      openSound.play();

      giftBox.classList.replace('closed', 'open');
      setTimeout(() => {
        surprise.classList.replace('hidden', 'visible');
      }, 600);
    }
  });

  // Volver al estado inicial
  resetBtn.addEventListener('click', () => {
    surprise.classList.replace('visible', 'hidden');
    giftBox.classList.replace('open', 'closed');
  });
});

const giftBox = document.getElementById('giftBox');
const surpriseImg = document.getElementById('surpriseImg');
const resetBtn = document.getElementById('resetBtn');
const heartContainer = document.getElementById('heartContainer');

giftBox.addEventListener('click', () => {
  giftBox.classList.add('hidden');
  surpriseImg.classList.remove('hidden');
  launchHearts();
});

resetBtn.addEventListener('click', () => {
  giftBox.classList.remove('hidden');
  surpriseImg.classList.add('hidden');
  heartContainer.innerHTML = ''; // limpiar corazones
});

function launchHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heartContainer.appendChild(heart);

    // eliminar después de la animación
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

