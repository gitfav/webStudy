<?php 
// 1.计算器完成，每一行注释加上

header('Content-type:text/html;charset=utf-8');

// $str = '我爱后盾网';
// echo $str;


// NULL类型
// $str;
// var_dump($str);

// $str;
// var_dump($str);

/*$str=123;
unset($str);
$str=null;
var_dump($str);*/

/*$str='我爱后盾网';
$bool=is_string($str);
var_dump($bool);*/

// $int=123;
// $bool=is_int($int);
// var_dump($int);

// 确保分页必须为数字，那么久需要强制转整
// if(!empty($_GET)){
// 	$page = intval($_GET['page']);
// // $page = (int)$_GET['page'];
// echo $page;
// }


$re=0;
if(!empty($_POST)){
	$num1=$_POST['num1']; //取得第一个数值
	$num2=$_POST['num2']; //取得第二个数值
	$fuhao=$_POST['fuhao']; //取得运算符
	
	// var_dump($num1);
	// var_dump($num2);
	//判断是否为纯数字，如果不是则停止程序，提示用户
	if(!is_numeric($num1) || !is_numeric($num2)){
		echo '输入的值不是纯数字，请重新输入！';
		die();
	}

	//把字符串都变成数值型
	$num1=intval($num1);
	$num2=intval($num2);

	switch ($fuhao) {
		case '+':
			$re = $num1+$num2;
			break;
		case '-':
			$re = $num1-$num2;
			break;
		case '*':
			$re = $num1*$num2;
			break;
		case '/':
			if ($num2!=0) {
				$re = $num1/$num2;
			}else{
				echo('被除数不能为0，请重新输入！');
				break;
			}
		}
		
}


 ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title><?php echo '运算结果：'.$re ?></title>

<script type="text/javascript" src="jquery-1.7.2.min.js"></script>
<script type="text/javascript">
	
$(function(){
	$('#count .gongneng .left9 input').click(function(){
		//这里的判断还有点问题
		if (fuhao =='' || $('#count .value .top1').attr("value")=='') {
			// 在没有点击运算符前，把10个数字的值写到num1里面
			var num = $(this).index()+1;
			num = (num==10)?0:num;

			// num = $('#count .value .top1').html() + num;
			// alert(num);
			num = $('#count .value .top1').attr("value") + num;
			$('#count .value .top1').attr("value",num);
			// $('#count .value .top1').html(num);
		}else{
			// 如果点击了符号，则把值输入到num2的里面
			var num = $(this).index()+1;
			num = (num==10)?0:num;
			// num = $('#count .value .top2').html() + num;

			// $('#count .value .top2').html(num);
			num = $('#count .value .top2').attr("value") + num;
			$('#count .value .top2').attr("value",num);
		}

	})

	//如果点击了符号键，则设置为1
	var fuhao = '';

	// 点击对应的运算符，并且赋值给变量
	$('#count .gongneng .right_fuhao input').click(function(){
		var num = $(this).index();

		switch (num) {

		case 0:
			fuhao = '+';
			break;
		
		case 1:
			fuhao = '-';
			break;

		case 2:
			fuhao = '*';
			break;

		case 3:
			fuhao = '/';
			break;

		}
	//把运算符传到界面的对应表单里面
	$(this).parents('#count').find('.value input.top3').attr('value',fuhao);

	})

	//等号让num1和num2的值相互运算
	$('#count .denghao').click(function() {
		var num1 = $('#count .value .top1').html();
		var num2 = $('#count .value .top2').html();
		var re = 0;

		//如果num1、num2、符号都已经有值，则进行运算
		if (num1!='' && num2!='' && fuhao!='') {

			switch (fuhao) {
			case '+':
				re = num1*1+num2*1;
				break;
			case '-':
				re = num1*1-num2*1;
				break;
			case '*':
				re = num1*num2;
				break;
			case '/':
				if (num2!=0) {
					re = num1/num2;
				}else{
					alert('被除数不能为0，请重新输入！');
					break;
				}
			}	
		}

	$(this).parents('#count').find('.result').html(re);

	})

})

</script>
<style type="text/css">

*{
	padding: 0;
	margin: 0;
}
input{
	padding: 0;
	margin: 0;
	display: block;
}

#count {
	width: 340px;
	height: 400px;
	margin: 0 auto;
	margin-top: 30px;
	background-color: #000;
	box-shadow: 0 0 5px #ddd;
}
#count input.value {
	width: 340px;
	height: 40px;
	background-color: yellow;
}
#count .value input.top1 {
	width: 130px;
	height: 40px;
	float: left;
	background-color: #CC9966;
	color: #fff;
	font-size: 40px;
}
#count .value input.top2 {
	width: 130px;
	height: 40px;
	float: left;
	background-color: #0099CC;
	color: #fff;
	font-size: 40px;
}
#count .value input.top3 {
	width: 60px;
	height: 40px;
	float: left;
	background-color: #838383;
	color: #fff;
	font-size: 40px;
}
#count input.result {
	width: 336px;
	height: 40px;
	background-color: #fff;
	color: #000;
	font-size: 40px;
	text-align: center;
}
#count input.gongneng  {
	width: 390px;
	height: 290px;
	background-color: #939499;
	/*overflow: hidden;*/
}
#count .gongneng .left9 {
	float: left;
	width: 270px;
	height: 270px;
	background-color: #488484;
	/*overflow: hidden;*/
}

#count .gongneng .left9 input{
	width: 80px;
	height: 60px;
	margin-left: 8px;
	margin-top: 5px;
	float: left;
	background-color: yellow;
	list-style: none;
	text-align: center;
	font-size: 40px;
}

#count .gongneng .left9 input.zero{
	width: 260px;
	height: 65px;
	/*margin-left: 8px;*/
	margin-top: 5px;
	float: left;
	background-color: yellow;
	list-style: none;
	text-align: center;
	/*font-size: 20px;*/
}
#count .gongneng .left9 input:hover{
	cursor: pointer;
}
#count .gongneng .right_fuhao {
	float: left;
	width: 70px;
	height: 270px;
	background-color: #353535;
	/*overflow: hidden;*/
}

#count .gongneng .right_fuhao input {
	width: 60px;
	height: 60px;
	margin: 0 auto;
	margin-top: 6px;
	background-color: #FFFFCC;
	list-style: none;
	text-align: center;
	font-size: 40px;
}
#count .gongneng .right_fuhao input:hover{
	cursor: pointer;
}
#count input.denghao {
	width: 340px;
	height: 49px;
	background-color: #fff;
	font-size: 50px;
	text-align: center;
	cursor: pointer;
}

</style>

</head>
<body>

<form action="" method="post">

 	<div id="count">
		<div class="value">
			<input type="text" class="top1" name="num1" />
			<input type="text" class="top2" name="num2" />
			<input type="text" class="top3" name="fuhao" />
		</div>
		<input type="text" class="result" value="<?php echo $re ?>" />
		<div class="gongneng">
			<div class="left9">
				<input type="button" value="1" />
				<input type="button" value="2"  />
				<input type="button" value="3"  />
				<input type="button" value="4"  />
				<input type="button" value="5"  />
				<input type="button" value="6"  />
				<input type="button" value="7"  />
				<input type="button" value="8"  />
				<input type="button" value="9"  />
				<input type="button" value="0" class="zero" />
			</div>
			<div class="right_fuhao">
				<input type="button" value="+"  />
				<input type="button" value="-"  />
				<input type="button" value="*"  />
				<input type="button" value="/"  />
			</div>
		</div>
		<input type="submit" value="=" class="denghao" />
	</div>

</form>


</body>
</html>


