$("#buton").on("click", function(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
    $(".data").append(a[0].content + "<p>— " + a[0].title + "</p>")
  });
});
