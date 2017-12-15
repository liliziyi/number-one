<?php
header('content-type:text/html;charset=utf-8');
$conn = mysql_connect('localhost', 'root', '12345678') or die('服务器连接失败' . mysql_error());
mysql_select_db('one') or die('服务器选择失败' . mysql_error());
mysql_query('SET NAMES UTF8');

//引入数据库连接的文件


$btn = @$_REQUEST['uuu'];
$btn1= @$_REQUEST['zzz'];

if (isset($btn)) {//如果点击了按钮
	$phone = $_REQUEST['phone'];	
	$pass = $_REQUEST['pass'];
	mysql_query("insert userinfo values(null,'$phone',md5('$pass'),NOW())");
	//讲数据添加进数据库
} 
else if(isset($btn1)){
		$phone=$_REQUEST['phone'];	
		$pass=$_REQUEST['pass'];
		$result1=mysql_query("select *from userinfo where phone='$phone' and password=sha('$pass')");//检查数据库
		$arr=mysql_fetch_array($result1,MYSQL_ASSOC);
			if($arr){//数据库是否存在要检验的用户名和密码相等
				echo json_encode(mysql_fetch_array(mysql_query("select *from userinfo where phone='$phone'"),MYSQL_ASSOC));
				//将存在的数据传输出去
				//echo 'true';//存在
			}else{
				echo 'false';	//不存在
			}
	}

else {//没有点击按钮时验证是否存在用户名
	$phone = $_POST['phone'];
	$result = mysql_query("select *from userinfo where phone='$phone'");
	//检查数据库
	$arr = mysql_fetch_array($result, MYSQL_ASSOC);
	if ($arr) {//数据库是否存在要检验的用户名
		echo 'true';
		//存在
	} else {
		echo 'false';
		//不存在
	}
}

mysql_close($conn);



?>