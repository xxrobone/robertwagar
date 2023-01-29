let form = document.querySelector('.input_form');
let userName = JSON.parse(localStorage.getItem('userName'));

let answer = document.querySelector('.answer');
let newName = '';

console.log('username from ls ' + userName);

if (!userName || userName === undefined || userName === '') {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    newName = document.querySelector('.input_name').value;
    showMsg(newName);
    console.log('name from submit ' + newName);
  });
} else {
  form.remove();
  answer.textContent = `Hi again ${userName}, how can I help you today? :D`;
}

function showMsg(newName) {
  if (newName === '' || newName === null || newName === undefined) {
    form.remove();
    answer.textContent = `Friend, nice to meet you :D`;
  } else {
    form.remove();
    answer.textContent = `${newName}, nice to meet you :D`;
    localStorage.setItem('userName', JSON.stringify(newName));
  }
}
