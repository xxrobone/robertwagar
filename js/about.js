let bg = document.querySelector('.hero');
/* let img = document.querySelector('.hero_img'); */
/* 
bg.addEventListener('mouseenter', () => {
  img.src = '../assets/images/portfolio_img.png';
});

bg.addEventListener('mouseleave', () => {
  img.src = '../assets/images/portfolio_img_bw.png';
});
 */

window.addEventListener('scroll', () => {
  bg.style.backgroundSize = 100 + window.pageYOffset / 12 + '%';
  bg.style.opacity = 1 - +window.pageYOffset / 700 + '';
  if (window.pageYOffset > 2) {
    bg.style.filter = `blur(${
      0 + window.pageYOffset / window.pageYOffset + 1
    }px)`;
  } else {
    bg.style.filter = `blur(0px)`;
  }
});
