var str;
$("#buton").on("click", function(){
  genQuote();
  $(".quote").animateCss("bounce");
  $(".conTweet").animateCss("pulse");
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
        $(".quote").html('<h3>'+ data["value"]["joke"] +'</h3>');
      },
      xhrFields: {
        withCredentials: false
      }
    });
  };
function prepareTweet(foo){
  var appendLink = 'https://twitter.com/intent/tweet?hashtags=chucknorrisfacts&related=ysfbekts&text='+encodeURIComponent(foo)+" @ysfbekts";
  var buttonCon='<a href="' + appendLink +'" target="_blank" class="btn"><h1><i class="fa fa-twitter"></i></h1></a>';
  $(".conTweet").html(buttonCon);
}
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
