(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);




// Get the form element
const form = document.getElementById('appointment-form');

if (form) {
    form.addEventListener('submit', validateForm);
}

// Function to validate the form
function validateForm(event) {
  event.preventDefault(); // Prevent page reload

  // Get the form fields
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const date = document.getElementById('date');
  const time = document.getElementById('time');
  const service = document.getElementById('service');
  const notes = document.getElementById('notes');

  // Validate the fields
  let isValid = true;

  // Name
  if (name && name.value.trim() === '') {
    alert('Please enter your name');
    isValid = false;
    return;
  }

  // Email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email && !emailRegex.test(email.value)) {
    alert('Please enter a valid email address');
    isValid = false;
    return;
  }

  // Phone
  const phoneRegex = /^\d{10}$/;
  if (phone && !phoneRegex.test(phone.value.replace(/\D/g, ''))) {
    alert('Please enter a valid 10-digit phone number');
    isValid = false;
    return;
  }

  // Date
  if (date && date.value === '') {
    alert('Please select a date');
    isValid = false;
    return;
  }

  // Time
  if (time && time.value === '') {
    alert('Please select a time');
    isValid = false;
    return;
  }

  // Service
  if (service && service.value === '') {
    alert('Please select a service');
    isValid = false;
    return;
  }

  // If the form is valid
  if (isValid) {
    alert('Thank you! Your appointment has been booked successfully.');
    form.reset();
  }
}

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been sent successfully. We will get back to you shortly.');
    contactForm.reset();
  });
}