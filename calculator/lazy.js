var toDisplay='';
var process = true;
$("#1").click(function(){writeToDisplay('1');process=false;over=false});
$("#2").click(function(){writeToDisplay('2');process=false;over=false});
$("#3").click(function(){writeToDisplay('3');process=false;over=false});
$("#4").click(function(){writeToDisplay('4');process=false;over=false});
$("#5").click(function(){writeToDisplay('5');process=false;over=false});
$("#6").click(function(){writeToDisplay('6');process=false;over=false});
$("#7").click(function(){writeToDisplay('7');process=false;over=false});
$("#8").click(function(){writeToDisplay('8');process=false;over=false});
$("#9").click(function(){writeToDisplay('9');process=false;over=false});
$("#0").click(function(){writeToDisplay('0');process=false;over=false});
$("#point").click(function(){writeToDisplay('.');process=false;over=false});
$("#sum").click(function(){if(!process)writeToDisplay(' + ');process=true;over=false});
$("#subtract").click(function(){if(!process)writeToDisplay(' - ');process=true;over=false});
$("#multiply").click(function(){if(!process)writeToDisplay(' * ');process=true;over=false});
$("#divide").click(function(){if(!process)writeToDisplay(' / ');process=true;over=false});
$("#allclear").click(function(){
  toDisplay ='';
  total=0;writeToDisplay('0');
  $('#display').html('0');
  });
$("#clear").click(function(){
  toDisplay ='';
  total=0;writeToDisplay('0');
  $('#display').html('0');
  });
function writeToDisplay(num){
    toDisplay += num;
    $('#memory').html(toDisplay);
}
$('#calculate').click(function(){
  var opp = [];
  var num = [];
  var total =0;
  var arr = toDisplay.split(' ');
  if (process) {arr.pop();arr.pop();}
  opp.push('+');
  for (i=1;i<arr.length;i+=2){
    opp.push(arr[i]);
  }
  for (i=0;i<arr.length;i+=2){
    num.push(parseFloat(arr[i]));
  }
  for (i=0;i<num.length;i++){
    switch (opp[i]) {
      case '+':
        total += num[i];
        break;
      case '-':
        total -= num[i];
        break;
      case '*':
        total *= num[i];
        break;
      case '/':
        total /= num[i];
        break;
    }
  }
  if (total == Boolean) total = 0;
  writeToDisplay('=');
  toDisplay ='';
  process=true;
  $('#display').html(+total.toFixed(2));
});
