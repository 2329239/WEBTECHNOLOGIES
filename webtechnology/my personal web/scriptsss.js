// Educatioon
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
  box.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'black';
    event.target.style.transition = 'background-color 0.1s ease-in-out';
    setTimeout(() => {
      event.target.style.backgroundColor = 'rgba(225, 225, 225, 0.1)';
    }, 200);
  });
});


alert("Hello, if you want to contact with me please cick ok to enter the contact and education");
