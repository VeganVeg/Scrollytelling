const arrows = document.querySelector('.arrows');

const animation = gsap.to('.arrows', { 
    duration: 0.8,
    y: '50%',
    repeat: -1,
    yoyo: true
  });

  window.addEventListener('scroll', function(){
    setTimeout(function() {
      console.log("⏰");
    }, 100)
  })