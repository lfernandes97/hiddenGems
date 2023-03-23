<?php
session_start();

$un = $_POST["username"];
$password = $_POST["password"];

//$encoded_password=password_hash($password, PASSWORD_BCRYPT);

$conn = new PDO ("mysql:host=localhost;dbname=nevesl;", "nevesl", "h8JK9oq8");

$sql = "SELECT * from poi_users where username='" . $un . "' AND password = '" . $password . "'";

$results = $conn->query($sql);

$row = $results->fetch();

if ($row == false)
	{
		echo "Incorrect username or password!";
		header("HTTP/1.1 401 Unauthorized");
	
}

else
{
	
    $_SESSION["gatekeeper"] = $row["username"];
	header("HTTP/1.1 200 OK");


}
?>