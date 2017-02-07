var lat=0,lon=0;
var tempInK=0,tempInF=0,tempInC=0;
var accuId=0;
var standard="C";
  // Get Permission, because consent is important.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    $("#data").html("latitude: " +lat + "<br>longitude: " + lon);
    getAccuId();
  });
}
$("#getLocation").click(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat=position.coords.latitude;
      lon=position.coords.longitude;
      $("#data").html("latitude: " +lat + "<br>longitude: " + lon);
      getAccuId();
    });
  }
});
$("#getWeather").click(function(){
  if(lat!=0 | lon!=0){
    getAccuId();
  } else alert("Didn't went through.");
});
$("#switchCF").click(function(foo){
    if (standard=="C"){
      standard="F";
      $(".digitizer").html(tempInF +" F");
    } else if (standard=="F") {
      standard="C";
      $(".digitizer").html(tempInC+" C");
    }
});
$("#help").click(function(){
  $(".helpText").html('<p class="slab">Developed by <a href="https://twitter.com/ysfbekts">@ysfbekts</a></p><p class="slab">Data from AccuWeather.</p>');
});
function getAccuId(){
  $.ajax({
    url: "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=JdvSUjZ9AvUdgE1Q2CSZWsFtWbQJbge5&q="+lat+'%2C'+lon+'&language=tr-TR',
    jsonp: "callback",
    type: "GET",
    dataType: "jsonp",
    success: function (data) {
        accuId = data["Key"];
        $(".cityName").html(data["LocalizedName"]+'  <span id="getLocation"><i class="fa fa-location-arrow"> </i>');
        $(".country").html(data["Country"]["EnglishName"]);
        getAccuWeather();
    },
    xhrFields: {
      withCredentials: false
    }
  });
}
function getAccuWeather(){
  $.ajax({
    url: 'https://dataservice.accuweather.com/currentconditions/v1/'+accuId+'?apikey=JdvSUjZ9AvUdgE1Q2CSZWsFtWbQJbge5&language=tr&details=true',
    jsonp: "callback",
    type: "GET",
    dataType: "jsonp",
    success: function (data) {
      tempInC = data[0]["Temperature"]["Metric"]["Value"];
      tempInF = data[0]["Temperature"]["Imperial"]["Value"];
      windSpeed = data[0]["Wind"]["Speed"]["Metric"]["Value"];
      windSpeedImp = data[0]["Wind"]["Speed"]["Imperial"]["Value"];
      windDirection = data[0]["Wind"]["Direction"]["English"];
      //console.log(data[0]["WeatherText"]);
      $(".digitizer").html(tempInC + " C");
      $(".wind").html('<b><i class="fa fa-flag"></i> '+windSpeed +' '+ windDirection+'</b>');
      $(".weatherSit").html(data[0]["WeatherText"]);
      weatherSymbolizer(data[0]["WeatherIcon"]);
      $(".visibility").html('Visibility: '+data[0]["Visibility"]["Metric"]["Value"]+data[0]["Visibility"]["Metric"]["Unit"]);
    },
    xhrFields: {
      withCredentials: false
    }
  });
}
function weatherSymbolizer(symbol){
  if (symbol<10) {
    $(".weatherSym").html('<img class="img-responsive" src="https://developer.accuweather.com/sites/default/files/0'+symbol+'-s.png">');
  } else {
    $(".weatherSym").html('<img class="img-responsive" src="https://developer.accuweather.com/sites/default/files/'+symbol+'-s.png">');
  }
}
