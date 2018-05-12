// BEGIN Меню для навигации при разработке
//**************
// should be commented before production
//**************

$(document).ready(function ($) {
  pageWidget([
    'index',
    'directions',
    'service',
    'product',
    'brand',
    'contacts'
    ]);
});

function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (var i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="'
      + pages[i]
      + '.html'
      + '">'
      + pages[i]
      + '</a></li>').appendTo('.widget_list');
  }
  var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}

// END Меню для навигации при разработке



// begin search active
$('.header__search-btn').on('click', function () {
  $(this).toggleClass('active');
  $('.search').toggleClass('active');
  $('.menu__sublist').removeClass('active');

});


// begin burger active
$('.burger--main').click(function(){
  $(this).toggleClass('active');
  $('#menu').toggleClass('active');
  $('.menu__sublist').removeClass('active');
  $('body').toggleClass('fix');

});

// begin burger active
$('.menu__sublist .burger').click(function(){
  $(this).parents('.menu__sublist').removeClass('active');
});

// вычисление дляны пути svg
// var path = document.querySelector('.preloader-icon path');
// console.log(path.getTotalLength());


$('.menu__item--parent span').on('click', function () {
  $(this).siblings('.menu__sublist').addClass('active');
});


$('.product-slider__item--video').on('click', function () {
  $(this).addClass('active');
});

$('.directions-filter__btn').on('click', function () {
  $('.directions-filter').addClass('active');
  $(this).fadeOut(0);
});


// begin slider in product.html
// отображаем общее кол-во слайдов
$('#product-slider ').on('init', function(event, slick){
  var allSlide = slick.slideCount;
  $( "#product-slider__counter-all" ).html(allSlide);
});
// отображаем текущий слайд в счетчике
$('#product-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var curSlide = currentSlide + 1;
  $( "#product-slider__counter-tab" ).html(curSlide);
});
// инициализируем слайдер
$('#product-slider').slick({
  arrows: true,
  fade: true,
  autoplay: true,
  cssEase: 'linear',
  dots: false,
  adaptiveHeight:true,
  dotsClass: 'custom_paging'
});
// end   slider in product.html

//begin popup
$('.popup-open').on('click', function() {
  $('.popup__layer').fadeIn();
});
// end popup open

// begin popup close
$('.popup__close').on('click', function() {
  $('.popup__layer').fadeOut();
});


//====== Begin Programmer code ======
