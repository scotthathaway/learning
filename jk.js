var didSomeoneWin, newGame;

if (Meteor.isClient) {
  newGame = function() {
    window.turn = 'Player 1';
    window.gameOver = 0;
    $('#b1').html('');
    $('#b2').html('');
    $('#b3').html('');
    $('#b4').html('');
    $('#b5').html('');
    $('#b6').html('');
    $('#b7').html('');
    $('#b8').html('');
    $('#b9').html('');
    $('#b1').css('background-color', 'white');
    $('#b2').css('background-color', 'white');
    $('#b3').css('background-color', 'white');
    $('#b4').css('background-color', 'white');
    $('#b5').css('background-color', 'white');
    $('#b6').css('background-color', 'white');
    $('#b7').css('background-color', 'white');
    $('#b8').css('background-color', 'white');
    $('#b9').css('background-color', 'white');
    $('#btnReset').hide();
    return $('#main').html($('#p1_name').val() + ', please click a square');
  };
  didSomeoneWin = function() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9, isWinner;
    isWinner = false;
    b1 = $('#b1').html();
    b2 = $('#b2').html();
    b3 = $('#b3').html();
    b4 = $('#b4').html();
    b5 = $('#b5').html();
    b6 = $('#b6').html();
    b7 = $('#b7').html();
    b8 = $('#b8').html();
    b9 = $('#b9').html();
    if (b1 !== '' && b1 === b2 && b1 === b3) {
      isWinner = true;
    }
    if (b4 !== '' && b4 === b5 && b4 === b6) {
      isWinner = true;
    }
    if (b7 !== '' && b7 === b8 && b7 === b9) {
      isWinner = true;
    }
    if (b1 !== '' && b1 === b4 && b1 === b7) {
      isWinner = true;
    }
    if (b2 !== '' && b2 === b5 && b2 === b8) {
      isWinner = true;
    }
    if (b3 !== '' && b3 === b6 && b3 === b9) {
      isWinner = true;
    }
    if (b1 !== '' && b1 === b5 && b1 === b9) {
      isWinner = true;
    }
    if (b3 !== '' && b3 === b5 && b3 === b7) {
      isWinner = true;
    }
    if (isWinner) {
      window.gameOver = 1;
      $('#btnReset').show();
    } else {
      if (b1 !== '' && b2 !== '' && b3 !== '' && b4 !== '' && b5 !== '' && b6 !== '' && b7 !== '' && b8 !== '' && b9 !== '') {
        window.gameOver = 2;
        $('#btnReset').show();
      }
    }
    return window.gameOver;
  };
  Template.body.onRendered(function() {
    return $('button').click(function() {
      if ($(this).html() === 'Play Game') {
        $('#game').show();
        $('#player_info').hide();
        newGame();
      }
      if ($(this).html() === 'Play Again') {
        $('#game').hide();
        $('#player_info').show();
      }
      if ($(this).html() === '' && !window.gameOver) {
        if (turn === 'Player 1') {
          $(this).html('X');
          $(this).css('background-color', 'orange');
          $(this).css('color', 'black');
          if (didSomeoneWin() === 1) {
            $('#main').html($('#p1_name').val() + " wins!");
          }
          if (didSomeoneWin() === 2) {
            $('#main').html('Cat Wins!');
          }
          if (didSomeoneWin() === 0) {
            window.turn = 'Player 2';
            return $('#main').html($('#p2_name').val() + ', please click a square');
          }
        } else {
          $(this).html('O');
          $(this).css('background-color', 'blue');
          $(this).css('color', 'white');
          if (didSomeoneWin() === 1) {
            $('#main').html($('#p2_name').val() + " wins!");
          }
          if (didSomeoneWin() === 2) {
            $('#main').html('Cat Wins!');
          }
          if (didSomeoneWin() === 0) {
            window.turn = 'Player 1';
            return $('#main').html($('#p1_name').val() + ', please click a square');
          }
        }
      }
    });
  });
}
