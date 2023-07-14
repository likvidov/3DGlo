const slider = (block, items, changer, slideActive = 'portfolio-item-active', dotActive = 'dot-active') => {
  if (!block) return;
  if (!items) return;
  if (!changer) return;

  const sliderBlock = document.querySelector(block);
  const slides = document.querySelectorAll(items);
  const dotsBlock = document.querySelector(changer);
  let dots;

  let timeInterval = 2000;

  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  }

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, slideActive);
    prevSlide(dots, currentSlide, dotActive);
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, slideActive);
    nextSlide(dots, currentSlide, dotActive);
  }

  const startSlide = (timer = 1500) => {
    dots = document.querySelectorAll('.dot');
    interval = setInterval(autoSlide, timer);
  }

  const stopSlide = () => {
    clearInterval(interval);
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return;
    }

    prevSlide(slides, currentSlide, slideActive);
    prevSlide(dots, currentSlide, dotActive);

    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      })
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, slideActive);
    nextSlide(dots, currentSlide, dotActive);
  })

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide();
    }
  }, true)

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      startSlide(timeInterval);
    }
  }, true)

  slides.forEach((slide, index) => {
    const dot = document.createElement('li');
    dot.classList.add('dot');

    if (index == currentSlide) {
      dot.classList.add(dotActive)
    }

    dotsBlock.appendChild(dot);
  })

  startSlide(timeInterval);
}

export default slider;