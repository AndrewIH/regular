import $ from 'jquery'
import barba from '@barba/core'
import gsap from 'gsap'

function mainLaunch() {
  console.log('launched');
  $('.mode-switcher').on('click', function(e) {
    $('body').toggleClass("dark");
    $('.mode-switcher').toggleClass("white");
    e.preventDefault()
  })

  $('.c-about-data-1').hover( function(e) {
    $('.c-data-n1').toggleClass("active");
    e.preventDefault()
  })

  $('.c-about-data-2').hover( function(e) {
    $('.c-data-n2').toggleClass("active");
    e.preventDefault()
  })

  $('.c-about-data-3').hover( function(e) {
    $('.c-data-n3').toggleClass("active");
    e.preventDefault()
  })
}

barba.hooks.beforeEnter((data) => {
  mainLaunch()
})

barba.init({
  transitions: [{
    name: 'main',
    leave: function(data) {
      var done = this.async();
      gsap.to(data.current.container, {
      	duration: 0.6,
        opacity: 0,
        onComplete: done,
        ease: "power3.inOut"
      });
    },
    enter: function(data) {
      var done = this.async();
      gsap.from(data.next.container, {
      	duration: 0.6,
        opacity: 0,
        onComplete: done,
        ease: "power3.inOut"
      });
    }
  }]
})