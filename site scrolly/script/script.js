const arrows = document.querySelector('.arrows');

const animation = gsap.to('.arrows', {
    duration: 2,
    x: '400%',
    ease: 'elastic',
})