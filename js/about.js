let bg = document.querySelector('.img_wrapper');
let img = document.querySelector('.hero_img');

bg.addEventListener('mouseenter', () => {
  img.src = '../assets/images/portfolio_img.png';
});

bg.addEventListener('mouseleave', () => {
  img.src = '../assets/images/portfolio_img_bw.png';
});
