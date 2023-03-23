<?php

$id = $_POST["id"];

$review = $_POST["review"];

$conn = new PDO ("mysql:host=localhost;dbname=nevesl;", "nevesl", "h8JK9oq8");


$results = $conn->query("SELECT * FROM pointsofinterest WHERE id = $id");

$row = $results->fetch();
if($row==false)
{
	
	header("HTTP/1.1 404 Bad Request");
}
elseif($review == "")
{
	
	header("HTTP/1.1 400 Bad Request");
}

$result = $conn->query("INSERT INTO poi_reviews (poi_id, review) VALUES ($id, '$review') ");



$rows = $result->fetch();

if($rows==true)
{
	echo"something went wrong";
	echo $id ;
	// how to get ID automatically
	echo $review;
	header("HTTP/1.1 400 Bad Request");
	
}
elseif($rows==false)
{

	echo("The review was added!");

	header("HTTP/1.1 200 OK");

}


?>