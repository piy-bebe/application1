const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.classList.toggle('off');
});
