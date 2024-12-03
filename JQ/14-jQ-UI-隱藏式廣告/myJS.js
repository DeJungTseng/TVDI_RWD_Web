$(function(){

    $(".main").hover(function(){
        $(this).animate({top:-280},500,"easeOutBounce")


    },function(){
        $(this).animate({top:0},500,"easeInBounce")

    })
})