let menuBtn = document.querySelector('#hamburger');
let nav = document.querySelector('nav > ul');

menuBtn.addEventListener('click', () => {
  console.log('clicked button');
  menuBtn.classList.toggle('active');

  nav.classList.toggle('open');
});

document.querySelector('header');

let head = document.querySelector('header > h3');

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    let nav = document.querySelector('nav');
    nav.style.top = '60px';
    document.querySelector('header').classList.remove('border');
    head.style.color = 'inherit';
  } else {
    let nav = document.querySelector('nav');
    nav.style.top = '0px';
    document.querySelector('header').classList.add('border');
    head.style.color = '#fafafa';
  }

  prevScrollpos = currentScrollpos;
};
