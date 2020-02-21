// import barba from '@barba/core'
import gsap from 'gsap'


const colorMode = document.querySelector('.mode-switcher')
const body = document.querySelector('body')
const images = document.querySelectorAll('.images')
const modal = document.querySelector('.pop-up')
let scrollY;
let page;

window.addEventListener('scroll', function(){
  scrollY = window.scrollY;
})



function modalStart() {
  document.querySelector('#email').addEventListener('click', function(){
    document.querySelector('.pop-up').classList.add('flex')
    body.classList.add('modal-open')
    const tl = gsap.timeline()
    tl.fromTo('.pop-up', {autoAlpha:0}, {autoAlpha:1, duration:0.6, ease:'power3.out'})
    .fromTo('.p-mail', {autoAlpha:0, y:40}, {autoAlpha:1, y:0, duration:0.6, ease:'power3.out'}, "-=0.4")
  })

  document.querySelector('.p-mail .close').addEventListener('click', function(){
    const tl = gsap.timeline()
    const done = () => {
      document.querySelector('.pop-up').classList.remove('flex')
    }
    body.classList.remove('modal-open')
    tl.fromTo('.pop-up', {autoAlpha:1}, {autoAlpha:0, duration:0.6, ease:'power3.out'})
    .fromTo('.p-mail', {autoAlpha:1, y:0}, {autoAlpha:0, y:40, duration:0.6, ease:'power3.out', onComplete : done}, "-=0.6")
  })
}
modalStart()

function sliderOpacity() {
  const target = document.querySelector('.c-slider')
  const targetHeight = target.clientHeight
  gsap.set(target, {autoAlpha:'100%'})

  window.addEventListener('scroll', function(){
    const scrollPercent = Math.floor((scrollY / targetHeight) * 100)

    if(scrollPercent < 100) {
      gsap.set(target, {autoAlpha: 100 - (scrollPercent * 1.65) + '%'})
    } else {
      return
    }
  })
}
sliderOpacity()

const prismicContent = () => {
  const Prismic = require('prismic-javascript');
   
  const apiEndpoint = "https://regular.cdn.prismic.io/api/v2";
   
  Prismic.getApi(apiEndpoint).then(function(api) {
    return api.query(""); // An empty query will return all the documents
  }).then(function(response) {
    let page = response.results[0]
    console.log(page.data)
  }, function(err) {
    console.log("Something went wrong: ", err)
  })
}

prismicContent()



const aboutHover = [
  document.querySelector('.c-about-data-1'),
  document.querySelector('.c-about-data-2'),
  document.querySelector('.c-about-data-3')
]

const aboutData = [
  document.querySelector('.c-data-n1'),
  document.querySelector('.c-data-n2'),
  document.querySelector('.c-data-n3')
]

console.log(aboutHover)
aboutHover.forEach(function(item, nb) {
  this.addEventListener('mouseenter', function(){
    aboutData[nb].classList.add('active')
    setTimeout(function(){aboutData[nb].classList.remove('active')}, 5000)
  })
})




// barba.hooks.beforeEnter((data) => {
//   mainLaunch()
// })

// barba.init({
//   transitions: [{
//     name: 'main',
//     leave: function(data) {
//       var done = this.async();
//       gsap.to(data.current.container, {
//       	duration: 0.6,
//         opacity: 0,
//         onComplete: done,
//         ease: "power3.inOut"
//       });
//     },
//     enter: function(data) {
//       var done = this.async();
//       gsap.from(data.next.container, {
//       	duration: 0.6,
//         opacity: 0,
//         onComplete: done,
//         ease: "power3.inOut"
//       });
//     }
//   }]
// })