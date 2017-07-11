// JavaScript Document
$(function(){
	// 下拉菜单
	$('#top .t_li ul').hover(function() {
		$('#top .t_li ul li.li4 .hidbox').show();
	}, function() {
		$('#top .t_li ul li.li4 .hidbox').hide();
	});
	// 下拉菜单结束
	// 下拉菜单的鼠标点击变换效果
	$('#top .t_li ul li.li4 .hidbox .xiaoguo .num').mouseenter(function(){
		var c=$(this).index();
		// alert(c);
	$(this).hide().parents('.xiaoguo').find('.num1').eq(c).show();
	});
	$('#top .t_li ul li.li4 .hidbox .xiaoguo .num1').mouseout(function(){
		var c1=$(this).index()-7;
		// alert(c1)
		$(this).hide().parents('.xiaoguo').find('.num').eq(c1).show();
	});
	// 下拉菜单的鼠标点击变换效果结束
	// 中间下拉菜单
	$('#center .nav .na').hover(function() {
		$('#center .hid_list').stop().animate({'height':'140px','zIndex':'3'},300)
	},
		 function() {
		 $('#center .hid_list').stop().animate({'height':'0px'},500)
		});
	$('#center .hid_list').hover(function() {
		$('#center .hid_list').stop().animate({'height':'140px','zIndex':'3'},300)
	},
		 function() {
		 $('#center .hid_list').stop().animate({'height':'0px'},500)
		});
	// 中间下拉菜单结束

	// 中间区域的轮播图
	var t=0;
	function lunbo(){
		t++;
		t=(t==5)?0:t;
		$('#center .pic img').eq(t).fadeIn(700).siblings('img').hide();
		$('#center .lbtiao p').eq(t).addClass('adclass').siblings('p').removeClass('adclass');
	}
	var timer1=setInterval(lunbo,1500);
	$('#center .lbtiao p').mouseover(function(){
			clearInterval(timer1);//清理定时器
			// 获得鼠标移入的li的序号
			t = $(this).index();
			// 让c号图片显示，其他的隐藏
			$('#center .pic img').eq(t).fadeIn(700).siblings('img').hide();
			$('#center .lbtiao p').eq(t).addClass('adclass').siblings('p').removeClass('adclass');
		})
	// 中间区域的轮播图结束
	// 下面小轮播图
	var x=0;
	// 自动轮播图的函数
	function lunbochange(){
		// 确定循环
		x++;
		x=(x==14)?0:x;
		var left=x*-741;
		// 确定样式
		$('#zhuce .youbian .lunbo').animate({'left':left+'px'});
	}
	// 设定定时器
		var timer2=setInterval(lunbochange,1500);
		// 鼠标移动效果
		$('#zhuce .youbian .wenzi ul li').mouseover(function(){
			clearInterval(timer2);
			x=$(this).index();
			// alert(x);
			// 确定改变情况
			var left=x*-741;
			// 赋值
			$('#zhuce .youbian .lunbo').stop().animate({'left':left+'px'});
			});
	// // 下面小轮播图结束
		// 左侧鼠标移动文字效果
		$('#zhuce .zuobian .title ul li').mouseover(function() {
			$(this).addClass('adc').siblings('li').removeClass('adc');
			$(this).find('a').css({'color':'#fff'});

		});
		$('#zhuce .zuobian .title ul').mouseout(function(){
			$(this).find('.adc').removeClass('adc');
			$(this).find('a').css({'color':'#000'});
		});	
		// 左侧鼠标移动文字效果结束
		// tab菜单移动文字效果
		$('#daquyu .zuotb .tab ul li').hover(function() {
			$(this).addClass('xiaotb').siblings('li').removeClass('xiaotb');
			$(this).find('a').css({'color':'#fff'});
			var shu=$(this).index();
			$('#daquyu .zuotb .tab .tblun').eq(shu).show().siblings('.tblun').hide();
		}, function() {
			$(this).find('a').css({'color':'#000'});
		})
		// tab菜单移动文字效果结束
		// 右侧小轮播图
		var nu=0;
		function xiaolunbotu(){
			nu++;
			nu=(nu==6)?0:nu;
			$('#daquyu .youlb .xiaolbtu .pic img').eq(nu).fadeIn(400).siblings('img').hide();
		$('#daquyu .youlb .xiaolbtu ul li').eq(nu).css('background','#432E80').siblings('li').css('background','#ABABAB');
		};
		var timer3=setInterval(xiaolunbotu,1000);

		$('#daquyu .youlb .xiaolbtu ul li').mouseover(function(){
			clearInterval(timer3);//清理定时器
			// 获得鼠标移入的li的序号
			nu = $(this).index();
			// 让c号图片显示，其他的隐藏
			$('#daquyu .youlb .xiaolbtu .pic img').eq(nu).fadeIn(400).siblings('img').hide();
		$('#daquyu .youlb .xiaolbtu ul li').eq(nu).css('background','#432E80').siblings('li').css('background','#ABABAB');
		})

		// 鼠标移出效果
		$('#center #lunbo ul li').mouseout(function(){
			timer3 = setInterval(xiaolunbotu,2000);
		})

		// 右侧小轮播图结束

})