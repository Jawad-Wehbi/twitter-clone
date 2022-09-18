<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$iduser = $_POST["iduser"];
$tweet = $_POST["tweettext"];
$media = $_POST["media"];

$query = $mysqli->prepare("INSERT INTO tweets(iduser, tweettext, media) VALUE (?, ?, ?)");
$query->bind_param("sss", $iduser, $tweet, $media);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
