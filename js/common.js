$(function(){
	//微信图片放大
	$("#topArea .weixin").hover(function() {
		$(this).find("b").fadeIn();
	}, function() {
		$(this).find("b").stop(true, true).fadeOut();
	});
	//手机微信图片放大
	$("#topArea .gmphone").hover(function() {
		$(this).find("b").fadeIn();
	}, function() {
		$(this).find("b").stop(true, true).fadeOut();
	});
	//底部微信图片放大
	$(".foot_media .weixin").hover(function() {
		$(this).find("b").fadeIn();
	}, function() {
		$(this).find("b").stop(true, true).fadeOut();
	});
	//手机微信图片放大
	$(".gmphone").hover(function() {
		$(this).find("b").fadeIn();
	}, function() {
		$(this).find("b").stop(true, true).fadeOut();
	});


});
