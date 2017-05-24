$(function ($) {

   $.jInvertScroll(['#parallax', '#bkg-container'], {    // an array containing the selector(s) for the elements you want to animate
      onScroll: function (percent) {   // optional: callback function that will be called when the user scrolls down, 
                                       // useful for animating other things on the page
         // console.log(percent);
      }
   });

   $('#page-links a').on('click', function (e) {
      e.preventDefault();

      var target = '#'+$(this).data('target');
      var left = $(target).position().left;
      var total = $('#parallax').width();
      var perc = left / (total - $(window).width()) * 100;
      
      var height = $('html').height();
      var final = ((height - $(window).height())/ 100 * perc);
      
      $('html, body').animate({scrollTop: final}, 1000);
   });

   $(document).ready(function () {
      $('#parallax').css("height", $(window).height() + "px");
      // $('#bios-section').css("width", $(window).width() + "px");
      // $('.bio-bkg').css("width",$(window).width()+"px");

      $('.social-feed-container').socialfeed({
         facebook:{
            accounts: ['@surferyeti','!surferyeti'],
            limit: 10, // max number of posts to load
            access_token: "1936729116556277|bdf3f97141b8c115898421ada990e68b"
         },
         length: 400, // for posts with text longer than this length, show an ellipsis
         update_period: 5000,
         template: "fb-post-template.html",
         date_format: "ll",
         date_locale: "en",
      });

   });

   $(window).resize(function () {
      $('#parallax').css("height",$(window).height()+"px");
      // $('#bios-section').css("width", $(window).width() + "px");
      // $('.bio-bkg').css("width",$(window).width()+"px");
   });
   
   $('#sean-hover-box').hover(
      function () { /* hover enter */
         $('#cutout-sean').css("transform",         "translate3d(40px, 0px, 0px)");
         $('#cutout-sean').css("-ms-transform",     "translate3d(40px, 0px, 0px)");
         $('#cutout-sean').css("-moz-transform",    "translate3d(40px, 0px, 0px)");
         $('#cutout-sean').css("-webkit-transform", "translate3d(40px, 0px, 0px)");

         $('#sean-bio').css("visibility", "visible");
         $('#sean-bio').fadeTo(200, 1);
      },
      function () { /* hover leave */
         $('#cutout-sean').css("transform",         "translate3d(0px, 0px, 0px)");
         $('#cutout-sean').css("-ms-transform",     "translate3d(0px, 0px, 0px)");
         $('#cutout-sean').css("-moz-transform",    "translate3d(0px, 0px, 0px)");
         $('#cutout-sean').css("-webkit-transform", "translate3d(0px, 0px, 0px)");

         $('#sean-bio').fadeTo(200, 0, function () {
            $('#sean-bio').css("visibility", "hidden");
         });
      }
   );

   $('#graydon-hover-box').hover(
      function () { /* hover enter */
         $('#cutout-graydon').css("transform",         "translate3d(-40px, 0px, 0px)");
         $('#cutout-graydon').css("-ms-transform",     "translate3d(-40px, 0px, 0px)");
         $('#cutout-graydon').css("-moz-transform",    "translate3d(-40px, 0px, 0px)");
         $('#cutout-graydon').css("-webkit-transform", "translate3d(-40px, 0px, 0px)");

         $('#graydon-bio').css("visibility", "visible");
         $('#graydon-bio').fadeTo(200, 1);
      },
      function () { /* hover leave */
         $('#cutout-graydon').css("transform",         "translate3d(0px, 0px, 0px)");
         $('#cutout-graydon').css("-ms-transform",     "translate3d(0px, 0px, 0px)");
         $('#cutout-graydon').css("-moz-transform",    "translate3d(0px, 0px, 0px)");
         $('#cutout-graydon').css("-webkit-transform", "translate3d(0px, 0px, 0px)");

         $('#graydon-bio').fadeTo(200, 0, function () {
            $('#graydon-bio').css("visibility", "hidden");
         });
      }
   );

   $('#alec-hover-box').hover(
      function () { /* hover enter */
         $('#cutout-alec').css("transform",         "translate3d(40px, 0px, 0px)");
         $('#cutout-alec').css("-ms-transform",     "translate3d(40px, 0px, 0px)");
         $('#cutout-alec').css("-moz-transform",    "translate3d(40px, 0px, 0px)");
         $('#cutout-alec').css("-webkit-transform", "translate3d(40px, 0px, 0px)");

         $('#alec-bio').css("visibility", "visible");
         $('#alec-bio').fadeTo(200, 1);
      },
      function () { /* hover leave */
         $('#cutout-alec').css("transform",         "translate3d(0px, 0px, 0px)");
         $('#cutout-alec').css("-ms-transform",     "translate3d(0px, 0px, 0px)");
         $('#cutout-alec').css("-moz-transform",    "translate3d(0px, 0px, 0px)");
         $('#cutout-alec').css("-webkit-transform", "translate3d(0px, 0px, 0px)");

         $('#alec-bio').fadeTo(200, 0, function () {
            $('#alec-bio').css("visibility", "hidden");
         });
      }
   );

   $('#mars-hover-box').hover(
      function () { /* hover enter */
         $('#cutout-mars').css("transform",         "translate3d(-40px, 0px, 0px)");
         $('#cutout-mars').css("-ms-transform",     "translate3d(-40px, 0px, 0px)");
         $('#cutout-mars').css("-moz-transform",    "translate3d(-40px, 0px, 0px)");
         $('#cutout-mars').css("-webkit-transform", "translate3d(-40px, 0px, 0px)");

         $('#mars-bio').css("visibility", "visible");
         $('#mars-bio').fadeTo(200, 1);
      },
      function () { /* hover leave */
         $('#cutout-mars').css("transform",         "translate3d(0px, 0px, 0px)");
         $('#cutout-mars').css("-ms-transform",     "translate3d(0px, 0px, 0px)");
         $('#cutout-mars').css("-moz-transform",    "translate3d(0px, 0px, 0px)");
         $('#cutout-mars').css("-webkit-transform", "translate3d(0px, 0px, 0px)");

         $('#mars-bio').fadeTo(200, 0, function () {
            $('#mars-bio').css("visibility", "hidden");
         });
      }
   );

});
