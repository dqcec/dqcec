$(function(){
   $(".modalbtn").click(function(){
    $(".login-modal-wrapper").fadeIn();
  });
  $('.close-modal').click(function(){
  $('.login-modal-wrapper').fadeOut();
  });
  $('.textChange').click(function(){
     var n=0;
     n=n+1;
$('.changeText').text(n+'回クリックされました');
  });
});
