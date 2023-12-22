const body = document.body;

const showMenu = () => {
  const hambourgerBtn = document.querySelector('.open-menu');
  const header = document.querySelector('header');

  hambourgerBtn.addEventListener('click', () => {
    header.classList.toggle('show-menu');

    header.style.transform = header.classList.contains("show-menu") ? "none" : "";

    body.style.overflow = header.classList.contains('show-menu') ? 'hidden' : 'auto';
  });
}

showMenu();


const onScrollUpdate = () => {
  let lastScroll = 0;
  const scrollThreshold = 300; // 300px

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Activer uniquement si le scroll dépasse 300px
    if (currentScroll >= scrollThreshold) {
      if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.add("scroll-down");
      } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
      }
      lastScroll = currentScroll;
    }
  });
}

onScrollUpdate();


