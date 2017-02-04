$("#buton").on("click", function(){
  $.getJSON("https://gist.githubusercontent.com/signed0/d70780518341e1396e11/raw/2a7f4af8d181a714f9d49105ed57fafb3f450960/quotes.json", function(a) {
    $(".data").append(a[0].content + "<p>— " + a[0].title + "</p>")
  });
});
