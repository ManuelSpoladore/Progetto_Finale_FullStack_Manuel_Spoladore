<?php
require_once __DIR__ . '/../config/database.php';

header('Content-Type: application/json ');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");


$university_id =$_GET['university_id'] ?? null;

if (!$university_id) {
    echo json_encode([]);
    exit;
}

$stmt = $conn->prepare("SELECT id, name FROM faculties WHERE university_id = ?");
$stmt->bind_param("i", $university_id);
$stmt->execute();
$result = $stmt->get_result();

$faculties = [];

while($row = $result->fetch_assoc()) {
    $faculties[] = $row;
}

echo json_encode($faculties);