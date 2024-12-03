$(function(){

    $(".small img").click(function(){
        let N = $(this).index()
        $(".big img").eq(N).slideDown().siblings().slideUp()
    })
})