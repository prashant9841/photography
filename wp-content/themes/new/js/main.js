// Hello.
//
// This is The Scripts used for Awesome Photography/Portfolio Template
//
//

function main() {

(function () {
   'use strict';

   //Page Loader
        //<![CDATA[
      $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});

        console.log('ads00');
      });
      //]]>
      
   // Contact form toggle hide/show
    $(document).ready(function(){
      $("#show").click(function(){
        $("#contact").slideToggle("slow,swing");
      });
    });

    // Wow animation
      new WOW().init();

    // Header/Vision carousel slider
      $('.carousel').carousel({
        interval: 3000
      });

      
    // jQuery for page scrolling feature - requires jQuery Easing plugin
      $(function() {
        $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
          event.preventDefault();
        });
      });

    // Highlight the top nav as scrolling occurs
      $('body').scrollspy({
          target: '.navbar-fixed-top'
      });

    // Closes the Responsive Menu on Menu Item Click
      $('.navbar-collapse ul li a').click(function() {
          $('.navbar-toggle:visible').click();
      });

}());

}
main();