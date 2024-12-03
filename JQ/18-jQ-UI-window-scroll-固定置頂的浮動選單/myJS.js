$(function(){

    $(window).scroll(function(){
        let hh=$(window).scrollTop();
        if(hh>200){
            $("#top-bar").stop(true,false).animate({top:0},100)
        }else{
            $("#top-bar").stop(true,false).animate({top:-65},100)
        }
    })
})