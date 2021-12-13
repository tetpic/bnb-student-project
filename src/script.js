let leftButton = document.querySelectorAll('.left-button')
let rightButton = document.querySelectorAll('.right-button')




let swiper = new Swiper('.company-subdivisions', {
  navigation: {
          nextEl: rightButton[0],
          prevEl: leftButton[0],
  },
  wrapperClass: 'swiper-wrapper',
  // autoHeight: true,
  slideClass: 'subdivision',
      pagination: {
        el: '.swiper-pagination'
      }
  });

 

  
  let navBlocks = document.querySelectorAll('.navigation__block')
  let backgroundImages = document.querySelectorAll('.main-background__image')
  
swiper.on('activeIndexChange', function () {
  navBlocks[swiper.activeIndex].classList.add('active')
  backgroundImages[swiper.activeIndex].classList.add('image_visible')
  navBlocks[swiper.previousIndex].classList.remove('active');
  backgroundImages[swiper.previousIndex].classList.remove('image_visible')
})




navBlocks.forEach(function(navBlock){
  navBlock.addEventListener('click', function(event){
    i = Array.from(navBlocks).indexOf(event.target )
    swiper.slideTo(i);
    });
})

let burgerMenuOn = document.querySelector('.burger')
let burgerMenuOff = document.querySelector('.burger-off')
let modalWindow = document.querySelector('.modal-window')


burgerMenuOn.addEventListener('click', function () {
  console.log('burger pushed')
  modalWindow.classList.add('_visible')
} )

burgerMenuOff.addEventListener('click', function() {
  modalWindow.classList.remove('_visible')
} )


let swiper2 = new Swiper('.our-events-sections', {
  // spaceBetween: 5,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },  

  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: {
    enabled: true,
  },

  wrapperClass: 'swiper-wrapper',
  slideClass: 'event-section',
  // autoHeight: true,
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //   },
  //   640: {
  //     slidesPerView: 3,
  //   },
  // }, 
  // slidesPerView: 3,
  // setWrapperSize: true,
});

let roomTypes = document.querySelectorAll('.room__heading')
let roomBlocks = document.querySelectorAll('.room-block')

roomTypes.forEach(function (roomType) {
  roomType.addEventListener('click', function(event) {

    activeIndex = Array.from(roomTypes).indexOf(event.target)

    const every = 0
    const banketRooms = 1
    const publicRooms = 2
    const individualRooms = 3
    const karaokeRooms = 4

    roomBlocks.forEach(function(activate){
      activate.classList.remove('disabled')
    })
    roomTypes.forEach(function(disable) {
      disable.classList.remove('room__heading_active')
    })

    roomTypes[activeIndex].classList.add('room__heading_active')

    if (activeIndex == banketRooms) {
      document.querySelectorAll('._karaoke').forEach(function(disable){
        disable.classList.add('disabled')
      })
    }
    else if (activeIndex == publicRooms) {
      document.querySelectorAll('._individual').forEach(function(disable){
        disable.classList.add('disabled')
      })
    }
    else if (activeIndex == individualRooms) {
      document.querySelectorAll('._public').forEach(function(disable){
        disable.classList.add('disabled')
      })
    }
    else if (activeIndex == karaokeRooms) {
      document.querySelectorAll('._banket').forEach(function(disable){
        disable.classList.add('disabled')
      })
    }
    else if (activeIndex == every) {
      document.querySelectorAll('.room-block').forEach(function(activate){
        activate.classList.remove('disabled')
      })
    }
    else {
      console.log('error')
    }
})})


let roomSwiper = new Swiper ('.room-types-slider', {
  spaceBetween: 30,
  slidesPerView: "auto",
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      allowTouchMove: true,
    },
    480: {
      allowTouchMove: true,
    },
    880: {
      allowTouchMove: false,
    },
  },
})


let reportSwiper = new Swiper ('.photo-reports', {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: {
    enabled: true,
  },
  breakpoints: {
    320: {
      allowTouchMove: true,
    },
    500: {
      allowTouchMove: true,
    },
    1150: {
      allowTouchMove: false,
    },
  },
})