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

let timeline1 = gsap.timeline()
  .from('.texteC1', {opacity: 0, letterSpacing: '4px', duration: 4})
  .from('.texteC2', {opacity: 0, letterSpacing: '4px', duration: 4})
  .from('.texteC3', {opacity: 0, letterSpacing: '4px', duration: 4})
  .from('.texteC4', {opacity: 0, letterSpacing: '4px', duration: 4})
  .from('.texteC5', {opacity: 0, letterSpacing: '4px', duration: 4})
  .from('.texteC6', {opacity: 0, letterSpacing: '4px', duration: 4})

let timeline2 = gsap.timeline()
  .to('.texteC1', {y:'40px', yoyo: true, repeat: -1, duration: 2})
  .to('.texteC2', {y:'40px', yoyo: true, repeat: -1, duration: 2}, '<')
  .to('.texteC3', {y:'40px', yoyo: true, repeat: -1, duration: 2}, '<')
  .to('.texteC4', {y:'40px', yoyo: true, repeat: -1, duration: 2}, '<')
  .to('.texteC5', {y:'40px', yoyo: true, repeat: -1, duration: 2}, '<')
  .to('.texteC6', {y:'40px', yoyo: true, repeat: -1, duration: 2}, '<')