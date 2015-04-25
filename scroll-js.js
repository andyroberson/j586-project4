$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height > 200) {
      $(".header").css({"background-color": "#fff", "opacity": "1", "height": "70px", "font-size": ".8em"});
      $(".logo").css({"transform": "scale(.65,.65)", "margin-top": "-25px"});
      $(".links").css({"margin-top": "1em"});
    }

    if (height < 200) {
      $(".header").css({"background-color": "#A7DBD8", "opacity": ".9", "height": "100px", "font-size": "1em"});
      $(".logo").css({"transform": "scale(1,1)", "margin-top": "-6px"});
      $(".links").css({"margin-top": "1.5em"});
    }
});
