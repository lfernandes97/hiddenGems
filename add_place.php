<?php

$a = $_POST["name"];
$ty = $_POST["type"];
$co = $_POST["country"];
$re = $_POST["region"];
$lo = -1.398983;
$la = 50.907349;
$desc = $_POST["desc"] ;


$conn = new PDO ("mysql:host=localhost;dbname=nevesl;", "nevesl", "h8JK9oq8");


if ( $a == "" || $ty == "" || $co == "" || $re == "" || $lo == "" || $la == "" || $desc == "" || $lo < -90 || $lo > 90 || $la < -90 || $la > 90  )
{
	print("I'm sorry but you need to insert something in all fields");
	
	header("HTTP/1.1 400 Bad Request");
	
}

else{
    
    $sql = "INSERT INTO pointsofinterest(name, type, country, region, lon, lat, description) VALUES('" . $a . "', '" . $ty . "', '" . $co . "', '" . $re . "', " . $lo . ", " . $la . ", '" . $desc . "')";

	$results = $conn->query($sql);

    echo("You've updated the table corectly!");
    
    header("HTTP/1.1 200 OK");
}

?>