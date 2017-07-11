$(function(){
	$("<div><p>Hello</p></div>").appendTo('.div1');
	$("<input>").attr("type", "text").appendTo('.div1');
	var a;
	var b=[];
	a=$("img").attr("src");
	alert(a);
	b[0]=$("li").index($('.bar'));
	b[1]=$('li').index(document.getElementById('bar')); //1，传递一个DOM对象，返回这个对象在原先集合中的索引位置
	b[2]=$('li').index($('li:gt(0)')); //1，传递一组jQuery对象，返回这个对象中第一个元素在原先集合中的索引位置
	b[3]=$(".bar").index("li"); //1，传递一个选择器，返回#bar在所有li中的索引位置
	b[4]=$('.bar').index(); //1，不传递参数，返回这个元素在同辈中的索引位置
	alert(b);

	var $para=$("p");
	$para.prop("Code", 1234);
	$para.prop("zz","sdfds");
	$para.removeProp('zz');
	$para.append("The secret luggage code is: ", String($para.prop("Code")), String($para.prop("zz")),". ");
})