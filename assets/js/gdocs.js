$(document).ready(function(){
	$(window).scroll(function(){

      if ($(window).scrollTop() >= 10) {
         $('nav.top-nav').addClass('scroller');
      }
      else {
         $('nav.top-nav').removeClass('scroller');
      }
    });
});