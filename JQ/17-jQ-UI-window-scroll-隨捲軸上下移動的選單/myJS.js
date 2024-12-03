$(function(){
    $(window).scroll(function(){
        var hh=$(window).scrollTop()+150;

        $("#MENU").stop(true,false).animate({top:hh},200)
    })
})
 