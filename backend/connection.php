<?php
$hostname = 'localhost';
$username = 'root';
$password = 'foobar';
$dbname = 'twitter';

// Create connection
$mysqli = new mysqli($hostname, $username, $password, $dbname);

// Check connection
if ($mysqli ->connect_error) {
    die("Connection failed: " . $mysqli ->connect_error);
}

?>