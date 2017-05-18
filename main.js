
var buy_button = $(".buy-now-top");

buy_button.click(function(){
  buy_button.text("Added to Cart")
  buy_button.css("width","150px")

})

buy_button.hover(function(){
  buy_button.toggleClass("hover-effect")
})
