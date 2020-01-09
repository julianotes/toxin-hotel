$(document).ready(function(){
  $('.header-burger').click(function(event){
    $('.header-burger, .header-burger__lines, .header-nav__wrap').toggleClass('mobile');
    $('body').toggleClass('lock');
  });
});