$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 750);
});
$("#button").click(function(){
  $("#formContainer").css("display","block");
  $("#formbg").css("display","block");
});
$("#annuler").click(function(){
  $("#formContainer").css("display","none");
  $("#formbg").css("display","none");
});
$("#envoyer").click(function(){
  $("#formContainer").css("display","none");
  $("#formbg").css("display","none");
  alert("Donénes enregistrées !");
});
$("#formbg").click(function(){
  $("#formContainer").css("display","none");
  $("#formbg").css("display","none");

});

$("#formulaire").load("formulaire.html");
