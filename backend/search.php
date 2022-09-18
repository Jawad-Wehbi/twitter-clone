<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

if (isset($_POST["search"])) {
$search = $_POST["search"]

$query = $mysqli -> prepare("SELECT name, tag, profilepic FROM users WhERE name LIKE '$search%'");
$query->bind_param("s", $search);
$query -> execute();
$array = $query -> get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
};

$json = json_encode($response);
echo $json;
} else { echo "missing variable";}
?>