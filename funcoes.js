$(document).ready(function(){
  $("#enviar").click(function(){
    var email = $("#email").val();
    var mensagem = $("#msg").val();

    if (email != "" && mensagem != "") {
      alert("Seu email foi enviado com sucesso! Em breve entrarei em contato, fique atento!");
      $("#email").val("");
      $("#msg").val("");
    } else {
      alert("Por favor, preench os campos email e mensagem para efetuar o envio do email!");
    }
  });

  $("#foto_poc").hover(function(){
    $(this).css({"opacity": "1"});
  }, function(){
    $(this).css({"opacity": "0.5"});
  });

  $(".ativo").animate({
    borderBottomWidth: "5px"
  });
});