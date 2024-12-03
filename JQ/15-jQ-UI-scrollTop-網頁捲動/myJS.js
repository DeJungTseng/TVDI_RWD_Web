$(function(){
    $("#gotop").click(function(event){
        $("html,body").animate({scrollTop:0},1000)
        event.preventDefault();
    })
})