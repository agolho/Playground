var streamChannels = ["pintiPanda","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var onlineOnes =[];
var offlineOnes =[];
checkStreams();
$("#input").change(function(){
  var str = document.getElementById("input").value;
  streamChannels=str.split(',');
  console.log(str);
});
function checkStreams(){
  document.getElementById("input").value=streamChannels;
  onlineOnes=[];
  offlineOnes=[];
  for (i=0;i<streamChannels.length;i++) {
    $("#listBanner").html('');
    checkOnApi(streamChannels[i]);
  }
}
$("#justOnline").click(function(){
  $("#listBanner").html('');
  for (i=0;i<onlineOnes.length;i++){
    queueOn(onlineOnes[i][0],onlineOnes[i][1],onlineOnes[i][2],onlineOnes[i][3],onlineOnes[i][4]);
  }
});
$("#justOffline").click(function(){
  $("#listBanner").html('');
  for (i=0;i<offlineOnes.length;i++){
    queueOff(offlineOnes[i]);
  }
});
$("#showAll").click(function(){
  onlineOnes=[];
  offlineOnes=[];
  for (i=0;i<streamChannels.length;i++) {
    $("#listBanner").html('');
    checkOnApi(streamChannels[i]);
  }
});
function checkOnApi(streamer){
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+streamer+'?callback=?', function(data) {
    if(data["stream"]==null){
      queueOff(streamer);
      offlineOnes.push(streamer);
    } else {
      queueOn(streamer,data["stream"]["game"],data["_links"]["self"],data["stream"]["channel"]["logo"],data["stream"]["channel"]["status"]);
      onlineOnes.push([streamer,data["stream"]["game"],data["_links"]["self"],data["stream"]["channel"]["logo"],data["stream"]["channel"]["status"]]);
    }
  });
}
function queueOn(streamer,game,urlto,streamerAvatar,desc){
  $("#listBanner").append('<a href="'+urlto+'"><div class="streamItem itemOn row"><div class="col-md-2"><img class="img-responsive img-circle" src="'+streamerAvatar+'"alt="avatar"></div><div class="col-md-10"><h1><span class="sName">'+ streamer+'</span> -<em><span class="gameName">'+ game +'</span></em></h1><p>'+desc+'</p><h3 class="subtitle">Online</h3></div></div></a>');
}
function queueOff(streamer){
  $("#listBanner").append('<div class="item streamItem streamItemOff row"><div class="col-md-2"><img class="img-responsive img-circle" src="offline.jpg"alt="avatar"></div><div class="col-md-10"><h1><span class="sName">'+ streamer+'</span></h1><p></p><h3 class="subtitle">Offline</h3></div></div>');
}
