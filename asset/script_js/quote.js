$(document).ready(function() {
  
  // 1. Initialize AOS Animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });

  // 2. Mobile Menu Toggle Logic
  $('.mobile-toggle').click(function() {
    $('.main-nav').toggleClass('active');
    
    if ($('.main-nav').hasClass('active')) {
      $('#mobile-icon').removeClass('bx-menu').addClass('bx-x');
    } else {
      $('#mobile-icon').removeClass('bx-x').addClass('bx-menu');
    }
  });

  // 3. Exact Math Captcha Logic
  let expectedAnswer = 0;

  function initMathCaptcha() {
    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;

    $('#val1').text(num1);
    $('#val2').text(num2);
    expectedAnswer = num1 + num2;

    $('#captchaInput').val('');
  }

  // Generate on page load
  initMathCaptcha();

  $('#refreshCaptcha').click(function() {
    initMathCaptcha();
  });

  // 5. Scroll to Top Button Logic
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