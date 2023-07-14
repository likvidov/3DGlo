import { animate, linear } from "./helpers.js"

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  const handleMenu = () => {
    modal.style.display = modal.style.display == 'block' ? 'none' : 'block'
    if (document.documentElement.clientWidth + 15 >= 768) {
      const popupContent = modal.querySelector('.popup-content');

      animate({
        duration: 1000,
        timing: linear,
        draw: function (progress) {
          popupContent.style.left = (progress * 38) + '%'
        }
      });
    }
  }

  buttons.forEach(btn => btn.addEventListener('click', handleMenu));

  modal.addEventListener('click', e => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      handleMenu();
    }
  })
}

export default modal;