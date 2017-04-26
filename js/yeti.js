$(function () {
   $('body').mousewheel(function (event) {
      console.log(event.deltaX, event.deltaY, event.deltaFactor);

      $('#parallax').animate(
         {
            left: '-=' + (event.deltaY * 10)
         },
         {
            duration: 500,
            easing: 'swing',
            queue: false,
      }, 'swing');

      // this.scrollLeft -= (event.deltaY);
      event.preventDefault();
   });
});