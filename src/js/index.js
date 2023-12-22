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


// onScrollUpdate();
const onScrollUpdate = () => {
  let lastScroll = 0;
  const scrollThreshold = 200; // 200px

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Activer uniquement si le scroll dépasse 200px
    if (currentScroll >= scrollThreshold) {
      if (currentScroll <= 0) {
        body.classList.remove('scroll-up');
      } else if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    }
  });
}

onScrollUpdate();


