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


const onScrollUpdate = () => {
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove('scroll-up');
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  })
}

onScrollUpdate();

