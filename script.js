$(function(){
   $(".modalbtn").click(function(){
    $(".login-modal-wrapper").fadeIn();
  });
  $('.close-modal').click(function(){
  $('.login-modal-wrapper').fadeOut();
  });
   $('#topPage').click(function(){
$('html,body').animate(
   {'scrollTop':0},
   500);
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
