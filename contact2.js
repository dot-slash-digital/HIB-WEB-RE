$(document).ready(function() {
	// Check if input is valid on submit
	$("#hib-contact-submit-button2").submit(function(e) {
		if ($("#hib-contact-submit-button2").hasClass("disabled")) {
			e.preventDefault();
		}
	});

	// On submit button click, check if if forms are valid/invalid
	$("#hib-contact-submit-button2").click(function() {
		if ($("#fullName").val() == "")
			$("#fullName")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#fullName")
				.addClass("is-valid")
				.removeClass("is-invalid");

		if ($("#Company").val() == "")
			$("#Company")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#Company")
				.addClass("is-valid")
				.removeClass("is-invalid");

		if ($("#phoneNumber").val() == "")
			$("#phoneNumber")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#phoneNumber")
				.addClass("is-valid")
				.removeClass("is-invalid");

		if ($("#emailAddress").val() == "")
			$("#emailAddress")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#emailAddress")
				.addClass("is-valid")
				.removeClass("is-invalid");

		if ($("#shippingAddress").val() == "")
			$("#shippingAddress")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#shippingAddress")
				.addClass("is-valid")
				.removeClass("is-invalid");

		if ($("#city").val() == "")
			$("#city")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#city")
				.addClass("is-valid")
				.removeClass("is-invalid");

		if ($("#state").val() == "")
			$("#state")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#state")
				.addClass("is-valid")
				.removeClass("is-invalid");

		if ($("#zipCode").val() == "")
			$("#zipCode")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#zipCode")
				.addClass("is-valid")
				.removeClass("is-invalid");

		if ($("#country").val() == "")
			$("#country")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#country")
				.addClass("is-valid")
				.removeClass("is-invalid");

		if ($("#sampleType").val() == "")
			$("#sampleType")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#sampleType")
				.addClass("is-valid")
				.removeClass("is-invalid");

		if ($("#AppOfSample").val() == "")
			$("#AppOfSample")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#AppOfSample")
				.addClass("is-valid")
				.removeClass("is-invalid");
	})

	// Check if input is valid on form change and
	// enable/disable submit button accordingly
	$(".form-control").not("#message").not("#shippingAddress2").on("input change blur", function() {
		if ($("#fullName").val() != "" &&
			$("#Company").val() != "" &&
			$("#phoneNumber").val() != "" &&
			$("#emailAddress").val() != "" &&
			$("#shippingAddress").val() != "" &&
			$("#city").val() != "" &&
			$("#state").val() != "" &&
			$("#zipCode").val() != "" &&
			$("#country").val() != "" &&
			$("#sampleType").val() != "" &&
			$("#AppOfSample").val() != "") {
			$("#hib-contact-submit-button2").removeClass("disabled");
		}
		else {
			$("#hib-contact-submit-button2").addClass("disabled");
		}
	});

	// On form change, add/remove is-invalid class
	$(".form-control").not("#message").not("#shippingAddress2").on("input blur", function() {
		if ($(this).val() == "")
			$(this).addClass("is-invalid").removeClass("is-valid")
		else
			$(this).removeClass("is-invalid").removeClass("is-valid")
	})
});