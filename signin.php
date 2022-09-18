<?php
include("connection.php");
$email = $_POST["email"];
$password = $_POST["password"];
$response = [];

$emailExist = mysqli_query($twitter, "SELECT email FROM users WHERE email = '$email'");
if(!(mysqli_num_rows($emailExist))) {
    $response["success"] = false;
    $response["why"] = "email";
    die($json = json_encode($response));
}
// hash password
$password = hash("sha256", $password);
$password.="Jay11410";

// checking password if exist
$correctpassword = mysqli_query($twitter, "SELECT password FROM users WHERE email = '$email'")->fetch_object()->password;
if($password != $correctpassword) {
    $response["success"] = false;
    $response["why"] = "password";
    exit($json = json_encode($response));
}
// logging in
$response["success"] = true;
echo json_encode($response);
?>