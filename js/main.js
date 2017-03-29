$(document).ready(function(){

  var myScroll = new IScroll('#store_banner',{
    scrollX :true,scrollY:false,scrollbars:false
  });

 $('.bxslider').bxSlider({
   auto:true,
   autoControls:true,
   speed: 800
 });

$('.header a.menu_box').on('click',function(){
  $('.menu_nav,.dim').addClass('on');
  $('.menu_nav').css({'animation': 'navmoveIn 1s ease forwards'})

});

$('.menu_nav a.menu_box,.dim').on('click',function(){
  $('.menu_nav,.dim').removeClass('on');
  $('.menu_nav').css({'animation': 'navmoveOut 1s ease forwards'})
})

$('.menu_nav > ul > li > a').click(function(){
  $(this).siblings('ul').slideToggle();
})


})
