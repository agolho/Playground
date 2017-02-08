var lat=0,lon=0;
var tempInK=0,tempInF=0,tempInC=0;
var accuId=0;
var standard="C";
var c=document.getElementById("compass");
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
        $(".cityName").html(data["LocalizedName"]+'  <i class="fa fa-location-arrow"></i>');
        $(".country").html('The most beautiful city in '+data["Country"]["EnglishName"]);
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
      windUnit = data[0]["Wind"]["Speed"]["Metric"]["Unit"];
      //console.log(data[0]["WeatherText"]);
      $(".digitizer").html(tempInC + " C");
      $(".wind").html('<b><i id="compass" class="fa fa-arrow-circle-up"></i> '+windSpeed +' '+ windUnit+'</b>');
      $(".weatherSit").html(data[0]["WeatherText"]);
      weatherSymbolizer(data[0]["WeatherIcon"]);
      $(".visibility").html('Visibility: '+data[0]["Visibility"]["Metric"]["Value"]+data[0]["Visibility"]["Metric"]["Unit"]);
      var angle= data[0]["Wind"]["Direction"]["Degrees"];
      compassRotation(angle);
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
function compassRotation(angle){
  if (angle == 0){
    $("#compass").removeClass();
    $("#compass").addClass("fa fa-rotate-180 fa-arrow-circle-up");
  } else if (angle>0 && angle <90) {
    $("#compass").removeClass();
    $("#compass").addClass("fa fa-rotate-225 fa-arrow-circle-up");
  } else if (angle == 90) {
    $("#compass").removeClass();
    $("#compass").addClass("fa fa-rotate-270 fa-arrow-circle-up");
  } else if (angle>90 && angle <180) {
    $("#compass").removeClass();
    $("#compass").addClass("fa fa-rotate-315 fa-arrow-circle-up");
  } else if (angle == 180) {
    $("#compass").removeClass();
    $("#compass").addClass("fa fa-arrow-circle-up");
  } else if (angle>180 && angle <270) {
    $("#compass").removeClass();
    $("#compass").addClass("fa fa-rotate-45 fa-arrow-circle-up");
  } else if (angle == 270) {
    $("#compass").removeClass();
    $("#compass").addClass("fa fa-rotate-90 fa-arrow-circle-up");
  } else if (angle>270 && angle <360) {
    $("#compass").removeClass();
    $("#compass").addClass("fa fa-rotate-135 fa-arrow-circle-up");
  } else {
    $("#compass").removeClass();
    $("#compass").addClass("fa fa-arrow-circle-up");
  }
}
