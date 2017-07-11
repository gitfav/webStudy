
	$(function(){
		var c=0;
		// 设定定时器里面的函数
		function change(){
			// 确定循环
			c++;
			c=(c==7)?0:c;
			// 确定循环所变换的left值
			var left=c*-294;
			var pointer_left=c*42;
			// 设定需要变换地的样式
			$('#menu .top').stop().animate({'left':left+'px'});
			$('#menu .bom img').stop().eq(c).fadeTo(0,1).siblings('img').fadeTo(0,0.5);
			$('#menu .pointer').stop().animate({'left':pointer_left+'px'});
		}
		// 定时器
		var timer=setInterval(change,2000);
		// 鼠标效果
		// 鼠标移入效果
		$('#menu .bom img').mouseover(
			function(){
			clearInterval(timer);
			c=$(this).index();
			var left=c*-294;
			var pointer_left=c*42;
			$('#menu .top').stop().animate({'left':left+'px'});
			$('#menu .bom img').stop().eq(c).fadeTo(0,1).siblings('img').fadeTo(0,0.5);
			$('#menu .pointer').stop().animate({'left':pointer_left+'px'});
			})
		// 鼠标移出效果
		$('#menu .bom img').mouseout(function(){
			timer=setInterval(change,2000);
		})
		// 上面的鼠标移入效果
		$('#menu .top').mouseover(function(){
			clearInterval(timer);});
		$('#menu .top').mouseout(function(){
			timer=setInterval(change,2000);});
	})
