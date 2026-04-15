   AOS.init({
        duration: 800,
        once: true
    });

    function filterSelection(category, btn) {
        // Active button UI
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const items = document.querySelectorAll('.filter-item');
        
        items.forEach(item => {
            if (category === 'all' || item.classList.contains(category)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });

        AOS.refresh();
    }

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