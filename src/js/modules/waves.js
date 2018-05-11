module.exports = function() {

  // begin Waves

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

  // пациент
    var wave01 = $("#wave-01");
  // координаты до низа пациента
    var wave01BottomPos = wave01.offset().top + wave01.outerHeight();
  // пациент
    var wave02 = $("#wave-02");
  // координаты до низа пациента
    var wave02BottomPos = wave02.offset().top + wave02.outerHeight();

  $(document).on('scroll', function () {
    // сколько прокрутили от верха страницы
    var scroll = $(window).scrollTop();
    // высота экрана
    var windowHeight = $(window).height();
    //координаты прокрутки страницы относительно низа экрана
    var scrollMin = scroll + windowHeight;

    if (scrollMin >= wave01BottomPos){
      $(wave01).addClass('fix');
    } else {
      $(wave01).removeClass('fix');
    }
  });

  $(document).on('scroll', function () {
    // сколько прокрутили от верха страницы
    var scroll = $(window).scrollTop();
    // высота экрана
    var windowHeight = $(window).height();
    //координаты прокрутки страницы относительно низа экрана
    var scrollMin = scroll + windowHeight;

    if (scrollMin >= wave02BottomPos){
      $(wave02).addClass('fix');
    } else {
      $(wave02).removeClass('fix');
    }
  });


    $(function () {
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

    // пациент
    var wave01 = $("#wave-01");
    // координаты до низа пациента
    var wave01BottomPos = wave01.offset().top + wave01.outerHeight();
    // пациент
    var wave02 = $("#wave-02");
    // координаты до низа пациента
    var wave02BottomPos = wave02.offset().top + wave02.outerHeight();

    $(function () {
      // сколько прокрутили от верха страницы
      var scroll = $(window).scrollTop();
      // высота экрана
      var windowHeight = $(window).height();
      //координаты прокрутки страницы относительно низа экрана
      var scrollMin = scroll + windowHeight;

      if (scrollMin >= wave01BottomPos){
        $(wave01).addClass('fix');
      } else {
        $(wave01).removeClass('fix');
      }
    });

    $(function () {
      // сколько прокрутили от верха страницы
      var scroll = $(window).scrollTop();
      // высота экрана
      var windowHeight = $(window).height();
      //координаты прокрутки страницы относительно низа экрана
      var scrollMin = scroll + windowHeight;

      if (scrollMin >= wave02BottomPos){
        $(wave02).addClass('fix');
      } else {
        $(wave02).removeClass('fix');
      }
    });
    // end Waves

  // end Waves

};