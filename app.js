document.querySelector('#email').addEventListener('keyup', (event) => {
  if (!event.target.validity.valid) {
    event.target.classList.add("error");
  } else {
    event.target.classList.remove("error");
  }
});
