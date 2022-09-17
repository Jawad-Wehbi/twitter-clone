<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$id = $_POST["id"]
$blockedid = $_POST["blocked"]

DELETE FROM table_name
WHERE [condition];

$query = $mysqli->prepare(
    "DELETE FROM followers
    WHERE iduser = $id and id_followed = $blockedid ;"
);

$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);


$query2 = $mysqli->prepare(
    "DELETE FROM followers
    WHERE iduser = $blockedid  and id_followed = $id  ;"
);

$query2->execute();

$response2 = [];
$response2["success"] = true;

echo json_encode($response2);

?>