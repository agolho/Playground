var searchItems = [];
var searchDesc = [];
var searchLinks = [];


    $("#userInput").focus();


$("#search").click(function(){
  event.preventDefault();
  $("#queryResults").html("");
  var searchStr = document.getElementById('userInput').value;
  searchStr = searchStr.replace(/\s/,"+");
  if (searchStr == ""){
    $("#userInput").focus();
    return;
  } else {
    $(".powered").addClass("invisible");
    $(".result").animateCss("fadeInUp");
    getAndInterpret(searchStr);
  }

});
function getAndInterpret(str){
  $.ajax({
    url: "https://wikipedia.org/w/api.php?action=opensearch&format=json&search="+str,
    jsonp: "callback",
    type: "GET",
    dataType: "jsonp",
    success: function (data) {
      var title = data[0];
      for (i=0;i<data[1].length;i++) {
        searchItems.push(data[1][i]);
        searchDesc.push(data[2][i]);
        searchLinks.push(data[3][i]);
      }
      amele();
    },
    xhrFields: {
      withCredentials: false
    }
  });
}
function amele(){
  for (i=0;i<searchItems.length;i++){
      $(".result").animateCss("fadeInUp");
      $("#queryResults").append('<div class="result"><a class="searchElement" target="_blank" href="'+searchLinks[i]+'"><h1>'+searchItems[i]+'</h1><p>'+searchDesc[i]+'</p></a>');
  }
}
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
