$(function(){
	var a;
	var i=0;
	$(".lunbo .gunlun ul li").stop().eq(i).css("opacity",0.9).siblings().css("opacity",0.4);//初始化指标
	function hidden(){
		if (i==7) {
			i=-1;
		}
		i++;
		a=i*(-1000);
		$(".lunbo .images .all_image").stop().animate({'left':a+'px'},500);
		$(".lunbo .gunlun ul li").stop().eq(i).css("opacity",0.9).siblings().css("opacity",0.4);
	}
	var timers=setInterval(hidden,4000);
	$(".lunbo .gunlun ul li").mouseover(function(event) {
		i=$(this).index();
		a=i*(-1000);
		$(this).stop().css("opacity",0.9).siblings().css("opacity",0.4);
		$(".lunbo .images .all_image").stop().animate({'left':a+'px'},500);
		clearInterval(timers);
	})
	$(".lunbo .gunlun ul li").mouseout(function(event) {
		timers=setInterval(hidden,4000);
	})	
	$(".lunbo .images .all_image").mouseover(function(){
		clearInterval(timers);
	});
	$(".lunbo .images .all_image").mouseout(function(){
		timers=setInterval(hidden,4000);
	});
})