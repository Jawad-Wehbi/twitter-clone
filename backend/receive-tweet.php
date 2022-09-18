<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include_once "connection.php";

// to get all info about the tweet and about it's user

$sql = "SELECT tweets.idtweet, tweets.iduser, tweets.tweettext, tweets.media, users.name, users.tag, users.profilepic 
FROM tweets INNER JOIN users ON tweets.iduser = users.iduser";

$statement = $connection->prepare($sql);
$statement->execute();
$data_array = $statement->get_result();

$response = [];

while ($row = $data_array->fetch_assoc()) {
    $response[] = $row;
};

echo json_encode($response);

?>