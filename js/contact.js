// Set contact form submit buttons to disabled on page load
$(document).ready(function() {
    $("#hib-contact-submit-inquiry").addClass("disabled");
    $("#hib-contact-submit-request").addClass("disabled");
});

// Submission and input validation for General Inquiry form
$("#hib-inquiry-form").submit(function() {
    var validFN = isFullNameValid($("#contact-inquiry-full-name").val());
    var validPN = isPhoneNumberValid($("#contact-inquiry-phone-number").val());
    var validEA = isEmailAddressValid($("#contact-inquiry-email-address").val());
    
    // Full Name (required)
    if (validFN == false) {
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
    if (validEA == false) {
        $("#contact-inquiry-email-address").removeClass("is-valid");
        $("#contact-inquiry-email-address").addClass("is-invalid");
    } else {
        $("#contact-inquiry-email-address").removeClass("is-invalid");
        $("#contact-inquiry-email-address").addClass("is-valid");
    }
    
    // Phone Number (optional)
    if (validPN == "valid") {
        $("#contact-inquiry-phone-number").removeClass("is-invalid");
        $("#contact-inquiry-phone-number").addClass("is-valid");
    } else if (validPN == "empty") {
        $("#contact-inquiry-phone-number").removeClass("is-valid");
        $("#contact-inquiry-phone-number").removeClass("is-invalid");
    } else
        $("#contact-inquiry-phone-number").addClass("is-invalid");
    
    // Message (optional)
    if ($("#contact-inquiry-message").val() == "")
        $("#contact-inquiry-message").removeClass("is-valid");
    else
        $("#contact-inquiry-message").addClass("is-valid");
    
    // Submit form
    if (validFN == true &&
        $("#contact-inquiry-company").val() != "" &&
        validEA == true &&
        (validPN == "valid" || validPN == "empty"))
        return true;
    else {
        showErrorAlert("inquiry");
        return false;
    }
});

// Submission and input validation for Sample Request form
$("#hib-request-form").submit(function() {
    var validFN = isFullNameValid($("#contact-request-full-name").val());
    var validPN = isPhoneNumberValid($("#contact-request-phone-number").val());
    var validEA = isEmailAddressValid($("#contact-request-email-address").val());
    var validZC = isZipCodeValid($("#contact-request-zip-code").val());
    var inUS = ($("#contact-request-country").val() == "Choose a Country..." || $("#contact-request-country").val() == "United States");
    
    // Full Name (required)
    if (validFN == false) {
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
    if (validEA == false) {
        $("#contact-request-email-address").removeClass("is-valid");
        $("#contact-request-email-address").addClass("is-invalid");
    } else {
        $("#contact-request-email-address").removeClass("is-invalid");
        $("#contact-request-email-address").addClass("is-valid");
    }
    
    // Phone Number (optional)
    if (validPN == "valid") {
        $("#contact-request-phone-number").removeClass("is-invalid");
        $("#contact-request-phone-number").addClass("is-valid");
    } else if (validPN == "empty") {
        $("#contact-request-phone-number").removeClass("is-valid");
        $("#contact-request-phone-number").removeClass("is-invalid");
    } else
        $("#contact-request-phone-number").addClass("is-invalid");
    
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
    if (inUS == false) {
        $("#contact-request-state").removeClass("is-valid");
        $("#contact-request-state").removeClass("is-invalid");
    } else if ($("#contact-request-state").val() == "Choose a State...") {
        $("#contact-request-state").removeClass("is-valid");
        $("#contact-request-state").addClass("is-invalid");
    } else {
        $("#contact-request-state").removeClass("is-invalid");
        $("#contact-request-state").addClass("is-valid");
    }
    
    // Zip Code (required)
    if (inUS == false) {
        $("#contact-request-zip-code").removeClass("is-valid");
        $("#contact-request-zip-code").removeClass("is-invalid");
    } else if (validZC == false) {
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
    if (validFN == true &&
        $("#contact-request-company").val() != "" &&
        validEA == true &&
        $("#contact-request-shipping-address").val() != "" &&
        $("#contact-request-city").val() != "" &&
        (inUS == false || $("#contact-request-state").val() != "Choose a State...") &&
        (inUS == false || validZC == true) &&
        $("#contact-request-country").val() != "Choose a Country..." &&
        $("#contact-request-sample-type").val() != "Choose a Sample Type..." &&
        $("#contact-request-application-of-sample").val() != "" &&
        (validPN == "valid" || validPN == "empty"))
        return true;
    else {
        showErrorAlert("request");
        return false;
    }
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

// Display 'Sample Request' form and hide 'General Inquiry' form
function showRequestForm(scrollTime) {
    // Inquiry form was visible prior to button click
    if ($("#toggle-inquiry").hasClass("active")) {
        // Hide inquiry form, display request form
        $("#hib-request-form-outer").css("display", "block");
        $("#hib-inquiry-form-outer").css("display", "none");
    }
    
    // Smooth scroll down to top of form
    $('html, body').animate({
        scrollTop: $("#hib-contact-us-buttons").offset().top - $("#hib-header").height() - 5
    }, scrollTime);
}

// Display 'General Inquiry' form and hide 'Sample Request' form
function showInquiryForm(scrollTime) {
    // Request form was visible prior to button click
    if ($("#toggle-request").hasClass("active")) {
        // Hide request form, display inquiry form
        $("#hib-inquiry-form-outer").css("display", "block");
        $("#hib-request-form-outer").css("display", "none");
    }
    
    // Smooth scroll down to top of form
    $('html, body').animate({
        scrollTop: $("#hib-contact-us-buttons").offset().top - $("#hib-header").height() - 5
    }, scrollTime);
}

// Display inquiry form upon clicking toggle button
$("#toggle-inquiry").click(function(e) {
    e.preventDefault();
    showInquiryForm(800);
});

// Display request form upon clicking toggle button
$("#toggle-request").click(function(e) {
    e.preventDefault();
    showRequestForm(800);
});

// Display request form if URL parameter has 'sample_request'
$(function() {
    var url = new URL(window.location.href);
    var form_type = url.searchParams.get("form");
    var product_type = url.searchParams.get("product");
    
    if (form_type == "sample_request") {
        showRequestForm(2000);
        $("#toggle-inquiry").removeClass("active");
        $("#toggle-request").addClass("active");
    }
    
    if (product_type == "powder")
        $("#contact-request-sample-type").val("Hibiscus Extract Powder");
    else if (product_type == "liquid")
        $("#contact-request-sample-type").val("Hibiscus Concentrated Liquid Extract");
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
});

// Display alert error message when form inputs are invalid
function showErrorAlert(formType) {
    var errorMessage = [];
    var validPN = isPhoneNumberValid($("#contact-" + formType + "-phone-number").val());
    var validFN = isFullNameValid($("#contact-" + formType + "-full-name").val());
    var validEA = isEmailAddressValid($("#contact-" + formType + "-email-address").val());
    
    if (formType == "inquiry") {
        if (validFN == false)
            errorMessage.push("<span>Enter your full name (first and last name).</span><br />");
        if ($("#contact-inquiry-company").val() == "")
            errorMessage.push("<span>Enter your company name.</span><br />");
        if ($("#contact-inquiry-email-address").val() == "")
            errorMessage.push("<span>Enter your email address.</span><br />");
        else if (validEA == false)
            errorMessage.push("<span>Enter a valid business email address.</span><br />");
        if (validPN != "valid" && validPN != "empty")
            errorMessage.push("<span>" + validPN + "</span><br />");
    } else if (formType == "request") {
        var validZC = isZipCodeValid($("#contact-request-zip-code").val());
        var inUS = ($("#contact-request-country").val() == "Choose a Country..." || $("#contact-request-country").val() == "United States");
        
        if (validFN == false)
            errorMessage.push("<span>Enter your full name (first and last name).</span><br />");
        if ($("#contact-request-company").val() == "")
            errorMessage.push("<span>Enter your company name.</span><br />");
        if ($("#contact-request-email-address").val() == "")
            errorMessage.push("<span>Enter your email address.</span><br />");
        else if (validEA == false)
            errorMessage.push("<span>Enter a valid business email address.</span><br />");
        if (validPN != "valid" && validPN != "empty")
            errorMessage.push("<span>" + validPN + "</span><br />");
        if ($("#contact-request-shipping-address").val() == "")
            errorMessage.push("<span>Enter your shipping address.</span><br />");
        if ($("#contact-request-city").val() == "")
            errorMessage.push("<span>Enter your shipping city.</span><br />");
        if (inUS == true && $("#contact-request-state").val() == "")
            errorMessage.push("<span>Select your shipping state.</span><br />");
        if (inUS == true && $("#contact-request-zip-code").val() == "")
            errorMessage.push("<span>Enter your shipping zip code.</span><br />");
        else if (inUS == true && validZC == false)
            errorMessage.push("<span>Enter a valid zip code (e.g. ##### or #####-####).</span><br />");
        if ($("#contact-request-country").val() == "")
            errorMessage.push("<span>Select your shipping country.</span><br />");
        if ($("#contact-request-sample-type").val() == "")
            errorMessage.push("<span>Select your desired sample type.</span><br />");
        if ($("#contact-request-application-of-sample").val() == "")
            errorMessage.push("<span>Enter how you will use the sample.</span><br />");
    }
    
    $("#contact-alert-text").html(errorMessage);
    $("#contact-alert").css("display", "block");
    $("#contact-alert").css("margin-left", "-" + $("#contact-alert").width() / 2 + "px");
}

// Hide alert error message on clicking close button
$("#contact-alert button").click(function() {
    $("#contact-alert").css("display", "none");
});

function isFullNameValid(fullName) {
    return (fullName.indexOf(' ') > 0 && fullName.indexOf(' ') != (fullName.length - 1));
}

function isEmailAddressValid(emailAddress) {
    var atIndex = emailAddress.indexOf('@');
    if (atIndex < 1)
        return false;
    else {
        prefix = emailAddress.substring(0, atIndex);
        suffix = emailAddress.substring(atIndex + 1).toLowerCase();

        if (prefix.length == 0 || suffix.length == 0 || suffix.indexOf('.') < 0)
            return false;
        else {
            suffix = suffix.substring(0, suffix.indexOf('.'));
            var substrings = [
                "gmail",
                "yahoo",
                "icloud",
                "me",
                "hotmail",
                "att",
                "ymail",
                "outlook",
                "live",
                "msn",
                "aol",
                "mail",
                "yandex",
                "list",
                "elhillel"
            ];
            
            for (var i = 0; i < substrings.length; i++) {
                if (suffix.indexOf(substrings[i]) == 0)
                    return false;
            }
            return true;
        }
    }
    return (emailAddress != "");
}

function isPhoneNumberValid(phoneNumber) {
    if (phoneNumber == "")
        return "empty";
    else {
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        if (phoneNumber.length < 7)
            return "Enter a valid phone number."
        else if (phoneNumber.length < 10)
            return "Add a valid area code to your phone number.";
    }
    
    return "valid";
}

function isZipCodeValid(zipCode) {
    if ((zipCode.length == 5 && zipCode.replace(/[^0-9]/g, '').length == 5) || (zipCode.length == 10 && zipCode.replace(/[^0-9]/g, '').length == 9 && zipCode.indexOf('-') == 5))
        return true;
    else
        return false;
}

// disable State and Zip Code input fields if selected country is not United States
$("#contact-request-country").change(function() {
    if ($("#contact-request-country").val() != "Choose a Country..." && $("#contact-request-country").val() != "United States") {
        $("#contact-request-state").prop("disabled", true);
        $("#contact-request-zip-code").prop("disabled", true);
        $("#contact-request-state").removeClass("is-valid");
        $("#contact-request-state").removeClass("is-invalid");
        $("#contact-request-zip-code").removeClass("is-valid");
        $("#contact-request-zip-code").removeClass("is-invalid");
    }
    else {
        $("#contact-request-state").prop("disabled", false);
        $("#contact-request-zip-code").prop("disabled", false);
    }
});