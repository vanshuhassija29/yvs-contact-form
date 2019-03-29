<?php

$servername = "localhost";
$username = "root";
$password = "goldtree9";

// Create connection
$conn = new mysqli($servername, $username, $password,"yvsteam");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>