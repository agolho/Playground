$("#buton").on("click", function(){
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
    $(".data").append(a[0].content + "<p>— " + a[0].title + "</p>")
  });
});
