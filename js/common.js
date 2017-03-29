$(document).ready(function(){

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
