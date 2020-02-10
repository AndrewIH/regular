// import barba from '@barba/core'
// import gsap from 'gsap'


const colorMode = document.querySelector('.mode-switcher')
const body = document.querySelector('body')
const images = document.querySelectorAll('.images')
const y = window.scrollY;
let page;

document.querySelector('#email').addEventListener('click', function(){
  document.querySelector('.pop-up').classList.add('flex')
  console.log(y)
})

window.addEventListener('click', function(){
  console.log(y)
})

document.querySelector('.p-mail .close').addEventListener('click', function(){
  document.querySelector('.pop-up').classList.remove('flex')
})

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

// console.log(aboutHover)
// aboutHover.forEach(function(item, nb) {
//   item.addEventListener('mouseenter', function(){
//     aboutData[nb].classList.add('active')
//     setTimeout(function(){aboutData[nb].classList.remove('active')}, 5000)
//   })
// })




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