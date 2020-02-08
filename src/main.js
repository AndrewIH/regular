// import barba from '@barba/core'
// import gsap from 'gsap'

const colorMode = document.querySelector('.mode-switcher')
const body = document.querySelector('body')
const images = document.querySelectorAll('.images')
let page;


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


colorMode.addEventListener('click', e => {
  darkMode()
})

const darkMode = () => {
  body.classList.toggle('dark')
  colorMode.classList.toggle('white')
  images.forEach(function(image){
    image.classList.toggle('filter-img')
  })
}

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

aboutHover.forEach(function(item, nb) {
  item.addEventListener('mouseenter', function(){
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