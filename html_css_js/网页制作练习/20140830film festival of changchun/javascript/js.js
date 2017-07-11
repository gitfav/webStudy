window.onload=function(){
	var text_one=document.getElementById("text_one");
	var text_two=document.getElementById("text_two");
	var text_all=document.getElementById("text_all");
	var a;
	var b;
	var i=-1;
	function lefthidden(){
		a=parseInt(text_one.style.left);
		b=parseInt(text_two.style.left);
		text_one.style.left=a+i+"px";
		text_two.style.left=b+i+"px";
		if (a==(-1280)) {
			text_one.style.left=1280+'px';
		}
		if (b==(-1280)) {
			text_two.style.left=1280+'px';
		}
	}
	timers=setInterval(lefthidden,15);
	text_all.onmouseout=function(){
		timers=setInterval(lefthidden,15);
	}
	text_all.onmouseover=function(){
		clearInterval(timers);
	}
	// 以上为head中的文字滚动

	var tupiao_one=document.getElementById("tupiao_one");
	var tupiao_two=document.getElementById("tupiao_two");
	var gundong=document.getElementById("gundong");
	var c;
	var d;
	function tupianhidden(){
		c=parseInt(tupiao_one.style.left);
		d=parseInt(tupiao_two.style.left);
		tupiao_one.style.left=c-1+'px';
		tupiao_two.style.left=d-1+'px';
		if (c==(-1245)) {
			tupiao_one.style.left=1245+'px';
		}
		if (d==(-1245)) {
			tupiao_two.style.left=1245+'px';
		}	
	}
	timers_two=setInterval(tupianhidden,15);

	gundong.onmouseover=function(){
		clearInterval(timers_two);
	}
	gundong.onmouseout=function(){
		timers_two=setInterval(tupianhidden,15);
	}

}