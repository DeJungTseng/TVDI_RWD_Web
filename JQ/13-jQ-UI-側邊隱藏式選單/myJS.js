$(function(){
    $("#menu").hover(function(){
        $(this).stop(true,false).animate({left:0},500)
    },function(){
        $(this).stop(true,false).animate({left:-158},500)
    })


})