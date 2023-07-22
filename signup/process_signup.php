<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from the form
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Server-side validation
    if (empty($username) || empty($email) || empty($password)) {
        die("Please fill in all the required fields.");
    }

    // Connect to the database (replace 'your_database_name', 'your_username', and 'your_password' with appropriate values)
    $conn = new mysqli("localhost", "root", "", "users");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if the email is unique
    $check_email_query = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($check_email_query);
    if ($result->num_rows > 0) {
        die("Email already exists. Please use a different email address.");
    }

    // Insert data into the database table (replace 'users' with your table name)
    $sql = "INSERT INTO users (name, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "User data stored successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
