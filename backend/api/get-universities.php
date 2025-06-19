<?php
require_once __DIR__ . '/../config/database.php';

header('Content-Type: application/json ');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");



$sql = "SELECT id, name FROM universities";

$result = $conn->query($sql);


$universities = [];

while($row = $result->fetch_assoc()) {
    $universities[] = $row;
}

echo json_encode($universities);