$(function(){
    $(".header h3,ul").hover(function(event){
        $(".header ul").stop(true,false).slideDown(300)
        event.preventDefault();
    },function(){
        $(".header ul").stop(true,false).slideUp(300)
        
    })




    $(window).resize(function(){
        let N=$(window).width();
            if(N>=768){
                $(".header ul").show();
            }else{$(".header ul").hide();}
    })
            
    

})