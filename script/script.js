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
  .from('.texteC1', { opacity: 0, letterSpacing: '4px', duration: 4 })
  .from('.texteC2', { opacity: 0, letterSpacing: '4px', duration: 4 })
  .from('.texteC3', { opacity: 0, letterSpacing: '4px', duration: 4 })
  .from('.texteC4', { opacity: 0, letterSpacing: '4px', duration: 4 })
  .from('.texteC5', { opacity: 0, letterSpacing: '4px', duration: 4 })
  .from('.texteC6', { opacity: 0, letterSpacing: '4px', duration: 4 })

let timeline2 = gsap.timeline()
  .to('.texteC1', { y: '40px', yoyo: true, repeat: -1, duration: 2 })
  .to('.texteC2', { y: '40px', yoyo: true, repeat: -1, duration: 2 }, '<')
  .to('.texteC3', { y: '40px', yoyo: true, repeat: -1, duration: 2 }, '<')
  .to('.texteC4', { y: '40px', yoyo: true, repeat: -1, duration: 2 }, '<')
  .to('.texteC5', { y: '40px', yoyo: true, repeat: -1, duration: 2 }, '<')
  .to('.texteC6', { y: '40px', yoyo: true, repeat: -1, duration: 2 }, '<')



gsap.to('#chapitre-1', {
  scrollTrigger: {
    pin: true,
    pin: '.trace',
    markers: true,
    trigger: '#chapitre-1',
    start: '0% 0%',
    end: '100% 50%',
    onUpdate: (e) => {

    }
  }
});

gsap.to('#chapitre-1', {
  scrollTrigger: {
    pin: true,
    markers: true,
    trigger: '#chapitre-1',
    start: '0% 0%',
    end: '100% 50%',
  }
});



gsap.to('#chapitre-2', {
  scrollTrigger: {
    pin: true,
    pin: '.trace',
    markers: true,
    trigger: '#chapitre-2',
    start: '0% 0%',
    end: '100% 50%',
  }
})

gsap.to('#chapitre-2', {
  scrollTrigger: {
    pin: true,
    markers: true,
    trigger: '#chapitre-2',
    start: '0% 0%',
    end: '100% 50%',
  }
})



gsap.to('#chapitre-3', {
  scrollTrigger: {
    pin: true,
    pin: '.trace',
    markers: true,
    trigger: '#chapitre-3',
    start: '0% 0%',
    end: '100% 50%',
  }
})

gsap.to('#chapitre-3', {
  scrollTrigger: {
    pin: true,
    markers: true,
    trigger: '#chapitre-3',
    start: '0% 0%',
    end: '100% 50%',
  }
})



gsap.to('#chapitre-4', {
  scrollTrigger: {
    pin: true,
    pin: '.trace',
    markers: true,
    trigger: '#chapitre-4',
    start: '0% 0%',
    end: '100% 50%',
  }
})

gsap.to('#chapitre-4', {
  scrollTrigger: {
    pin: true,
    markers: true,
    trigger: '#chapitre-4',
    start: '0% 0%',
    end: '100% 50%',
  }
})



gsap.to('#chapitre-5', {
  scrollTrigger: {
    pin: true,
    pin: '.trace',
    markers: true,
    trigger: '#chapitre-5',
    start: '0% 0%',
    end: '100% 50%',
  }
})

gsap.to('#chapitre-5', {
  scrollTrigger: {
    pin: true,
    markers: true,
    trigger: '#chapitre-5',
    start: '0% 0%',
    end: '100% 50%',
  }
})



gsap.to('#chapitre-6', {
  scrollTrigger: {
    pin: true,
    pin: '.trace',
    markers: true,
    trigger: '#chapitre-6',
    start: '0% 0%',
    end: '100% 50%',
  }
})

gsap.to('#chapitre-6', {
  scrollTrigger: {
    pin: true,
    markers: true,
    trigger: '#chapitre-6',
    start: '0% 0%',
    end: '100% 50%',
  }
})

window.addEventListener('scroll', function () {

})

gsap.to('.no2', {
  motionPath: {
    scrub: 1,
    align: '#courbe',
    path: '#courbe',
  },
  duration: 20,
  repeat: -1,

})

