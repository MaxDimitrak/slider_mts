$('.sliderVideo').slick({
  centerMode: true,
  dots: true,
  arrows: false,
  asNavFor: '.sliderName',
  speed: 600,
  touchThreshold: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 2301,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '30%',
      }
    },
    {
      breakpoint: 1930,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '28%',
      }
    },
    {
      breakpoint: 1740,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '20%',
      }
    },
    {
      breakpoint: 1382,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '15%',
      }
    },
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '15%',
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '33%',
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '25%',
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '25%',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '15%',
      }
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '8%',
      }
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '5%',
      }
    },

  ]
});

$('.sliderName').slick({
  asNavFor: '.sliderVideo',
  swipe: false,
  fade: true,
  arrows: false,
  dots: false,
})

let myvideo = document.getElementById('myvideo');
let myvideo2 = document.getElementById('myvideo2');
let myvideo3 = document.getElementById('myvideo3');
let myvideo4 = document.getElementById('myvideo4');
let myvideo5 = document.getElementById('myvideo5');
let myvideo7 = document.getElementById('myvideo7');


$('.sliderVideo').on('swipe',function(event,slick,direction){
myvideo.pause();
myvideo.currentTime = 0;
})
$('.sliderVideo').on('swipe',function(event,slick,direction){
myvideo2.pause();
myvideo2.currentTime = 0;
})
$('.sliderVideo').on('swipe',function(event,slick,direction){
myvideo3.pause();
myvideo3.currentTime = 0;
})
$('.sliderVideo').on('swipe',function(event,slick,direction){
myvideo4.pause();
myvideo4.currentTime = 0;
})
$('.sliderVideo').on('swipe',function(event,slick,direction){
myvideo5.pause();
myvideo5.currentTime = 0;
})
$('.sliderVideo').on('swipe',function(event,slick,direction){
myvideo7.pause();
myvideo7.currentTime = 0;
})

window.addEventListener('orientationchange',function(){
  if(window.orientation == 90 && window.screen.width < 700 || window.orientation == -90 &&window.screen.width < 700){
    document.getElementById('sliderVideo').style.visibility = 'hidden';
    document.getElementById('sliderName').style.visibility = 'hidden';
    document.getElementById('warning').style.visibility = 'visible';
  }else{
    document.getElementById('sliderVideo').style.visibility = 'visible';
    document.getElementById('sliderName').style.visibility = 'visible';
    document.getElementById('warning').style.visibility = 'hidden';
  }
},false);

// const videos = Array.from(document.querySelectorAll('video'));
// let playing = true;

// videos.forEach(video => {
//   video.addEventListener('play', function() {
//     if (playing) {
//       videos.forEach(el => {
//         el.pause();
//         el.currentTime = 0;
//       });
//     }
//     if (this.paused) {
//       playing = false;
//       this.play();
//     } else {
//       playing = true;
//     }
//   });
// });