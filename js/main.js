$('document').ready(function(){


    window.sr = ScrollReveal();
    sr.reveal('.show-me')

    console.log("hello");

  $(".burger-button").click(function(){
  $(".burger-button").toggleClass("active");
  $(".burger-menu").slideToggle();
});


});
