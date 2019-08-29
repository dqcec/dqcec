$(function(){
   $(".modalbtn").click(function(){
    $(".login-modal-wrapper").fadeIn();
  });
  $('.close-modal').click(function(){
  $('.login-modal-wrapper').fadeOut();
  });
   var n=0;
  $('.textChange').click(function(){
     n=n+1;
$('.changeText').text(n+'回クリックされました');
  });
});
