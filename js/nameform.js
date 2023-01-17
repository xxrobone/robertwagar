let form = document.querySelector('.input_form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.querySelector('.input_name').value;
  form.remove();

  let answer = document.querySelector('.answer');

  if (name === '' || name === null || name === undefined) {
    answer.textContent = `Hi there Friend, nice to meet you :D`;
  } else {
    answer.textContent = `Hi there ${name}, nice to meet you :D`;
  }
  
  console.log(name);
});
