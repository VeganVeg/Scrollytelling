const arrows = document.querySelector('.arrows');

const animation = Gsap.to('.arrows', { 
    duration: 2,
    x: '400%'
  });
  animation.play()