const header = document.querySelector('header');
const openbtn = document.querySelector('#openbtn');
const closebtn = document.querySelector('#closebtn');
const navlist = document.querySelector('#navlist');

openbtn.addEventListener('click', () => header.classList.add('menu-open'));
closebtn.addEventListener('click', () => header.classList.remove('menu-open'));

// bonus: close the menu after tapping a link
navlist.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') header.classList.remove('menu-open');
});