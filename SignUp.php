<?php

include("connection.php");

$name=$_POST["name"];
$phone=$_POST["phone"];
$email=$_POST["email"];
$birthday = DateTime::createFromFormat('m/d/Y', $_POST["birthday"])->format('Y-m-d');
$password=$_POST["password"];

$response = [];

$emailsql="SELECT email FROM users WHERE email='$email'";
$resultemail = $mysqli->query($emailsql);
$phonesql="SELECT phone FROM users WHERE phone='$phone'";
$resultphone = $mysqli->query($phonesql);

print_r($resultemail);
print_r($resultphone) ;

if (mysqli_num_rows($resultemail) || mysqli_num_rows($resultphone)){
    $response["success"] = false;
    echo json_encode($response);
    die();
}

$password=hash("sha256", $password);
$password.="Jay11410";

echo $password;

$sql = "INSERT INTO users (name, phone, email, birthday, password) values ($name, $phone, $email, $birthday, $password)";
$query = $mysqli->prepare($emailsql);
$query->execute();

$response["success"] = true;
echo json_encode($response);


?>