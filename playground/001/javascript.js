var i=0;
var intext=jQuery('textarea#ingoes').val();
$("#clicker").click(function(e){
  e.preventDefault();
  clicked();
});

function clicked(){
  i++;
  $("#game .text").html('<p><strong>You\'ve clicked </strong>'+i+'<strong> times. Don\'t know why.</strong</p>');
  dont();
}

function dont(){
  $("#game .comment").append(intext);
}
