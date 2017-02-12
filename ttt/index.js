var osturn,compPlayer,compTurn,startWith,isGameOver,boxes=[],turn=0;
//Starting Routine
$('.box').addClass('pff');
$('.promtBox').addClass('pff invisible');
$('#gameBoard').addClass('invisible');
$('#header').addClass('animated pulse');

if (!isGameOver){
  $('#a1').click(function(){boxInput('a1')});
  $('#a2').click(function(){boxInput('a2')});
  $('#a3').click(function(){boxInput('a3')});
  $('#b1').click(function(){boxInput('b1')});
  $('#b2').click(function(){boxInput('b2')});
  $('#b3').click(function(){boxInput('b3')});
  $('#c1').click(function(){boxInput('c1')});
  $('#c2').click(function(){boxInput('c2')});
  $('#c3').click(function(){boxInput('c3')});
}
$("#p2p").click(function(){
  $('.promtBox').removeClass('pff invisible');
  $('#header').addClass('animated pulse');
  $('.promt2Box').addClass('pff invisible');
});
$("#ai").click(function(){
  $('.promtBox').removeClass('pff invisible');
  $('#header').addClass('animated pulse');
  $('.promt2Box').addClass('pff invisible');
  compPlayer=true;
});
$("#you").click(function(){
  startWith=true;
  if(compPlayer) compTurn=true;
  commenceGame();
});
$("#me").click(function(){
  startWith=false;
  commenceGame();
});

function commenceGame(){
  if(!startWith){
    osturn=false;
  } else {
    osturn=true;
  }
  isGameOver=false;
  deepThink();
  $('.box').removeClass('pff')
  $('#gameBoard').removeClass('invisible');
  $('#header').removeClass('invisible');
  $('#promt').addClass('invisible pff');
}
function gameOver(){
  isGameOver=true;
  $('.box').addClass('pff');
  $('#gameBoard').addClass('invisible');
  $('#header').addClass('animated pulse');
  setTimeout(function() {gameReset();}, 1000);
}
function gameReset(){
  boxes=[];
  turn=0;
  commenceGame();
  $('#header').removeClass('animated pulse');
  $('#header').html('Tic - Tac - Toe');
  for(i=0;i<4;i++){
    $('#a'+i).html('');
    $('#b'+i).html('');
    $('#c'+i).html('');
  }
}
function boxInput(box){
  if ($('#'+box).text() !== 'O' && $('#'+box).text() !== 'X' && !compTurn){
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
  deepThink();
}
function deepThink(){
  if (compTurn){
    var seek=[[$('#a1').text(),'a1'],[$('#a2').text(),'a2'],[$('#a3').text(),'a3'],[$('#b1').text(),'b1'],[$('#b2').text(),'b2'],[$('#b3').text(),'b3'],[$('#c1').text(),'c1'],[$('#c2').text(),'c2'],[$('#c3').text(),'c3']];
    var filterSeek = seek[0].filter(isEmpty);
    console.log(filterSeek);
  }
}
function isEmpty(value) {
  return value == '';
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function didWin(box){
  turn++;
  boxes=[$('#a1').text(),$('#a2').text(),$('#a3').text(),$('#b1').text(),$('#b2').text(),$('#b3').text(),$('#c1').text(),$('#c2').text(),$('#c3').text()];
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
    gameOver();
  }
}
