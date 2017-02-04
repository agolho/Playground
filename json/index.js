var str;
$("#buton").on("click", function(){
  genQuote();
  $(".quote").addClass("animated bounce");
});
/*
$("#tweet").on("click", function(){
  tweet();
});
*/
function genQuote () {
    $.ajax({
      url: "http://api.icndb.com/jokes/random",
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

/* HOW THEY DIT IT
function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author;
      if(inIframe())
      {
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      }
      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(r.quote);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(r.author);
        });

      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);
    }
  });
}
*/
