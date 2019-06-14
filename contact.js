// Set contact form submit buttons to disabled on page load
$(document).ready(function() {
    $("#hib-contact-submit-inquiry").addClass("disabled");
    $("#hib-contact-submit-request").addClass("disabled");
});

// Submission and input validation for General Inquiry form
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
    
    // Submit form
    if ($("#contact-inquiry-full-name").val() != "" &&
        $("#contact-inquiry-company").val() != "" &&
        $("#contact-inquiry-email-address").val() != "")
        return true;
    else
        return false;
});

// Submission and input validation for Sample Request form
$("#hib-request-form").submit(function() {
    // Full Name (required)
    if ($("#contact-request-full-name").val() == "") {
        $("#contact-request-full-name").removeClass("is-valid");
        $("#contact-request-full-name").addClass("is-invalid");
    } else {
        $("#contact-request-full-name").removeClass("is-invalid");
        $("#contact-request-full-name").addClass("is-valid");
    }
    
    // Company (required)
    if ($("#contact-request-company").val() == "") {
        $("#contact-request-company").removeClass("is-valid");
        $("#contact-request-company").addClass("is-invalid");
    } else {
        $("#contact-request-company").removeClass("is-invalid");
        $("#contact-request-company").addClass("is-valid");
    }
    
    // Email Address (required)
    if ($("#contact-request-email-address").val() == "") {
        $("#contact-request-email-address").removeClass("is-valid");
        $("#contact-request-email-address").addClass("is-invalid");
    } else {
        $("#contact-request-email-address").removeClass("is-invalid");
        $("#contact-request-email-address").addClass("is-valid");
    }
    
    // Phone Number (optional)
    if ($("#contact-request-phone-number").val() == "")
        $("#contact-request-phone-number").removeClass("is-valid");
    else
        $("#contact-request-phone-number").addClass("is-valid");
    
    // Shipping Address Line 1 (required)
    if ($("#contact-request-shipping-address").val() == "") {
        $("#contact-request-shipping-address").removeClass("is-valid");
        $("#contact-request-shipping-address").addClass("is-invalid");
    } else {
        $("#contact-request-shipping-address").removeClass("is-invalid");
        $("#contact-request-shipping-address").addClass("is-valid");
    }
    
    // Shipping Address Line 2 (optional)
    if ($("#contact-request-shipping-address-2").val() == "")
        $("#contact-request-shipping-address-2").removeClass("is-valid");
    else
        $("#contact-request-shipping-address-2").addClass("is-valid");
    
    // City (required)
    if ($("#contact-request-city").val() == "") {
        $("#contact-request-city").removeClass("is-valid");
        $("#contact-request-city").addClass("is-invalid");
    } else {
        $("#contact-request-city").removeClass("is-invalid");
        $("#contact-request-city").addClass("is-valid");
    }
    
    // State (required)
    if ($("#contact-request-state").val() == "Choose a State...") {
        $("#contact-request-state").removeClass("is-valid");
        $("#contact-request-state").addClass("is-invalid");
    } else {
        $("#contact-request-state").removeClass("is-invalid");
        $("#contact-request-state").addClass("is-valid");
    }
    
    // Zip Code (required)
    if ($("#contact-request-zip-code").val() == "") {
        $("#contact-request-zip-code").removeClass("is-valid");
        $("#contact-request-zip-code").addClass("is-invalid");
    } else {
        $("#contact-request-zip-code").removeClass("is-invalid");
        $("#contact-request-zip-code").addClass("is-valid");
    }
    
    // Country (required)
    if ($("#contact-request-country").val() == "Choose a Country...") {
        $("#contact-request-country").removeClass("is-valid");
        $("#contact-request-country").addClass("is-invalid");
    } else {
        $("#contact-request-country").removeClass("is-invalid");
        $("#contact-request-country").addClass("is-valid");
    }
    
    // Sample Type (required)
    if ($("#contact-request-sample-type").val() == "Choose a Sample Type...") {
        $("#contact-request-sample-type").removeClass("is-valid");
        $("#contact-request-sample-type").addClass("is-invalid");
    } else {
        $("#contact-request-sample-type").removeClass("is-invalid");
        $("#contact-request-sample-type").addClass("is-valid");
    }
    
    // Application of Sample (required)
    if ($("#contact-request-application-of-sample").val() == "") {
        $("#contact-request-application-of-sample").removeClass("is-valid");
        $("#contact-request-application-of-sample").addClass("is-invalid");
    } else {
        $("#contact-request-application-of-sample").removeClass("is-invalid");
        $("#contact-request-application-of-sample").addClass("is-valid");
    }
    
    // Message (optional)
    if ($("#contact-request-message").val() == "")
        $("#contact-request-message").removeClass("is-valid");
    else
        $("#contact-request-message").addClass("is-valid");
    
    // Submit form
    if ($("#contact-request-full-name").val() != "" &&
        $("#contact-request-company").val() != "" &&
        $("#contact-request-email-address").val() != "" &&
        $("#contact-request-shipping-address").val() != "" &&
        $("#contact-request-city").val() != "" &&
        $("#contact-request-state").val() != "Choose a State..." &&
        $("#contact-request-zip-code").val() != "" &&
        $("#contact-request-country").val() != "Choose a Country..." &&
        $("#contact-request-sample-type").val() != "Choose a Sample Type..." &&
        $("#contact-request-application of sample").val() != "")
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

// Display inquiry form upon clicking toggle button
$("#toggle-inquiry").click(function(e) {
    e.preventDefault();
    
    // Request form was visible prior to button click
    if ($("#toggle-request").hasClass("active")) {
        // Hide request form, display inquiry form
        $("#hib-inquiry-form-outer").css("display", "block");
        $("#hib-request-form-outer").css("display", "none");
    }
    
    // Smooth scroll down to top of form
    $('html, body').animate({
        scrollTop: $("#hib-inquiry-form-outer").offset().top - $("#hib-header").height()
    }, 800);
});

// Display request form upon clicking toggle button
$("#toggle-request").click(function(e) {
    e.preventDefault();
    
    // Inquiry form was visible prior to button click
    if ($("#toggle-inquiry").hasClass("active")) {
        // Hide inquiry form, display request form
        $("#hib-request-form-outer").css("display", "block");
        $("#hib-inquiry-form-outer").css("display", "none");
    }
    
    // Smooth scroll down to top of form
    $('html, body').animate({
        scrollTop: $("#hib-request-form-outer").offset().top - $("#hib-header").height()
    }, 800);
});

// Enable submit button when all required fields are valid
$(".form-control").keyup(function() {
    // When inquiry form is visible and all required fields are valid
    if ($("#hib-inquiry-form-outer").css("display") == "block" &&
        $("#contact-inquiry-full-name").val() != "" &&
        $("#contact-inquiry-company").val() != "" &&
        $("#contact-inquiry-email-address").val() != "")
        $("#hib-contact-submit-inquiry").removeClass("disabled");
    else
        $("#hib-contact-submit-inquiry").addClass("disabled");
    
    // When request form is visible and all required fields are valid
    if ($("#hib-request-form-outer").css("display") == "block" &&
        $("#contact-request-full-name").val() != "" &&
        $("#contact-request-company").val() != "" &&
        $("#contact-request-email-address").val() != "" &&
        $("#contact-request-shipping-address").val() != "" &&
        $("#contact-request-city").val() != "" &&
        $("#contact-request-state").val() != "Choose a State..." &&
        $("#contact-request-zip-code").val() != "" &&
        $("#contact-request-country").val() != "Choose a Country..." &&
        $("#contact-request-sample-type").val() != "Choose a Sample Type..." &&
        $("#contact-request-application-of-sample").val() != "")
        $("#hib-contact-submit-request").removeClass("disabled");
    else
        $("#hib-contact-submit-request").addClass("disabled");
    
    console.log("inquiry: " + $("#hib-contact-submit-inquiry").hasClass("disabled"));
    console.log("request: " + $("#hib-contact-submit-request").hasClass("disabled"));
});

// TODO
function isFullNameValid(full_name) {
    
}

// TODO
function isEmailAddressValid(email_address) {
    
}

// TODO
function isPhoneNumberValid(phone_number) {
    
}

// TODO
function isZipCodeValid(zip_code) {
    
}