$("#formulaire").load("formulaire.html", function(){
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
});

$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 750);
});
