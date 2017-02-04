var str;
$("#buton").on("click", function(){
  genQuote();
  $(".quote").addClass("animated bounce");
});
function genQuote () {
    $.ajax({
      url: "https://api.icndb.com/jokes/random",
      jsonp: "callback",
      type: "GET",
      dataType: "jsonp",
      success: function (data) {
        str=data["value"]["joke"];
        prepareTweet(str);
        $(".quote").html(data["value"]["joke"]);
      },
      xhrFields: {
        withCredentials: false
      }
    });
  };
function prepareTweet(foo){
  var appendLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=ysfbekts&text='+encodeURIComponent(foo)+" @ysfbekts";
  var buttonCon='<a href="' + appendLink +'" target="_blank" class="btn btn-lg btn-info btn-block"><i class="fa fa-twitter"></i> Tweet!</a>';
  $(".conTweet").html(buttonCon);
  setTimeout(func, 1000);
  function func() {
      $(".quote").removeClass("animated bounce");
  }

}
