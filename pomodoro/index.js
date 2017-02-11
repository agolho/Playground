var secondLength=1000;timer=0,workLength=0,seconds=0,minuteMarker=25,paused=false,started=false,studyCount=4,breakLength=5,breakTime=false,abouted=false;

$('#minMark').html(minuteMarker);
$('#digits').html(minuteMarker+':00');
$("#start").click(function(){
  if (started){
    paused = !paused;
    $('#app').removeClass();
    $('#status').html('Paused');
    $('#app').addClass('app yellow');
    if (!paused) {
      if(!breakTime){
        $('#app').removeClass();
        $('#status').html('Study Time');
        $('#app').addClass('app red');
      } else {
        $('#app').removeClass();
        $('#status').html('Break Time!');
        $('#app').addClass('app green');
      }
    }
  }
  if (!started){
    clearInterval(timer);
    getPomodoro(minuteMarker);
    breakTime=false;
    $('#app').removeClass();
    $('#status').html('Study Time');
    $('#app').addClass('app red');
    started=true;
  }
});
$('#minMinus').click(function(){
  if (minuteMarker>1){
    minuteMarker--;
    $('#digits').html(minuteMarker+':00');
  }
  $('#minMark').html(minuteMarker);
  resetClock();
});
$('#minPlus').click(function(){
  if (minuteMarker<60){
    minuteMarker++;
    $('#digits').html(minuteMarker+':00');
  }
  $('#minMark').html(minuteMarker);
  resetClock();
});
$('#breakMinus').click(function(){
  if (breakLength>1){
    breakLength--;
  }
  $('#breakMark').html(breakLength);
});
$('#breakPlus').click(function(){
  if (breakLength<60){
    breakLength++;
  }
  $('#breakMark').html(breakLength);
});
$('#studyMinus').click(function(){
  if (studyCount>1){
    studyCount--;
  }
  $('#studyMark').html(studyCount);
});
$('#studyPlus').click(function(){
  if (studyCount<60){
    studyCount++;
  }
  $('#studyMark').html(studyCount);
});
$('#about').click(function(){
  abouted = !abouted;
  if(!abouted){ $('#about').html('<p>Made by <a href="https://twitter.com/ysfbekts"><i class="fa fa-twitter"></i> ysfbekts</a></p><p>Fork on <a href="https://github.com/agolho/Playground"><i class="fa fa-github"></i> Playground</a></p>');
} else $('#about').html('    <i class="fa fa-info"></i>');
});
function getPomodoro(min){
    $('#digits').html('Ready?');
    workLength=min;
    timer = setInterval(function(){ writeClock(); }, 1000);
}
function writeClock(){
  if (!paused){
    if(workLength>=0){
      if(seconds>0){
        $('#digits').html(workLength+':'+seconds);
        seconds--;
      } else {
        if (workLength>0){
          workLength--;
          seconds=59;
        } else if(studyCount>1){
            if(breakTime){
              clearInterval(timer);
              getPomodoro(minuteMarker);
              breakTime=false;
              $('#app').removeClass();
              $('#status').html('Study Time');
              $('#app').addClass('app red');
            } else {
              commenceBreak();
              studyCount--;
              $('#studyMark').html(studyCount);
            }
        } else if(studyCount==1){
          clearInterval(timer);
          getPomodoro(minuteMarker);
          studyCount--;
          $('#app').removeClass();
          $('#status').html('Study Time');
          $('#app').addClass('app red');
        } else  {$('#digits').html('Done!');$('#status').html('Good Work, let\'s do it again.');}
      }
    } else clearInterval(timer);
  } else {
    return;
  }
}
function resetClock(){
  clearInterval(timer);
  timer=0;
  seconds=0;
  workLength=0;
  started=false;
}
function commenceBreak(){
  clearInterval(timer);
  getPomodoro(breakLength);
  breakTime=true;
  console.log(breakTime);
  $('#app').removeClass();
  $('#status').html('Break Time!');
  $('#app').addClass('app green');
}
