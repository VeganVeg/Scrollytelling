const arrows = document.querySelector('.arrows');
const scrolling = document.querySelector('.is-scrolling')

const animation = gsap.to('.arrows', { 
    duration: 0.8,
    y: '50%',
    repeat: -1,
    yoyo: true
  });

  window.addEventListener('scroll', function(){
    setTimeout(function() {
      scrolling.classList.remove('is-scrolling');
      console.log('test')
    }, 100)
  })