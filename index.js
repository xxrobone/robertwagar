console.log('js connected');
let intro = document.querySelector('.intro');

const timeline = anime.timeline({
  targets: '.intro',
  duration: 2500,
  easing: 'easeOutSine',
});
timeline
  .add({
    scale: 1,
    duration: 300,
  })
  .add({
    targets: '.loading',
    opacity: [0, 1],
    width: ['0', '20vw'],
    duration: 600,
    delay: 100,
    innerHTML: [0, 100 + '%'],
    round: 10,
  })
  .add({
    targets: '.intro_head',
    translateY: ['-100vh', '0'],
    delay: 100,
    duration: 500,
  })
  .add({
    targets: '.intro_subhead',
    translateY: ['-100vh', '0'],
    delay: 100,
    duration: 500,
  })
  .add({
    targets: '.main',
    duration: 1000,
    opacity: [0, 1],
  })
  .add({
    targets: '.hamburger',
    duration: 1000,
    opacity: [0, 1],
  })
  .add({
    translateY: '-100vh',
    duration: 500,
    complete: function () {
      intro.remove();
    },
  });

const navline = anime.timeline({
  targets: '.nav',
  duration: 1500,
  easing: 'easeOutSine',
});
navline
  .add({
    opacity: [0, 1],
    delay: 300,
  })
  .add({
    targets: '.nav ul li',
    translateY: ['-30vh', '0'],
    delay: anime.stagger(200),
    opacity: [0, 1],
  });

let hi = document.querySelector('.hi');

function getDown() {
  hi.removeEventListener('mouseenter', getDown);
  hi.textContent = 'What up?!';
  setTimeout(() => {
    hi.textContent = 'Hola!';
  }, 1000);
  setTimeout(() => {
    hi.textContent = 'Tja!';
  }, 2000);
  setTimeout(() => {
    hi.textContent = 'Terve!';
  }, 3000);
  setTimeout(() => {
    hi.textContent = 'Hi there,';
    hi.addEventListener('mouseenter', getDown);
  }, 4000);
}

hi.addEventListener('mouseenter', getDown);
