  document.addEventListener("DOMContentLoaded", () => {

            // NEW CODE ADDED HERE: This command tells AOS to actually run
            AOS.init({
                duration: 800,
                once: true
            });

            const equationDisplay = document.getElementById("captchaEquation");
            const newCaptchaBtn = document.getElementById("newCaptchaBtn");
            const captchaInput = document.getElementById("captchaInput");
            const form = document.getElementById("quoteForm");

            let correctAnswer = 0;

            // Function to generate a new math problem
            function generateCaptcha() {
                // Generate two random numbers between 1 and 15
                const num1 = Math.floor(Math.random() * 15) + 1;
                const num2 = Math.floor(Math.random() * 15) + 1;
                
                correctAnswer = num1 + num2;
                equationDisplay.textContent = `${num1} + ${num2} = ?`;
                captchaInput.value = ""; // Clear previous input
            }

            // Initialize first captcha
            generateCaptcha();

            // Handle "New" button click
            newCaptchaBtn.addEventListener("click", generateCaptcha);

            // Form Submission Handling
            form.addEventListener("submit", (e) => {
                e.preventDefault();

                // Validate Captcha
                const userAnswer = parseInt(captchaInput.value, 10);
                
                if (userAnswer !== correctAnswer) {
                    alert("Incorrect math answer. Please try again.");
                    generateCaptcha();
                    return;
                }

                // If validation passes, you would handle the actual submission here
                alert("Quote request submitted successfully!");
                form.reset();
                generateCaptcha(); // Reset captcha for the next submission
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

  
    