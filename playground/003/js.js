var turn,h2o,c02,o2,plantcount = new Number();
var plant,mamal=new String();
//a basic starting contidion.
co2=50,h2o=100,o2=0,turn=0,plantcount=0;

function doplant(){
  var alive=true
  //needs CO2 and H2O
  if (h2o<1 | co2<1)
  {
    alive=false;
  }
  if (alive){
      co2--;
      h2o--;
      o2++;
      }
  else{
    $("#sim .comment").html('<h1>DED PLANTS<h1>');
  }
}
function domamal(){
  var alive=true
}


//Handle the button and the next turn
$("#nextturn").click(function(e){
  e.preventDefault();
  turnover();
});

function turnover(){
  turn++;
  for (i = 0; i < plantcount; i++){
    doplant();
  }
  banksy(turn);
}
function banksy(count){
    $("#sim .turncnt").html('Turn: '+count+'<br> Oxygen:'+o2+'<br> Water: '+h2o+'<br> Carbondioxide: '+co2);
}

//handle the addplants button
$("#addplant").click(function(e){
  e.preventDefault();
  plantcount++;
  $("#sim .plants").html('Plant Count: '+plantcount);
});
