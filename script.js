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

      // 4. Dark Mode / Light Mode Toggle Logic
      $('#themeToggle').click(function() {
        $('body').toggleClass('dark-mode');
        
        // Change icon based on mode
        if($('body').hasClass('dark-mode')) {
          $(this).html("<i class='bx bx-sun'></i>"); // Sun icon for light mode switch
        } else {
          $(this).html("<i class='bx bx-moon'></i>"); // Moon icon for dark mode switch
        }
      });
    });