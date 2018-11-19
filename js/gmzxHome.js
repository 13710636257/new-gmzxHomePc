/**
 * Created by Administrator on 2018/5/11.
 */

<!--导航动画效果-->
$(".nav_item li a").hover(function() {
    $(".front",	this).stop().animate({'top':'45px'},300); // move down - hide
    $(".over",	this).stop().animate({'top':'0px'},	300); // move down - show

}, function() {
    $(".front",	this).stop().animate({'top':'0px'},	300); // move up - show
    $(".over",	this).stop().animate({'top':'-45px'},300); // move up - hide
});


//banner轮播效果
$("#bannerArea .slideBox").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"left",autoPlay:true, autoPage:true, trigger:"click",endFun: function(i, c) {
    $("#bannerArea .slideBox li").removeClass("active").eq(i + 1).addClass("active");
}
});


jQuery(".doctors").slide({
    titCell : ".yuan dd",
    mainCell : ".doctor-content",
    effect : "leftLoop",
    prevCell: '.preBtn',
    nextCell: '.nextBtn',
    autoPlay : true,
    trigger : "click"
});