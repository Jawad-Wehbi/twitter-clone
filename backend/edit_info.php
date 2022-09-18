<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

if (isset($_POST["iduser"]) && isset($_POST["name"]) && isset($_POST["tag"]) && isset($_POST["bio"]) && isset($_POST["birthday"]) && isset($_POST["profilepic"]) && isset($_POST["headerpic"])){
    $iduser = $_POST["iduser"];
    $name = $_POST["name"];
    $tag = $_POST["tag"];
    $bio = $_POST["bio"];
    $birthday = $_POST["birthday"];

    $picture = $_POST["profilepic"];
    $header = $_POST["headerpic"];


    $query = $mysqli->prepare("UPDATE TABLE users (name, tag, bio, birthday, profilepic, headerpic) 
    SET 
        name = $name,
        tag = $tag,
        bio = $bio,
        birthday = $birthday, 
        profilepic = $picture,
        headerpic = $header
        WHERE iduser = $iduser");

    $query->execute();
    
    $response = [];
    $response["success"] = true;

    echo json_encode($response);
} else { echo "missing variable";}
?>