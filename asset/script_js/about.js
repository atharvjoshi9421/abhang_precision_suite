     document.addEventListener("DOMContentLoaded", function() {
            AOS.init({
                duration: 900,      // How long the animation takes (in ms)
                easing: 'ease-out-cubic', // Smooth easing
                once: true,         // Animation happens only once when scrolling down
                offset: 50          // Distance from bottom of screen to trigger
            });
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
