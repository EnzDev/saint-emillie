$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 750);
});
$("#button").click(function(){
  $("#form").css("display","block");
  $("#formbg").css("display","block");
});
$("#annuler").click(function(){
  $("#form").css("display","none");
  $("#formbg").css("display","none");
});
$("#formbg").click(function(){
  $("#form").css("display","none");
  $("#formbg").css("display","none");
});
