// BEGIN Меню для навигации при разработке
//**************
// should be commented before production
//**************

$(document).ready(function ($) {
  pageWidget([
    'index',
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


//====== Begin Programmer code ======





// вычисление дляны пути svg
// var path = document.querySelector('.preloader-icon path');
// console.log(path.getTotalLength());



$(document).on('scroll', function () {
  // расстояние до footer
  var footer = $("#footer").offset().top - $(window).scrollTop();
  // высота экрана
  var windowHeight = $(window).height();
  var wave01 = $("#wave-01");
  var wave02 = $("#wave-02");
  if (footer <= windowHeight) {
    $(wave01).addClass('absolute');
    $(wave02).addClass('absolute');
  } else {
    $(wave01).removeClass('absolute');
    $(wave02).removeClass('absolute');
  }
});


$(document).on('scroll', function () {
  // пациент
  var wave = $("#wave-01");
  // сколько прокрутили
  var mainPos = $(window).scrollTop();
  // высота страницы
  var pageHeight = $(document).outerHeight(true);
  // расстояние 20% от высоты страницы
  var percent20 = (pageHeight/100)*20;

  if (mainPos >= percent20){
    $(wave).addClass('active');
  }else {
    $(wave).removeClass('active');
  }
});


$(document).on('scroll', function () {
  // пациент
  var wave = $("#wave-02");
  // сколько прокрутили
  var mainPos = $(window).scrollTop();
  // высота страницы
  var pageHeight = $(document).outerHeight(true);
  // расстояние 40% от высоты страницы
  var percent40 = (pageHeight/100)*40;

  if (mainPos >= percent40){
    $(wave).addClass('active');
  }else {
    $(wave).removeClass('active');
  }
});
