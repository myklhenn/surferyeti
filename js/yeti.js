$(function ($) {

   $.jInvertScroll(['#parallax', '#bkg-container'], { // array of elements to animate
      onScroll: function (percent) { // function that is called when the user scrolls
         
         var total     = $('#parallax').width();
         var winWidth  = $(window).width();         
         var showsPerc = $('#shows-section').position().left / (total - winWidth);
         var artPerc   = $('#photos-section').position().left / (total - winWidth);

         $('#bios-btn').css("color", "#dabc5b");
         $('#shows-btn').css("color", "#dabc5b");
         $('#photos-btn').css("color", "#dabc5b");

         if (percent >= artPerc-0.05) {
            // highlight 'art' button
            $('#photos-btn').css("color", "#b75a01");
            // un-highlight other buttons
            // $('#bios-btn').css("color", "#dabc5b");
            // $('#shows-btn').css("color", "#dabc5b");
         }
         else if (percent >= showsPerc-0.05) {
            // highlight 'shows' button
            $('#shows-btn').css("color", "#b75a01");
            // un-highlight other buttons
            // $('#bios-btn').css("color", "#dabc5b");
            // $('#photos-btn').css("color", "#dabc5b");
         }
         else { 
            // highlight 'home' button
            $('#bios-btn').css("color", "#b75a01");
            // un-highlight other buttons
            // $('#shows-btn').css("color", "#dabc5b");
            // $('#photos-btn').css("color", "#dabc5b");
         }

      }
   });

   $('#page-links a').on('click', function (e) {
      e.preventDefault();

      var target = '#'+$(this).data('target');
      var left   = $(target).position().left;
      var total  = $('#parallax').width();
      var perc   = left / (total - $(window).width()) * 100;
      
      var height = $('html').height();
      var final  = ((height - $(window).height()) / 100 * perc);
      
      $('html, body').animate({scrollTop: final}, 1000);
   });

   $(document).ready(function () {
      /* set height of scrolling section to window height */
      $('#parallax').css("height", $(window).height() + "px");

      /* highlight the first ('home') nav button */
      $('#bios-btn').css("color", "#b75a01");

      /* social-feed setup */
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

   $('#social-hover-box').hover(
      function () { /* hover enter */
         /* extend height of hover trigger box */
         $('#social-hover-box').css("height", "240px");
         /* hide menu (three dots) button */
         $('#social-menu-btn').fadeTo(200, 0, function () {
            $('#social-menu-btn').css("visibility", "hidden");
         });
         /* fade in and animate buttons */
         $('.social-btn').css("visibility", "visible");
         $('.social-btn').fadeTo(200, 1);
         $('#bandcamp-btn').css("transform",         "translate3d(0px, -60px, 0px)");
         $('#bandcamp-btn').css("-ms-transform",     "translate3d(0px, -60px, 0px)");
         $('#bandcamp-btn').css("-moz-transform",    "translate3d(0px, -60px, 0px)");
         $('#bandcamp-btn').css("-webkit-transform", "translate3d(0px, -60px, 0px)");
         $('#soundcloud-btn').css("transform",         "translate3d(0px, -120px, 0px)");
         $('#soundcloud-btn').css("-ms-transform",     "translate3d(0px, -120px, 0px)");
         $('#soundcloud-btn').css("-moz-transform",    "translate3d(0px, -120px, 0px)");
         $('#soundcloud-btn').css("-webkit-transform", "translate3d(0px, -120px, 0px)");
         $('#snapchat-btn').css("transform",         "translate3d(0px, -180px, 0px)");
         $('#snapchat-btn').css("-ms-transform",     "translate3d(0px, -180px, 0px)");
         $('#snapchat-btn').css("-moz-transform",    "translate3d(0px, -180px, 0px)");
         $('#snapchat-btn').css("-webkit-transform", "translate3d(0px, -180px, 0px)");
      },
      function () { /* hover leave */
         /* restore original height of hover trigger box */
         $('#social-hover-box').css("height", "48px");
         /* hide menu (three dots) button */
         $('#social-menu-btn').css("visibility", "visible");
         $('#social-menu-btn').fadeTo(200, 1);
         /* fade out and animate buttons */
         $('.social-btn').fadeTo(200, 0, function () {
            $('.social-btn').css("visibility", "hidden");
         });         
         $('#bandcamp-btn').css("transform",         "translate3d(0px, 0px, 0px)");
         $('#bandcamp-btn').css("-ms-transform",     "translate3d(0px, 0px, 0px)");
         $('#bandcamp-btn').css("-moz-transform",    "translate3d(0px, 0px, 0px)");
         $('#bandcamp-btn').css("-webkit-transform", "translate3d(0px, 0px, 0px)");
         
         $('#soundcloud-btn').css("transform",         "translate3d(0px, 0px, 0px)");
         $('#soundcloud-btn').css("-ms-transform",     "translate3d(0px, 0px, 0px)");
         $('#soundcloud-btn').css("-moz-transform",    "translate3d(0px, 0px, 0px)");
         $('#soundcloud-btn').css("-webkit-transform", "translate3d(0px, 0px, 0px)");
         
         $('#snapchat-btn').css("transform",         "translate3d(0px, 0px, 0px)");
         $('#snapchat-btn').css("-ms-transform",     "translate3d(0px, 0px, 0px)");
         $('#snapchat-btn').css("-moz-transform",    "translate3d(0px, 0px, 0px)");
         $('#snapchat-btn').css("-webkit-transform", "translate3d(0px, 0px, 0px)");
      }
   );
   
});
