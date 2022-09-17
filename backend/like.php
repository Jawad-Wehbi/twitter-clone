<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include_once "connection.php";


$iduser = $_POST["id"];
$tweet = $_POST["tweet"];

$query = $mysqli->prepare("INSERT INTO likes(idweet, idliker ) VALUE (?, ?)");
$query->bind_param("ss", $iduser, $tweet );
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
?>