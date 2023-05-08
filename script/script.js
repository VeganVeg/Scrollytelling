gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

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

gsap.to('', {
  ScrollTrigger: {
    markers: true,
    trigger: '#chapitre-1',
  },
  x: '100%',
  duration: 2,
})

gsap.to('#chapitre-2', {
  ScrollTrigger: {
    trigger: '#chapitre-2',
  }
})

gsap.to('#chapitre-3', {
  ScrollTrigger: {
    trigger: '#chapitre-3',
  }
})

gsap.to('#chapitre-4', {
  ScrollTrigger: {
    trigger: '#chapitre-4',
  }
})

gsap.to('#chapitre-5', {
  ScrollTrigger: {
    trigger: '#chapitre-5',
  }
})

gsap.to('#chapitre-6', {
  ScrollTrigger: {
    trigger: '#chapitre-6',
  }
})

gsap.to('.no2', {
  motionPath: {
    align: '#courbe',
    path: '#courbe'
  },
  duration: 20,
  repeat: -1,
  yoyo: true,
})

