var turn,h2o,c02,o2,plantcount,mamalcount = new Number();
var plant,mamal=new String();
//a basic starting contidion.
co2=100,h2o=100,o2=0,turn=0,plantcount=0,mamalcount=0;

window.onload = function(){banksy(0);};
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
    $("#sim .plantwarn").html('<h1>DED PLANTS<h1>');
  }
}
function domamal(){
  var alive=true
  //needs O2 and Food?
  if (o2<1)
  {
    alive=false;
  }
  if (alive){
      co2++;
      h2o++;
      o2--;
      }
  else{
    $("#sim .mamalwarn").html('<h1>DED MAMALS<h1>');
  }
}

//Function that convert ranges for progress bars
function convertRange( value, r1, r2 ) {
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
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
  for (i = 0; i < mamalcount; i++){
    domamal();
  }
  banksy(turn);
}
function banksy(count){
    $("#sim .nextturn").html('Next Turn <span class="badge">'+count+'</span');
  //  $("#sim .turncnt").html('<p>Turn: '+count+'<br> Oxygen:'+o2+'<br> Water: '+h2o+'<br> Carbondioxide: '+co2+"</p>");
    $("#sim .turncnt").html(fillprogress(o2,"Oxygen")+fillprogress(h2o,"Water")+fillprogress(co2,"Carbondioxide"));
}

//handle the addplant and addmamal button
$("#addplant").click(function(e){
  e.preventDefault();
  plantcount++;
  $("#sim .plantbtn").html('<i class="fa fa-leaf"></i> Add Plant <span class="badge">'+plantcount+'</span>');

});
$("#addmamal").click(function(e){
  e.preventDefault();
  mamalcount++;
  $("#sim .mamalbtn").html('<i class="fa fa-paw"></i> Add Mamal <span class="badge">'+mamalcount+'</span>');
});

//progress bars
function fillprogress(prg,label){
  var pbar='<div class="container"><div class="progress">'+'<div class="progress-bar progress-bar-striped progress-bar-warning active" role="progressbar" aria-valuenow="';
  pbar=pbar+prg+'" aria-valuemin="0" aria-valuemax="100" style="width:'+prg+'%">'+label+': '+prg+'</div></div></div>'
  return pbar;
}
