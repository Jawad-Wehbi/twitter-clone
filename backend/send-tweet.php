<?php 
//This is a comment
//JSON: JavaScript Object Notation
/*
This is also
a comment
*/
$id = $_GET["id"];
$email = $_POST["email"];
$pass = hash("sha256", $_POST["password"]);
$pass .= "a";
$name = "Charbel";
$choice_gender = rand(0, 1);

if($choice_gender == 0){
    $gender = "Male";
}else{
    $gender = "Female";
}
$results = [
    "id" => $id,
    "email" => $email,
    "gender" => $gender,
    "pass" => $pass
];
echo json_encode($results);
?>