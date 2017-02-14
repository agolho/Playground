var power,arr=[],turn,nextInline=0,stepper,gameStarted,isStrict;

$('#onOff').click(function(){powerToggle();});
$('#start').click(function(){if(power)startGame();});
$('#strict').click(function(){if(power)strictToggle();});

  $('#red').click(function(){if(power)canPress(0,'sound1','red')});
  $('#green').click(function(){if(power)canPress(1,'sound2','green')});
  $('#yellow').click(function(){if(power)canPress(2,'sound3','yellow')});
  $('#blue').click(function(){if(power)canPress(3,'sound4','blue')});

function canPress(code,sound,color){
  userPress(code);document.getElementById(sound).play();highligher(color);
}
function strictToggle(){
  isStrict=!isStrict;
  if(isStrict) {
    $('.fa-circle').addClass('red');
  }
  else if(!isStrict) {
    $('.fa-circle').removeClass('red');
  }
}
function powerToggle(){
  power = !power;
  if(power){
    $('#display').html('--');
  } else if (!power) {
    $('#display').html('');
    arr=[];
  }
  turn=0;
}
function startGame(){
  gameStarted=true;
  message('||');
  arr=[];
  for (i=0;i<=20;i++){
    var ranCol=Math.floor(Math.random() * (4));
    arr.push(ranCol);
  }
  stepper=0;
  turn=0;
  nextTurn();
}
function nextTurn(){
  stepper=0;
  if(turn<9) $('#display').html('0'+turn);
  else $('#display').html(turn);
  pressButtons();
  //Display purposes.
  turn++;
}
function userPress(input){
  if(input == arr[stepper]){
    stepper++;
    if (stepper == turn) {
      if (turn == 21){
        message('**');
        startGame();
      }
      setTimeout(function(){nextTurn();},1000);
    };
  } else if(isStrict){
    message('!!');
    startGame();
  } else {pressButtons();message('!!')}
}
function message(str){
  $('#display').html(str);
  $('#display').animateCss('flash');
  setTimeout(function(){$('#display').html(turn);},500);
}
function pressButtons() {
  var index = 0;
  function nextBtn() {
    var color = colorConverter(arr[index]);
    beepBoop(color);
    index++;
  }
  nextBtn();
  var presser = window.setInterval(function () {
    if (index >= turn) {
      clearTimeout(presser);
      userTurn = true;
      return;
    }
    nextBtn();
  }, 1000);
}

function beepBoop(color){
  highligher(color);
  console.log(color);
  switch (color) {
    case 'red':
      document.getElementById('sound1').play();
      break;
    case 'green':
      document.getElementById('sound2').play();
      break;
    case 'yellow':
      document.getElementById('sound3').play();
      break;
    case 'blue':
      document.getElementById('sound4').play();
      break;
  }
}

function colorConverter(number){
  switch (number) {
    case 0:
      return 'red';
      break;
    case 1:
      return 'green';
      break;
    case 2:
      return 'yellow';
      break;
    case 3:
      return 'blue';
      break;
  }
}
function highligher(buttonName){
  $('#'+buttonName).addClass('highlighted');
  setTimeout(function() {
    $('#'+buttonName).removeClass('highlighted');
  },500);
}
//Animate Css Function
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
