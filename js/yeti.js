$(function ($) {

   /* set splash and snapcode screens to window size */
   $('#splash-screen').css("height", $(window).height() + "px");
   $('#splash-screen').css("width", $(window).width() + "px");
   $('#snapcode-screen').css("height", $(window).height() + "px");
   $('#snapcode-screen').css("width", $(window).width() + "px");

   $.jInvertScroll(['#parallax', '#bkg-container'], { /* array of elements to animate */
      onScroll: function (percent) { /* function that is called when the user scrolls */
         
         var total     = $('#parallax').width();
         var winWidth  = $(window).width();         
         var showsPerc = $('#shows-section').position().left / (total - winWidth);
         var artPerc   = $('#info-section').position().left / (total - winWidth);

         /* un-highlight all buttons */
         $('#bios-btn').css("color", "#b75a01");
         $('#shows-btn').css("color", "#b75a01");
         $('#info-btn').css("color", "#b75a01");   

         if (percent >= artPerc-0.05) {
            /* highlight 'info' button */
            $('#info-btn').css("color", "#dabc5b");
         }
         else if (percent >= showsPerc-0.05) {
            /* highlight 'shows' button */
            $('#shows-btn').css("color", "#dabc5b");
         }
         else { 
            /* highlight 'home' button */
            $('#bios-btn').css("color", "#dabc5b");
            $('#logo-hover').fadeTo(200, 1);
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

   $(window).on("load", function () {
      /* reveal the page once everything (all images) is loaded */
      $('#splash-screen').fadeTo(300, 0, function () {
         $('#splash-screen').css("display", "none");
         $('#splash-logo').css("display", "none");
      });
   });

   $(document).ready(function () {
      /* set locale of dates used in social-feed */
      moment.locale('en');
      
      /* set height of scrolling section to window height */
      // $('#parallax').css("height", $(window).height() + "px");

      if ($(window).height() < 768) {
         $('#bottom-border-gradient').css("top",($(window).height()-150)+"px");
      }      
      else {
         $('#bottom-border-gradient').css("top",618+"px");
      }
      $('#bottom-border-gradient').css("width",$(window).width()+"px");      

      /* highlight the first ('home') nav button */
      $('#bios-btn').css("color", "#dabc5b");

      $('#splash-screen').fadeTo(300, 0, function () {
         $('#splash-screen').css("display", "none");
         $('#splash-logo').css("display", "none");
      });

      /* social-feed setup */
      $('.social-feed-container').socialfeed({
         facebook:{
            accounts: ['@surferyeti','!surferyeti'],
            limit: 10, /* max number of posts to load */
            access_token: "1936729116556277|bdf3f97141b8c115898421ada990e68b"
         },
         length: 400, /* for posts with text longer than this length, show an ellipsis */
         update_period: 5000,
         template: "fb-post-template.html",
         date_format: "ll",
         date_locale: "en",
      });
   });

   $(window).resize(function () {
      // $('#parallax').css("height", $(window).height() + "px");
      
      $('#splash-screen').css("height", $(window).height() + "px");
      $('#splash-screen').css("width", $(window).width() + "px");
      // $('#bios-section').css("width", $(window).width() + "px");
      // $('.bio-bkg').css("width",$(window).width()+"px");

      if ($(window).height() < 768) {
         $('#bottom-border-gradient').css("top",($(window).height()-150)+"px");
      }      
      else {
         $('#bottom-border-gradient').css("top",618+"px");
      }
      $('#bottom-border-gradient').css("width", $(window).width() + "px");
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
         $('#social-hover-box').css("height", "180px");
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

         $('#snapchat-btn').css("transform",         "translate3d(0px, -120px, 0px)");
         $('#snapchat-btn').css("-ms-transform",     "translate3d(0px, -120px, 0px)");
         $('#snapchat-btn').css("-moz-transform",    "translate3d(0px, -120px, 0px)");
         $('#snapchat-btn').css("-webkit-transform", "translate3d(0px, -120px, 0px)");

         // $('#soundcloud-btn').css("transform",         "translate3d(0px, -180px, 0px)");
         // $('#soundcloud-btn').css("-ms-transform",     "translate3d(0px, -180px, 0px)");
         // $('#soundcloud-btn').css("-moz-transform",    "translate3d(0px, -180px, 0px)");
         // $('#soundcloud-btn').css("-webkit-transform", "translate3d(0px, -180px, 0px)");
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

         $('#snapchat-btn').css("transform",         "translate3d(0px, 0px, 0px)");
         $('#snapchat-btn').css("-ms-transform",     "translate3d(0px, 0px, 0px)");
         $('#snapchat-btn').css("-moz-transform",    "translate3d(0px, 0px, 0px)");
         $('#snapchat-btn').css("-webkit-transform", "translate3d(0px, 0px, 0px)");
         
         // $('#soundcloud-btn').css("transform",         "translate3d(0px, 0px, 0px)");
         // $('#soundcloud-btn').css("-ms-transform",     "translate3d(0px, 0px, 0px)");
         // $('#soundcloud-btn').css("-moz-transform",    "translate3d(0px, 0px, 0px)");
         // $('#soundcloud-btn').css("-webkit-transform", "translate3d(0px, 0px, 0px)");
      }
   );
   
   $('#snapchat-btn').click(function () {
      $('#snapcode-screen').css("display", "inline-block");
      $('#snapcode, #snapcode-msg').css("display", "inline-block");
      $('#snapcode-screen').fadeTo(400, 0.8, function () {
         
      });
      $('#snapcode, #snapcode-msg').fadeTo(400, 1, function () {
         
      });
   });

   $('#snapcode, #snapcode-screen, #snapcode-msg').click(function () {
      $('#snapcode-screen').fadeTo(400, 0, function () {
         $('#snapcode-screen').css("display", "none");
      });
      $('#snapcode, #snapcode-msg').fadeTo(400, 0, function () {
         $('#snapcode, #snapcode-msg').css("display", "none");
      });
   });
   
   $('#logo, #logo-hover').hover(
      function () {
         $('#logo-hover').fadeTo(200, 1);
      },
      function () {
         $('#logo-hover').fadeTo(200, 0);
      }
   );

});
