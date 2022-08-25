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

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', e => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    e.target.classList.toggle('active');
});
const tabs = document.querySelectorAll('.tabs a');
for(let tab of tabs) {
    tab.addEventListener('click', e => {
        const current = tab;
        tab.classList.toggle('active');
        for(let tab of tabs) {
            console.log(tab);
            if(current != tab && tab.classList.contains('active')) tab.classList.remove('active');
        }
    })
}

VanillaCounter();

var swiper1 = new Swiper(".mySwiper1", {

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
  0: {
    slidesPerView: 1,
  },
  692: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  slidesPerColumnFill: 'column',
    grid: {
      rows: 2,
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

    
   