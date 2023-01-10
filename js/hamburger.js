const open = document.querySelector('.openBtn');
const close = document.querySelector('.closeBtn');
const menu = document.querySelector('.menu');
/* const headline = document.querySelector('h1'); */

// for the open close button
console.log('connected');
open.addEventListener('click', () => {
  console.log('clicked');
  open.style.visibility = 'hidden';
  close.style.visibility = 'visible';
  close.style.transform = 'rotate(90deg)';
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  console.log('clicked close');
  open.style.visibility = 'visible';
  close.style.visibility = 'hidden';
  menu.classList.remove('active');
});
