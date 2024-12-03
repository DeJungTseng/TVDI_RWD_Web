$(function(){
    $(".BANNER").hover(function(){
        $(this).find(".BOX").stop(true,false).slideToggle().end().siblings().find(".BOX").slideUp()

    })



})