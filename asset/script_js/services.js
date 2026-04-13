  gsap.registerPlugin(ScrollTrigger);

        // Header Animation
        gsap.from(".services-header h2, .services-header p", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out"
        });

        // Loop through each service row to create customized ScrollTriggers
        const rows = document.querySelectorAll(".service-row");

        rows.forEach((row) => {
            const imageCol = row.querySelector(".service-image-col");
            const textCol = row.querySelector(".service-text-col");
            
            // Determine animation direction based on data attributes in HTML
            const imgDir = imageCol.getAttribute("data-direction") === "left" ? -100 : 100;
            const textDir = textCol.getAttribute("data-direction") === "left" ? -100 : 100;

            // Create a GSAP timeline for each row
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 80%", // Triggers when the top of the row hits 80% of viewport
                    toggleActions: "play none none reverse" // Animates in, and reverses when scrolling back up
                }
            });

            // Animate Image
            tl.fromTo(imageCol, 
                { x: imgDir, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )
            // Animate Text slightly after image starts
            .fromTo(textCol,
                { x: textDir, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.6" // overlaps the animations
            );
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

