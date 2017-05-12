$(function ($) {
   $.jInvertScroll(['#parallax'], {    // an array containing the selector(s) for the elements you want to animate
      onScroll: function (percent) {   // optional: callback function that will be called when the user scrolls down, 
                                       // useful for animating other things on the page
         // console.log(percent);
      }
   });

   $('#page-links a').on('click', function (e) {
      e.preventDefault();

      var target = '.'+$(this).data('target');
      var left = $(target).position().left;
      var total = $('#parallax').width();
      var perc = left / (total - $(window).width()) * 100;
      
      var height = $('html').height();
      var final = ((height - $(window).height())/ 100 * perc);
      
      $('html, body').animate({scrollTop: final}, 1000);
   });

   $(document).ready(function () {
      $('#parallax').css("height", $(window).height() + "px");
   });

   $(window).resize(function () {
      $('#parallax').css("height",$(window).height()+"px");
   });

});
