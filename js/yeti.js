
$(function ($) {
   $.jInvertScroll(['#parallax'], {    // an array containing the selector(s) for the elements you want to animate
      onScroll: function (percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
         // console.log(percent);
      }
   });
});

// $(function () {
//    $('body').mousewheel(function (event) {
//       console.log(event.deltaX, event.deltaY, event.deltaFactor);

//       $('#parallax').animate(
//          {
//             left: '-=' + (event.deltaY * 60)
//          },
//          {
//             duration: 500,
//             easing: 'swing',
//             queue: false,
//       }, 'swing');

//       // this.scrollLeft -= (event.deltaY);
//       event.preventDefault();
//    });
// });
