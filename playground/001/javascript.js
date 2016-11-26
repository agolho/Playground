var i=getCookie("ccount");

window.onload = function(){checkifEmpty();};
$("#clicker").click(function(e){
  e.preventDefault();
  clicked();
});

function checkifEmpty(){
  $("#game .text").html('<img src="loader.gif"></img>');
  if (i == 0)
    {
        console.log("empty");
    } else {
        banksy(i);
    }
}

function clicked(){
  i=getCookie("ccount");
  i++;
  banksy(i);
  setCookie("ccount", i, 90);
}

function banksy(number){
    $("#game .text").html('<h1><strong>You\'ve clicked </strong>'+number+'<strong> times. Don\'t know why.</strong</h1>');
}

function dont(){
  var intext=document.getElementById('ingoes').value;
  $("#game .comment").append(intext);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
