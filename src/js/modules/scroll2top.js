module.exports = function() {

  // begin scroll2top
  $(document).ready(function () {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('.arr-up').fadeIn();
      } else {
        $('.arr-up').fadeOut();
      }
    });

    $('.arr-up').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 500);
      return false;
    });

  });
  // end scroll2top

};