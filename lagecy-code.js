$(function() {
	if(!isNaN($('form').attr('action')) && $('form').attr('action') > 0){
		$('form').attr('action',"https://sendsteed.com/subscription/");
		$('input[name="name"]').attr('name', 'n6501');
		$('input[name="email"]').attr('name', 'e6501');	
	};
	$('form').on('submit',function(e){
							$(":submit").addClass("btnclicked");
				e.preventDefault(); // avoid to execute the actual submit of the form.
				var form = $(this);

				const formData = new FormData(document.getElementById('form'));
				console.log(formData.entries())

				var url = "//lllpg.com/formsubmit.php";
				$.ajax({
					cache: false,
					type: "POST",
					url: url,
					data: form.serialize(), // serializes the form's elements.
					error: function (xhr, textStatus, msg) {
						$(":submit").removeClass("btnclicked");
						alert('Something went wrong. Please try again.')					},
					success: function(msg)
					{
						$(":submit").removeClass("btnclicked");
						if(msg.indexOf("there has been an error") > 0){
							$('#sendsteedemailsentctr').html(msg); $('#sendsteedemailsent').show();
						}else{
													$('#sendsteedemailsentctr').html(msg); $('#sendsteedemailsent').show();
													
						}
					}
				});
				});
	$(document).on("click", "button[type='button']", function(){
			if (!navigator.sendBeacon) console.log("2");
			if($(".formctr button[type='submit']").length) return false;
			let url = '//lllpg.com/ajax.php';
			let data = new FormData();
			data.append('action', "click");
			data.append('pageid', llcv_d);
			data.append('campaignid', llcv_c);
			data.append('rotatorid', llcv_r);
			data.append('t', statid);
			data.append('tt', tableid);
			data.append('ip', thisip);
			navigator.sendBeacon(url, data);
	});
	$(document).on("click", ".sendsteedemailsentclose", function(){
		$('#sendsteedemailsent').hide();
	});
		$(':submit').on('click',function(){
			var nsw = 0;
			regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			thisemail = $('input[name ="e6501"]').val();
			if(!regex.test(thisemail)) nsw = 1;
			$('.formctr input').filter('[required]:visible').each(function(i, requiredField){
        if($(requiredField).val()=='')
        {
            nsw = 2;
        }
			});
			if(!nsw) window.open("https://lllpg.com/sistemainovadorexplicacao");
	});
			window.parent.postMessage({"lllpgtle": document.title,"lllpgimg": "","lllpgfco": ""}, "*");
});