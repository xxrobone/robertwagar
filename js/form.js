let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
    let name = document.querySelector('.input_name').value;
    form.style.opacity = '0'

  let answer = document.querySelector('.answer');

  answer.textContent = `Hi there ${name}, nice to meet you :D`;

  console.log(name);
});
