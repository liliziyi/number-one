<?php
header('content-type:text/html;charset=utf-8');
$conn=mysql_connect('localhost','root','12345678') or die('服务器连接失败'.mysql_error());
mysql_select_db('one') or die('服务器选择失败'.mysql_error());
mysql_query('SET NAMES UTF8');

$sid=$_REQUEST['sid'];	
$query="select *from shopinfo where sid='$sid'";
$result=mysql_query($query);
$obj=mysql_fetch_array($result,MYSQL_ASSOC);
echo json_encode($obj);
		
?>
