$(function(){
    $("#M01").click(function(){
        $("html,body").stop(true,false).animate({scrollTop:0},800)
    })
    $("#M02").click(function(){
        var tt=$("#BBB").offset().top
        $("html,body").stop(true,false).animate({scrollTop:tt},800)
    })  
    $("#M03").click(function(){
        var tt=$("#CCC").offset().top
        $("html,body").stop(true,false).animate({scrollTop:tt},800)
    })
    $("#M04").click(function(){
        var tt=$("#DDD").offset().top
        $("html,body").stop(true,false).animate({scrollTop:tt},800)
    })



})
