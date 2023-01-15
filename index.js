console.log('js connected');

// Hämta värde från localStorage om man besökt sidan tidigare
// För att antingen visa intro sidan eller ta bort
let hasVisitedBefore = JSON.parse(localStorage.getItem('hasVisitedBefore'));

async function Visited(input) {
  let visited = await input;

  console.log('visited', visited);

  if (visited === true) {
    window.location.href;
  } else {
    window.location.href = window.location.href.replace(
      'index.html',
      'pages/intro.html'
    );
  }
}

window.onload = Visited(hasVisitedBefore);

const timeline = anime.timeline({
  targets: '.main',
  duration: 600,
  easing: 'easeOutSine',
});
timeline.add({
  opacity: [0, 1],
  delay: 0,
});

const navline = anime.timeline({
  targets: '.nav',
  duration: 600,
  easing: 'easeOutSine',
});
navline
  .add({
    opacity: [0, 1],
    delay: 0,
  })
  .add({
    targets: '.nav ul li',
    translateY: ['-30vh', '0'],
    delay: anime.stagger(200),
    opacity: [0, 1],
  })
  .add({
    targets: '.hamburger',
    duration: 600,
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
