<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include_once "connection.php";


$idtweet = $_POST["idtweet"];
$idliker = $_POST["idliker"];

$query = $mysqli->prepare("INSERT INTO likes(idweet, idliker ) VALUE (?, ?)");
$query->bind_param("ss", $idtweet, $idliker);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
?>