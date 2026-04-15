 $(document).ready(function() {
      // 1. Initialize Animations (AOS)
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      });

      // 2. Slider auto-play settings
      $('#heroCarousel').carousel({
        interval: 3500,
        pause: "hover"
      });

      // 3. Scroll to Top Button Logic
      $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
          $('#scrollTopBtn').addClass('show');
        } else {
          $('#scrollTopBtn').removeClass('show');
        }
      });

      $('#scrollTopBtn').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
      });
    });

        // 4. Mobile Menu Toggle Logic
$('.mobile-toggle').click(function() {
  $('.main-nav').toggleClass('active');
  
  // Swap the BoxIcon between a Menu (hamburger) and an X (close)
  if ($('.main-nav').hasClass('active')) {
    $('#mobile-icon').removeClass('bx-menu').addClass('bx-x');
  } else {
    $('#mobile-icon').removeClass('bx-x').addClass('bx-menu');
  }
});