$(document).ready(function(){
  $('.header-burger').click(function(event){
    $('.header-burger, .header-burger__lines, .header-nav__wrap').toggleClass('mobile');
    $('body').toggleClass('lock');
  });
  function linkFontSize(){
    var link = $('.top');
    var windowWidth =$('body').innerWidth();
    if(windowWidth < 920) {
      link.addClass('nav-link__link--mobile');
    }
  }
  linkFontSize();
});