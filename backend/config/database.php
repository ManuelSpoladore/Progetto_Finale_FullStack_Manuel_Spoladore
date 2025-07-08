<?php

header('Content-Type: application/json');


$host = 'localhost';               
$user = 'u266883361_manuel';                 
$password = 'Ciao2301!';    
$dbname = 'u266883361_scuolaribelle'; 

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Errore di connessione al database.']);
    exit;
}
