// Submission and input validation for General Inquiry form
$("#hib-inquiry-form").submit(function () {
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
  } else $("#contact-inquiry-phone-number").addClass("is-invalid");

  // Message (required)
  if ($("#contact-inquiry-message").val() == "") {
    $("#contact-inquiry-message").removeClass("is-valid");
    $("#contact-inquiry-message").addClass("is-invalid");
  } else {
    $("#contact-inquiry-message").addClass("is-valid");
    $("#contact-inquiry-message").removeClass("is-invalid");
  }

  // Submit form
  if (
    validFN == true &&
    $("#contact-inquiry-company").val() != "" &&
    validEA == true &&
    (validPN == "valid" || validPN == "empty") &&
    $("#contact-inquiry-message").val() != ""
  ) {
    return true;
  } else {
    showErrorAlert("inquiry");
    return false;
  }
});

// Remove form validity classes if a user edits the input
$("input").on("input", function () {
  $(this).removeClass("is-valid");
  $(this).removeClass("is-invalid");
});
$("textarea").on("input", function () {
  $(this).removeClass("is-valid");
  $(this).removeClass("is-invalid");
});

// Display alert error message when form inputs are invalid
function showErrorAlert(formType) {
  var errorMessage = [];
  var validPN = isPhoneNumberValid(
    $("#contact-" + formType + "-phone-number").val()
  );
  var validFN = isFullNameValid($("#contact-" + formType + "-full-name").val());
  var validEA = isEmailAddressValid(
    $("#contact-" + formType + "-email-address").val()
  );

  if (validFN == false)
    errorMessage.push(
      "<span>Enter your full name (first and last name).</span><br />"
    );
  if ($("#contact-inquiry-company").val() == "")
    errorMessage.push("<span>Enter your company name.</span><br />");
  if ($("#contact-inquiry-email-address").val() == "")
    errorMessage.push("<span>Enter your email address.</span><br />");
  else if (validEA == false)
    errorMessage.push(
      "<span>Enter a valid business email address.</span><br />"
    );
  if (validPN != "valid" && validPN != "empty")
    errorMessage.push("<span>" + validPN + "</span><br />");
  if ($("#contact-inquiry-message").val() == "")
    errorMessage.push("<span>Enter a message.</span><br />");

  $("#contact-alert-text").html(errorMessage);
  $("#contact-alert").css("display", "block");
  $("#contact-alert").css(
    "margin-left",
    "-" + $("#contact-alert").width() / 2 + "px"
  );
}

// Hide alert error message on clicking close button
$("#contact-alert button").click(function () {
  $("#contact-alert").css("display", "none");
});

function isFullNameValid(fullName) {
  return (
    fullName.indexOf(" ") > 0 && fullName.indexOf(" ") != fullName.length - 1
  );
}

function isEmailAddressValid(emailAddress) {
  var atIndex = emailAddress.indexOf("@");
  if (atIndex < 1) return false;
  else {
    prefix = emailAddress.substring(0, atIndex);
    suffix = emailAddress.substring(atIndex + 1).toLowerCase();

    if (prefix.length == 0 || suffix.length == 0 || suffix.indexOf(".") < 0)
      return false;
    else {
      suffix = suffix.substring(0, suffix.indexOf("."));
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
        "elhillel",
      ];

      for (var i = 0; i < substrings.length; i++) {
        if (suffix.indexOf(substrings[i]) == 0) return false;
      }
      return true;
    }
  }
  return emailAddress != "";
}

function isPhoneNumberValid(phoneNumber) {
  if (phoneNumber == "") return "empty";
  else {
    phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    if (phoneNumber.length < 7) return "Enter a valid phone number.";
    else if (phoneNumber.length < 10)
      return "Add a valid area code to your phone number.";
  }

  return "valid";
}
