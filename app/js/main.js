$(function(){


    var mixer = mixitup('.goods__inner');
    mixer.filter('.cвадьба'); 
  
    $('.menu__button').on('click', function(){
        $('.menu').toggleClass('menu__box-active')
    });

});