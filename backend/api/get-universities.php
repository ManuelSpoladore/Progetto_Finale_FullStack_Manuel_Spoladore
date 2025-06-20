<?php
ob_start(); // 🛡️ evita output indesiderati

header("Access-Control-Allow-Origin: https://scuolaribelle.netlify.app");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Credentials: true");
header("X-Content-Type-Options: nosniff");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


require_once __DIR__ . '/../config/database.php';

$sql = "SELECT id, name FROM universities";
$result = $conn->query($sql);

$universities = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $universities[] = $row;
    }
}

echo json_encode($universities);

ob_end_flush(); // chiudi output buffer
