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
$("#point").click(function(){
  writeToDisplay('.');
  process=false;over=false});
$("#allclear").click(function(){
  numArray =[];
  total=0;document.getElementById("display").value= '';
  });
function writeToDisplay(num){
  if(process){
    document.getElementById("display").value= num;
  } else
    document.getElementById("display").value+= num;
}
