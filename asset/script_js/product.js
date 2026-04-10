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