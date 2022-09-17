<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

if (isset($_POST["jawad"])) {
    $name = $_POST["jawad"];}

if (isset($_POST["here"])) {
    $bio = $_POST["here"];}

$query = $mysqli->prepare("INSERT INTO users(name, bio) VALUE (?, ?)");

$query->bind_param("ss", $name, $bio);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>