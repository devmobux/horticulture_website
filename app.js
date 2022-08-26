// utility functions
if(!Util) function Util () {};

Util.addClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.add(classList[0]);
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.osHasReducedMotion = function() {
  if(!window.matchMedia) return false;
  var matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(matchMediaObj) return matchMediaObj.matches;
  return false; 
};

// File#: _1_vertical-timeline
// Usage: codyhouse.co/license
(function() {
  var VTimeline = function(element) {
    this.element = element;
    this.sections = this.element.getElementsByClassName('js-v-timeline__section');
    this.animate = this.element.getAttribute('data-animation') && this.element.getAttribute('data-animation') == 'on' ? true : false;
    this.animationClass = 'v-timeline__section--animate';
    this.animationDelta = '-150px';
    initVTimeline(this);
  };

  function initVTimeline(element) {
    if(!element.animate) return;
    for(var i = 0; i < element.sections.length; i++) {
      var observer = new IntersectionObserver(vTimelineCallback.bind(element, i),
      {rootMargin: "0px 0px "+element.animationDelta+" 0px"});
      observer.observe(element.sections[i]);
    }
  };

  function vTimelineCallback(index, entries, observer) {
    if(entries[0].isIntersecting) {
      Util.addClass(this.sections[index], this.animationClass);
      observer.unobserve(this.sections[index]);
    } 
  };

  //initialize the VTimeline objects
  var timelines = document.querySelectorAll('.js-v-timeline'),
    intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
    reducedMotion = Util.osHasReducedMotion();
  if( timelines.length > 0) {
    for( var i = 0; i < timelines.length; i++) {
      if(intersectionObserverSupported && !reducedMotion) (function(i){new VTimeline(timelines[i]);})(i);
      else timelines[i].removeAttribute('data-animation');
    }
  }
}());

const navbar = document.querySelector('.navbar');

document.getElementById('menu-btn').addEventListener('click', () => navbar.classList.toggle('collapsed'));
document.getElementById('close-btn').addEventListener('click', () => navbar.classList.remove('collapsed'));

window.addEventListener('scroll', e => {
  let windowY = window.pageYOffset;
  let navbarHeight = document.querySelector('.navbar').offsetHeight;
  if (windowY > navbarHeight) navbar.classList.add('sticky', 'shadow-lg');else
  navbar.classList.remove('sticky', 'shadow-lg');
});


var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  slidesPerView: 1,
  grid: {
    rows: 1,
  },
  
pagination: {
  el: ".swiper-pagination",
  clickable: true
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
breakpoints: {
  692: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
    grid: {
      rows: 2,
      fill: 'row',
    },
  }
}
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
      spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      }
    }
  });

VanillaCounter();