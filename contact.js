// Submit contact form and error checking
$("#hib-inquiry-form").submit(function() {
    // Full Name (required)
    if ($("#contact-inquiry-full-name").val() == "") {
        $("#contact-inquiry-full-name").removeClass("is-valid");
        $("#contact-inquiry-full-name").addClass("is-invalid");
    } else {
        $("#contact-inquiry-full-name").removeClass("is-invalid");
        $("#contact-inquiry-full-name").addClass("is-valid");
    }
    
    // Company (required)
    if ($("#contact-inquiry-company").val() == "") {
        $("#contact-inquiry-company").removeClass("is-valid");
        $("#contact-inquiry-company").addClass("is-invalid");
    } else {
        $("#contact-inquiry-company").removeClass("is-invalid");
        $("#contact-inquiry-company").addClass("is-valid");
    }
    
    // Email Address (required)
    if ($("#contact-inquiry-email-address").val() == "") {
        $("#contact-inquiry-email-address").removeClass("is-valid");
        $("#contact-inquiry-email-address").addClass("is-invalid");
    } else {
        $("#contact-inquiry-email-address").removeClass("is-invalid");
        $("#contact-inquiry-email-address").addClass("is-valid");
    }
    
    // Phone Number (optional)
    if ($("#contact-inquiry-phone-number").val() == "")
        $("#contact-inquiry-phone-number").removeClass("is-valid");
    else
        $("#contact-inquiry-phone-number").addClass("is-valid");
    
    // Message (optional)
    if ($("#contact-inquiry-message").val() == "")
        $("#contact-inquiry-message").removeClass("is-valid");
    else
        $("#contact-inquiry-message").addClass("is-valid");
    
    if ($("#contact-inquiry-full-name").val() != "" && $("#contact-inquiry-company").val() != "" && $("#contact-inquiry-email-address").val() != "")
        return true;
    else
        return false;
});

// Remove form validity classes if a user edits the input
$("input").on('input', function() {
    $(this).removeClass("is-valid");
    $(this).removeClass("is-invalid");
});
$("textarea").on('input', function() {
    $(this).removeClass("is-valid");
    $(this).removeClass("is-invalid");
});

$("#toggle-inquiry").click(function(e) {
    e.preventDefault();
    
    // request form was visible prior to button click
    if ($("#toggle-request").hasClass("active")) {
        // hide request form, display inquiry form
        $("#hib-inquiry-form-outer").css("display", "block");
        $("#hib-request-form-outer").css("display", "none");
    }
    
    // Smooth scroll down to top of form
    $('html, body').animate({
        scrollTop: $("#hib-inquiry-form-outer").offset().top - $("#hib-header").height()
    }, 800);
});

$("#toggle-request").click(function(e) {
    e.preventDefault();
    
    // inquiry form was visible prior to button click
    if ($("#toggle-inquiry").hasClass("active")) {
        // hide inquiry form, display request form
        $("#hib-request-form-outer").css("display", "block");
        $("#hib-inquiry-form-outer").css("display", "none");
    }
    
    // Smooth scroll down to top of form
    $('html, body').animate({
        scrollTop: $("#hib-request-form-outer").offset().top - $("#hib-header").height()
    }, 800);
});