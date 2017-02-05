var lat=0,lon=0;
var tempInK=0,tempInF=0,tempInC=0;
var standard="C";
  // Get Permission, because consent is important.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    $("#data").html("latitude: " +lat + "<br>longitude: " + lon);
    goldenFleece();
  });
}
$("#getWeather").click(function(){
  if(lat!=0 | lon!=0){
    goldenFleece();
  } else alert("Didn't went through.");
});
$("#switchCF").click(function(foo){
    tempInC = (tempInK- 273.15).toFixed(1);
    tempInF = (9/5*(tempInC)+32).toFixed(1);
    if (standard=="C"){
      standard="F";
    
      $(".digitizer").html(tempInF +"° F");
    } else if (standard=="F") {
      standard="C";

      $(".digitizer").html(tempInC+"° C");
    }
});
function goldenFleece(){
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=675db0be748b9a901ec9d959d70d468e",
    jsonp: "callback",
    type: "GET",
    dataType: "jsonp",
    success: function (data) {
      tempInK = data["main"]["temp"];
      tempInC = (tempInK- 273.15).toFixed(1);
      $(".digitizer").html(tempInC + "° C");
      $(".cityName").html(data["name"]);
      $(".weatherSit").html(data["weather"][0]["main"]);
      signalization(data["weather"][0]["main"]);
      $(".country").html(getCountryName(data["sys"]["country"]));
    },
    xhrFields: {
      withCredentials: false
    }
  });
}
function signalization(str){
  if (str=="Rain"){
    $(".weatherSym").html('<i class="fa fa-tint"></i>');
  } else if(str=="Thunderstorm"){
    $(".weatherSym").html('<i class="fa fa-bolt"></i>');
  } else if(str=="Drizzle"){
    $(".weatherSym").html('<i class="fa fa-shower"></i>');
  } else if(str=="Snow"){
    $(".weatherSym").html('<i class="fa fa-snowflake-o"></i>');
  } else if(str=="Atmosphere"){
    $(".weatherSym").html('<i class="fa fa-bars"></i>');
  } else if(str=="Clear"){
    $(".weatherSym").html('<i class="fa fa-sun-o"></i>');
  } else if(str=="Clouds"){
    $(".weatherSym").html('<i class="fa fa-cloud"></i>');
  } else if(str=="Extreme"){
    $(".weatherSym").html('<i class="fa fa-thermometer-empty"></i>');
  } else if(str=="Additional"){
    $(".weatherSym").html('<i class="fa fa-cloud"></i>');
  } else {
    $(".weatherSym").html('<i class="fa fa-sun-o"></i>');
  }
}
