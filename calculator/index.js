var curProcess='';
var process=false;over=false;
var total=0;prev=0,curr=0;
$('#sum').click(function(){
  if (!over) logic();
  curProcess='+';
  prev = parseFloat(document.getElementById('display').value);
  process = true;
});
$('#multiply').click(function(){
  if (!over) logic();
  curProcess='*';
  prev = parseFloat(document.getElementById('display').value);
  process = true;
});
$('#subtract').click(function(){
  if (!over) logic();
  curProcess='-';
  prev = parseFloat(document.getElementById('display').value);
  process = true;
});
$('#divide').click(function(){
  if (!over) logic();
  curProcess='/';
  prev = parseFloat(document.getElementById('display').value);
  process = true;
});
$('#calculate').click(function(){
  logic();
  over = true;
});
function logic(){
  total = parseFloat(document.getElementById('display').value);
  if (total === 0){
    prev = parseFloat(document.getElementById('display').value);
  } else {
    switch (curProcess) {
      case '+':
        total += prev;
        break;
      case '-':
        total -= prev;
        break;
      case '*':
        total *= prev;
        break;
      case '/':
        total /= prev;
        break;
      default:
        break;
    }
  }
  document.getElementById('display').value = total;
}
