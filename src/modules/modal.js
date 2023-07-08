const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');

  function animate({ timing, draw, duration }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      let progress = timing(timeFraction);

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  function linear(timeFraction) {
    return timeFraction;
  }

  const handleMenu = () => {
    modal.style.display = modal.style.display == 'block' ? 'none' : 'block'
    if (document.documentElement.clientWidth + 15 >= 768) {
      const popupContent = modal.querySelector('.popup-content');

      animate({
        duration: 1000,
        timing: function circ(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction));
        },
        draw: function (progress) {
          popupContent.style.left = progress * 38 + '%'
        }
      });
    }
  }

  buttons.forEach(btn => btn.addEventListener('click', handleMenu));

  closeBtn.addEventListener('click', handleMenu)
}

export default modal;