<?php

$location = $_GET["region"];

$conn = new PDO ("mysql:host=localhost;dbname=nevesl;", "nevesl", "h8JK9oq8");

$results = $conn->query("SELECT * FROM pointsofinterest WHERE name LIKE '%$location%' or country LIKE '%$location%' or region LIKE '%$location%'");

$resultsAsAssocArray = $results->fetchALL(PDO::FETCH_ASSOC);


if ($resultsAsAssocArray == false){
	
	header("HTTP/1.1 400 Bad Request");
	
}

else{
	header("HTTP/1.1 200 OK");
    echo json_encode($resultsAsAssocArray);
};
?>




