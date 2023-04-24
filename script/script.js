const arrows = document.querySelector('.arrows');
const scrolling = document.body

const animation = gsap.to('.arrows', {
  duration: 0.8,
  y: '50%',
  repeat: -1,
  yoyo: true
});

window.addEventListener('scroll', function () {
  scrolling.classList.add('is-scrolling');

  const timer = setTimeout(function () {
    scrolling.classList.remove('is-scrolling');
  }, 100)
});