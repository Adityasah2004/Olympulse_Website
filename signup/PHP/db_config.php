<?php
$host = "localhost"; // Change this to your MySQL server host if necessary
$username = "root"; // Change this to your MySQL username
$password = ""; // Change this to your MySQL password if you have set one
$db_name = "user_db"; // Change this to your database name

// Create a database connection
$conn = new mysqli($host, $username, $password, $db_name);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
