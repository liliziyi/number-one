<?php
header('content-type:text/html;charset=utf-8');
$conn=mysql_connect('localhost','root','12345678') or die('服务器连接失败'.mysql_error());
mysql_select_db('one') or die('服务器选择失败'.mysql_error());
mysql_query('SET NAMES UTF8');

$img=$_REQUEST['img'];	

$query="select *from onlyimg where name='$img'";
$result=mysql_query($query);
$arr=array();
for($i=0;$i<mysql_num_rows($result);$i++){
	$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
}
echo json_encode($arr);
		
?>
