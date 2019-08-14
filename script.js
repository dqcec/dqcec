$(function(){
  $(".modalbtn").click(function(){
    $(".login-modal-wrapper").fadeIn();
  });
  $('close-modal').click(function(){
  $('.login-modal-wrapper').fadeOut();
  });
});
