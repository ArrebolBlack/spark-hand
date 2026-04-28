$(document).ready(function() {
    // Navbar burger toggle
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 50
            }, 500);
        }
        // Close mobile menu after click
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
    });
});
