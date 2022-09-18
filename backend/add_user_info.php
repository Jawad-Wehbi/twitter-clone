<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

// since where working on the first user account
    $name = $_POST["name"];
    $tag = $_POST["tag"];
    $bio = $_POST["bio"];
    $birthday = $_POST["birthday"];

    //$picture = fetchimage($_POST["picture"]);
    //$header = fetchimage($_POST["header"]);


    $query = $mysqli->prepare("INSERT INTO users(name, tag, bio, birthday) VALUE (?, ?, ?, ?)");
    $query->bind_param("ssss", $name, $tag, $bio, $birthday);
    $query->execute();
    
    $response = [];
    $response["success"] = true;

    echo json_encode($response);
?>
