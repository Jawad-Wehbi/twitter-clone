<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

if (isset($_POST["iduser"]) && isset($_POST["idblocked"])) {
$id = $_POST["iduser"];
$blockedid = $_POST["idblocked"];

$query = $mysqli->prepare(
    "DELETE FROM followers
    WHERE (iduser = $id and idfollowed = $blockedid) or (iduser = $blockedid  and idfollowed = $id)");

$query->execute();

$query2 = $mysqli->prepare("INSERT INTO blocks (iduser, idblocked) VALUES (?, ?)");
$query2->bind_param("ss", $id, $blockedid);

$query2->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);
} else { echo "missing variable";}
?>