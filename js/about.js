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
  bg.style.backgroundSize = 160 - +window.pageYOffset / 12 + '%';
  bg.style.opacity = 1 - +window.pageYOffset / 700 + '';
});
