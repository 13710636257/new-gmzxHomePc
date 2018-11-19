$(function(){
	/* 说点啥 */
	console.log('#### 欢迎来到广美整形控制台面板！####');
	console.log('#### 想过来广美吗？快投简历吧！####');

//导航项目下滑开始
	$('.mainNav').hover(function(){
			$(this).find(".nav-top").addClass('hover')
			$(this).find(".menu-list").animate({height:'show' },300);
		},function (){
			$(this).find(".menu-list").stop(true, true).hide();
			$('.item_menu_con').stop(true, true).hide();
			$('.menu-list ul li').removeClass('hover')
			$(this).find(".open-i").removeClass('hover')
		}
	);
	$('.menu-list ul li').mouseover(function(){
		var current = $(this).index();
		$('.item_menu_con').hide().eq(current).show()
		$('.menu-list ul li').removeClass('hover').eq(current).addClass('hover')
	});



	// banner  轮播效果
	$("#bannerArea .slideBox").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"left",
		autoPlay:true,
		autoPage:true,
		trigger:"click",
		endFun: function(i, c) {
			$("#bannerArea .slideBox li").removeClass("active").eq(i + 1).addClass("active");
		}
	});

	//文章内容近期优惠轮播图
	$("#news-slide").slide({
		mainCell:".bd ul",
		titCell : ".yuan dd",
		effect:"leftLoop",
		autoPlay:true,
		prevCell: '.preBtn',
		nextCell: '.nextBtn',
		interTime: 4500,
		trigger : "click"
	});

	//	近期特邀医生
	$(".news-contact").slide({
		mainCell : ".doctor-content",
		titCell : ".yuan dd",
		effect : "leftLoop",
		autoPlay : true,
		prevCell: '.preBtn',
		nextCell: '.nextBtn',
		interTime: 4500,
		trigger : "click",
	});
//名媛头像轮播
	$(".anlis-top").slide({
		mainCell:".start-head ul",
		autoPage:true,
		effect:"left",
		//autoPlay:true,
		vis:7
	});
	//案例中心
	$("#section-anlis").slide({
		mainCell : ".anlis-centent",
		titCell : ".picList li",
		effect : "leftLoop",
		autoPlay : true,
		//interTime: 4500,
		trigger : "click",
	})

	//广美名媛之星
	$(".ladie-start").slide({
		mainCell : ".start-content",
		titCell : ".yuan dd",
		effect : "leftLoop",
		autoPlay : true,
		interTime: 4500,
		trigger : "click",
	});

	$(".slideTxtBox2").slide({effect:"leftLoop"});

	//五大体系
	$(".systems-classify").slide({
		mainCell : ".systems-content",
		titCell : ".systems-nav li",
		effect : "leftLoop",
		autoPlay : true,
		interTime: 4500,
		trigger : "click",
	});

	////品牌事迹
	$(".pinpai-shiji").slide({
		mainCell : ".shiji-content ul",
		titCell : ".yuan dd",
		effect : "leftLoop",
		autoPlay : true,
		interTime: 4500,
		trigger : "click",

	});

//名媛之星查看更多详情
	var ladiePiv_URL='https://cdn.gmzx.com/images/gmzx/new-home/ladie-starts/';//图片路径
	var arrImgs=['ladieXXJ.jpg','ladieLD.jpg','ladiePCJ.jpg','ladieZYH.jpg','ladieYHW.jpg','ladieTXL.jpg','ladieLMY.jpg','ladieLXR']

	$('.start-content ul li a').click(function(){
		$('.ladie-more').show().css('animation','orange 0.3s ease')
		var $index=$(this).parents('li').index();

		$(".ladie-more .details-cont img").lazyload({  //图片懒加载
			effect : "fadeIn",
			placeholder : "https://static.gmzx.com/images/phone/common/loading.gif",
			threshold : 200
		});
		$('.ladie-more .details-cont img').attr('src',ladiePiv_URL+arrImgs[$index]);
	})
//点击按钮关闭详情页
	$('.details-cont .close-btn').click(function(){
		$('.ladie-more').hide()
	})




//$('.ladie-lidi').click(function(){
//	layer.open({
//		  type: 1,
//		  title: ['广美名媛之星  	<span style="font-size: 18px; color: #999;">Ladies Star</span>', ' text-align: center; font-size: 26px; color: #000;background: white;border: none;	padding: 25px 0;'],
//		  shadeClose: true,
//		  shade: 0.5,
//		  area: ['1200px', '634px'],
//		  content: '<div class="ladie-details">'+
//					'<img src="https://cdn.gmzx.com/images/gmzx/new-home/ladie-starts/ladieLD-details.jpg"/>'+
//					'<p class="consult-btn" onclick="openZoosUrl();LR_HideInvite();return false;"></p>'+
//				'</div>' ,
//		});
//})




});
