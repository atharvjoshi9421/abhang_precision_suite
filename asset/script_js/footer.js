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
