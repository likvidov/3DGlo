const slicer = (str, num) => {
  return str.trim().length > num ? str.trim().substring(0, num).trim() + '...' : str.trim();
}

const animate = ({ timing, draw, duration }) => {
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

const linear = (timeFraction) => {
  return timeFraction;
}

export default { slicer, animate, linear };