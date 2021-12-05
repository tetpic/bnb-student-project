const swiper = new Swiper('.company-subdivisions', {
  navigation: {
          nextEl: '.right-button',
          prevEl: '.left-button',
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
