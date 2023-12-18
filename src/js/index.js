const body = document.body;

const showMenu = () => {
  const hambourgerBtn = document.querySelector('.open-menu');
  const header = document.querySelector('header');

  hambourgerBtn.addEventListener('click', () => {
    header.classList.toggle('show-menu');

    body.style.overflow = header.classList.contains('show-menu') ? 'hidden' : 'auto';
  });
}

showMenu();

