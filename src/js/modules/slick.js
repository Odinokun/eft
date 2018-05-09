module.exports = function() {

  // begin Slick slider

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

  // end Slick slider

};