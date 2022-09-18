<?php

include("connection.php");

$name=$_POST["name"];
$phone=$_POST["phone"];
$email=$_POST["email"];
$birthdate=$_POST["birthdate"];
$password=$_POST["password"];

$responces= 

$sql="SELECT email FROM users WHERE email=$email";
$resultemail = $mysqli->query($sql);
$sql="SELECT phone FROM users WHERE phone=$phone";
$resultphone = $mysqli->query($sql);

if ($resultemail=$email || $resultphone=$phone){
    ;
}
else
?>