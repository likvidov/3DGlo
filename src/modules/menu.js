const menu = () => {
  const menu = document.querySelector('menu');
  const scroll = document.querySelector('main>a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  const goToSection = (value) => {
    const scrollTarget = document.getElementById(value.getAttribute('href').substring(1));

    window.scrollBy({
      top: scrollTarget.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }

  document.addEventListener('click', e => {
    if (e.target.closest('.menu')) {
      handleMenu();
    }
  })

  menu.addEventListener('click', e => {
    if (e.target.classList.contains('close-btn')) {
      e.preventDefault();
      handleMenu();
    }

    if (e.target.closest('li')) {
      e.preventDefault();
      const li = e.target.closest('li');
      handleMenu();
      goToSection(li.children[0]);
    }
  })

  scroll.addEventListener('click', e => {
    e.preventDefault();
    goToSection(e.target.parentElement);
  })
}

export default menu;