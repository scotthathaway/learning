if Meteor.isClient
	# window.gameOver = 0 is We are in the middle of a gameOver
	# window.gameOver = 1 is Somebody won
	# window.gameOver = 2 is Cat won

	newGame = () ->
		window.turn = 'Player 1'
		window.gameOver = 0 # playing
		$('#b1').html('')
		$('#b2').html('')
		$('#b3').html('')
		$('#b4').html('')
		$('#b5').html('')
		$('#b6').html('')
		$('#b7').html('')
		$('#b8').html('')
		$('#b9').html('')

		$('#b1').css('background-color','white')
		$('#b2').css('background-color','white')
		$('#b3').css('background-color','white')
		$('#b4').css('background-color','white')
		$('#b5').css('background-color','white')
		$('#b6').css('background-color','white')
		$('#b7').css('background-color','white')
		$('#b8').css('background-color','white')
		$('#b9').css('background-color','white')

		$('#btnReset').hide()
		$('#main').html($('#p1_name').val() + ', please click a square')

	didSomeoneWin = () ->
		isWinner = false
		b1       = $('#b1').html()
		b2       = $('#b2').html()
		b3       = $('#b3').html()
		b4       = $('#b4').html()
		b5       = $('#b5').html()
		b6       = $('#b6').html()
		b7       = $('#b7').html()
		b8       = $('#b8').html()
		b9       = $('#b9').html()

		# rows
		if b1!='' and b1 is b2 and b1 is b3 then isWinner = true
		if b4!='' and b4 is b5 and b4 is b6 then isWinner = true
		if b7!='' and b7 is b8 and b7 is b9 then isWinner = true

		# columns
		if b1!='' and b1 is b4 and b1 is b7 then isWinner = true
		if b2!='' and b2 is b5 and b2 is b8 then isWinner = true
		if b3!='' and b3 is b6 and b3 is b9 then isWinner = true

		# diagonals
		if b1!='' and b1 is b5 and b1 is b9 then isWinner = true
		if b3!='' and b3 is b5 and b3 is b7 then isWinner = true

		if isWinner
			window.gameOver = 1 # somebody won
			$('#btnReset').show()
		else
			# cat
			if b1!='' and b2!='' and b3!='' and b4!='' and b5!='' and b6!='' and b7!='' and b8!='' and b9!=''
				window.gameOver = 2 # cat won
				$('#btnReset').show()

		return window.gameOver

	Template.body.onRendered ->
		$('button').click( ->
			if $(this).html() is 'Play Game'
				$('#game').show()
				$('#player_info').hide()
				newGame()
			if $(this).html() is 'Play Again'
				$('#game').hide()
				$('#player_info').show()
			if $(this).html() is '' and not window.gameOver
				if turn is 'Player 1'
					$(this).html('X')
					$(this).css('background-color','orange')
					$(this).css('color','black')
					if didSomeoneWin() is 1
						$('#main').html($('#p1_name').val() + " wins!")
					if didSomeoneWin() is 2
						$('#main').html('Cat Wins!')
					if didSomeoneWin() is 0
						window.turn = 'Player 2'
						$('#main').html($('#p2_name').val() + ', please click a square')
				else
					$(this).html('O')
					$(this).css('background-color','blue')
					$(this).css('color','white')
					if didSomeoneWin() is 1
						$('#main').html($('#p2_name').val() + " wins!")
					if didSomeoneWin() is 2
						$('#main').html('Cat Wins!')
					if didSomeoneWin() is 0
						window.turn = 'Player 1'
						$('#main').html($('#p1_name').val() + ', please click a square')
		)
