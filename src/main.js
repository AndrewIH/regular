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


if (body.getAttribute('namespace') === 'home') {
  modalStart()
  sliderOpacity()
}

if (body.getAttribute('namespace') === 'about') {
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
    item.addEventListener('mouseenter', function(){
      aboutData[nb].classList.add('active')
      setTimeout(function(){aboutData[nb].classList.remove('active')}, 5000)
    })
  })
}