$(function(){

    let N=16
    $("#BBB").click(function(){
        N+=1
        $("#CON_BOX").css("font-size",N+"px")
    })

    $("#MMM").click(function(){
        $("#CON_BOX").css({fontSize:16})
    })

    $("#SSS").click(function(){
        N-=1
        $("#CON_BOX").css({
            "font-size":N-"px",
            "color":"#A0674B"
        })
    })
    /*可將css整個copy&paste之後;換成,*/




})