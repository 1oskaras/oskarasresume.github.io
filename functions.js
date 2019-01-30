$(function(){

    $('#nav-icon').click(function(){
      $(this).toggleClass('open');

    });

  $("#nav-icon").on("click", ()=>{
      $("nav ul").toggleClass("show", 100, "easeOutSine");

  });

  $("nav ul li").on("click", ()=>{
    setTimeout(function() {
      $("nav ul").toggleClass("show", 100, "easeOutSine");
      $('#nav-icon').toggleClass('open');

}, 250);
  });
});
