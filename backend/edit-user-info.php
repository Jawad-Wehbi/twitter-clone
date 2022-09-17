<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$id = $_POST["id"]
$name = $_POST["name"]
$tag = $_POST["tag"]
$bio = $_POST["bio"]
$birthday = $_POST["birthday"]


$picture = fetchimage($_POST["picture"])
$header = fetchimage($_POST["header"])


$query = $mysqli->prepare(
    "UPDATE table
    SET 
        name = $name,
        tag = $tag,
        bio = $bio,
        birthday = $birthday,
        profilepic = $picture,
        headerpic = $header
    WHERE
        iduser = $id;"
);

$query->bind_param("ss", $name, $bio);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);


    
function fetchimage ()
{
    var dataImage = localStorage.getItem('imgData');
    var bannerImg = document.getElementById('tableBanner');
     bannerImg.src = "data:image/png;base64," + dataImage;
}

?>