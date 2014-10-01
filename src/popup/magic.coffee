chrome.tabs.getSelected (tab) ->
	url = new URI tab.url
	console.log tab.url
	console.log tab.title
	console.log url.domain()

$ ->
	console.log 'DOM ready' 
	$('#send-form').validate()	
	$('form').submit (event) ->
		console.log 'Submitting form...'
		to = $('#to').val()
		from = $('#from').val()
		comment = $('#comment').val()

		data = {
			'From' : 'mallika@mkmathur.com',
			'To' : to,
			'Subject' : 'test',
			'TextBody' : comment,
			'ReplyTo' : from
		}

		JSONdata = JSON.stringify data

		$.ajax({
				type: 'POST',
				url: "https://api.postmarkapp.com/email",
				data: JSONdata,
				dataType: 'json',
				headers: {
					'Content-Type': 'application/json',
					'X-Postmark-Server-Token': 'POSTMARK_API_TEST' 
				}
			}).done (data) ->
				console.log data
		event.preventDefault()