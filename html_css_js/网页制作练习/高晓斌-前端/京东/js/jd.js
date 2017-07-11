// JavaScript Document

 $(function(){
// 京东中间大区域轮播图
	var c1=0;
	// 自动轮播图的函数
	function lunbochange(){
		// 确定循环
		c1++;
		c1=(c1==6)?0:c1;
		// 确定样式
		$('#center #lunbo img').eq(c1).fadeIn(400).siblings('img').hide();
		$('#center #lunbo ul li').eq(c1).css('background','#E4393C').siblings('li').css('background','#999');
	}
	// 设定定时器
		var timer1=setInterval(lunbochange,2000);
		// 鼠标移入效果
		$('#center #lunbo ul li').mouseover(function(){
			// alert('sssssss')
			clearInterval(timer1);//清理定时器
			// 获得鼠标移入的li的序号
			c1 = $(this).index();
			// 让c号图片显示，其他的隐藏
			$('#center #lunbo img').eq(c1).fadeIn(300).siblings('img').hide();
			$('#center #lunbo ul li').eq(c1).css('background','#E4393C').siblings('li').css('background','#999');
		})

		// 鼠标移出效果
		$('#center #lunbo ul li').mouseout(function(){
			timer1 = setInterval(lunbochange,2000);
		})
// 京东中间大区域轮播图结束	

	// 京东橱窗显隐效果
	$('#show .pic div.fudong').mouseover(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})
	$('#show .pic div.fudong').mouseout(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})

	// 京东橱窗显隐效果结束
	//京东中间大区域小轮播图

		var c=0;
		// 设置自动轮播
		function change(){
			c++;
			c=(c==6)?0:c;
			var left=c*-610;
			$('#me_nu #cen_ter').animate({'left':left+'px'});
		}
		var timer=setInterval(change,2000);
		// 左侧鼠标移动时候的效果
		$('#me_nu #le_ft').mouseover(function(){
			clearInterval(timer);
			$('#me_nu #le_ft #t_wo').show();
			$('#me_nu #le_ft #o_ne').hide();
			$('#me_nu #le_ft').css({'background-color':'#F5F5F5'})
		});
		$('#me_nu #le_ft').mouseout(function(){
			$('#me_nu #le_ft #o_ne').show();
			$('#me_nu #le_ft #t_wo').hide();
			$('#me_nu #le_ft').css({'background-color':'#Fff'})
			timer=setInterval(change,2000);
		});
		// 左侧鼠标移动时候的效果结束
		// 左侧鼠标点击时候的效果
		$('#me_nu #le_ft').click(function(){
			clearInterval(timer);
			c--;
			c=(c==-1)?5:c;
			var left=c*-610;
			$('#me_nu #cen_ter').stop().animate({'left':left+'px'});
			});
		// 左侧鼠标点击时候的效果结束
		// 右侧鼠标移动时候的效果
		$('#me_nu #ri_ght').mouseover(function(){
			clearInterval(timer);
			$('#me_nu #ri_ght #th_ird').show();
			$('#me_nu #ri_ght #th_ree').hide();
			$('#me_nu #ri_ght').css({'background-color':'#F5F5F5'})
		});
		$('#me_nu #ri_ght').mouseout(function(){
			$('#me_nu #ri_ght #th_ird').hide();
			$('#me_nu #ri_ght #th_ree').show();
			$('#me_nu #ri_ght').css({'background-color':'#Fff'})
			timer=setInterval(change,2000);
		});
		// 右侧鼠标移动时候的效果结束
		// 右侧鼠标点击时候的效果
		$('#me_nu #ri_ght').click(function(){
			clearInterval(timer);
			c++;
			if(c==6){
				c=0;
				var left=c*-610;
			}
			else{
				var left= c*-610;
				
					}	
					$('#me_nu #cen_ter').stop().animate({'left':left+'px'});
			
			});
		// 右侧鼠标点击时候的效果结束
		//京东中间大区域小轮播图结束
			// 1F效果
		// 京东楼层tab转换效果
		$('.one_f .onef_title .c1 li').mouseenter(function(){
			// 获得当前鼠标移动到的li序号
			var cur=$(this).index();
			var left=cur*158+210;
			// alert(cur)
			$(this).parents('.one_f').find('.shubiao').stop().animate({'left':left+'px'}, 300);
			$(this).parents('.one_f').find('.num').eq(cur).show().siblings('.num').hide();

		})
		// 京东楼层tab转换效果结束
		// 京东楼层tab转换里的轮播图效果
		var ti=0;
		function bianhuan(){
			ti++;
			ti=(ti==4)?0:ti;
			// 确定改变的数
			var left1=ti*-471;
			// 赋值
			$('.one_f .zhongjian1 .big_pic .xiaolb').stop().animate({'left':left1+'px'});
			// 改变下面的span标签
			$('.one_f .zhongjian1 .big_pic .xiaobiao span').eq(ti).css({
				'background-color': '#7abd54'}).siblings('span').css({
					'background-color': '#999'});
		}
		// 设定定时器
		var shijian=setInterval(bianhuan,1000);
		// 鼠标移动效果
		$('.one_f .zhongjian1 .big_pic .xiaobiao span').mouseenter(function(){
			// 清除定时器
			clearInterval(shijian);
			// 选取所移到的数字
			ti=$(this).index();
			// 确定改变情况
			var left1=ti*-471;
			// 赋值
			// alert(ti);
			$(this).parents('.big_pic').find('.xiaolb').stop().animate({'left':left1+'px'});
			// 改变下面的span标签
			$(this).parents('.big_pic').find('span').eq(ti).css({
				'background-color': '#7abd54'}).siblings('span').css({
					'background-color': '#999'});
			});
		$('.one_f .zhongjian1 .big_pic .xiaobiao span').mouseout(function(){
			shijian=setInterval(bianhuan,1000);
		});

		// 京东楼层tab转换里的轮播图效果结束
		// 京东楼层右下角轮播
		$('.one_f .right_pic .you_xb span').mouseenter(function(){
			// 选取所移到的数字
			t1=$(this).index();
			// 确定改变情况
			var left1=t1*-213;
			// 赋值
			$(this).parents('.right_pic').find('.you_lb').animate({'left':left1+'px'});
			// 改变下面的span标签
			$(this).parents('.right_pic').find('span').eq(t1).css({
				'background-color': '#7abd54'}).siblings('span').css({
					'background-color': '#999'});
			})
		// 京东楼层右下角轮播
		// 3L效果
		// 3L的图像焦点效果
		$('.one_f .sanlou div.limian img').mouseover(function(){
			$(this).parents('.sanlou').find('img').fadeTo(0,0.8);
			$(this).fadeTo(0,1);
			$(this).stop().animate({'left':'-10px'},300);
		});
		$('.one_f .sanlou div.limian img').mouseout(function(){
			$(this).parents('.limian').fadeTo(0,1);
			$(this).stop().animate({'left':'0px'},300);
		});
		$('.one_f .sanlou').mouseout(function(){
			$(this).find('img').fadeTo(0,1);
			});

		// 3L的图像焦点效果结束
		// 底部热点晒单效果
		$(function(){
			setInterval(function(){
			$('#list .dibu .limian ul li').last().height(0);
			$('#list .dibu .limian ul').prepend($('#list .dibu .limian ul li').last());
			$('#list .dibu .limian ul li').first().animate({'height':'81px'});
			$('#list .dibu .youmian ul li').last().height(0);
			$('#list .dibu .youmian ul').prepend($('#list .dibu .youmian ul li').last());
			$('#list .dibu .youmian ul li').first().animate({'height':'81px'});

			},2000)
			
		});
				// 底部热点晒单效果结束
				// 小tab转换的效果
				$('#center .right .zongdiv .shangmianul ul li').mouseover(function(){
			var lishu=$(this).index();
			var left=lishu*74;
			$(this).parents('.zongdiv').find('.num1').eq(lishu).show().siblings('.num1').hide();
			$(this).parents('.zongdiv').find('.xiaohuakuai').stop().animate({'left':left+'px'}, 300);
		});
				// 京东二级菜单
				$('#center .left ul li').hover(function() {
				$(this).find('.hidebox').show().parent().siblings('li').find('.hidebox').hide();
					$(this).find('h3').addClass('cur').parent().siblings('li').find('h3').removeClass('cur');
				}, function() {
					$(this).find('.hidebox').hide();
				});
				




				// 京东二级菜单结束

})