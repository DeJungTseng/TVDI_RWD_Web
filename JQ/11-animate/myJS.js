$(function(){
    $("#LLL").click(function(){
        $("#KIDS").stop(true,false).animate({left:0}, 800)
    })

    $("#RRR").click(function(){
        $("#KIDS").stop(true,false).animate({left:1000}, 800)
    })
})
