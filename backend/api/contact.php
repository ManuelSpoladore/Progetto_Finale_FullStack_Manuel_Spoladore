<?php

header('Content-Type: application/json');
require_once __DIR__ . '/../config/database.php';

$input = json_decode(file_get_contents('php://input'), true);

$name = $input['name'] ?? '';
$username = $input['username'] ?? '';
$mail = $input['mail'] ?? '';
$textMessage = $input['textMessage'] ?? '';

if (empty($name) || empty($username) || empty($mail) || empty($textMessage)) {
    echo json_encode(['success' => false, 'message' => 'Tutti i campi devono essere completati']);
    exit;
}

$stmt = $conn->prepare("INSERT INTO contact_messages (name, username, mail, textMessage) VALUES (?, ?, ?, ?)");
if (!$stmt) {
    echo json_encode(['success' => false, 'message' => 'Errore nella query insert']);
}
$stmt->bind_param("ssss", $name, $username, $mail, $textMessage);

if($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Messaggio Inviato']);
} else {
    echo json_encode(['success' => false, 'message' => 'Errore durante l\'invio del messaggio']);
}

$stmt->close();
$conn->close();
