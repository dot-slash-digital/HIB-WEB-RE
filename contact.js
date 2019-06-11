$(document).ready(function() {
	// Check if input is valid on submit
	$("#hib-contact-submit-button").submit(function(e) {
		if ($("#hib-contact-submit-button").hasClass("disabled")) {
			e.preventDefault();
		}
	});

	// On submit button click, check if if forms are valid/invalid
	$("#hib-contact-submit-button").click(function() {
		if ($("#fullName").val() == "")
			$("#fullName")
				.addClass("is-invalid")
				.removeClass("is-valid")
		else
			$("#fullName")
				.addClass("is-valid")
				.removeClass("is-invalid")

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
	})

	// Check if input is valid on form change and
	// enable/disable submit button accordingly
	$(".form-control").not("#message").not("#shippingAddress2").on("input change blur", function() {
		if ($("#fullName").val() != "" &&
			$("#Company").val() != "" &&
			$("#phoneNumber").val() != "" &&
			$("#emailAddress").val() != "") {
			$("#hib-contact-submit-button").removeClass("disabled");
		}
		else {
			$("#hib-contact-submit-button").addClass("disabled");
		}
	});

	// On form change, add/remove is-invalid class
	$(".form-control").not("#message").on("input blur", function() {
		if ($(this).val() == "")
			$(this).addClass("is-invalid").removeClass("is-valid")
		else
			$(this).removeClass("is-invalid").removeClass("is-valid")
	})
});