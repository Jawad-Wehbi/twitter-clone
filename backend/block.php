<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

if (isset($_POST["iduser"]) && isset($_POST["idblocked"])) {
$iduser = $_POST["iduser"];
$idblocked = $_POST["idblocked"];

$query = $mysqli->prepare(
    "DELETE FROM followers WHERE (iduser = '$iduser' and idfollowed = '$idblocked') or (iduser = '$idblocked'  and idfollowed = '$iduser')");

$query->execute();

$query2 = $mysqli->prepare("INSERT INTO blocks (iduser, idblocked) VALUES (?, ?)");
$query2->bind_param("ss", $iduser, $idblocked);

$query2->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);
} else { echo "missing variable";}
?>