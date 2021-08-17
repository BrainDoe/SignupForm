const form = document.getElementById('form');
let inputs = document.querySelector('.input');
let subtn = document.getElementById('subtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('form submitted successfully. Thank You!')
  inputs.forEach(input => {
    if (!input.value) {
      input.parentElement.classList.add('error');
    }
  });
});

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   inputs = e.target.value;
//   console.log(inputs);
// });

// inputs.addEventListener('keyup', (e) => {
//   // console.log(e.target.value);
// });