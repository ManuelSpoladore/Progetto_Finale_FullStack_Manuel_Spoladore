<?php

require_once __DIR__ . '/../config/database.php';
class ContactController {
    private $conn;

    public function __construct($dbConnection) {
        $this->conn = $dbConnection;
    }

    public function sendMessage() {
     

        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(['success' => false, 'message' => 'Metodo non consentito']);
            exit;
        }

        $input = json_decode(file_get_contents('php://input'), true);

        $name = $input['name'] ?? '';
        $username = $input['username'] ?? '';
        $mail = $input['mail'] ?? '';
        $textMessage = $input['textMessage'] ?? '';

        if (empty($name) || empty($username) || empty($mail) || empty($textMessage)) {
            echo json_encode(['success' => false, 'message' => 'Tutti i campi devono essere completati']);
            return;
        }

        $stmt = $this->conn->prepare("INSERT INTO contact (name, username, mail, textMessage) VALUES (?, ?, ?, ?)");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Errore nella query insert']);
            return;
        }

        $stmt->bind_param("ssss", $name, $username, $mail, $textMessage);

        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Messaggio Inviato']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Errore durante l\'invio del messaggio']);
        }

        $stmt->close();
    }
}
