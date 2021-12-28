// const { active } = require("browser-sync");
let leftButton = document.querySelectorAll('.left-button')
let rightButton = document.querySelectorAll('.right-button')

let swiper = new Swiper('.company-subdivisions', {
  navigation: {
          nextEl: rightButton[0],
          prevEl: leftButton[0],
  },
  wrapperClass: 'swiper-wrapper',
  slideClass: 'subdivision',
      pagination: {
        el: '.swiper-pagination'
      }
  });

  let asideNav = document.querySelectorAll('.aside__navigate')
  let navBlocks = document.querySelectorAll('.navigation__block')
  let backgroundImages = document.querySelectorAll('.main-background__image')
  
swiper.on('activeIndexChange', function () {
  navBlocks[swiper.activeIndex].classList.add('active')
  backgroundImages[swiper.activeIndex].classList.add('image_visible')
  navBlocks[swiper.previousIndex].classList.remove('active');
  backgroundImages[swiper.previousIndex].classList.remove('image_visible')
})


asideNav.forEach(function (asideEl) {
  asideEl.addEventListener('click', function(e) {
    i = Array.from(asideNav).indexOf(e.target)
    swiper.slideTo(i);
  })
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
let burgerSwitcher = document.querySelector('.burger_switcher')
let overlayBackground = document.querySelector('.overlay')

burgerMenuOn.addEventListener('click', function () {
  console.log('burger pushed')
  modalWindow.classList.toggle('_visible')
  burgerSwitcher.classList.toggle('burger_cross')
  overlayBackground.classList.toggle('_visible')
  
})

overlayBackground.addEventListener('click', function () {
  modalWindow.classList.remove('_visible')
  burgerSwitcher.classList.remove('burger_cross')
  overlayBackground.classList.remove('_visible')
})



let swiper2 = new Swiper('.our-events-sections', {
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
});


let roomTypes = document.querySelectorAll('.room__heading')
let roomBlocks = document.querySelectorAll('.room-block')
let pagination = document.querySelector('.__pagination_string');


let setDefaultPagination = () => {
  let paginationDefault = roomTypes[0].getBoundingClientRect()
  pagination.style.width = (paginationDefault.width) + 'px'
};
setDefaultPagination();


roomTypes.forEach(function (roomType) {
  roomType.addEventListener('click', function(event) {
    activeIndex = Array.from(roomTypes).indexOf(event.target)
    roomIndex = Array.from(roomBlocks)
    
    roomTypes.forEach(function(disable) {
      disable.classList.remove('room__heading_active')
    })

    roomBlocks.forEach(function(opacityMinus) {
      opacityMinus.style.transition = 'linear 0.2s'
      opacityMinus.style.opacity = '0';
    })
    roomTypes[activeIndex].classList.add('room__heading_active');
    let roomTypeProperties = roomTypes[activeIndex].getBoundingClientRect()

    pagination.style.transitionDuration = '0.3s';
    pagination.style.width = (roomTypeProperties.width) + 'px';
    pagination.style.left = (roomTypeProperties.left) + 'px';
    
    const banketRooms = 1
    const publicRooms = 2
    const individualRooms = 3
    const karaokeRooms = 4

    function disableBlocks () {
      roomBlocks.forEach(function(activate){
        activate.classList.remove('disabled')
      })
    
  
    if (activeIndex == banketRooms) {
      roomBlocks.forEach(function (el) {
        if (el.dataset.roomtype != 'room') {
          el.classList.add('disabled')
        }
      })
    }

    else if (activeIndex == publicRooms) {
      roomBlocks.forEach(function (el) {
        if (el.querySelector('.fill').innerText <= +40) {
          el.classList.add('disabled')
        }
      })
    }

    else if (activeIndex == individualRooms) {
      roomBlocks.forEach(function (el) {
        if (el.querySelector('.fill').innerText > +40) {
          el.classList.add('disabled')
        }
      })
    }

    else if (activeIndex == karaokeRooms) {
      roomBlocks.forEach(function (el) {
        if (el.dataset.roomtype != 'karaoke') {
          el.classList.add('disabled')
        }
      })
    }
  }

  setTimeout(disableBlocks, 600)

 
  function opacityPlus () {
    roomBlocks.forEach(function (opacityPlus) {
    opacityPlus.style.transition = 'linear 0.2s';
    opacityPlus.style.opacity = '1';
    })
  }

  setTimeout(opacityPlus, 700)
  
  
})})



// let reportSwiper = new Swiper ('.photo-reports', {
//   spaceBetween: 10,
//   slidesPerView: 'auto',
//   freeMode: {
//     enabled: true,
//   },
//   breakpoints: {
//     320: {
//       allowTouchMove: true,
//     },
//     500: {
//       allowTouchMove: true,
//     },
//     1150: {
//       allowTouchMove: false,
//     },
//   },
// })



let basketCounter = document.querySelector('.basket__counter')



let basketCounterLength = () => {
  basketCounter.innerText = prompt('сколько позиций мы положили в корзинку?')
  
  if (+(basketCounter.innerText) == +0) {
    
    basketCounter.classList.add('disabled')
  }
  else if (+(basketCounter.innerText) >= +1) {
    
    basketCounter.classList.remove('disabled')
  }
  else {
    console.log('error')
  };
  if (+(basketCounter.innerText) >= 100) {
   basketCounter.innerText = '99+'
 }
};
basketCounterLength()

let sectionDescription = document.querySelectorAll('.section__description')
let roomDescription = document.querySelectorAll('.room-description')

let setHideTextfunction = () => {
  for (let i = 0; i < sectionDescription.length; i++) {
    console.log(i)
   
     if (+sectionDescription[i].innerText.length >= +200){
      roomDescription[i].style.justifyContent = 'flex-start';      
      // sectionDescription[i].classList.add('_hide_text')
      let text = sectionDescription[i].innerText;
      sectionDescription[i].innerText = text.substr(0,290) + ('... ')
    }
  
   
    else {
      console.log ('it"s all okay')
    }
  }
}
setHideTextfunction ();



let emailPlaceHolder =  document.querySelector('.email__placeholder')
let emailInput = document.getElementById('email')
let submitButton = document.querySelector('.submit-button')


emailInput.addEventListener('click', function() {
  emailPlaceHolder.style.top = '10px';
})

emailInput.addEventListener('change', function () {
  if (emailInput.value == ('')) {
    emailPlaceHolder.style.removeProperty('top')
  }
})

submitButton.addEventListener('click', function() {
  if (emailInput.value == ('')) {
    emailPlaceHolder.style.removeProperty('top')
  }
  else if (emailInput.value !== ('')) {
    console.log(emailInput.value)
  }
  emailInput.value = ('')
})