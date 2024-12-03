$(function(){

    $(".AA").click(function(){
        // $(this).siblings().css({"background-color":"yellow"})
        // $(this).first().css({"background-color":"yellow"})
        // $(this).last().css({"background-color":"orange"})
        // $(this).prev().css({"color":"orange"})
        // $(this).next().css({"color":"violet"})
        // $(this).nextUntil(".woff").css({})
        // $(this).siblings().eq(5).css({"background-color":"yellow"})
        $(this).siblings().slice(4).add("body").not("ul").css({"background-color":"yellow"})
    })  

    $(".BB").click(function(){
        // $(this).parentsUntil("#BOX").css({"background-color":"orange"})
        // $(this).parent().next().find("li").css({"background-color":"green"})
        // $(this).parent().prev().children().css({"color":"green"})
        $(this).siblings().filter("li:even").css({"color":"violet"})
    })

})