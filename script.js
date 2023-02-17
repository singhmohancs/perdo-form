
$(document).ready(function() {
	$('form').on('submit',function(e){
		var requiredFieldNames = ['e6501', 'lname'];
		var emailFieldName = 'e6501'; // text field name for email field if exist
		var phoneFieldName = ''; // text field name for phone number if exist
		var urls = [];
		
		// email validation
		var emailValue = emailFieldName!= '' && $('input[name='+emailFieldName+']') ? $('input[name='+emailFieldName+']').val() : ''; 
		
		if(emailValue && emailValue != '') {
			var isValidEmail = String(emailValue).toLowerCase()
			.match(	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
			if(!isValidEmail) {
				return true;
			}
		}
		
		// phone number validation for numeric and 10 digit
		var phoneNumber = phoneFieldName!='' && $('input[name='+phoneFieldName+']') ? $('input[name='+phoneFieldName+']').val() : '';
		if(phoneNumber && phoneNumber != '') {
			phoneNumber = String(phoneNumber).replace(/\s/g, '').replace(/[()]/g, '').replace(/-/g, '');
			if(isNaN(Number(phoneNumber)) || phoneNumber.length != 10) {
				return true;
			}
		}
		
		var formArr = $(this).serializeArray();
		var formObj = formArr.reduce(function(values, input) {
			values[input.name] = input.value;
			return values;
		}, {});
		var hasAllRequiredFields = requiredFieldNames.every(function(field) {
			return formObj[field] && formObj[field].trim() !== '';
		})
		if(hasAllRequiredFields) {
			urls.forEach(function(url) {
				$.ajax({
					cache: false,
					type: "POST",
					url: url,
					data: $(this).serialize(),
					error: function (xhr, textStatus, msg) {},
					success: function(msg) {}
				});
			})
		}
		return true;
	})
})
