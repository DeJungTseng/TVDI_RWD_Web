$(function(){
    $("#MENU li").hover(function(){
        $(this).stop(true,false).animate({top:0},300)
        $(this).prev().stop(true, false).animate({top:50}, 300)
        $(this).next().stop(true, false).animate({top:50}, 300)
        
    },function(){
    },function(){
        $(this).stop(true,false).animate({top:100},300)
        $(this).siblings().stop(true, false).animate({top:100}, 300)
    })
})