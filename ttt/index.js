$('#a1').click(function(){boxInput('a1')});
$('#a2').click(function(){boxInput('a2')});
$('#a3').click(function(){boxInput('a3')});
$('#b1').click(function(){boxInput('b1')});
$('#b2').click(function(){boxInput('b2')});
$('#b3').click(function(){boxInput('b3')});
$('#c1').click(function(){boxInput('c1')});
$('#c2').click(function(){boxInput('c2')});
$('#c3').click(function(){boxInput('c3')});

var osturn,isGameOver,boxes=[],turn=0;
function boxInput(box){
  if ($('#'+box).text() !== 'O' && $('#'+box).text() !== 'X'){
    if (osturn){
      $('#'+box).html('O');
      didWin(box);
      osturn = !osturn;
    } else if (!osturn){
      $('#'+box).html('X');
      didWin(box);
      osturn = !osturn;
    }
  }
}

function didWin(box){
  turn++;
  boxes=[$('#a1').text(),$('#a2').text(),$('#a3').text(),$('#b1').text(),$('#b2').text(),$('#b3').text(),$('#c1').text(),$('#c2').text(),$('#c3').text()];
  console.log(boxes);
  if(boxes[0] == boxes[1] && boxes[1] == boxes[2] && boxes[0]!=''){
    $('#header').html(boxes[0] +' Won!');
    gameOver();
  }
  if(boxes[3] == boxes[4] && boxes[4] == boxes[5] && boxes[3]!=''){
    $('#header').html(boxes[3] +' Won!');
    gameOver();
  }
  if(boxes[6] == boxes[7] && boxes[7] == boxes[8] && boxes[6]!=''){
    $('#header').html(boxes[6] +' Won!');
    gameOver();
  }
  if(boxes[0] == boxes[3] && boxes[3] == boxes[6] && boxes[0]!=''){
    $('#header').html(boxes[0] +' Won!');
    gameOver();
  }
  if(boxes[1] == boxes[4] && boxes[4] == boxes[7] && boxes[1]!=''){
    $('#header').html(boxes[1] +' Won!');
    gameOver();
  }
  if(boxes[2] == boxes[5] && boxes[5] == boxes[8] && boxes[2]!=''){
    $('#header').html(boxes[2] +' Won!');
    gameOver();
  }
  if(boxes[0] == boxes[4] && boxes[4] == boxes[8] && boxes[0]!=''){
    $('#header').html(boxes[0] +' Won!');
    gameOver();
  }
  if(boxes[2] == boxes[4] && boxes[4] == boxes[6] && boxes[2]!=''){
    $('#header').html(boxes[2] +' Won!');
    gameOver();
  }

  if( turn==9 && !isGameOver){
    $('#header').html('Draw.');
  }
}
function gameOver(){
  isGameOver=true;
}
