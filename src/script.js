let leftButton = document.querySelectorAll('.left-button');
let rightButton = document.querySelectorAll('.right-button');


const swiper = new Swiper('.company-subdivisions', {
  navigation: {
          // nextEl: '.right-button',
          nextEl: rightButton[0],
          // prevEl: '.left-button',
          prevEl: leftButton[0],
  },
  wrapperClass: 'swiper-wrapper',
    autoHeight: true,
    slideClass: 'subdivision',
  });

let navBlocks = document.querySelectorAll('.navigation__block');
let backgroundImages = document.querySelectorAll('.main-background__image')
  
swiper.on('activeIndexChange', function () {
  navBlocks[swiper.activeIndex].classList.add('active')
  backgroundImages[swiper.activeIndex].classList.add('image_visible')
  navBlocks[swiper.previousIndex].classList.remove('active');
  backgroundImages[swiper.previousIndex].classList.remove('image_visible')
})

navBlocks.forEach(function(navBlock){
  navBlock.addEventListener('click', function(event){
    i = Array.from(navBlocks).indexOf(event.target );
      swiper.slideTo(i);
    });
})



const swiperEvents = new Swiper('.our-events', {
  // navigation: {
  //   nextEl: '.next',
  //   prevEl: '.prev',
  // },
  wrapperClass: 'swiper-wrapper',
  slideClass: 'event-section',
  autoHeight: true,
  // slidesPerView: 1,
});