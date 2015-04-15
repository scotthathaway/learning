if Meteor.isClient
	Template.body.onRendered ->
		num1 =94
		num2 =49
		num3 =84
		num4 =28
		num45 = 45
		num123=234
		answer = (num1 * num2) * num3 * num45 * num123
		# this will put the num1 + num2 out to screen
		$('#me').html("#{num1} - #{num2} - #{num3}<br>= <b>#{answer}</b>")
		$('#main').html('Hello this is a test')
