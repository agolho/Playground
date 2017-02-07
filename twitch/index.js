var streamChannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var pushQueue =[];
$("#checkStreams").click(function(){
  for (i=0;i<streamChannels.length;i++) {
    $("#listBanner").html('');
    checkOnApi(streamChannels[i]);
  }
});
$("#pushStreams").click(function(){
  realBanksy();
});
function checkOnApi(streamer){
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+streamer+'?callback=?', function(data) {
    if(data["stream"]==null){
      console.log("offline");
      queueOff(streamer);
    } else {
      console.log(streamer + " is online.");
      queueOn(streamer);
    }

  });
}
function queueOn(streamer){
  pushQueue.push('<div class="item first streamItem"><h1><span class="sName">'+streamer+'</span> -<em><span class="gameName">Game Name</span></em></h1><h3 class="subtitle">Online</h3></div>');
  //$("#listBanner").append('<div class="item first streamItem"><h1><span class="sName">'+streamer+'</span> -<em><span class="gameName">Game Name</span></em></h1><h3 class="subtitle">Online</h3></div>');
}
function queueOff(streamer){
  pushQueue.push('<div class="item first streamItem"><h1><span class="sName">'+streamer+'</span> -<em><span class="gameName">Game Name</span></em></h1><h3 class="subtitle">Online</h3></div>');
  //$("#listBanner").append('<div class="item streamItem streamItemOff"><h1><span class="sName">'+streamer+'</span> -<em><span class="gameName">Game Name</span></em></h1><h3 class="subtitle">Online</h3></div>');
}
function realBanksy(){
  console.log(pushQueue.length);
  for (i=0;i<pushQueue.length;i++){
    $("#listBanner").append(pushQueue[i]);
  }
}
