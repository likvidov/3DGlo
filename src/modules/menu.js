const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');
  const scroll = document.querySelector('main>a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  menuBtn.addEventListener('click', handleMenu)
  closeBtn.addEventListener('click', handleMenu)
  menuItems.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    handleMenu();
    let href = item.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);

    // scrollTarget.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start'
    // })

    window.scrollBy({
      top: scrollTarget.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }))

  scroll.addEventListener('click', e => {
    e.preventDefault();
    const scrollTarget = document.getElementById(e.target.parentElement.getAttribute('href').substring(1))

    window.scrollBy({
      top: scrollTarget.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  })
}

export default menu;