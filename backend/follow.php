<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");
if (isset($_POST["iduser"]) && isset($_POST["idfollowed"]))
{
$iduser = $_POST["iduser"];
$idfollower = $_POST["idfollowed"];

$query = $mysqli->prepare("INSERT INTO followers(iduser, idfollowed) VALUE (?, ?)");
$query->bind_param("ss", $iduser, $idfollower);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);
} else { echo "variable missing";}
?>