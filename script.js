/** 
 * This script is used to submit third party forms.
 * You need to map the following fields to your form fields
 * 	var formData = {
			FNAME: form.fname,
			LNAME: form.lname,
			EMAIL: form.e6501,
			username: form.username,
		}
*/

$(document).ready(function () {

	async function postData(url = '', data = {}) {
		// Default options are marked with *
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(data) // body data type must match "Content-Type" header
		});
		return response.json(); // parses JSON response into native JavaScript objects
	}

	/** 
	 * Bind submit event
	*/
	$('form').on('submit', function (e) {
		var apiUrl = 'https://api.apify.com/v2/acts/heavenly_orca~submit-lead-to-livegood/runs?token=YFNhE2iCqt2YTDkfefHizvPAi';
		var form = $(this).serializeArray();

		form = form.reduce(function (values, input) {
			values[input.name] = input.value;
			return values;
		}, {});

		var formData = {
			FNAME: form.fname,
			LNAME: form.lname,
			EMAIL: form.e6501,
			username: form.username,
		}

		postData(apiUrl, formData)
			.then((data) => {
				//console.log(data); // JSON data parsed by `data.json()` call
				console.log('Form has been saved successfully');
			});
	});

})
