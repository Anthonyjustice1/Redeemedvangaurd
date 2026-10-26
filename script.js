const header = document.querySelector('header');
const openbtn = document.querySelector('#openbtn');
const closebtn = document.querySelector('#closebtn');
const navlist = document.querySelector('#navlist');

openbtn.addEventListener('click', () => header.classList.add('menu-open'));
closebtn.addEventListener('click', () => header.classList.remove('menu-open'));

// close the menu after tapping any link
navlist.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    header.classList.remove('menu-open');
    closeAllDropdowns();
  }
});

// arrow buttons open/close the dropdowns (accordion style)
document.querySelectorAll('.arrow').forEach((btn) => {
  btn.addEventListener('click', () => {
    const li = btn.closest('li');
    const wasOpen = li.classList.contains('open');
    closeAllDropdowns();
    if (!wasOpen) {
      li.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

function closeAllDropdowns() {
  document.querySelectorAll('li.has-sub.open').forEach((li) => li.classList.remove('open'));
  document.querySelectorAll('.arrow').forEach((b) => b.setAttribute('aria-expanded', 'false'));
}