<?php
$hostname = 'localhost';
$username = 'root';
$password = 'foobar';
$dbname = 'twitter';

// Create connection
$connection = new mysqli($hostname, $username, $password, $dbname);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

?>