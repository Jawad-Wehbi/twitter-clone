<?php

include("connection.php");

$name=$_POST["name"];
$phone=$_POST["phone"];
$email=$_POST["email"];
$birthday = $_POST["birthday"];
$password=$_POST["password"];

$response = [];

$emailsql="SELECT email FROM users WHERE email=$email";
$resultemail = $mysqli->query($emailsql);
$phonesql="SELECT phone FROM users WHERE phone=$phone";
$resultphone = $mysqli->query($phonesql);

if ($resultemail=$email || $resultphone=$phone){
    $response["success"] = false;
    $response["why"] = "email or phone";
    die();
}

$sql = "INSERT INTO users (nam, phone, email, birthday, password) value (?, ?, ?, ?, ?)";
$mysqli->prepare($emailsql);

$query

?>