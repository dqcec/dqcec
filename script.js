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
     if(n<11){
$('.changeText').text(n+'回クリックされました');
     }else{
 $('.changeText').text('そんなにクリックしても意味ないよ？笑');
     };
  });
});
