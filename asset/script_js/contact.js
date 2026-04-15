   $(document).ready(function() {
  
      // 1. Initialize AOS Animations
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      });

      // 2. Exact Math Captcha Logic (4 + 14 = ?)
      let expectedAnswer = 0;

      function initMathCaptcha() {
        // Generate numbers between 1 and 20
        let num1 = Math.floor(Math.random() * 20) + 1;
        let num2 = Math.floor(Math.random() * 20) + 1;
        
        $('#val1').text(num1);
        $('#val2').text(num2);
        expectedAnswer = num1 + num2;
        
        $('#captchaInput').val('');
      }

      // Generate on page load
      initMathCaptcha();

      // "New" Button Click
      $('#refreshCaptcha').click(function() {
        initMathCaptcha();
      });

      // Form Submission Validation
      $('#exactContactForm').submit(function(e) {
        let userAnswer = parseInt($('#captchaInput').val());
        
        if (userAnswer !== expectedAnswer) {
          e.preventDefault(); // Stop form submission
          alert("Incorrect math answer. Please try again.");
          initMathCaptcha(); // Generate new question
        } else {
          alert("Message sent successfully!");
          // Form submits normally here
        }
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


    }); // <-- This closing tag is essential for jQuery

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